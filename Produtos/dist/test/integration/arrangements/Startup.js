sap.ui.define(["sap/ui/test/Opa5"],function(t){"use strict";return t.extend("br.com.infoprodutos.Produtos.test.integration.arrangements.Startup",{iStartMyApp:function(t){var o=t||{};o.delay=o.delay||50;this.iStartMyUIComponent({componentConfig:{name:"br.com.infoprodutos.Produtos",async:true},hash:o.hash,autoWait:o.autoWait})}})});