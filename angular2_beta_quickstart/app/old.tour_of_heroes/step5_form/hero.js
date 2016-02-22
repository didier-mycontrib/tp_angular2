System.register([], function(exports_1) {
    var SuperHero;
    return {
        setters:[],
        execute: function() {
            SuperHero = (function () {
                function SuperHero(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return SuperHero;
            })();
            exports_1("SuperHero", SuperHero);
        }
    }
});
//# sourceMappingURL=hero.js.map