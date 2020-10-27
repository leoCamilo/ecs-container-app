const ECS = require('./widgets/ECS.json');

module.exports = () => ({
    "Type": "AWS::CloudWatch::Dashboard",
    "Properties": {
        "DashboardName": "${self:custom.stackName}-v1",
        "DashboardBody": JSON.stringify(dashboardBody)
    }
});

const dashboardBody = {
    "widgets": [
        {
            "type": "metric",
            "x": 0,
            "y": 0,
            "width": 24,
            "height": 6,
            "properties": ECS.Consumption
        }
    ]
}
