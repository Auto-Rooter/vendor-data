import { dynamodbCreateTable, dynamodbDescribeTable, dynamodbDeleteTable } from "./aws";

const init = async() => {
    const vendorTableName = 'vendors';
    const vendorsTable = await dynamodbDescribeTable(vendorTableName);

    if(!(vendorsTable instanceof Error)){
        console.log("Table Exists");
        await dynamodbDeleteTable(vendorTableName);
    }
    // const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    //     TableName: 'vendors',
    //     KeySchema: [
    //         { AttributeName: 'twitterId', KeyType: 'HASH'}
    //     ],
    //     AttributeDefinitions: [
    //         { AttributeName: 'twitterId', AttributeType: 'S' }
    //     ],
    //     ProvisionedThroughput: {
    //         ReadCapacityUnits: 10,
    //         WriteCapacityUnits: 10
    //     }
    // };

    // dynamodbCreateTable(vendorsTableParams);

}

init();