import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {

	this.route('about');
	this.route('app');
	this.route('careers');
	this.route('community');
	this.route('discord');
	this.route('features');
	this.route('install');
	this.route('license');
	this.route('media');
	this.route('opensource');
	this.route('press');
	this.route('releases');
	this.route('roadmap');
	this.route('snippet');
	this.route('store');
	this.route('why');

	this.route('who', function() {
		this.route('tobie');
		this.route('jaime');
	});

	this.route('blog', function() {
		this.route('post', { path: '/:post_slug' });
	});

	this.route('legal', function() {
		this.route('terms');
		this.route('privacy');
		this.route('cookies');
		this.route('security');
	});

	this.route('usecase', function() {
		this.route('jamstack');
		this.route('serverless');
	});

	this.route('showcase', function() {
		this.route('modelling');
		this.route('surrealql');
		this.route('analytics');
		this.route('collaborate');
		this.route('permissions');
	});

	this.route('docs', function() {

		this.route('start', function() {
			this.route('quickstart');
			this.route('installation');
			this.route('terminology');
			this.route('starting-surrealdb');
			this.route('querying-surrealdb');
			this.route('securing-surrealdb');
		});

		this.route('surrealql', function() {

			this.route('operators');
			this.route('parameters');
			this.route('expressions');
			this.route('transactions');

			this.route('datamodel', function() {
				this.route('simple');
				this.route('datetimes');
				this.route('geometries');
				this.route('records');
				this.route('futures');
				this.route('casting');
			});

			this.route('statements', function() {
				
				this.route('use');
				this.route('let');
				this.route('info');
				this.route('begin');
				this.route('cancel');
				this.route('commit');
				this.route('ifelse');
				this.route('select');
				this.route('insert');
				this.route('create');
				this.route('update');
				this.route('relate');
				this.route('delete');

				this.route('define', function() {
					this.route('namespace');
					this.route('database');
					this.route('login');
					this.route('token');
					this.route('scope');
					this.route('table');
					this.route('event');
					this.route('field');
					this.route('indexes');
				});

				this.route('remove');
				this.route('sleep');
				
			});

			this.route('functions', function() {
				this.route('array');
				this.route('count');
				this.route('crypto');
				this.route('geo');
				this.route('http');
				this.route('validation');
				this.route('math');
				this.route('parse');
				this.route('rand');
				this.route('session');
				this.route('string');
				this.route('time');
				this.route('type');
				this.route('script');
				this.route('sleep');
			});

		});

		this.route('integration', function() {

			this.route('overview');
			this.route('http');
			this.route('websockets');

			this.route('libraries', function() {
				this.route('angularjs');
				this.route('apollo');
				this.route('c');
				this.route('dart');
				this.route('deno');
				this.route('dotnet');
				this.route('emberjs');
				this.route('erlang');
				this.route('flutter');
				this.route('golang');
				this.route('java');
				this.route('javascript');
				this.route('nodejs');
				this.route('php');
				this.route('python');
				this.route('r');
				this.route('reactjs');
				this.route('ruby');
				this.route('rust');
				this.route('swift');
				this.route('vuejs');
				this.route('webassembly');
			});

		});

		this.route('cli', function() {
			this.route('start');
			this.route('import');
			this.route('export');
			this.route('version');
			this.route('sql');
			this.route('help');
		});

		this.route('guides', function() {
			this.route('schemafull-or-schemaless');
			this.route('relations-and-graph');
			this.route('realtime-subscriptions');
			this.route('geospatial-functionality');
			this.route('data-triggers');
			this.route('computed-views');
			this.route('authenticating-users');
			this.route('deploying-surrealdb');
			this.route('strict-mode');
		});

	});

	this.route('404', {
		path: '*:'
	});

});
