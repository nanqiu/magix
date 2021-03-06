YAHOO.env.classMap = {"libs.magix.Controller": "controller", "libs.magix.View": "view", "Magix.History": "magix", "libs.magix.Helper": "helper", "libs.magix.Mu": "mu", "libs.magix.Vcelement": "vcelement", "libs.magix.Vom": "vom"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
