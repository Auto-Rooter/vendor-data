import { dynamodbCreateTable, dynamodbDescribeTable, dynamodbDeleteTable, dynamodbCreateRecord } from "./aws";
import vendors from "./data/vendors";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const init = async() => {
    const vendorTableName = 'vendors';
    const vendorsTable = await dynamodbDescribeTable(vendorTableName);

    if(!(vendorsTable instanceof Error)){
        console.log("Table Exists");
        await dynamodbDeleteTable(vendorTableName);
        await delay(6000);
    }
    const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
        TableName: 'vendors',
        KeySchema: [
            { AttributeName: 'twitterId', KeyType: 'HASH'}
        ],
        AttributeDefinitions: [
            { AttributeName: 'twitterId', AttributeType: 'S' }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };

    await dynamodbCreateTable(vendorsTableParams);
    await delay(6000);


    for(const i in vendors){
        const res = await dynamodbCreateRecord(vendorTableName, vendors[i]);
        if(res instanceof Error){
            console.log("[!] Error: " + res + JSON.stringify(vendors[i]));
        }
    }
}

init();