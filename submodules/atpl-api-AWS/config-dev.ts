module.exports={
  Topics: [
    {
      TopicName: "ALERTCONFIGS_ADD",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "POST",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAlertConfigs",
          OnSuccessTopicsToPush: [
            "ALERTCONFIGS_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_ADD-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_ADD-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_ADD-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_ADD:21b4f399-680c-4458-a0d9-538b265c6786"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_ADD"
    },
    {
      TopicName: "ALERTCONFIGS_UPDATE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "PUT",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateAlertConfigs",
          OnSuccessTopicsToPush: [
            "ALERTCONFIGS_UPDATED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_UPDATE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_UPDATE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_UPDATE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_UPDATE:e347de89-28fc-4773-9905-e9893749335d"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_UPDATE"
    },
    {
      TopicName: "ALERTCONFIGS_DELETE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "DELETE",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteAlertConfigs",
          OnSuccessTopicsToPush: [
            "ALERTCONFIGS_DELETED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_DELETE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_DELETE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_DELETE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_DELETE:7f6778ee-49fc-4dbf-bf86-925618bc90ba"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_DELETE"
    },
    {
      TopicName: "IOTDEVICE_ADD",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "POST",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertIotDevice",
          OnSuccessTopicsToPush: [
            "IOTDEVICE_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_ADD-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_ADD-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_ADD-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_ADD:60ac340c-25b3-49f2-809d-0ee9c6cf9c52"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_ADD"
    },
    {
      TopicName: "IOTDEVICE_UPDATE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "PUT",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateIotDevice",
          OnSuccessTopicsToPush: [
            "IOTDEVICE_UPDATED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_UPDATE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_UPDATE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_UPDATE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_UPDATE:b097f793-eeab-488a-9f72-d1ed7463044f"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_UPDATE"
    },
    {
      TopicName: "IOTDEVICE_DELETE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "DELETE",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteIotDevice",
          OnSuccessTopicsToPush: [
            "IOTDEVICE_DELETED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_DELETE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_DELETE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_DELETE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_DELETE:df7ee70a-dc35-4824-a43a-a0c66a785f50"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_DELETE"
    },
    {
      TopicName: "SENSORDATA_ADD",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "POST",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorData",
          OnSuccessTopicsToPush: [
            "SENSORDATA_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_ADD-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_ADD-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_ADD-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_ADD:35178939-2010-465e-b8c5-d22c9d3c7447"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_ADD"
    },
    {
      TopicName: "SENSORDATA_UPDATE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "PUT",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensorData",
          OnSuccessTopicsToPush: [
            "SENSORDATA_UPDATED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_UPDATE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_UPDATE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_UPDATE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_UPDATE:9358e10a-2fa1-4364-abe0-3d4fbd95dde4"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_UPDATE"
    },
    {
      TopicName: "SENSORDATA_DELETE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "DELETE",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensorData",
          OnSuccessTopicsToPush: [
            "SENSORDATA_DELETED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_DELETE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_DELETE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_DELETE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_DELETE:712d3983-e249-4976-8768-80338e948aa0"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_DELETE"
    },
    {
      TopicName: "SENSORS_ADD",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "POST",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorS",
          OnSuccessTopicsToPush: [
            "SENSORS_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_ADD-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_ADD-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_ADD-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_ADD:80eddf06-6a45-45d5-a47e-c47e495382ae"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_ADD"
    },
    {
      TopicName: "SENSORS_UPDATE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "PUT",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensors",
          OnSuccessTopicsToPush: [
            "SENSORS_UPDATED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_UPDATE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_UPDATE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_UPDATE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_UPDATE:6742a596-b45f-4907-9c90-45cd1cdf1732"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_UPDATE"
    },
    {
      TopicName: "SENSORS_DELETE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "DELETE",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensors",
          OnSuccessTopicsToPush: [
            "SENSORS_DELETED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_DELETE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_DELETE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_DELETE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_DELETE:0dadc816-042e-4acb-ae12-fba6764af86f"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_DELETE"
    },
    {
      TopicName: "SENSORTYPE_ADD",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "POST",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorType",
          OnSuccessTopicsToPush: [
            "SENSORTYPE_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_ADD-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_ADD-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_ADD-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_ADD:31055d4d-6c9e-4c5d-b95b-e7eefdd6bc25"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_ADD"
    },
    {
      TopicName: "SENSORTYPE_UPDATE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "PUT",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensorType",
          OnSuccessTopicsToPush: [
            "SENSORTYPE_UPDATED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_UPDATE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_UPDATE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_UPDATE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_UPDATE:8bd67f25-19e3-42da-bac2-70aad296ee79"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_UPDATE"
    },
    {
      TopicName: "SENSORTYPE_DELETE",
      Publishers: [
        "API_GATEWAY_SERVICE"
      ],
      Method: "DELETE",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensorType",
          OnSuccessTopicsToPush: [
            "SENSORTYPE_DELETED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_DELETE-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_DELETE-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_DELETE-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_DELETE:a0bed9cb-1c71-4cab-b9ab-28ec8e1f5c7a"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_DELETE"
    },
    {
      TopicName: "ALERTCONFIGS_ADDED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsAddedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_ADDED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_ADDED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_ADDED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_ADDED:df7a742b-4be8-4227-a599-7ef71e2d6ea3"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_ADDED:ffde53e8-3730-4d7f-b77a-4af276e4d6ba"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_ADDED"
    },
    {
      TopicName: "ALERTCONFIGS_UPDATED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_UPDATED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_UPDATED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_UPDATED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_UPDATED:88ffcde5-21fa-45ea-bef3-d9dce58e6585"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_UPDATED:d07521b3-bf79-44c6-894f-c7bd3ef63c00"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_UPDATED"
    },
    {
      TopicName: "ALERTCONFIGS_DELETED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_DELETED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_DELETED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_DELETED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_DELETED:e198827a-986c-4501-96b3-d9ef91441191"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_DELETED:141f9781-74d4-4a94-8677-707059c67edc"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:ALERTCONFIGS_DELETED"
    },
    {
      TopicName: "IOTDEVICE_ADDED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceAddedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_ADDED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_ADDED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_ADDED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_ADDED:9fa6d6c8-52d3-413a-9d11-ebfd841fd5a3"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_ADDED:c4c25b24-3f0f-499a-b1af-8669ed8755b5"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_ADDED"
    },
    {
      TopicName: "IOTDEVICE_UPDATED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_UPDATED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_UPDATED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_UPDATED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_UPDATED:15bfbe3f-704d-45e9-90dd-14ef8554572a"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_UPDATED:24cfe364-9c7b-4fb3-9507-505554661446"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_UPDATED"
    },
    {
      TopicName: "IOTDEVICE_DELETED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_DELETED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_DELETED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_DELETED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_DELETED:bfab1ecd-044f-4962-8659-59dcaec7b016"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_DELETED:af01b6b4-81b3-42e6-bd0e-9e8b3d016468"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:IOTDEVICE_DELETED"
    },
    {
      TopicName: "SENSORDATA_ADDED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataAddedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_ADDED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_ADDED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_ADDED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_ADDED:830fa3d4-7fa3-4450-a7ed-33d2d3fef677"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_ADDED:166dedeb-dc0b-4179-a729-2b167a238f79"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_ADDED"
    },
    {
      TopicName: "SENSORDATA_UPDATED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_UPDATED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_UPDATED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_UPDATED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_UPDATED:18d08499-fe93-46a6-b6fe-f729756b997d"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_UPDATED:1145ec97-f6ba-4556-8087-af9ae3da8dfb"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_UPDATED"
    },
    {
      TopicName: "SENSORDATA_DELETED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_DELETED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_DELETED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_DELETED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_DELETED:85066586-cb1e-4e2c-95a9-5362408c38ac"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_DELETED:f753fa8e-fc61-4301-88f5-d7ab7068db5c"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORDATA_DELETED"
    },
    {
      TopicName: "SENSORTYPE_ADDED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeAddedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_ADDED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_ADDED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_ADDED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_ADDED:ed517b14-efaf-4587-a97d-07d55f29e642"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_ADDED:e862b275-2b14-4744-8572-cce01a3bff5c"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_ADDED"
    },
    {
      TopicName: "SENSORTYPE_UPDATED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_UPDATED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_UPDATED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_UPDATED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_UPDATED:b2aa4d41-7fa3-4de3-b475-baee2a3b8674"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_UPDATED:752697e6-1735-47b7-a6fc-fb255cdb3294"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_UPDATED"
    },
    {
      TopicName: "SENSORTYPE_DELETED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_DELETED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_DELETED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_DELETED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_DELETED:3e3338a0-bade-4e1d-8a67-dd3482ce64df"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_DELETED:8794c122-7e67-4dee-b27f-265bc8618178"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORTYPE_DELETED"
    },
    {
      TopicName: "SENSORS_ADDED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsAddedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_ADDED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_ADDED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_ADDED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_ADDED:63c64aef-6fe5-4c49-9ef0-55ff2b7ec94c"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_ADDED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_ADDED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_ADDED:99fc197f-2e8e-46f4-bc57-e67f90fe66c6"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_ADDED"
    },
    {
      TopicName: "SENSORS_UPDATED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_UPDATED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_UPDATED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_UPDATED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_UPDATED:58a4325e-a5bd-434c-848e-dfdbed7b20d8"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_UPDATED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_UPDATED:f1e7810e-3c91-441b-bd8e-e8e2357ef15e"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_UPDATED"
    },
    {
      TopicName: "SENSORS_DELETED",
      Publishers: [
        "IOT_SERVICE"
      ],
      Method: "UNKNOWN",
     Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: [
            "NOTIFICATION_ADDED"
          ],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_DELETED-IOT_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_DELETED-IOT_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_DELETED-IOT_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_DELETED:66fbaddc-b9c3-4409-93ac-cec9a3ae3442"
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [
            "ERROR_RECEIVER"
          ],
          QueueName: "SENSORS_DELETED-API_GATEWAY_SERVICE",
          QueueUrl: "https://sqs.us-east-2.amazonaws.com/915966410640/SENSORS_DELETED-API_GATEWAY_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:915966410640:SENSORS_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_DELETED:202a27bf-4317-4a17-882e-01988fafb845"
        }
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:SENSORS_DELETED"
    }
  ]
}