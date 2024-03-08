define(function(require){
	var $ = require('jquery');

	const CONFIG = {
		submoduleName: 'couchdb',
		i18n: [ 'en-US' ]
	};

	var app = {
		requests: {},

		subscribe: {
			'storagemgmt.fetchStorages': 'defineStorageCouchDB'
		},

		defineStorageCouchDB: function(args) {
			var self = this,
				storage_nodes = args.storages;

			var methods = {
				getLogo: function () {
					return self.getTemplate({
						name: 'logo',
						submodule: CONFIG.submoduleName,
						data: {}
					});
				},

				getFormElements: function (storageData) {
					return self.getTemplate({
						name: 'formElements',
						submodule: CONFIG.submoduleName,
						data: storageData
					});
				}
			};
                        
                        console.log(methods);

			$.extend(true, storage_nodes, {
					'couchdb': methods
				}
			);

			args.callback && args.callback(CONFIG)
		}
	};

	return app;
});
