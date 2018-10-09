(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OmimActions = function () {
  function OmimActions() {
    _classCallCheck(this, OmimActions);

    this.generateActions('getOmimGeneSuccess', 'getOmimGeneWithPhenotypesSuccess', 'getSnpSuccess', 'getOmimGeneFail');
  }

  _createClass(OmimActions, [{
    key: 'getOmimGenes',
    value: function getOmimGenes() {
      var _this = this;

      $.ajax({ url: '/api/omim', data: {} }).done(function (data) {
        _this.actions.getOmimGeneSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getOmimGeneFail(jqXhr);
      });
    }
  }, {
    key: 'getOmimGenesWithPhenotypes',
    value: function getOmimGenesWithPhenotypes() {
      var _this2 = this;

      $.ajax({ url: '/api/omimWithPhenotype/', data: {} }).done(function (data) {
        _this2.actions.getOmimGeneWithPhenotypesSuccess(data);
      });
    }
  }, {
    key: 'getSnp',
    value: function getSnp() {
      var _this3 = this;

      $.ajax({ url: '/api/snp/', data: {} }).done(function (data) {
        _this3.actions.getSnpSuccess(data);
      });
    }
  }]);

  return OmimActions;
}();

exports.default = _alt2.default.createActions(OmimActions);

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatsActions = function () {
  function StatsActions() {
    _classCallCheck(this, StatsActions);

    this.generateActions('getOmimGeneSuccess', 'getOmimGeneWithPhenotypesSuccess', 'getOmimGeneFail');
  }

  _createClass(StatsActions, [{
    key: 'getOmimGenes',
    value: function getOmimGenes() {
      var _this = this;

      $.ajax({ url: '/api/omim', data: {} }).done(function (data) {
        _this.actions.getOmimGeneSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getOmimGeneFail(jqXhr);
      });
    }
  }, {
    key: 'getOmimGenesWithPhenotypes',
    value: function getOmimGenesWithPhenotypes() {
      var _this2 = this;

      $.ajax({ url: '/api/omimWithPhenotype/', data: {} }).done(function (data) {
        _this2.actions.getOmimGeneWithPhenotypesSuccess(data);
      });
    }
  }]);

  return StatsActions;
}();

exports.default = _alt2.default.createActions(StatsActions);

},{"../alt":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Navbar":6,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OmimStore = require('../stores/OmimStore');

var _OmimStore2 = _interopRequireDefault(_OmimStore);

var _OmimActions = require('../actions/OmimActions');

var _OmimActions2 = _interopRequireDefault(_OmimActions);

var _Omim = require('./Omim');

var _Omim2 = _interopRequireDefault(_Omim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home(props) {
				_classCallCheck(this, Home);

				var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

				_this.state = _OmimStore2.default.getState();
				_this.onChange = _this.onChange.bind(_this);
				return _this;
		}

		_createClass(Home, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						_OmimStore2.default.listen(this.onChange);
						_OmimActions2.default.getOmimGenes();
						_OmimActions2.default.getOmimGenesWithPhenotypes();
						_OmimActions2.default.getSnp();
				}
		}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
						_OmimStore2.default.unlisten(this.onChange);
				}
		}, {
				key: 'onChange',
				value: function onChange(state) {
						this.setState(state);
				}
		}, {
				key: 'mapPhenotypeList',
				value: function mapPhenotypeList(list) {
						if (list) {
								return list.map(function (item, index) {
										return _react2.default.createElement(
												'div',
												{ className: 'well well-sm', key: index },
												_react2.default.createElement(
														'div',
														null,
														_react2.default.createElement(
																'strong',
																null,
																'Phenotype Name:'
														),
														' ',
														item.phenotypeMap.phenotype
												),
												_react2.default.createElement(
														'div',
														null,
														_react2.default.createElement(
																'strong',
																null,
																'Phenotype MIM Number:'
														),
														' ',
														_react2.default.createElement(
																'a',
																{ href: 'https://omim.org/entry/' + item.phenotypeMap.phenotypeMimNumber, target: '_blank' },
																item.phenotypeMap.phenotypeMimNumber
														)
												),
												_react2.default.createElement(
														'div',
														null,
														_react2.default.createElement(
																'strong',
																null,
																'Phenotype Inheritance:'
														),
														' ',
														item.phenotypeMap.phenotypeInheritance
												)
										);
								});
						}
				}
		}, {
				key: 'mapSnpList',
				value: function mapSnpList(list) {
						if (list && list.constructor === Array) {
								return list.map(function (item, index) {
										return _react2.default.createElement(
												'li',
												{ className: 'well well-sm', key: index },
												_react2.default.createElement(
														'a',
														{ href: 'https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + item, target: '_blank' },
														item
												)
										);
								});
						} else if (list) {
								return _react2.default.createElement(
										'li',
										{ className: 'well well-sm', key: list },
										_react2.default.createElement(
												'a',
												{ href: 'https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + list, target: '_blank' },
												list
										)
								);
						}
				}
		}, {
				key: 'getPhenotypeCount',
				value: function getPhenotypeCount(list) {
						if (list) {
								return list.length;
						} else return 0;
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						var geneNodes = this.state.genes.map(function (gene, index) {
								var geneObject = JSON.parse(gene.contents);
								var geneMap = geneObject.omim.listResponse.geneMapList[0].geneMap;
								var snpContents = JSON.parse(gene.snpContents);
								return _react2.default.createElement(
										'div',
										{ className: 'panel panel-primary', key: gene._id },
										_react2.default.createElement(
												'div',
												{ className: 'panel-heading' },
												geneMap.geneName
										),
										_react2.default.createElement(
												'div',
												{ className: 'panel-body' },
												_react2.default.createElement(
														'ul',
														{ className: 'list' },
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'Gene Name: '
																),
																geneMap.geneName
														),
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'Gene Symbols: '
																),
																geneMap.geneSymbols
														),
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'MIM Number: '
																),
																_react2.default.createElement(
																		'a',
																		{ href: 'https://omim.org/entry/' + geneMap.mimNumber, target: '_blank' },
																		geneMap.mimNumber
																)
														),
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'Known Phenotypes: '
																),
																_react2.default.createElement(
																		'span',
																		{ className: 'badge' },
																		_this2.getPhenotypeCount(geneMap.phenotypeMapList)
																)
														),
														_react2.default.createElement(
																'p',
																null,
																_this2.mapPhenotypeList(geneMap.phenotypeMapList)
														),
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'Known SNPs: '
																),
																_react2.default.createElement(
																		'span',
																		{ className: 'badge' },
																		gene.snpCount
																)
														),
														_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																		'strong',
																		null,
																		'Known Pathogenic SNPs: '
																),
																_react2.default.createElement(
																		'span',
																		{ className: 'badge badge-danger' },
																		gene.snpPathogenicCount
																)
														),
														_react2.default.createElement(
																'p',
																null,
																_react2.default.createElement(
																		'ul',
																		{ className: 'list-inline' },
																		_this2.mapSnpList(snpContents.IdList.Id)
																)
														)
												)
										)
								);
						});

						return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
										'div',
										{ className: 'alert alert-info' },
										'Mitochondrial Disorders And Genetic Variations'
								),
								_react2.default.createElement(
										'div',
										{ className: 'container' },
										_react2.default.createElement(
												'ul',
												{ className: 'list-group' },
												_react2.default.createElement(
														'li',
														{ className: 'list-group-item' },
														_react2.default.createElement(
																'strong',
																null,
																'Total genes: '
														),
														this.state.genes.length
												),
												_react2.default.createElement(
														'li',
														{ className: 'list-group-item' },
														_react2.default.createElement(
																'strong',
																null,
																'Total genes with known phenotypes: '
														),
														this.state.genesWithPhenotypes.length
												)
										),
										geneNodes
								)
						);
				}
		}]);

		return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/OmimActions":1,"../stores/OmimStore":12,"./Omim":7,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            'DNA',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              'mt'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/stats' },
                'Stats'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/phenotypes' },
                'Known Phenotypes '
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Omim = function Omim(_ref) {
  var omim = _ref.omim,
      onHeadingClick = _ref.onHeadingClick,
      headingClass = _ref.headingClass;

  return _react2.default.createElement(
    'div',
    null,
    omim
  );
};

