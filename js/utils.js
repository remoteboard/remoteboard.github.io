remoteboard = {
	parseQuery: function () {
    	var ret = {};
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return ret;
    }
};

