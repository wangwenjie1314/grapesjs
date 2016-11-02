define(['backbone'],
	function (Backbone) {
		/**
		 * @class HtmlGenerator
		 * */
		return Backbone.Model.extend({

			/** @inheritdoc */
			build: function(model){
				var coll 	= model.get('components') || model,
					code 	= '';

				coll.each(function(m){
					code += m.toHTML();
				}, this);

				return code;
			},

		});
});