exports.default = Omim;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OmimStore = require('../stores/OmimStore');

var _OmimStore2 = _interopRequireDefault(_OmimStore);

var _OmimActions = require('../actions/OmimActions');

var _OmimActions2 = _interopRequireDefault(_OmimActions);

var _Omim = require('./Omim');

var _Omim2 = _interopRequireDefault(_Omim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = _OmimStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_OmimStore2.default.listen(this.onChange);
			_OmimActions2.default.getOmimGenesWithPhenotypes();
			_OmimActions2.default.getSnp();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_OmimStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'mapPhenotypeList',
		value: function mapPhenotypeList(list) {
			if (list) {
				return list.map(function (item, index) {
					return _react2.default.createElement(
						'div',
						{ className: 'well well-sm', key: index },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'strong',
								null,
								'Phenotype Name:'
							),
							' ',
							item.phenotypeMap.phenotype
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'strong',
								null,
								'Phenotype MIM Number:'
							),
							' ',
							_react2.default.createElement(
								'a',
								{ href: 'https://omim.org/entry/' + item.phenotypeMap.phenotypeMimNumber, target: '_blank' },
								item.phenotypeMap.phenotypeMimNumber
							)
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'strong',
								null,
								'Phenotype Inheritance:'
							),
							' ',
							item.phenotypeMap.phenotypeInheritance
						)
					);
				});
			}
		}
	}, {
		key: 'getPhenotypeCount',
		value: function getPhenotypeCount(list) {
			if (list) {
				return list.length;
			} else return 0;
		}
	}, {
		key: 'mapSnpList',
		value: function mapSnpList(list) {
			if (list && list.constructor === Array) {
				return list.map(function (item, index) {
					return _react2.default.createElement(
						'li',
						{ className: 'well well-sm', key: index },
						_react2.default.createElement(
							'a',
							{ href: 'https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + item, target: '_blank' },
							item
						)
					);
				});
			} else if (list) {
				return _react2.default.createElement(
					'li',
					{ className: 'well well-sm', key: list },
					_react2.default.createElement(
						'a',
						{ href: 'https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + list, target: '_blank' },
						list
					)
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var geneNodes = this.state.genesWithPhenotypes.map(function (gene, index) {
				var geneObject = JSON.parse(gene.contents);
				var geneMap = geneObject.omim.listResponse.geneMapList[0].geneMap;
				var snpContents = JSON.parse(gene.snpContents);
				return _react2.default.createElement(
					'div',
					{ className: 'panel panel-primary', key: gene._id },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						geneMap.geneName
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						_react2.default.createElement(
							'ul',
							{ className: 'list' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Gene Name: '
								),
								geneMap.geneName
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Gene Symbols: '
								),
								geneMap.geneSymbols
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'MIM Number: '
								),
								_react2.default.createElement(
									'a',
									{ href: 'https://omim.org/entry/' + geneMap.mimNumber, target: '_blank' },
									geneMap.mimNumber
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Known Phenotypes: '
								),
								_react2.default.createElement(
									'span',
									{ className: 'badge' },
									_this2.getPhenotypeCount(geneMap.phenotypeMapList)
								)
							),
							_react2.default.createElement(
								'p',
								null,
								_this2.mapPhenotypeList(geneMap.phenotypeMapList)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Known SNPs: '
								),
								_react2.default.createElement(
									'span',
									{ className: 'badge' },
									gene.snpCount
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'strong',
									null,
									'Known Pathogenic SNPs: '
								),
								_react2.default.createElement(
									'span',
									{ className: 'badge badge-danger' },
									gene.snpPathogenicCount
								)
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'ul',
									{ className: 'list-inline' },
									_this2.mapSnpList(snpContents.IdList.Id)
								)
							)
						)
					)
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'alert alert-info' },
					'Mitochondrial Disorders And Genetic Variations'
				),
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'ul',
						{ className: 'list-group' },
						_react2.default.createElement(
							'li',
							{ className: 'list-group-item' },
							_react2.default.createElement(
								'strong',
								null,
								'Total genes with known phenotypes: '
							),
							this.state.genesWithPhenotypes.length
						)
					),
					geneNodes
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/OmimActions":1,"../stores/OmimStore":12,"./Omim":7,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleCharts = require('react-google-charts');

