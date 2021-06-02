const AWS = require("aws-sdk");
const phone = require("phone");

exports.start = async (event, context) => {
    const PhoneNumber = phone(process.env.PHONE_NUMBER, "JPN", true).shift() || "";
    if (PhoneNumber === "") {
        return new Error("invalid phone number");
    }

    const param = {
        PhoneNumber,
        Message: "このSMSは mohemohe/rakuten-mobile-keep-freetier が送信したダミーメッセージです",
        MessageAttributes: {
            "AWS.SNS.SMS.SMSType": {
                DataType: "String",
                StringValue: "Transactional"
            },
            "AWS.SNS.SMS.SenderID": {
                DataType: "String",
                StringValue: "rmkf"
            }
        }
    };

    const SNS = new AWS.SNS({region: "ap-northeast-1"});
    try {
        await SNS.publish(param).promise();
        console.log("SNS send success");
    } catch (e) {
        console.log("SNS send error:", e);
        return e;
    }
}
