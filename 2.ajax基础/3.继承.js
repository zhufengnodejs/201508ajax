var util = {
    extends: function (defaultConfig, config) {
        var obj = {};
        for (var attr in defaultConfig) {
            obj[attr] = config[attr] || defaultConfig[attr];
        }
        return obj;
    }
}

var person = {
    hei: 36,
    eat: function () {

    },
    cry: function () {

    }
}

var son = {
    hei: 110,
    cry: function () {
        console.log('cry声很大');
    }
}

var myson = util.extends(person, son);
console.log(myson);
myson.cry();