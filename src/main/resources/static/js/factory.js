
app.factory("topicHeaderFactory", topicHeaderFactory);

function topicHeaderFactory($http, HeaderValues) {
    var header = {};

    header.th1 = HeaderValues.th1;
    header.th2 = HeaderValues.th2;
    header.th3 = HeaderValues.th3;

    return header;
}