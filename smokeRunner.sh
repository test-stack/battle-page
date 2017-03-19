#!/bin/bash

# plane
revisionsTP=(
"tests/non-functionTests/battle-page-api.jmx"
)

ELASTIC_URI="http://localhost"
ELASTIC_PORT=9200
ELASTIC_INDEX="smartmeterv2"
ELASTIC_INDEX_DATE=$(date +"%Y-%m-%d")

KIBANA_URI="http://localhost:5601"

SLACK_CHANNEL="#perf-smoke-status"
SLACK_WEBHOOK_URL=""

PATH_TO_SMARTMETER="/Users/rdpanek/HTDOCS/test-tools/SmartMeter_1.3.0_macos"
PATH_TO_PERF_REPO="/Users/rdpanek/HTDOCS/test-stack/battle-page/"

for i in "${revisionsTP[@]}"
do
	SECONDS=0
	START_HOUR=$(date +"%H")
	START_MIN=$(date +"%M")
	START_SEC=$(date +"%S")

	IFS=';' read -a item <<< $i
	echo "tp: ${item}"

	( sed -i -r -f smoke.sed ${item} )

	( curl -s POST --data-urlencode 'payload={"channel": "'${SLACK_CHANNEL}'", "username": "Skript: smokeRunner.sh", "text": "Smoke `'${item}'` prave startuje..."}' ${SLACK_WEBHOOK_URL} )
	( exec ${PATH_TO_SMARTMETER}/SmartMeter.command runTestNonGui ${PATH_TO_PERF_REPO}${item} )

	duration=$SECONDS

	# get data from elasticsearch
	COUNT_TRANSACTIONS=$(curl -s ${ELASTIC_URI}:${ELASTIC_PORT}/${ELASTIC_INDEX}-${ELASTIC_INDEX_DATE}"/_count?filter_path=count" -d'
	{
    "query": {
        "range": {
            "timestamp": {
                "gte": "now-'$(($duration / 60))'m-'$(($duration % 60))'s",
                "lte": "now"
            }
        }
    }
	}' | sed 's/{"count"://g' | sed 's/}//g')


	COUNT_OF_ERRORS=$(curl -s ${ELASTIC_URI}:${ELASTIC_PORT}/${ELASTIC_INDEX}-${ELASTIC_INDEX_DATE}"/_count?filter_path=count" -d'
	{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "Success": false
          }
        },
        {
          "range": {
            "timestamp" : {
              "gte": "now-'$(($duration / 60))'m-'$(($duration % 60))'s",
              "lte": "now"
            }
          }
        }
      ]
    }
  }
	}' | sed 's/{"count"://g' | sed 's/}//g')

	if [ $COUNT_OF_ERRORS == 0 ] ; then
		COLOR="good"
	else
		COLOR="danger"
	fi

	KIBANA_DASHBOARD="${KIBANA_URI}/app/kibana#/dashboard/Performance-tests-analysis-summary?_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3A'${ELASTIC_INDEX_DATE}T${START_HOUR}%3A${START_MIN}%3A${START_SEC}.000Z'%2Cmode%3Aabsolute%2Cto%3A'${ELASTIC_INDEX_DATE}T$(date -d '-1 hour' +"%H")%3A$(date +"%M")%3A$(date +"%S").000Z'))"

	( curl -s POST --data-urlencode "payload={\"channel\": \"${SLACK_CHANNEL}\", \"username\": \"Skript: smokeRunner.sh\", \"text\": \"Smoke \`${item}\` skoncil\",
	    \"attachments\": [
					{
							\"title\":\"Otevrit detail v dashboardu\",
							\"title_link\": \"${KIBANA_DASHBOARD}\"
					},
	        {
	            \"fields\": [
	                {
	                    \"title\": \"Transactions\",
	                    \"value\": \"${COUNT_TRANSACTIONS}\",
	                    \"short\": true
	                },
	                {
	                    \"title\": \"Errors\",
	                    \"value\": \"${COUNT_OF_ERRORS}\",
	                    \"short\": true
	                },
									{
	                    \"title\": \"Duration\",
	                    \"value\": \"$(($duration / 60))min. a $(($duration % 60))sec\",
	                    \"short\": true
	                }
	            ],
	            \"color\": \"${COLOR}\",
							\"footer\": \"More info: https://github.com/test-stack/battle-page\"
	        }
	    ]
	}" ${SLACK_WEBHOOK_URL} )

	sleep 10
done
exit 0