var _StatsStore = require('../stores/StatsStore');

var _StatsStore2 = _interopRequireDefault(_StatsStore);

var _StatsActions = require('../actions/StatsActions');

var _StatsActions2 = _interopRequireDefault(_StatsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = _StatsStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _StatsStore2.default.listen(this.onChange);
      _StatsActions2.default.getOmimGenes();
      _StatsActions2.default.getOmimGenesWithPhenotypes();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _StatsStore2.default.unlisten(this.onChange);
      this.setState({ data: [['Type', 'Count', { role: 'annotation' }]] });
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
      this.setState({ data: [].concat(_toConsumableArray(this.state.data), [['Total Genes', this.state.genes.length, this.state.genes.length]]) });
      this.setState({ data: [].concat(_toConsumableArray(this.state.data), [['Genes with known Phenotypes', this.state.genesWithPhenotypes.length, this.state.genesWithPhenotypes.length]]) });
    }
  }, {
    key: 'render',
    value: function render() {
      var totalGenes = 0;
      var totalGenesWithPhenotypes = 0;

      return _react2.default.createElement(
        'div',
        { className: 'my-pretty-chart-container' },
        _react2.default.createElement(_reactGoogleCharts.Chart, {
          chartType: 'ColumnChart',
          data: this.state.data,
          options: {},
          graph_id: 'BarChart',
          width: '50%',

          legend_toggle: true
        })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"../actions/StatsActions":2,"../stores/StatsStore":13,"react":"react","react-google-charts":39}],10:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":11,"history/lib/createBrowserHistory":24,"react":"react","react-dom":"react-dom","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Phenotypes = require('./components/Phenotypes');

var _Phenotypes2 = _interopRequireDefault(_Phenotypes);

var _Stats = require('./components/Stats');

var _Stats2 = _interopRequireDefault(_Stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/phenotypes', component: _Phenotypes2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/stats', component: _Stats2.default })
);

},{"./components/App":4,"./components/Home":5,"./components/Phenotypes":8,"./components/Stats":9,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _OmimActions = require('../actions/OmimActions');

var _OmimActions2 = _interopRequireDefault(_OmimActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OmimStore = function () {
  function OmimStore() {
    _classCallCheck(this, OmimStore);

    this.bindActions(_OmimActions2.default);
    this.genes = [];
    this.genesWithPhenotypes = [];
    this.snp = [];
    this.data = [['Type', 'Count', { role: 'annotation' }]];
  }

  _createClass(OmimStore, [{
    key: 'onGetOmimGeneSuccess',
    value: function onGetOmimGeneSuccess(data) {
      this.genes = data;
    }
  }, {
    key: 'onGetOmimGeneWithPhenotypesSuccess',
    value: function onGetOmimGeneWithPhenotypesSuccess(data) {
      this.genesWithPhenotypes = data;
    }
  }, {
    key: 'onGetSnpSuccess',
    value: function onGetSnpSuccess(data) {
      this.snp = data;
    }
  }]);

  return OmimStore;
}();

exports.default = _alt2.default.createStore(OmimStore);

},{"../actions/OmimActions":1,"../alt":3}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _StatsActions = require('../actions/StatsActions');

var _StatsActions2 = _interopRequireDefault(_StatsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatsStore = function () {
  function StatsStore() {
    _classCallCheck(this, StatsStore);

    this.bindActions(_StatsActions2.default);
    this.genes = [];
    this.genesWithPhenotypes = [];
  }

  _createClass(StatsStore, [{
    key: 'onGetOmimGeneSuccess',
    value: function onGetOmimGeneSuccess(data) {
      this.genes = data;
    }
  }, {
    key: 'onGetOmimGeneWithPhenotypesSuccess',
    value: function onGetOmimGeneWithPhenotypesSuccess(data) {
      this.genesWithPhenotypes = data;
    }
  }]);

  return StatsStore;
}();

exports.default = _alt2.default.createStore(StatsStore);

},{"../actions/StatsActions":2,"../alt":3}],14:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))

},{"./debug":15,"_process":35}],15:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":34}],16:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":17,"./lib/keys.js":18}],17:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],18:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],19:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],21:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":35,"warning":40}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],24:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":19,"./DOMStateStorage":21,"./DOMUtils":22,"./ExecutionEnvironment":23,"./createDOMHistory":25,"./parsePath":30,"_process":35,"invariant":32}],25:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":22,"./ExecutionEnvironment":23,"./createHistory":26,"_process":35,"invariant":32}],26:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":19,"./AsyncUtils":20,"./createLocation":27,"./deprecate":28,"./parsePath":30,"./runTransitionHook":31,"deep-equal":16}],27:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":19,"./parsePath":30}],28:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],29:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],30:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":29,"_process":35,"warning":40}],31:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":35,"warning":40}],32:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":35}],33:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.loadjs = factory();
  }
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      isCss,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(path)) {
    isCss = true;

    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = path.replace(/^css!/, '');  // remove "css!" prefix
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = path;
    e.async = async === undefined ? true : async;
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // Note: The following code isolates IE using `hideFocus` and treats empty
    // stylesheets as failures to get around lack of onerror support
    if (isCss && 'hideFocus' in e) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText`
        result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    }

    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function)} [arg1] - The bundleId or success callback
 * @param {Function} [arg2] - The success or error callback
 * @param {Function} [arg3] - The error callback
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  // load scripts
  loadFiles(paths, function (pathsNotFound) {
    // success and error callbacks
    if (pathsNotFound.length) (args.error || devnull)(pathsNotFound);
    else (args.success || devnull)();

    // publish bundle load event
    publish(bundleId, pathsNotFound);
  }, args);
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    if (depsNotFound.length) (args.error || devnull)(depsNotFound);
    else (args.success || devnull)();
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));

},{}],34:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}

},{}],35:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _DEFAULT_CHART_COLORS = require('../constants/DEFAULT_CHART_COLORS');

var _DEFAULT_CHART_COLORS2 = _interopRequireDefault(_DEFAULT_CHART_COLORS);

var _GoogleChartLoader = require('./GoogleChartLoader');

var _GoogleChartLoader2 = _interopRequireDefault(_GoogleChartLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/forbid-prop-types: "off" */


var debug = new _debug2.default('react-google-charts:Chart');

var uniqueID = 0;

var generateUniqueID = function generateUniqueID() {
  uniqueID += 1;
  return 'reactgooglegraph-' + uniqueID;
};

var Chart = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    debug('constructor', props);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { graphID: props.graph_id || generateUniqueID() };
    _this.chart = null;
    _this.wrapper = null;
    _this.hidden_columns = {};
    _this.dataTable = [];

    _this.debounce = _this.debounce.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.drawChart = _this.drawChart.bind(_this);
    _this.togglePoints = _this.togglePoints.bind(_this);
    _this.buildDataTableFromProps = _this.buildDataTableFromProps.bind(_this);
    _this.listenToChartEvents = _this.listenToChartEvents.bind(_this);
    _this.addChartActions = _this.addChartActions.bind(_this);
    _this.updateDataTable = _this.updateDataTable.bind(_this);
    _this.onSelectToggle = _this.onSelectToggle.bind(_this);
    _this.addSourceColumnTo = _this.addSourceColumnTo.bind(_this);
    _this.restoreColorTo = _this.restoreColorTo.bind(_this);
    _this.hideColumn = _this.hideColumn.bind(_this);
    return _this;
  }

  Chart.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    debug('componentDidMount');
    if (typeof window === 'undefined') {
      return;
    }
    if (this.props.loadCharts) {
      _GoogleChartLoader2.default.init(this.props.chartPackages, this.props.chartVersion).then(function () {
        _this2.drawChart();
      });
      this.onResize = this.debounce(this.onResize, 200);
      window.addEventListener('resize', this.onResize);
    } else {
      this.drawChart();
    }
  };

  Chart.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this3 = this;

    debug('componentDidUpdate');
    if (!this.props.loadCharts) {
      this.drawChart();
    } else if (_GoogleChartLoader2.default.isLoading) {
      _GoogleChartLoader2.default.initPromise.then(function () {
        _this3.drawChart();
      });
    } else if (_GoogleChartLoader2.default.isLoaded) {
      this.drawChart();
    }
  };

  Chart.prototype.componentWillUnmount = function componentWillUnmount() {
    try {
      if (window) {
        if (window.google && window.google.visualization) {
          window.google.visualization.events.removeAllListeners(this.wrapper);
        }
        window.removeEventListener('resize', this.onResize);
      }
    } catch (err) {
      return;
    }
  };

  Chart.prototype.onResize = function onResize() {
    debug('Chart::onResize');
    this.drawChart();
  };

  Chart.prototype.onSelectToggle = function onSelectToggle() {
    debug('onSelectToggle');
    var selection = this.chart.getSelection();
    if (selection.length > 0) {
      if (selection[0].row == null) {
        var column = selection[0].column;
        this.togglePoints(column);
      }
    }
  };

  Chart.prototype.getColumnColor = function getColumnColor(columnIndex) {
    if (this.props.options.colors) {
      if (this.props.options.colors[columnIndex]) {
        return this.props.options.colors[columnIndex];
      }
    } else if (columnIndex in _DEFAULT_CHART_COLORS2.default) {
      return _DEFAULT_CHART_COLORS2.default[columnIndex];
    }
    return _DEFAULT_CHART_COLORS2.default[0];
  };

  Chart.prototype.buildDataTableFromProps = function buildDataTableFromProps() {
    debug('buildDataTableFromProps', this.props);

    if (this.props.diffdata) {
      var diffdata = this.props.diffdata;
      var oldData = window.google.visualization.arrayToDataTable(diffdata.old);
      var newData = window.google.visualization.arrayToDataTable(diffdata.new);
      // must take computeDiff from prototypes since not available with charts early in process
      var computeDiff = window.google.visualization[this.props.chartType].prototype.computeDiff;
      var chartDiff = computeDiff(oldData, newData);
      return chartDiff;
    }

    if (this.props.data === null && this.props.rows.length === 0 && !this.props.allowEmptyRows) {
      throw new Error("Can't build DataTable from rows and columns: rows array in props is empty");
    } else if (this.props.data === null && this.props.columns.length === 0) {
      throw new Error("Can't build DataTable from rows and columns: columns array in props is empty");
    }
    if (this.props.data !== null) {
      try {
        this.wrapper.setDataTable(this.props.data);
        var _dataTable = this.wrapper.getDataTable();
        return _dataTable;
      } catch (err) {
        // console.error('Failed to set DataTable from data props ! ', err);
        throw new Error('Failed to set DataTable from data props ! ', err);
      }
    }

    var dataTable = new window.google.visualization.DataTable();
    this.props.columns.forEach(function (column) {
      dataTable.addColumn(column);
    });
    dataTable.addRows(this.props.rows);
    if (this.props.numberFormat) {
      var formatter = new window.google.visualization.NumberFormat(this.props.numberFormat.options);
      formatter.format(dataTable, this.props.numberFormat.column);
    }

    if (this.props.dateFormat) {
      var dateFormat = new window.google.visualization.DateFormat(this.props.dateFormat.options);
      this.props.dateFormat.columns.forEach(function (columnIdx) {
        dateFormat.format(dataTable, columnIdx);
      });
    }

    return dataTable;
  };

  Chart.prototype.updateDataTable = function updateDataTable() {
    debug('updateDataTable');
    window.google.visualization.errors.removeAll(document.getElementById(this.wrapper.getContainerId()));
    this.dataTable.removeRows(0, this.dataTable.getNumberOfRows());
    this.dataTable.removeColumns(0, this.dataTable.getNumberOfColumns());
    this.dataTable = this.buildDataTableFromProps();
    return this.dataTable;
  };

  Chart.prototype.drawChart = function drawChart() {
    var _this4 = this;

    debug('drawChart', this);
    if (!this.wrapper) {
      var chartConfig = {
        chartType: this.props.chartType,
        options: this.props.options,
        containerId: this.state.graphID
      };
      this.wrapper = new window.google.visualization.ChartWrapper(chartConfig);
      this.dataTable = this.buildDataTableFromProps();
      this.wrapper.setDataTable(this.dataTable);

      window.google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
        _this4.chart = _this4.wrapper.getChart();
        _this4.listenToChartEvents();
        _this4.addChartActions();
      });
    } else {
      this.updateDataTable();
      this.wrapper.setDataTable(this.dataTable);
      // this.wrapper.setChartType(this.props.chartType)
      this.wrapper.setOptions(this.props.options);
      if (this.wrapper.getChartType() !== this.props.chartType) {
        window.google.visualization.events.removeAllListeners(this.wrapper);
        this.wrapper.setChartType(this.props.chartType);
        var self = this;
        window.google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
          self.chart = self.wrapper.getChart();
          self.listenToChartEvents.call(self);
        });
      }
    }
    this.wrapper.draw();
  };

  Chart.prototype.addChartActions = function addChartActions() {
    var _this5 = this;

    debug('addChartActions', this.props.chartActions);
    if (this.props.chartActions === null) {
      return;
    }
    this.props.chartActions.forEach(function (chartAction) {
      _this5.chart.setAction({
        id: chartAction.id,
        text: chartAction.text,
        action: chartAction.action.bind(_this5, _this5.chart)
      });
    });
  };

  Chart.prototype.listenToChartEvents = function listenToChartEvents() {
    var _this6 = this;

    debug('listenToChartEvents', this.props.legend_toggle, this.props.chartEvents);
    if (this.props.legend_toggle) {
      window.google.visualization.events.addListener(this.wrapper, 'select', this.onSelectToggle);
    }
    this.props.chartEvents.forEach(function (chartEvent) {
      if (chartEvent.eventName === 'ready') {
        chartEvent.callback(_this6);
      } else {
        (function (event) {
          window.google.visualization.events.addListener(_this6.chart, event.eventName, function (e) {
            event.callback(_this6, e);
          });
        })(chartEvent);
      }
    });
  };

  Chart.prototype.buildColumnFromSourceData = function buildColumnFromSourceData(columnIndex) {
    debug('buildColumnFromSourceData', columnIndex);
    return {
      label: this.dataTable.getColumnLabel(columnIndex),
      type: this.dataTable.getColumnType(columnIndex),
      sourceColumn: columnIndex
    };
  };

  Chart.prototype.buildEmptyColumnFromSourceData = function buildEmptyColumnFromSourceData(columnIndex) {
    debug('buildEmptyColumnFromSourceData', columnIndex);
    return {
      label: this.dataTable.getColumnLabel(columnIndex),
      type: this.dataTable.getColumnType(columnIndex),
      calc: function calc() {
        return null;
      }
    };
  };

  Chart.prototype.addEmptyColumnTo = function addEmptyColumnTo(columns, columnIndex) {
    debug('addEmptyColumnTo', columns, columnIndex);
    var emptyColumn = this.buildEmptyColumnFromSourceData(columnIndex);
    columns.push(emptyColumn);
  };

  Chart.prototype.hideColumn = function hideColumn(colors, columnIndex) {
    debug('hideColumn', colors, columnIndex);
    if (!this.isHidden(columnIndex)) {
      this.hidden_columns[columnIndex] = { color: this.getColumnColor(columnIndex - 1) };
    }
    colors.push('#CCCCCC');
  };

  Chart.prototype.addSourceColumnTo = function addSourceColumnTo(columns, columnIndex) {
    debug('addSourceColumnTo', columns, columnIndex);
    var sourceColumn = this.buildColumnFromSourceData(columnIndex);
    columns.push(sourceColumn);
  };

  Chart.prototype.isHidden = function isHidden(columnIndex) {
    return this.hidden_columns[columnIndex] !== undefined;
  };

  Chart.prototype.restoreColorTo = function restoreColorTo(colors, columnIndex) {
    debug('restoreColorTo', colors, columnIndex);
    debug('hidden_columns', this.hidden_columns);
    var previousColor = void 0;
    if (this.isHidden(columnIndex)) {
      previousColor = this.hidden_columns[columnIndex].color;
      delete this.hidden_columns[columnIndex];
    } else {
      previousColor = this.getColumnColor(columnIndex - 1);
    }
    if (columnIndex !== 0) {
      colors.push(previousColor);
    }
  };
  // eslint-disable-next-line class-methods-use-this


  Chart.prototype.debounce = function debounce(func, wait) {
    var timeout = void 0;
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var context = this;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        return func.apply(context, args);
      }, wait);
    };
  };

  Chart.prototype.togglePoints = function togglePoints(column) {
    debug('togglePoints', column);
    var view = new window.google.visualization.DataView(this.wrapper.getDataTable());
    var columnCount = view.getNumberOfColumns();
    var colors = []; // eslint-disable-line prefer-const
    var columns = []; // eslint-disable-line prefer-const
    for (var i = 0; i < columnCount; i += 1) {
      // If user clicked on legend
      if (i === 0) {
        this.addSourceColumnTo(columns, i);
      } else if (i === column) {
        if (this.isHidden(i)) {
          this.addSourceColumnTo(columns, i);
          this.restoreColorTo(colors, i);
        } else {
          this.addEmptyColumnTo(columns, i);
          this.hideColumn(colors, i);
        }
      } else if (this.isHidden(i)) {
        this.addEmptyColumnTo(columns, i);
        this.hideColumn(colors, i);
      } else {
        this.addSourceColumnTo(columns, i);
        this.restoreColorTo(colors, i);
      }
    }
    view.setColumns(columns);
    this.props.options.colors = colors;
    this.chart.draw(view, this.props.options);
  };

  Chart.prototype.render = function render() {
    debug('render', this.props, this.state);
    var divStyle = {
      height: this.props.height || this.props.options.height,
      width: this.props.width || this.props.options.width
    };
    return _react2.default.createElement(
      'div',
      { id: this.state.graphID, style: divStyle },
      this.props.loader ? this.props.loader : 'Rendering Chart...'
    );
  };

  return Chart;
}(_react2.default.Component);

exports.default = Chart;


process.env.NODE_ENV !== "production" ? Chart.propTypes = {
  graph_id: _react2.default.PropTypes.string,
  chartType: _react2.default.PropTypes.string,
  rows: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.array),
  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.array),
  options: _react2.default.PropTypes.any,
  width: _react2.default.PropTypes.string,
  height: _react2.default.PropTypes.string,
  chartEvents: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    // https://github.com/yannickcr/eslint-plugin-react/issues/819
    eventName: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    callback: _react2.default.PropTypes.func })),
  chartActions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    text: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    action: _react2.default.PropTypes.func })),
  loadCharts: _react2.default.PropTypes.bool,
  loader: _react2.default.PropTypes.node,
  legend_toggle: _react2.default.PropTypes.bool,
  allowEmptyRows: _react2.default.PropTypes.bool,
  chartPackages: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  chartVersion: _react2.default.PropTypes.string,
  numberFormat: _react2.default.PropTypes.shape({
    column: _react2.default.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    options: _react2.default.PropTypes.shape({
      decimalSymbol: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      fractionDigits: _react2.default.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
      groupingSymbol: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      negativeColor: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      negativeParens: _react2.default.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
      pattern: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      prefix: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      suffix: _react2.default.PropTypes.string })
  }),
  dateFormat: _react2.default.PropTypes.shape({
    // eslint-disable-next-line react/no-unused-prop-types
    columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
    options: _react2.default.PropTypes.shape({
      formatType: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      pattern: _react2.default.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      timeZone: _react2.default.PropTypes.number })
  }),
  diffdata: _react2.default.PropTypes.shape({
    on: _react2.default.PropTypes.array, // eslint-disable-line react/no-unused-prop-types
    off: _react2.default.PropTypes.array })
} : void 0;

Chart.defaultProps = {
  chartType: 'LineChart',
  rows: [],
  columns: [],
  options: {
    chart: {
      title: 'Chart Title',
      subtitle: 'Subtitle'
    },
    hAxis: { title: 'X Label' },
    vAxis: { title: 'Y Label' },
    width: '400px',
    height: '300px'
  },
  width: '400px',
  height: '300px',
  chartEvents: [],
  chartActions: null,
  data: null,
  legend_toggle: false,
  allowEmptyRows: false,
  loadCharts: true,
  loader: _react2.default.createElement(
    'div',
    null,
    'Rendering Chart'
  ),
  chartPackages: ['corechart'],
  chartVersion: 'current',
  numberFormat: null,
  dateFormat: null,
  diffdata: null
};
module.exports = exports['default'];
}).call(this,require('_process'))

},{"../constants/DEFAULT_CHART_COLORS":38,"./GoogleChartLoader":37,"_process":35,"debug":14,"react":"react"}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = new _debug2.default('react-google-charts:GoogleChartLoader'); // GoogleChartLoader Singleton

// Based on http://blog.arkency.com/2014/09/react-dot-js-and-google-charts/

var script = typeof window !== 'undefined' ? require('loadjs') : function (link, _ref) {
  var callback = _ref.success;
  return callback();
};

var googleChartLoader = {
  isLoaded: false,
  isLoading: false,
  initPromise: {},
  init: function init(packages, version) {
    var _this = this;

    debug('init', packages, version);
    console.warn({ script: script });
    if (this.isLoading || this.isLoaded) {
      return this.initPromise;
    }
    this.isLoading = true;
    this.initPromise = new Promise(function (resolve) {
      script('https://www.gstatic.com/charts/loader.js', { success: function success() {
          window.google.charts.load(version || 'current', { packages: packages || ['corechart'] });
          window.google.charts.setOnLoadCallback(function () {
            debug('Chart Loaded');
            _this.isLoaded = true;
            _this.isLoading = false;
            resolve();
          });
        } });
    });
    return this.initPromise;
  }
};

exports.default = googleChartLoader;
module.exports = exports['default'];
},{"debug":14,"loadjs":33}],38:[function(require,module,exports){
'use strict';

// Taken from http://there4development.com/blog/2012/05/02/google-chart-color-list/

module.exports = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
},{}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _Chart = require('./components/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Chart: _Chart2.default };
module.exports = exports['default'];
},{"./components/Chart":36}],40:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":35}]},{},[10])

//# sourceMappingURL=bundle.js.map
