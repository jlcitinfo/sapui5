sap.ui.define(["sap/ui/core/mvc/Controller"],function(o){"use strict";return o.extend("br.com.infoprodutos.Produtos.controller.Produtos",{onInit:function(){},funcListItemPress:function(o){var t=sap.ui.core.UIComponent.getRouterFor(this);var e=o.getSource().getBindingContext().getProperty("ProductID");t.navTo("Detalhes",{idProd:e})}})});