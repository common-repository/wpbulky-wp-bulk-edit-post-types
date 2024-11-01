/******/ (() => { // webpackBootstrap
    /******/ 	var __webpack_modules__ = ({

        /***/ "./src/attributes.js":
        /*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   $: () => (/* binding */ $),
                /* harmony export */   Attributes: () => (/* binding */ Attributes),
                /* harmony export */   I18n: () => (/* binding */ I18n)
                /* harmony export */ });
            /* harmony import */ var _custom_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-column */ "./src/custom-column.js");


            Array.prototype.insert = function (index, items) {
                this.splice.apply(this, [index, 0].concat(items));
            };

            const Attributes = {
                ...wpbulkyParams,
                postTypes: {},
                filterKey: Date.now(),
                selectPage: 1,
                ajaxData: {action: 'vi_wpbulky_ajax', vi_wpbulky_nonce: wpbulkyParams.nonce},
                tinyMceOptions: {
                    tinymce: {
                        theme: "modern",
                        skin: "lightgray",
                        language: "en",
                        formats: {
                            alignleft: [
                                {selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign: "left"}},
                                {selector: "img,table,dl.wp-caption", classes: "alignleft"}
                            ],
                            aligncenter: [
                                {selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign: "center"}},
                                {selector: "img,table,dl.wp-caption", classes: "aligncenter"}
                            ],
                            alignright: [
                                {selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign: "right"}},
                                {selector: "img,table,dl.wp-caption", classes: "alignright"}
                            ],
                            strikethrough: {inline: "del"}
                        },
                        relative_urls: false,
                        remove_script_host: false,
                        convert_urls: false,
                        browser_spellcheck: true,
                        fix_list_elements: true,
                        entities: "38,amp,60,lt,62,gt",
                        entity_encoding: "raw",
                        keep_styles: false,
                        cache_suffix: "wp-mce-49110-20201110",
                        resize: "vertical",
                        menubar: false,
                        branding: false,
                        preview_styles: "font-family font-size font-weight font-style text-decoration text-transform",
                        end_container_on_empty_block: true,
                        wpeditimage_html5_captions: true,
                        wp_lang_attr: "en-US",
                        wp_keep_scroll_position: false,
                        wp_shortcut_labels: {
                            "Heading 1": "access1",
                            "Heading 2": "access2",
                            "Heading 3": "access3",
                            "Heading 4": "access4",
                            "Heading 5": "access5",
                            "Heading 6": "access6",
                            "Paragraph": "access7",
                            "Blockquote": "accessQ",
                            "Underline": "metaU",
                            "Strikethrough": "accessD",
                            "Bold": "metaB",
                            "Italic": "metaI",
                            "Code": "accessX",
                            "Align center": "accessC",
                            "Align right": "accessR",
                            "Align left": "accessL",
                            "Justify": "accessJ",
                            "Cut": "metaX",
                            "Copy": "metaC",
                            "Paste": "metaV",
                            "Select all": "metaA",
                            "Undo": "metaZ",
                            "Redo": "metaY",
                            "Bullet list": "accessU",
                            "Numbered list": "accessO",
                            "Insert\/edit image": "accessM",
                            "Insert\/edit link": "metaK",
                            "Remove link": "accessS",
                            "Toolbar Toggle": "accessZ",
                            "Insert Read More tag": "accessT",
                            "Insert Page Break tag": "accessP",
                            "Distraction-free writing mode": "accessW",
                            "Add Media": "accessM",
                            "Keyboard Shortcuts": "accessH"
                        },
                        plugins: "charmap,colorpicker,hr,lists,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview",
                        selector: "#vi-wpbulky-text-editor",
                        wpautop: true,
                        indent: false,
                        toolbar1: "formatselect,bold,italic,bullist,numlist,blockquote,alignleft,aligncenter,alignright,link,wp_more,spellchecker,fullscreen,wp_adv",
                        toolbar2: "strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help",
                        tabfocus_elements: ":prev,:next",
                        body_class: "excerpt post-type-post post-status-publish page-template-default locale-en-us",
                    },
                    mediaButtons: true,
                    quicktags: true
                },
                setColumns(raw) {
                    try {
                        let columns = JSON.parse(raw);
                        Attributes.columns = columns.map((col) => {
                            if (col && col.editor && _custom_column__WEBPACK_IMPORTED_MODULE_0__.customColumn[col.editor]) {
                                col.editor = _custom_column__WEBPACK_IMPORTED_MODULE_0__.customColumn[col.editor];
                                col.editor.options = col.editor_options;
                            }

                            if (col && col.filter && _custom_column__WEBPACK_IMPORTED_MODULE_0__.columnFilter[col.filter]) col.filter = _custom_column__WEBPACK_IMPORTED_MODULE_0__.columnFilter[col.filter];
                            return col;
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            };

            window.Attributes = Attributes;
            const I18n = wpbulkyI18n.i18n;
            const $ = jQuery;


            /***/ }),

        /***/ "./src/calculator.js":
        /*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
            /* harmony import */ var _modal_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-popup */ "./src/modal-popup.js");




            class Calculator {
                constructor(obj, x, y, e) {
                    this._data = {};
                    this._data.jexcel = obj;
                    this._data.x = parseInt(x);
                    this._data.y = parseInt(y);
                    this.run();
                }

                get(id) {
                    return this._data[id] || ''
                }

                run() {
                    let formulaHtml = this.content();
                    let cell = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`td[data-x=${this.get('x') || 0}][data-y=${this.get('y') || 0}]`);
                    new _modal_popup__WEBPACK_IMPORTED_MODULE_2__.Popup(formulaHtml, cell);
                    formulaHtml.on('click', '.vi-wpbulky-apply-formula', this.applyFormula.bind(this));
                    formulaHtml.on('change', '.vi-wpbulky-rounded', this.toggleDecimalValue);
                }

                content() {
                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="vi-wpbulky-formula-container" style="display: flex;">
                    <select class="vi-wpbulky-operator">
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input type="number" min="0" class="vi-wpbulky-value">
                    <select class="vi-wpbulky-unit">
                        <option value="fixed">n</option>
                        <option value="percentage">%</option>
                    </select>
                    <select class="vi-wpbulky-rounded">
                        <option value="no_round">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('No round')}</option>
                        <option value="round">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Round with decimal')}</option>
                        <option value="round_up">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Round up')}</option>
                        <option value="round_down">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Round down')}</option>
                    </select>
                    <input type="number" min="0" max="10" class="vi-wpbulky-decimal" value="0">
                    <button type="button" class="vi-ui button mini vi-wpbulky-apply-formula">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('OK')}</button>
                </div>`);
                }

                applyFormula(e) {
                    let form = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).closest('.vi-wpbulky-formula-container'),
                        operator = form.find('.vi-wpbulky-operator').val(),
                        fValue = parseFloat(form.find('.vi-wpbulky-value').val()),
                        unit = form.find('.vi-wpbulky-unit').val(),
                        rounded = form.find('.vi-wpbulky-rounded').val(),
                        decimal = parseInt(form.find('.vi-wpbulky-decimal').val()),
                        excelObj = this.get('jexcel');

                    if (!fValue) return;

                    let breakControl = false, records = [];
                    let h = excelObj.selectedContainer;
                    let start = h[1], end = h[3], x = h[0];

                    function formula(oldValue) {
                        oldValue = parseFloat(oldValue);
                        let extraValue = unit === 'percentage' ? oldValue * fValue / 100 : fValue;
                        let newValue = operator === '-' ? oldValue - extraValue : oldValue + extraValue;
                        switch (rounded) {
                            case 'round':
                                newValue = newValue.toFixed(decimal);
                                break;
                            case 'round_up':
                                newValue = Math.ceil(newValue);
                                break;
                            case 'round_down':
                                newValue = Math.floor(newValue);
                                break;
                        }
                        return newValue;
                    }

                    for (let y = start; y <= end; y++) {
                        if (excelObj.records[y][x] && !excelObj.records[y][x].classList.contains('readonly') && excelObj.records[y][x].style.display !== 'none' && breakControl === false) {
                            let value = excelObj.options.data[y][x] || 0;
                            records.push(excelObj.updateCell(x, y, formula(value)));
                            excelObj.updateFormulaChain(x, y, records);
                        }
                    }

                    // Update history
                    excelObj.setHistory({
                        action: 'setValue',
                        records: records,
                        selection: excelObj.selectedCell,
                    });

                    // Update table with custom configuration if applicable
                    excelObj.updateTable();
                }

                toggleDecimalValue() {
                    let form = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).closest('.vi-wpbulky-formula-container');
                    form.find('.vi-wpbulky-decimal').hide();
                    if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).val() === 'round') form.find('.vi-wpbulky-decimal').show();
                }
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

            /***/ }),

        /***/ "./src/custom-column.js":
        /*!******************************!*\
  !*** ./src/custom-column.js ***!
  \******************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   columnFilter: () => (/* binding */ columnFilter),
                /* harmony export */   customColumn: () => (/* binding */ customColumn)
                /* harmony export */ });
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");



            const customColumn = {};
            const columnFilter = {};

            jQuery(document).ready(function ($) {
                window.viIsEditing = false;

                const mediaMultiple = wp.media({multiple: true});
                const mediaSingle = wp.media({multiple: false});

                const tmpl = {
                    galleryImage(src, id) {
                        return `<li class="vi-wpbulky-gallery-image" data-id="${id}"><i class="vi-wpbulky-remove-image dashicons dashicons-no-alt"> </i><img src="${src}"></li>`;
                    },

                    fileDownload($_file = {}) {
                        let {id, name, file} = $_file;
                        let row = $(`<tr>
                        <td><i class="bars icon"></i><input type="text" class="vi-wpbulky-file-name" value="${name || ''}"></td>
                        <td>
                            <input type="text" class="vi-wpbulky-file-url" value="${file || ''}">
                            <input type="hidden" class="vi-wpbulky-file-hash" value="${id || ''}">
                            <span class="vi-ui button mini vi-wpbulky-choose-file">${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Choose file')}</span>
                            <i class="vi-wpbulky-remove-file dashicons dashicons-no-alt"> </i>
                        </td>
                    </tr>`);

                        row.on('click', '.vi-wpbulky-remove-file', function () {
                            row.remove();
                        });

                        return row;
                    }
                };

                customColumn.textEditor = {

                    createCell(cell, i, value, obj) {
                        cell.innerHTML = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].stripHtml(value).slice(0, 50);
                        return cell;
                    },

                    closeEditor(cell, save) {
                        window.viIsEditing = false;
                        let content = '';
                        if (save === true) {
                            content = wp.editor.getContent('vi-wpbulky-text-editor');

                            if (!this.isEditing) {
                                wp.editor.remove('vi-wpbulky-text-editor');
                            }
                            this.isEditing = false;
                        }else {
                            wp.editor.remove('vi-wpbulky-text-editor');
                        }

                        $( "#vi-wpbulky-text-editor" ).val("");

                        return content;
                    },

                    openEditor(cell, el, obj) {
                        window.viIsEditing = true;
                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x'),
                            content = obj.options.data[y][x],
                            $this = this;

                        $('.vi-ui.modal').modal('show');
                        this.tinymceInit(content);

                        $('.vi-wpbulky-text-editor-save').off('click').on('click', function () {
                            $(this).removeClass('primary');
                            if ($(this).hasClass('vi-wpbulky-close')) {
                                $('.vi-ui.modal').modal('hide');
                            } else {
                                $this.isEditing = true;
                            }
                            obj.closeEditor(cell, true);
                        });

                        $('.vi-ui.modal .close.icon').off('click').on('click', function () {
                            obj.closeEditor(cell, true);
                        });

                        let modal = $('.vi-ui.modal').parent();
                        modal.on('click', function (e) {
                            if (e.target === e.delegateTarget) {
                                obj.closeEditor(cell, false);
                            }
                        })
                    },

                    updateCell(cell, value, force) {
                        let editorValue = wp.editor.getContent('vi-wpbulky-text-editor');
                        if ( editorValue.trim().length > 0 ) {
                            value = editorValue;
                        }
                        cell.innerHTML = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].stripHtml(value).slice(0, 50);
                        return value;
                    },

                    tinymceInit(content = '') {
                        content = wp.editor.autop(content);
                        if (tinymce.get('vi-wpbulky-text-editor') === null) {
                            $('#vi-wpbulky-text-editor').val(content);

                            _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.tinyMceOptions.tinymce.setup = function (editor) {
                                editor.on('keyup', function (e) {
                                    $('.vi-wpbulky-text-editor-save:not(.vi-wpbulky-close)').addClass('primary');
                                });
                            };

                            wp.editor.initialize('vi-wpbulky-text-editor', _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.tinyMceOptions);

                        }

                        tinymce.get('vi-wpbulky-text-editor').setContent(content)
                    },
                };

                customColumn.image = {
                    createCell(cell, i, value, obj) {
                        if (value) {
                            let url = _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[value];
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(url) ? $(cell).html(`<img width="40" src="${url}" data-id="${value}">`) : $(cell).html('');
                        }
                        return cell;
                    },

                    closeEditor(cell, save) {
                        return $(cell).find('img').data('id') || '';
                    },

                    openEditor(cell, el, obj) {
                        mediaSingle.open().off('select').on('select', function (e) {
                            let uploadedImages = mediaSingle.state().get('selection').first();
                            let selectedImages = uploadedImages.toJSON();
                            if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(selectedImages.url)) {
                                $(cell).html(`<img width="40" src="${selectedImages.url}" data-id="${selectedImages.id}">`);
                                _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[selectedImages.id] = selectedImages.url;
                                obj.closeEditor(cell, true);
                            }
                        });
                    },

                    updateCell(cell, value, force) {
                        value = parseInt(value) || '';
                        let url = _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[value];
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(url) ? $(cell).html(`<img width="40" src="${url}" data-id="${value}">`) : $(cell).html('');
                        return value;
                    },
                };

                customColumn.imageurl = {
                    createCell(cell, i, value, obj) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(value) ? $(cell).html(`<img width="40" src="${value}" >`) : $(cell).html('');

                        return cell;
                    },

                    closeEditor(cell, save) {
                        return $(cell).find('img').attr('src') || '';
                    },

                    openEditor(cell, el, obj) {
                        mediaSingle.open().off('select').on('select', function (e) {
                            let uploadedImages = mediaSingle.state().get('selection').first();
                            let selectedImages = uploadedImages.toJSON();
                            if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(selectedImages.url)) {
                                $(cell).html(`<img width="40" src="${selectedImages.url}">`);
                                obj.closeEditor(cell, true);
                            }
                        });
                    },

                    updateCell(cell, value, force) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].isUrl(value) ? $(cell).html(`<img width="40" src="${value}" >`) : $(cell).html('');
                        return value;
                    },
                };

                customColumn.gallery = {
                    saveData(cell) {
                        let newIds = [];
                        $(cell).find('.vi-wpbulky-gallery-image').each(function () {
                            newIds.push($(this).data('id'));
                        });
                        $(cell).find('.vi-wpbulky-ids-list').val(newIds.join(','));
                    },

                    createCell(cell, i, value) {
                        let hasItem = value.length ? 'vi-wpbulky-gallery-has-item' : '';
                        $(cell).html(`<div class="vi-wpbulky-gallery ${hasItem}"><i class="images outline icon"> </i></div>`);
                        return cell;
                    },

                    closeEditor(cell, save) {
                        let selected = [];
                        if (save) {
                            let child = $(cell).children();
                            child.find('.vi-wpbulky-gallery-image').each(function () {
                                selected.push($(this).data('id'));
                            });

                            $(cell).find('.vi-wpbulky-cell-popup').remove();
                        }
                        return selected;
                    },

                    openEditor(cell, el, obj) {
                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x');

                        let ids = obj.options.data[y][x],
                            editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'div'),
                            images = '', cacheEdition;

                        if (ids.length) {
                            for (let id of ids) {
                                let src = _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[id];
                                images += tmpl.galleryImage(src, id);
                            }
                        }

                        let galleryPopup = $(`<div class="vi-wpbulky-cell-popup-inner">
                                    <ul class="vi-wpbulky-gallery-images">${images}</ul>
                                    <span class="vi-ui button tiny vi-wpbulky-add-image">${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Add image')}</span>
                                    <span class="vi-ui button tiny vi-wpbulky-remove-gallery">${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Remove all')}</span>
                                </div>`);

                        $(editor).append(galleryPopup);

                        galleryPopup.find('.vi-wpbulky-gallery-images').sortable({
                            items: 'li.vi-wpbulky-gallery-image',
                            cursor: 'move',
                            scrollSensitivity: 40,
                            forcePlaceholderSize: true,
                            forceHelperSize: false,
                            helper: 'clone',
                            placeholder: 'vi-wpbulky-sortable-placeholder',
                            tolerance: "pointer",
                        });

                        galleryPopup.on('click', '.vi-wpbulky-remove-image', function () {
                            $(this).parent().remove();
                        });

                        galleryPopup.on('click', '.vi-wpbulky-add-image', function () {
                            mediaMultiple.open().off('select close')
                                .on('select', function (e) {
                                    var selection = mediaMultiple.state().get('selection');
                                    selection.each(function (attachment) {
                                        attachment = attachment.toJSON();
                                        if (attachment.type === 'image') {
                                            _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[attachment.id] = attachment.url;
                                            galleryPopup.find('.vi-wpbulky-gallery-images').append(tmpl.galleryImage(attachment.url, attachment.id));
                                        }
                                    });
                                });
                        });

                        galleryPopup.on('click', '.vi-wpbulky-remove-gallery', function () {
                            galleryPopup.find('.vi-wpbulky-gallery-images').empty();
                        });

                        if (ids.length === 0) {
                            galleryPopup.find('.vi-wpbulky-add-image').trigger('click');
                        }
                    },

                    updateCell(cell, value, force) {
                        let icon = $(cell).find('.vi-wpbulky-gallery');
                        value.length ? icon.addClass('vi-wpbulky-gallery-has-item') : icon.removeClass('vi-wpbulky-gallery-has-item');
                        return value;
                    },
                };

                customColumn.download = {
                    createCell(cell, i, value) {
                        $(cell).html(`<div><i class="download icon"> </i></div>`);
                        return cell;
                    },

                    closeEditor(cell, save) {
                        let data = [];
                        if (save) {
                            let child = $(cell).children();
                            child.find('table.vi-wpbulky-files-download tbody tr').each(function () {
                                let row = $(this);
                                data.push({
                                    id: row.find('.vi-wpbulky-file-hash').val(),
                                    file: row.find('.vi-wpbulky-file-url').val(),
                                    name: row.find('.vi-wpbulky-file-name').val()
                                });
                            });

                            child.remove();
                        }
                        return data;
                    },

                    openEditor(cell, el, obj) {

                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x');

                        let files = obj.options.data[y][x],
                            editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'div'),
                            cacheEdition, tbody = $('<tbody></tbody>');

                        if (Array.isArray(files)) {
                            for (let file of files) {
                                tbody.append(tmpl.fileDownload(file));
                            }
                        }

                        let fileDownloadPopup = $(`<div class="">
                                        <table class="vi-wpbulky-files-download vi-ui celled table">
                                            <thead>
                                            <tr>
                                                <th>${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Name')}</th>
                                                <th>${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('File URL')}</th>
                                            </tr>
                                            </thead>
                                        </table>
                                        <span class="vi-ui button tiny vi-wpbulky-add-file">${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Add file')}</span>
                                    </div>`);

                        fileDownloadPopup.find('.vi-wpbulky-files-download').append(tbody);

                        $(editor).append(fileDownloadPopup);

                        tbody.sortable();

                        fileDownloadPopup.on('click', '.vi-wpbulky-add-file', () => fileDownloadPopup.find('.vi-wpbulky-files-download tbody').append(tmpl.fileDownload()));

                        fileDownloadPopup.on('click', '.vi-wpbulky-choose-file', function () {
                            cacheEdition = obj.edition;
                            obj.edition = null;
                            let row = $(this).closest('tr');

                            mediaSingle.open().off('select close')
                                .on('select', function (e) {
                                    let selected = mediaSingle.state().get('selection').first().toJSON();
                                    if (selected.url) row.find('.vi-wpbulky-file-url').val(selected.url).trigger('change');
                                })
                                .on('close', () => obj.edition = cacheEdition);
                        });

                        if (!files.length) {
                            fileDownloadPopup.find('.vi-wpbulky-add-file').trigger('click');
                        }
                    },

                    updateCell(cell, value, force) {
                        $(cell).html(`<div><i class="download icon"> </i></div>`);
                        return value;
                    },
                };

                customColumn.link_posts = {
                    createCell(cell, i, value, obj) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, value);
                        return cell;
                    },

                    closeEditor(cell, save) {
                        let child = $(cell).children(), selected = [];

                        if (save) {
                            let data = child.find('select').select2('data');

                            if (data.length) {
                                for (let item of data) {
                                    selected.push({id: item.id, text: item.text})
                                }
                            }
                        }

                        child.remove();
                        $('.select2-container').remove();
                        return selected;
                    },

                    openEditor(cell, el, obj) {
                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x');

                        let value = obj.options.data[y][x],
                            editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'div'),
                            select = $('<select/>');

                        $(editor).append(select);

                        select.select2({
                            data: value,
                            multiple: true,
                            minimumInputLength: 3,
                            placeholder: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Search posts...'),
                            ajax: {
                                url: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxUrl,
                                type: 'post',
                                delay: 250,
                                dataType: 'json',
                                data: function (params) {
                                    return {
                                        ..._attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxData,
                                        sub_action: 'search_posts',
                                        search: params.term,
                                        type: 'public'
                                    };
                                },
                                processResults: function (data) {
                                    var terms = [];
                                    if (data) {
                                        $.each(data, function (id, text) {
                                            terms.push({id: id, text: text});
                                        });
                                    }
                                    return {
                                        results: terms
                                    };
                                }
                            }
                        });

                        select.find('option').attr('selected', true).parent().trigger('change');
                        $(editor).find('.select2-search__field').trigger('click');
                    },

                    updateCell(cell, value, force, obj, x) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, value);
                        return value;
                    }
                };

                customColumn.array = {
                    createCell(cell, i, value, obj) {
                        $(cell).html('<i class="icon edit"/>');
                        return cell;
                    },

                    closeEditor(cell, save) {
                        let metadata = [];
                        if (save === true) {
                            metadata = this.editor.get();
                        }

                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeModal(cell);

                        return metadata;
                    },

                    openEditor(cell, el, obj) {
                        let data = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromCell(obj, cell);
                        let modal = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createModal({
                            header: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Edit metadata'),
                            content: '',
                            actions: [{class: 'save-metadata', text: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Save')}],
                        });

                        $(cell).append(modal);
                        modal.find('.content').html('<div id="vi-wpbulky-jsoneditor"></div>');
                        let container = modal.find('#vi-wpbulky-jsoneditor').get(0);
                        this.editor = new JSONEditor(container, {enableSort: false, search: false, enableTransform: false});
                        this.editor.set(data);

                        modal.on('click', function (e) {
                            let thisTarget = $(e.target);
                            if (thisTarget.hasClass('close') || thisTarget.hasClass('vi-wpbulky-modal-container')) obj.closeEditor(cell, false);
                            if (thisTarget.hasClass('save-metadata')) obj.closeEditor(cell, true);
                        });
                    },

                    updateCell(cell, value, force) {
                        return value;
                    },
                };

                customColumn.select2 = {
                    type: 'select2',

                    createCell(cell, i, value, obj) {
                        let {source} = obj.options.columns[i], newValue = [];
                        if (!Array.isArray(value)) value = Object.values(value);
                        if (Array.isArray(source) && source.length) newValue = source.filter(item => value.includes(item.id));
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, newValue);
                        return cell;
                    },

                    openEditor(cell, el, obj) {
                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x');
                        let value = obj.options.data[y][x],
                            select = $('<select/>'),
                            {source, multiple, placeholder} = obj.options.columns[x],
                            editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'div', select);

                        select.select2({
                            data: source || [],
                            multiple: multiple,
                            placeholder: placeholder,
                        });

                        select.val(value).trigger('change');
                        $(editor).find('.select2-search__field').trigger('click');
                    },

                    closeEditor(cell, save) {
                        let child = $(cell).children(),
                            data = child.find('select').val();

                        data = data.map(item => !isNaN(item) ? +item : item);

                        child.remove();
                        $('.select2-container').remove();

                        return data;
                    },

                    updateCell(cell, value, force, obj, x) {
                        let {source} = obj.options.columns[x], newValue = [];

                        if (Array.isArray(source) && source.length) newValue = source.filter(item => value.includes(item.id));

                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, newValue);

                        return value;
                    }
                };


                customColumn.ajax_search = {
                    type: 'ajax_search',

                    createCell(cell, i, value, obj) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, value);
                        return cell;
                    },

                    openEditor(cell, el, obj) {
                        let y = cell.getAttribute('data-y'),
                            x = cell.getAttribute('data-x'),
                            {taxonomy} = this.options;

                        let value = obj.options.data[y][x],
                            select = $('<select/>'),
                            editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'div', select);

                        select.select2({
                            data: value,
                            multiple: true,
                            minimumInputLength: 3,
                            placeholder: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Search ...'),
                            ajax: {
                                url: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxUrl,
                                type: 'POST',
                                data: function (params) {
                                    return {
                                        ..._attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxData,
                                        sub_action: 'ajax_search',
                                        taxonomy: taxonomy,
                                        search: params.term,
                                        post_type: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.postType,
                                    };
                                },
                                processResults: function (data) {
                                    return {results: data};
                                }
                            }
                        });

                        select.find('option').attr('selected', true).parent().trigger('change');

                        $(editor).find('.select2-search__field').trigger('click');
                    },

                    closeEditor(cell, save) {
                        let child = $(cell).children(),
                            data = child.find('select').select2('data'),
                            selected = [];

                        if (data.length) {
                            for (let item of data) {
                                selected.push({id: item.id, text: item.text})
                            }
                        }
                        child.remove();
                        $('.select2-container').remove();
                        return selected;
                    },

                    updateCell(cell, value, force, obj, x) {
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].formatText(cell, value);
                        return value;
                    }
                };

//--------------------------------------------------------------------//
                columnFilter.sourceForVariation = (el, cell, x, y, obj) => {
                    let source = obj.options.columns[x].source;
                    let postType = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getPostTypeFromCell(cell);
                    if (postType === 'variation') {
                        source = obj.options.columns[x].subSource;
                    }
                    return source;
                };


            });



            /***/ }),

        /***/ "./src/find-and-replace.js":
        /*!*********************************!*\
  !*** ./src/find-and-replace.js ***!
  \*********************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (/* binding */ FindAndReplace)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
            /* harmony import */ var _modal_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-popup */ "./src/modal-popup.js");




            class FindAndReplace {
                constructor(obj, x, y, e) {
                    this._data = {};
                    this._data.jexcel = obj;
                    this._data.x = parseInt(x);
                    this._data.y = parseInt(y);
                    this.run();
                }

                get(id) {
                    return this._data[id] || '';
                }

                run() {
                    let formulaHtml = this.content();
                    let cell = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`td[data-x=${this.get('x') || 0}][data-y=${this.get('y') || 0}]`);
                    new _modal_popup__WEBPACK_IMPORTED_MODULE_2__.Popup(formulaHtml, cell);
                    formulaHtml.on('click', '.vi-wpbulky-apply-formula', this.applyFormula.bind(this));
                }

                content() {
                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="vi-wpbulky-formula-container">
                    <div class="field">
                        <input type="text" placeholder="${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Find')}" class="vi-wpbulky-find-string">
                    </div>
                    <div class="field">
                        <input type="text" placeholder="${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Replace')}" class="vi-wpbulky-replace-string">
                    </div>
                    <button type="button" class="vi-ui button mini vi-wpbulky-apply-formula">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Replace')}</button>
                </div>`);
                }

                applyFormula(e) {
                    let form = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).closest('.vi-wpbulky-formula-container'),
                        findString = form.find('.vi-wpbulky-find-string').val(),
                        replaceString = form.find('.vi-wpbulky-replace-string').val(),
                        excelObj = this.get('jexcel');

                    if (!findString) return;

                    let breakControl = false, records = [];
                    let h = excelObj.selectedContainer;
                    let start = h[1], end = h[3], x = h[0];

                    for (let y = start; y <= end; y++) {
                        if (excelObj.records[y][x] && !excelObj.records[y][x].classList.contains('readonly') && excelObj.records[y][x].style.display !== 'none' && breakControl === false) {
                            let value = excelObj.options.data[y][x];
                            let newValue = value.replaceAll(findString, replaceString);
                            records.push(excelObj.updateCell(x, y, newValue));
                            excelObj.updateFormulaChain(x, y, records);
                        }
                    }

                    // Update history
                    excelObj.setHistory({
                        action: 'setValue',
                        records: records,
                        selection: excelObj.selectedCell,
                    });

                    // Update table with custom configuration if applicable
                    excelObj.updateTable();
                }

            }

            /***/ }),

        /***/ "./src/functions.js":
        /*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
            /* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/templates.js");



            const _f = {
                setJexcel(obj) {
                    this.jexcel = obj;
                },

                text(key) {
                    return _attributes__WEBPACK_IMPORTED_MODULE_0__.I18n[key] || key;
                },

                isUrl: (url) => {
                    return /^(http(s?):)\/\/.*\.(?:jpg|gif|png)$/i.test(url);
                },

                formatText(cell, value) {
                    let text = '';
                    if (value.length) {
                        for (let k = 0; k < value.length; k++) {
                            if (value[k]) text += value[k].text + '; ';
                        }
                    }
                    cell.innerText = text;
                },

                createEditor(cell, type, content = '', display = true) {
                    let editor = document.createElement(type);

                    if (type === 'div') {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).append(content);
                    }

                    editor.style.minWidth = '300px';

                    let popupHeight = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).innerHeight(),
                        stage = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(cell).offset(),
                        x = stage.left,
                        y = stage.top,
                        cellWidth = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(cell).innerWidth(),
                        info = cell.getBoundingClientRect();

                    if (display) {
                        editor.style.minHeight = (info.height - 2) + 'px';
                        editor.style.maxHeight = (window.innerHeight - y - 50) + 'px';
                    } else {
                        editor.style.opacity = 0;
                        editor.style.fontSize = 0;
                    }

                    editor.classList.add('vi-ui', 'segment', 'vi-wpbulky-cell-popup', 'vi-wpbulky-editing');
                    cell.classList.add('editor');
                    cell.appendChild(editor);

                    let popupWidth = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).innerWidth();

                    if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this.jexcel.el).innerWidth() < x + popupWidth + cellWidth) {
                        let left = x - popupWidth > 0 ? x - popupWidth : 10;
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).css('left', left + 'px');
                    } else {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).css('left', (x + cellWidth) + 'px');
                    }

                    if (window.innerHeight < y + popupHeight) {
                        let h = y - popupHeight < 0 ? 0 : y - popupHeight;
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).css('top', h + 'px');
                    } else {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(editor).css('top', y + 'px');
                    }

                    return editor;
                },

                createModal(data = {}) {
                    let {actions} = data;
                    let actionsHtml = '';

                    if (Array.isArray(actions)) {
                        for (let item of actions) {
                            actionsHtml += `<span class="${item.class} vi-ui button tiny">${item.text}</span>`;
                        }
                    }

                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(_templates__WEBPACK_IMPORTED_MODULE_1__["default"].modal({...data, actionsHtml}));
                },

                removeModal(cell) {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(cell).find('.vi-wpbulky-modal-container').remove();
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.select2-container--open').remove();
                },

                getColFromColumnType(colType) {
                    return _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.idMappingFlip[colType] || '';
                },

                getPostTypeFromCell(cell) {
                    let y = cell.getAttribute('data-y');
                    let x = this.getColFromColumnType('post_type');
                    return this.jexcel.options.data[y][x];
                },

                getPostTypeFromY(y) {
                    let x = this.getColFromColumnType('post_type');
                    return this.jexcel.options.data[y][x];
                },

                getColumnType(x) {
                    return _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.idMapping[x]
                },

                stripHtml(content) {
                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div>${content}</div>`).text();
                },

                getDataFromCell(obj, cell) {
                    let y = cell.getAttribute('data-y'),
                        x = cell.getAttribute('data-x');
                    return obj.options.data[y][x];
                },

                getPostIdOfCell(obj, target) {
                    if (typeof target === 'object') {
                        let y = target.getAttribute('data-y');
                        return obj.options.data[y][0];
                    } else {
                        return obj.options.data[target][0];
                    }
                },

                ajax(args = {}) {
                    let options = Object.assign({
                        url: wpbulkyParams.ajaxUrl,
                        type: 'post',
                        dataType: 'json',
                    }, args);

                    options.data.action = 'vi_wpbulky_ajax';
                    options.data.vi_wpbulky_nonce = wpbulkyParams.nonce;
                    options.data.post_type = wpbulkyParams.postType;

                    _attributes__WEBPACK_IMPORTED_MODULE_0__.$.ajax(options);

                },

                pagination(maxPage, currentPage) {
                    currentPage = parseInt(currentPage);
                    maxPage = parseInt(maxPage);
                    let pagination = '',
                        previousArrow = `<a class="item ${currentPage === 1 ? 'disabled' : ''}" data-page="${currentPage - 1}"><i class="icon angle left"> </i></a>`,
                        nextArrow = `<a class="item ${currentPage === maxPage ? 'disabled' : ''}" data-page="${currentPage + 1}"><i class="icon angle right"> </i></a>`,
                        goToPage = `<input type="number" class="vi-wpbulky-go-to-page" value="${currentPage}" min="1" max="${maxPage}"/>`;

                    for (let i = 1; i <= maxPage; i++) {
                        if ([1, currentPage - 1, currentPage, currentPage + 1, maxPage].includes(i)) {
                            pagination += `<a class="item ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</a>`;
                        }
                        if (i === currentPage - 2 && currentPage - 2 > 1) pagination += `<a class="item disabled">...</a>`;
                        if (i === currentPage + 2 && currentPage + 2 < maxPage) pagination += `<a class="item disabled">...</a>`;
                    }

                    return `<div class="vi-ui pagination menu">${previousArrow} ${pagination} ${nextArrow} </div> ${goToPage}`;
                },

                spinner() {
                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('<span class="vi-wpbulky-spinner"><span class="vi-wpbulky-spinner-inner"> </span></span>')
                },

                is_loading() {
                    return !!this._spinner;
                },

                loading() {
                    this._spinner = this.spinner();
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-menu-bar-center').html(this._spinner);
                },

                removeLoading() {
                    this._spinner = null;
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-menu-bar-center').html('');
                },

                notice(text, color = 'black') {
                    let content = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="vi-wpbulky-notice" style="color:${color}">${text}</div>`);
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-menu-bar-center').html(content);
                    setTimeout(function () {
                        content.remove();
                    }, 5000);
                },

                showMessage({title = '', message = '', type = 'positive', duration = 3000}) {
                    const main = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)( "#vi-wpbulky-container" ).find( "#vi-hui-toast" );
                    if ( main.get(0) ) {
                        const toast = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)( "<div></div>" );
                        const autoRemoveToast = setTimeout( function () {
                            main.find( ".vi-ui.message" ).remove();
                        }, duration + 1000 );

                        toast.on( "click", ".icon.close", function (e) {
                            main.find( ".vi-ui.message" ).remove();
                            clearTimeout( autoRemoveToast );
                        } );

                        if ( main.children().length > 0 ) {
                            main.find( ".vi-hui-toast" ).first().remove();
                            clearTimeout( autoRemoveToast );
                        }
                        const delay = (duration / 1000).toFixed(2);

                        if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('html').attr('dir') === 'rtl') {
                            toast.css( { "animation": `slideInRight ease .3s, fadeOut linear 1s ${delay}s forwards` } );
                        } else {
                            toast.css( { "animation": `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards` } );
                        }

                        toast.addClass( `vi-ui ${type} message` );
                        toast.html(
                            `<i class="close icon"></i>
                          <div class="header">
                            ${title}
                          </div>
                          <p>${message}</p>`
                        );

                        if ( main.children().length > 0 ) {
                            let firstEleType = main.find( ".vi-ui.message" ).first().attr( "class" ).split(/\s+/)[1];
                            if ( type !== firstEleType ) {
                                main.append( toast );
                            }
                        }else {
                            main.append( toast );
                        }
                    }
                }
            };

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_f);

            /***/ }),

        /***/ "./src/modal-popup.js":
        /*!****************************!*\
  !*** ./src/modal-popup.js ***!
  \****************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   Modal: () => (/* binding */ Modal),
                /* harmony export */   Popup: () => (/* binding */ Popup)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");


            class Modal {
                constructor() {

                }
            }

            let popupInstance = null;

            class Popup {
                constructor(content, cell) {
                    if (!popupInstance) {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('body').on('mousedown keydown', this.mousedown);
                    }

                    popupInstance = this;

                    return this.render(content, (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(cell));
                }

                mousedown(e) {
                    let thisTarget = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target),
                        popup = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-context-popup');

                    if (e.which===27 || !thisTarget.hasClass('vi-wpbulky-context-popup') && thisTarget.closest('.vi-wpbulky-context-popup').length === 0 && popup.hasClass('vi-wpbulky-popup-active')) {
                        popup.empty().removeClass('vi-wpbulky-popup-active');
                    }
                }

                render(content, cell) {
                    let popup = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-context-popup'),
                        popupWidth = popup.innerWidth(),
                        popupHeight = popup.innerHeight(),
                        stage = cell.offset(),
                        x = stage.left, y = stage.top,
                        cellWidth = cell.innerWidth();

                    if (window.innerWidth < x + popupWidth + cellWidth) {
                        let left = x - popupWidth > 0 ? x - popupWidth : 10;
                        popup.css('left', left + 'px');
                    } else {
                        popup.css('left', (x + cellWidth) + 'px');
                    }

                    if (window.innerHeight < y + popupHeight) {
                        let h = y - popupHeight < 0 ? 0 : y - popupHeight;
                        popup.css('top', h + 'px');
                    } else {
                        popup.css('top', y + 'px');
                    }

                    popup.empty();
                    popup.addClass('vi-wpbulky-popup-active').html(content);
                }
            }



            /***/ }),

        /***/ "./src/purify.js":
        /*!***********************!*\
  !*** ./src/purify.js ***!
  \***********************/
        /***/ (function(module) {

            /*! @license DOMPurify 3.0.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.2/LICENSE */

            (function (global, factory) {
                true ? module.exports = factory() :
                    0;
            })(this, (function () { 'use strict';

                const {
                    entries,
                    setPrototypeOf,
                    isFrozen,
                    getPrototypeOf,
                    getOwnPropertyDescriptor
                } = Object;
                let {
                    freeze,
                    seal,
                    create
                } = Object; // eslint-disable-line import/no-mutable-exports

                let {
                    apply,
                    construct
                } = typeof Reflect !== 'undefined' && Reflect;

                if (!apply) {
                    apply = function apply(fun, thisValue, args) {
                        return fun.apply(thisValue, args);
                    };
                }

                if (!freeze) {
                    freeze = function freeze(x) {
                        return x;
                    };
                }

                if (!seal) {
                    seal = function seal(x) {
                        return x;
                    };
                }

                if (!construct) {
                    construct = function construct(Func, args) {
                        return new Func(...args);
                    };
                }

                const arrayForEach = unapply(Array.prototype.forEach);
                const arrayPop = unapply(Array.prototype.pop);
                const arrayPush = unapply(Array.prototype.push);
                const stringToLowerCase = unapply(String.prototype.toLowerCase);
                const stringToString = unapply(String.prototype.toString);
                const stringMatch = unapply(String.prototype.match);
                const stringReplace = unapply(String.prototype.replace);
                const stringIndexOf = unapply(String.prototype.indexOf);
                const stringTrim = unapply(String.prototype.trim);
                const regExpTest = unapply(RegExp.prototype.test);
                const typeErrorCreate = unconstruct(TypeError);
                function unapply(func) {
                    return function (thisArg) {
                        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }

                        return apply(func, thisArg, args);
                    };
                }
                function unconstruct(func) {
                    return function () {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            args[_key2] = arguments[_key2];
                        }

                        return construct(func, args);
                    };
                }
                /* Add properties to a lookup table */

                function addToSet(set, array, transformCaseFunc) {
                    transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

                    if (setPrototypeOf) {
                        // Make 'in' and truthy checks like Boolean(set.constructor)
                        // independent of any properties defined on Object.prototype.
                        // Prevent prototype setters from intercepting set as a this value.
                        setPrototypeOf(set, null);
                    }

                    let l = array.length;

                    while (l--) {
                        let element = array[l];

                        if (typeof element === 'string') {
                            const lcElement = transformCaseFunc(element);

                            if (lcElement !== element) {
                                // Config presets (e.g. tags.js, attrs.js) are immutable.
                                if (!isFrozen(array)) {
                                    array[l] = lcElement;
                                }

                                element = lcElement;
                            }
                        }

                        set[element] = true;
                    }

                    return set;
                }
                /* Shallow clone an object */

                function clone(object) {
                    const newObject = create(null);

                    for (const [property, value] of entries(object)) {
                        newObject[property] = value;
                    }

                    return newObject;
                }
                /* This method automatically checks if the prop is function
   * or getter and behaves accordingly. */

                function lookupGetter(object, prop) {
                    while (object !== null) {
                        const desc = getOwnPropertyDescriptor(object, prop);

                        if (desc) {
                            if (desc.get) {
                                return unapply(desc.get);
                            }

                            if (typeof desc.value === 'function') {
                                return unapply(desc.value);
                            }
                        }

                        object = getPrototypeOf(object);
                    }

                    function fallbackValue(element) {
                        console.warn('fallback value for', element);
                        return null;
                    }

                    return fallbackValue;
                }

                const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

                const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
                const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
                // We still need to know them so that we can do namespace
                // checks properly in case one wants to add them to
                // allow-list.

                const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
                const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']); // Similarly to SVG, we want to know all MathML elements,
                // even those that we disallow by default.

                const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
                const text = freeze(['#text']);

                const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
                const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
                const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
                const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

                const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

                const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
                const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
                const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

                const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

                const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
                );
                const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
                const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
                );
                const DOCTYPE_NAME = seal(/^html$/i);

                var EXPRESSIONS = /*#__PURE__*/Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: MUSTACHE_EXPR,
                    ERB_EXPR: ERB_EXPR,
                    TMPLIT_EXPR: TMPLIT_EXPR,
                    DATA_ATTR: DATA_ATTR,
                    ARIA_ATTR: ARIA_ATTR,
                    IS_ALLOWED_URI: IS_ALLOWED_URI,
                    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
                    ATTR_WHITESPACE: ATTR_WHITESPACE,
                    DOCTYPE_NAME: DOCTYPE_NAME
                });

                const getGlobal = () => typeof window === 'undefined' ? null : window;
                /**
                 * Creates a no-op policy for internal use only.
                 * Don't export this function outside this module!
                 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
                 * @param {Document} document The document object (to determine policy name suffix)
                 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
                 * are not supported).
                 */


                const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
                    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
                        return null;
                    } // Allow the callers to control the unique policy name
                    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
                    // Policy creation with duplicate names throws in Trusted Types.


                    let suffix = null;
                    const ATTR_NAME = 'data-tt-policy-suffix';

                    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
                        suffix = document.currentScript.getAttribute(ATTR_NAME);
                    }

                    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');

                    try {
                        return trustedTypes.createPolicy(policyName, {
                            createHTML(html) {
                                return html;
                            },

                            createScriptURL(scriptUrl) {
                                return scriptUrl;
                            }

                        });
                    } catch (_) {
                        // Policy creation failed (most likely another DOMPurify script has
                        // already run). Skip creating the policy, as this will only cause errors
                        // if TT are enforced.
                        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
                        return null;
                    }
                };

                function createDOMPurify() {
                    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

                    const DOMPurify = root => createDOMPurify(root);
                    /**
                     * Version label, exposed for easier checks
                     * if DOMPurify is up to date or not
                     */


                    DOMPurify.version = '3.0.2';
                    /**
                     * Array of elements that DOMPurify removed during sanitation.
                     * Empty if nothing was removed.
                     */

                    DOMPurify.removed = [];

                    if (!window || !window.document || window.document.nodeType !== 9) {
                        // Not running in a browser, provide a factory function
                        // so that you can pass your own Window
                        DOMPurify.isSupported = false;
                        return DOMPurify;
                    }

                    const originalDocument = window.document;
                    let {
                        document
                    } = window;
                    const {
                        DocumentFragment,
                        HTMLTemplateElement,
                        Node,
                        Element,
                        NodeFilter,
                        NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
                        HTMLFormElement,
                        DOMParser,
                        trustedTypes
                    } = window;
                    const ElementPrototype = Element.prototype;
                    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
                    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
                    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
                    const getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
                    // new document created via createHTMLDocument. As per the spec
                    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
                    // a new empty registry is used when creating a template contents owner
                    // document, so we use that as our parent document to ensure nothing
                    // is inherited.

                    if (typeof HTMLTemplateElement === 'function') {
                        const template = document.createElement('template');

                        if (template.content && template.content.ownerDocument) {
                            document = template.content.ownerDocument;
                        }
                    }

                    const trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

                    const emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
                    const {
                        implementation,
                        createNodeIterator,
                        createDocumentFragment,
                        getElementsByTagName
                    } = document;
                    const {
                        importNode
                    } = originalDocument;
                    let hooks = {};
                    /**
                     * Expose whether this browser supports running the full DOMPurify.
                     */

                    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined';
                    const {
                        MUSTACHE_EXPR,
                        ERB_EXPR,
                        TMPLIT_EXPR,
                        DATA_ATTR,
                        ARIA_ATTR,
                        IS_SCRIPT_OR_DATA,
                        ATTR_WHITESPACE
                    } = EXPRESSIONS;
                    let {
                        IS_ALLOWED_URI: IS_ALLOWED_URI$1
                    } = EXPRESSIONS;
                    /**
                     * We consider the elements and attributes below to be safe. Ideally
                     * don't add any new ones but feel free to remove unwanted ones.
                     */

                    /* allowed element names */

                    let ALLOWED_TAGS = null;
                    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
                    /* Allowed attribute names */

                    let ALLOWED_ATTR = null;
                    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
                    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

                    let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
                        tagNameCheck: {
                            writable: true,
                            configurable: false,
                            enumerable: true,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: true,
                            configurable: false,
                            enumerable: true,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: true,
                            configurable: false,
                            enumerable: true,
                            value: false
                        }
                    }));
                    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

                    let FORBID_TAGS = null;
                    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

                    let FORBID_ATTR = null;
                    /* Decide if ARIA attributes are okay */

                    let ALLOW_ARIA_ATTR = true;
                    /* Decide if custom data attributes are okay */

                    let ALLOW_DATA_ATTR = true;
                    /* Decide if unknown protocols are okay */

                    let ALLOW_UNKNOWN_PROTOCOLS = false;
                    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

                    let ALLOW_SELF_CLOSE_IN_ATTR = true;
                    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

                    let SAFE_FOR_TEMPLATES = false;
                    /* Decide if document with <html>... should be returned */

                    let WHOLE_DOCUMENT = false;
                    /* Track whether config is already set on this instance of DOMPurify. */

                    let SET_CONFIG = false;
                    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

                    let FORCE_BODY = false;
                    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

                    let RETURN_DOM = false;
                    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

                    let RETURN_DOM_FRAGMENT = false;
                    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

                    let RETURN_TRUSTED_TYPE = false;
                    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

                    let SANITIZE_DOM = true;
                    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

                    let SANITIZE_NAMED_PROPS = false;
                    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
                    /* Keep element content when removing element? */

                    let KEEP_CONTENT = true;
                    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

                    let IN_PLACE = false;
                    /* Allow usage of profiles like html, svg and mathMl */

                    let USE_PROFILES = {};
                    /* Tags to ignore content of when KEEP_CONTENT is true */

                    let FORBID_CONTENTS = null;
                    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
                    /* Tags that are safe for data: URIs */

                    let DATA_URI_TAGS = null;
                    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
                    /* Attributes safe for values like "javascript:" */

                    let URI_SAFE_ATTRIBUTES = null;
                    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
                    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
                    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
                    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
                    /* Document namespace */

                    let NAMESPACE = HTML_NAMESPACE;
                    let IS_EMPTY_INPUT = false;
                    /* Allowed XHTML+XML namespaces */

                    let ALLOWED_NAMESPACES = null;
                    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
                    /* Parsing of strict XHTML documents */

                    let PARSER_MEDIA_TYPE;
                    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
                    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
                    let transformCaseFunc;
                    /* Keep a reference to config to pass to hooks */

                    let CONFIG = null;
                    /* Ideally, do not touch anything below this line */

                    /* ______________________________________________ */

                    const formElement = document.createElement('form');

                    const isRegexOrFunction = function isRegexOrFunction(testValue) {
                        return testValue instanceof RegExp || testValue instanceof Function;
                    };
                    /**
                     * _parseConfig
                     *
                     * @param  {Object} cfg optional config literal
                     */
                        // eslint-disable-next-line complexity


                    const _parseConfig = function _parseConfig(cfg) {
                            if (CONFIG && CONFIG === cfg) {
                                return;
                            }
                            /* Shield configuration object from tampering */


                            if (!cfg || typeof cfg !== 'object') {
                                cfg = {};
                            }
                            /* Shield configuration object from prototype pollution */


                            cfg = clone(cfg);
                            PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
                                SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

                            transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
                            /* Set configuration parameters */

                            ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
                            ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
                            ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
                            URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
                                    cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
                                    transformCaseFunc // eslint-disable-line indent
                                ) // eslint-disable-line indent
                                : DEFAULT_URI_SAFE_ATTRIBUTES;
                            DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
                                    cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
                                    transformCaseFunc // eslint-disable-line indent
                                ) // eslint-disable-line indent
                                : DEFAULT_DATA_URI_TAGS;
                            FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
                            FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
                            FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
                            USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
                            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

                            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

                            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

                            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

                            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

                            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

                            RETURN_DOM = cfg.RETURN_DOM || false; // Default false

                            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

                            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

                            FORCE_BODY = cfg.FORCE_BODY || false; // Default false

                            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

                            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

                            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

                            IN_PLACE = cfg.IN_PLACE || false; // Default false

                            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
                            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
                            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

                            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
                                CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
                            }

                            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
                                CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
                            }

                            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
                                CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
                            }

                            if (SAFE_FOR_TEMPLATES) {
                                ALLOW_DATA_ATTR = false;
                            }

                            if (RETURN_DOM_FRAGMENT) {
                                RETURN_DOM = true;
                            }
                            /* Parse profile info */


                            if (USE_PROFILES) {
                                ALLOWED_TAGS = addToSet({}, [...text]);
                                ALLOWED_ATTR = [];

                                if (USE_PROFILES.html === true) {
                                    addToSet(ALLOWED_TAGS, html$1);
                                    addToSet(ALLOWED_ATTR, html);
                                }

                                if (USE_PROFILES.svg === true) {
                                    addToSet(ALLOWED_TAGS, svg$1);
                                    addToSet(ALLOWED_ATTR, svg);
                                    addToSet(ALLOWED_ATTR, xml);
                                }

                                if (USE_PROFILES.svgFilters === true) {
                                    addToSet(ALLOWED_TAGS, svgFilters);
                                    addToSet(ALLOWED_ATTR, svg);
                                    addToSet(ALLOWED_ATTR, xml);
                                }

                                if (USE_PROFILES.mathMl === true) {
                                    addToSet(ALLOWED_TAGS, mathMl$1);
                                    addToSet(ALLOWED_ATTR, mathMl);
                                    addToSet(ALLOWED_ATTR, xml);
                                }
                            }
                            /* Merge configuration parameters */


                            if (cfg.ADD_TAGS) {
                                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                                    ALLOWED_TAGS = clone(ALLOWED_TAGS);
                                }

                                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
                            }

                            if (cfg.ADD_ATTR) {
                                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                                    ALLOWED_ATTR = clone(ALLOWED_ATTR);
                                }

                                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
                            }

                            if (cfg.ADD_URI_SAFE_ATTR) {
                                addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
                            }

                            if (cfg.FORBID_CONTENTS) {
                                if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                                    FORBID_CONTENTS = clone(FORBID_CONTENTS);
                                }

                                addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
                            }
                            /* Add #text in case KEEP_CONTENT is set to true */


                            if (KEEP_CONTENT) {
                                ALLOWED_TAGS['#text'] = true;
                            }
                            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


                            if (WHOLE_DOCUMENT) {
                                addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
                            }
                            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


                            if (ALLOWED_TAGS.table) {
                                addToSet(ALLOWED_TAGS, ['tbody']);
                                delete FORBID_TAGS.tbody;
                            } // Prevent further manipulation of configuration.
                            // Not available in IE8, Safari 5, etc.


                            if (freeze) {
                                freeze(cfg);
                            }

                            CONFIG = cfg;
                        };

                    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
                    const HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
                    // namespace. We need to specify them explicitly
                    // so that they don't get erroneously deleted from
                    // HTML namespace.

                    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
                    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

                    const ALL_SVG_TAGS = addToSet({}, svg$1);
                    addToSet(ALL_SVG_TAGS, svgFilters);
                    addToSet(ALL_SVG_TAGS, svgDisallowed);
                    const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
                    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
                    /**
                     *
                     *
                     * @param  {Element} element a DOM element whose namespace is being checked
                     * @returns {boolean} Return false if the element has a
                     *  namespace that a spec-compliant parser would never
                     *  return. Return true otherwise.
                     */

                    const _checkValidNamespace = function _checkValidNamespace(element) {
                        let parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
                        // can be null. We just simulate parent in this case.

                        if (!parent || !parent.tagName) {
                            parent = {
                                namespaceURI: NAMESPACE,
                                tagName: 'template'
                            };
                        }

                        const tagName = stringToLowerCase(element.tagName);
                        const parentTagName = stringToLowerCase(parent.tagName);

                        if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
                            return false;
                        }

                        if (element.namespaceURI === SVG_NAMESPACE) {
                            // The only way to switch from HTML namespace to SVG
                            // is via <svg>. If it happens via any other tag, then
                            // it should be killed.
                            if (parent.namespaceURI === HTML_NAMESPACE) {
                                return tagName === 'svg';
                            } // The only way to switch from MathML to SVG is via`
                            // svg if parent is either <annotation-xml> or MathML
                            // text integration points.


                            if (parent.namespaceURI === MATHML_NAMESPACE) {
                                return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
                            } // We only allow elements that are defined in SVG
                            // spec. All others are disallowed in SVG namespace.


                            return Boolean(ALL_SVG_TAGS[tagName]);
                        }

                        if (element.namespaceURI === MATHML_NAMESPACE) {
                            // The only way to switch from HTML namespace to MathML
                            // is via <math>. If it happens via any other tag, then
                            // it should be killed.
                            if (parent.namespaceURI === HTML_NAMESPACE) {
                                return tagName === 'math';
                            } // The only way to switch from SVG to MathML is via
                            // <math> and HTML integration points


                            if (parent.namespaceURI === SVG_NAMESPACE) {
                                return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
                            } // We only allow elements that are defined in MathML
                            // spec. All others are disallowed in MathML namespace.


                            return Boolean(ALL_MATHML_TAGS[tagName]);
                        }

                        if (element.namespaceURI === HTML_NAMESPACE) {
                            // The only way to switch from SVG to HTML is via
                            // HTML integration points, and from MathML to HTML
                            // is via MathML text integration points
                            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                                return false;
                            }

                            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                                return false;
                            } // We disallow tags that are specific for MathML
                            // or SVG and should never appear in HTML namespace


                            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
                        } // For XHTML and XML documents that support custom namespaces


                        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
                            return true;
                        } // The code should never reach this place (this means
                        // that the element somehow got namespace that is not
                        // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
                        // Return false just in case.


                        return false;
                    };
                    /**
                     * _forceRemove
                     *
                     * @param  {Node} node a DOM node
                     */


                    const _forceRemove = function _forceRemove(node) {
                        arrayPush(DOMPurify.removed, {
                            element: node
                        });

                        try {
                            // eslint-disable-next-line unicorn/prefer-dom-node-remove
                            node.parentNode.removeChild(node);
                        } catch (_) {
                            node.remove();
                        }
                    };
                    /**
                     * _removeAttribute
                     *
                     * @param  {String} name an Attribute name
                     * @param  {Node} node a DOM node
                     */


                    const _removeAttribute = function _removeAttribute(name, node) {
                        try {
                            arrayPush(DOMPurify.removed, {
                                attribute: node.getAttributeNode(name),
                                from: node
                            });
                        } catch (_) {
                            arrayPush(DOMPurify.removed, {
                                attribute: null,
                                from: node
                            });
                        }

                        node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

                        if (name === 'is' && !ALLOWED_ATTR[name]) {
                            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                                try {
                                    _forceRemove(node);
                                } catch (_) {}
                            } else {
                                try {
                                    node.setAttribute(name, '');
                                } catch (_) {}
                            }
                        }
                    };
                    /**
                     * _initDocument
                     *
                     * @param  {String} dirty a string of dirty markup
                     * @return {Document} a DOM, filled with the dirty markup
                     */


                    const _initDocument = function _initDocument(dirty) {
                        /* Create a HTML document */
                        let doc;
                        let leadingWhitespace;

                        if (FORCE_BODY) {
                            dirty = '<remove></remove>' + dirty;
                        } else {
                            /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
                            const matches = stringMatch(dirty, /^[\r\n\t ]+/);
                            leadingWhitespace = matches && matches[0];
                        }

                        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
                            // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
                            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
                        }

                        const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
                        /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

                        if (NAMESPACE === HTML_NAMESPACE) {
                            try {
                                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
                            } catch (_) {}
                        }
                        /* Use createHTMLDocument in case DOMParser is not available */


                        if (!doc || !doc.documentElement) {
                            doc = implementation.createDocument(NAMESPACE, 'template', null);

                            try {
                                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
                            } catch (_) {// Syntax error if dirtyPayload is invalid xml
                            }
                        }

                        const body = doc.body || doc.documentElement;

                        if (dirty && leadingWhitespace) {
                            body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
                        }
                        /* Work on whole document or just its body */


                        if (NAMESPACE === HTML_NAMESPACE) {
                            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
                        }

                        return WHOLE_DOCUMENT ? doc.documentElement : body;
                    };
                    /**
                     * _createIterator
                     *
                     * @param  {Document} root document/fragment to create iterator for
                     * @return {Iterator} iterator instance
                     */


                    const _createIterator = function _createIterator(root) {
                        return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
                            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
                    };
                    /**
                     * _isClobbered
                     *
                     * @param  {Node} elm element to check for clobbering attacks
                     * @return {Boolean} true if clobbered, false if safe
                     */


                    const _isClobbered = function _isClobbered(elm) {
                        return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
                    };
                    /**
                     * _isNode
                     *
                     * @param  {Node} obj object to check whether it's a DOM node
                     * @return {Boolean} true is object is a DOM node
                     */


                    const _isNode = function _isNode(object) {
                        return typeof Node === 'object' ? object instanceof Node : object && typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
                    };
                    /**
                     * _executeHook
                     * Execute user configurable hooks
                     *
                     * @param  {String} entryPoint  Name of the hook's entry point
                     * @param  {Node} currentNode node to work on with the hook
                     * @param  {Object} data additional hook parameters
                     */


                    const _executeHook = function _executeHook(entryPoint, currentNode, data) {
                        if (!hooks[entryPoint]) {
                            return;
                        }

                        arrayForEach(hooks[entryPoint], hook => {
                            hook.call(DOMPurify, currentNode, data, CONFIG);
                        });
                    };
                    /**
                     * _sanitizeElements
                     *
                     * @protect nodeName
                     * @protect textContent
                     * @protect removeChild
                     *
                     * @param   {Node} currentNode to check for permission to exist
                     * @return  {Boolean} true if node was killed, false if left alive
                     */


                    const _sanitizeElements = function _sanitizeElements(currentNode) {
                        let content;
                        /* Execute a hook if present */

                        _executeHook('beforeSanitizeElements', currentNode, null);
                        /* Check if element is clobbered or can clobber */


                        if (_isClobbered(currentNode)) {
                            _forceRemove(currentNode);

                            return true;
                        }
                        /* Now let's check the element's type and name */


                        const tagName = transformCaseFunc(currentNode.nodeName);
                        /* Execute a hook if present */

                        _executeHook('uponSanitizeElement', currentNode, {
                            tagName,
                            allowedTags: ALLOWED_TAGS
                        });
                        /* Detect mXSS attempts abusing namespace confusion */


                        if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
                            _forceRemove(currentNode);

                            return true;
                        }
                        /* Remove element if anything forbids its presence */


                        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                            /* Check if we have a custom element to handle */
                            if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
                                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
                                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
                            }
                            /* Keep content except for bad-listed elements */


                            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;

                                if (childNodes && parentNode) {
                                    const childCount = childNodes.length;

                                    for (let i = childCount - 1; i >= 0; --i) {
                                        parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                                    }
                                }
                            }

                            _forceRemove(currentNode);

                            return true;
                        }
                        /* Check whether element has a valid namespace */


                        if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
                            _forceRemove(currentNode);

                            return true;
                        }
                        /* Make sure that older browsers don't get noscript mXSS */


                        if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
                            _forceRemove(currentNode);

                            return true;
                        }
                        /* Sanitize element content to be template-safe */


                        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
                            /* Get the element's text content */
                            content = currentNode.textContent;
                            content = stringReplace(content, MUSTACHE_EXPR, ' ');
                            content = stringReplace(content, ERB_EXPR, ' ');
                            content = stringReplace(content, TMPLIT_EXPR, ' ');

                            if (currentNode.textContent !== content) {
                                arrayPush(DOMPurify.removed, {
                                    element: currentNode.cloneNode()
                                });
                                currentNode.textContent = content;
                            }
                        }
                        /* Execute a hook if present */


                        _executeHook('afterSanitizeElements', currentNode, null);

                        return false;
                    };
                    /**
                     * _isValidAttribute
                     *
                     * @param  {string} lcTag Lowercase tag name of containing element.
                     * @param  {string} lcName Lowercase attribute name.
                     * @param  {string} value Attribute value.
                     * @return {Boolean} Returns true if `value` is valid, otherwise false.
                     */
                        // eslint-disable-next-line complexity


                    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
                            /* Make sure attribute cannot clobber */
                            if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
                                return false;
                            }
                            /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


                            if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                                if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
                                    // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                                    // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                                    _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                                    // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                                    lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
                                    return false;
                                }
                                /* Check value is safe. First, is attr inert? If so, is safe */

                            } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (!value) ; else {
                                return false;
                            }

                            return true;
                        };
                    /**
                     * _basicCustomElementCheck
                     * checks if at least one dash is included in tagName, and it's not the first char
                     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
                     * @param {string} tagName name of the tag of the node to sanitize
                     */


                    const _basicCustomElementTest = function _basicCustomElementTest(tagName) {
                        return tagName.indexOf('-') > 0;
                    };
                    /**
                     * _sanitizeAttributes
                     *
                     * @protect attributes
                     * @protect nodeName
                     * @protect removeAttribute
                     * @protect setAttribute
                     *
                     * @param  {Node} currentNode to sanitize
                     */


                    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
                        let attr;
                        let value;
                        let lcName;
                        let l;
                        /* Execute a hook if present */

                        _executeHook('beforeSanitizeAttributes', currentNode, null);

                        const {
                            attributes
                        } = currentNode;
                        /* Check if we have attributes; if not we might have a text node */

                        if (!attributes) {
                            return;
                        }

                        const hookEvent = {
                            attrName: '',
                            attrValue: '',
                            keepAttr: true,
                            allowedAttributes: ALLOWED_ATTR
                        };
                        l = attributes.length;
                        /* Go backwards over all attributes; safely remove bad ones */

                        while (l--) {
                            attr = attributes[l];
                            const {
                                name,
                                namespaceURI
                            } = attr;
                            value = name === 'value' ? attr.value : stringTrim(attr.value);
                            lcName = transformCaseFunc(name);
                            /* Execute a hook if present */

                            hookEvent.attrName = lcName;
                            hookEvent.attrValue = value;
                            hookEvent.keepAttr = true;
                            hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

                            _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

                            value = hookEvent.attrValue;
                            /* Did the hooks approve of the attribute? */

                            if (hookEvent.forceKeepAttr) {
                                continue;
                            }
                            /* Remove attribute */


                            _removeAttribute(name, currentNode);
                            /* Did the hooks approve of the attribute? */


                            if (!hookEvent.keepAttr) {
                                continue;
                            }
                            /* Work around a security issue in jQuery 3.0 */


                            if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                                _removeAttribute(name, currentNode);

                                continue;
                            }
                            /* Sanitize attribute content to be template-safe */


                            if (SAFE_FOR_TEMPLATES) {
                                value = stringReplace(value, MUSTACHE_EXPR, ' ');
                                value = stringReplace(value, ERB_EXPR, ' ');
                                value = stringReplace(value, TMPLIT_EXPR, ' ');
                            }
                            /* Is `value` valid for this attribute? */


                            const lcTag = transformCaseFunc(currentNode.nodeName);

                            if (!_isValidAttribute(lcTag, lcName, value)) {
                                continue;
                            }
                            /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


                            if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
                                // Remove the attribute with this value
                                _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


                                value = SANITIZE_NAMED_PROPS_PREFIX + value;
                            }
                            /* Handle attributes that require Trusted Types */


                            if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
                                if (namespaceURI) ; else {
                                    switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                                        case 'TrustedHTML':
                                            value = trustedTypesPolicy.createHTML(value);
                                            break;

                                        case 'TrustedScriptURL':
                                            value = trustedTypesPolicy.createScriptURL(value);
                                            break;
                                    }
                                }
                            }
                            /* Handle invalid data-* attribute set by try-catching it */


                            try {
                                if (namespaceURI) {
                                    currentNode.setAttributeNS(namespaceURI, name, value);
                                } else {
                                    /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
                                    currentNode.setAttribute(name, value);
                                }

                                arrayPop(DOMPurify.removed);
                            } catch (_) {}
                        }
                        /* Execute a hook if present */


                        _executeHook('afterSanitizeAttributes', currentNode, null);
                    };
                    /**
                     * _sanitizeShadowDOM
                     *
                     * @param  {DocumentFragment} fragment to iterate over recursively
                     */


                    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
                        let shadowNode;

                        const shadowIterator = _createIterator(fragment);
                        /* Execute a hook if present */


                        _executeHook('beforeSanitizeShadowDOM', fragment, null);

                        while (shadowNode = shadowIterator.nextNode()) {
                            /* Execute a hook if present */
                            _executeHook('uponSanitizeShadowNode', shadowNode, null);
                            /* Sanitize tags and elements */


                            if (_sanitizeElements(shadowNode)) {
                                continue;
                            }
                            /* Deep shadow DOM detected */


                            if (shadowNode.content instanceof DocumentFragment) {
                                _sanitizeShadowDOM(shadowNode.content);
                            }
                            /* Check attributes, sanitize if necessary */


                            _sanitizeAttributes(shadowNode);
                        }
                        /* Execute a hook if present */


                        _executeHook('afterSanitizeShadowDOM', fragment, null);
                    };
                    /**
                     * Sanitize
                     * Public method providing core sanitation functionality
                     *
                     * @param {String|Node} dirty string or DOM node
                     * @param {Object} configuration object
                     */
                    // eslint-disable-next-line complexity


                    DOMPurify.sanitize = function (dirty) {
                        let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        let body;
                        let importedNode;
                        let currentNode;
                        let returnNode;
                        /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

                        IS_EMPTY_INPUT = !dirty;

                        if (IS_EMPTY_INPUT) {
                            dirty = '<!-->';
                        }
                        /* Stringify, in case dirty is an object */


                        if (typeof dirty !== 'string' && !_isNode(dirty)) {
                            // eslint-disable-next-line no-negated-condition
                            if (typeof dirty.toString !== 'function') {
                                throw typeErrorCreate('toString is not a function');
                            } else {
                                dirty = dirty.toString();

                                if (typeof dirty !== 'string') {
                                    throw typeErrorCreate('dirty is not a string, aborting');
                                }
                            }
                        }
                        /* Return dirty HTML if DOMPurify cannot run */


                        if (!DOMPurify.isSupported) {
                            return dirty;
                        }
                        /* Assign config vars */


                        if (!SET_CONFIG) {
                            _parseConfig(cfg);
                        }
                        /* Clean up removed elements */


                        DOMPurify.removed = [];
                        /* Check if dirty is correctly typed for IN_PLACE */

                        if (typeof dirty === 'string') {
                            IN_PLACE = false;
                        }

                        if (IN_PLACE) {
                            /* Do some early pre-sanitization to avoid unsafe root nodes */
                            if (dirty.nodeName) {
                                const tagName = transformCaseFunc(dirty.nodeName);

                                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                                    throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
                                }
                            }
                        } else if (dirty instanceof Node) {
                            /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
                            body = _initDocument('<!---->');
                            importedNode = body.ownerDocument.importNode(dirty, true);

                            if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                                /* Node is already a body, use as is */
                                body = importedNode;
                            } else if (importedNode.nodeName === 'HTML') {
                                body = importedNode;
                            } else {
                                // eslint-disable-next-line unicorn/prefer-dom-node-append
                                body.appendChild(importedNode);
                            }
                        } else {
                            /* Exit directly if we have nothing to do */
                            if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
                                dirty.indexOf('<') === -1) {
                                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
                            }
                            /* Initialize the document to work on */


                            body = _initDocument(dirty);
                            /* Check we have a DOM node from the data */

                            if (!body) {
                                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
                            }
                        }
                        /* Remove first element node (ours) if FORCE_BODY is set */


                        if (body && FORCE_BODY) {
                            _forceRemove(body.firstChild);
                        }
                        /* Get node iterator */


                        const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
                        /* Now start iterating over the created document */


                        while (currentNode = nodeIterator.nextNode()) {
                            /* Sanitize tags and elements */
                            if (_sanitizeElements(currentNode)) {
                                continue;
                            }
                            /* Shadow DOM detected, sanitize it */


                            if (currentNode.content instanceof DocumentFragment) {
                                _sanitizeShadowDOM(currentNode.content);
                            }
                            /* Check attributes, sanitize if necessary */


                            _sanitizeAttributes(currentNode);
                        }
                        /* If we sanitized `dirty` in-place, return it. */


                        if (IN_PLACE) {
                            return dirty;
                        }
                        /* Return sanitized string or DOM */


                        if (RETURN_DOM) {
                            if (RETURN_DOM_FRAGMENT) {
                                returnNode = createDocumentFragment.call(body.ownerDocument);

                                while (body.firstChild) {
                                    // eslint-disable-next-line unicorn/prefer-dom-node-append
                                    returnNode.appendChild(body.firstChild);
                                }
                            } else {
                                returnNode = body;
                            }

                            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
                                /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
                                returnNode = importNode.call(originalDocument, returnNode, true);
                            }

                            return returnNode;
                        }

                        let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
                        /* Serialize doctype if allowed */

                        if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
                            serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
                        }
                        /* Sanitize final string template-safe */


                        if (SAFE_FOR_TEMPLATES) {
                            serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR, ' ');
                            serializedHTML = stringReplace(serializedHTML, ERB_EXPR, ' ');
                            serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR, ' ');
                        }

                        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
                    };
                    /**
                     * Public method to set the configuration once
                     * setConfig
                     *
                     * @param {Object} cfg configuration object
                     */


                    DOMPurify.setConfig = function (cfg) {
                        _parseConfig(cfg);

                        SET_CONFIG = true;
                    };
                    /**
                     * Public method to remove the configuration
                     * clearConfig
                     *
                     */


                    DOMPurify.clearConfig = function () {
                        CONFIG = null;
                        SET_CONFIG = false;
                    };
                    /**
                     * Public method to check if an attribute value is valid.
                     * Uses last set config, if any. Otherwise, uses config defaults.
                     * isValidAttribute
                     *
                     * @param  {string} tag Tag name of containing element.
                     * @param  {string} attr Attribute name.
                     * @param  {string} value Attribute value.
                     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
                     */


                    DOMPurify.isValidAttribute = function (tag, attr, value) {
                        /* Initialize shared config vars if necessary. */
                        if (!CONFIG) {
                            _parseConfig({});
                        }

                        const lcTag = transformCaseFunc(tag);
                        const lcName = transformCaseFunc(attr);
                        return _isValidAttribute(lcTag, lcName, value);
                    };
                    /**
                     * AddHook
                     * Public method to add DOMPurify hooks
                     *
                     * @param {String} entryPoint entry point for the hook to add
                     * @param {Function} hookFunction function to execute
                     */


                    DOMPurify.addHook = function (entryPoint, hookFunction) {
                        if (typeof hookFunction !== 'function') {
                            return;
                        }

                        hooks[entryPoint] = hooks[entryPoint] || [];
                        arrayPush(hooks[entryPoint], hookFunction);
                    };
                    /**
                     * RemoveHook
                     * Public method to remove a DOMPurify hook at a given entryPoint
                     * (pops it from the stack of hooks if more are present)
                     *
                     * @param {String} entryPoint entry point for the hook to remove
                     * @return {Function} removed(popped) hook
                     */


                    DOMPurify.removeHook = function (entryPoint) {
                        if (hooks[entryPoint]) {
                            return arrayPop(hooks[entryPoint]);
                        }
                    };
                    /**
                     * RemoveHooks
                     * Public method to remove all DOMPurify hooks at a given entryPoint
                     *
                     * @param  {String} entryPoint entry point for the hooks to remove
                     */


                    DOMPurify.removeHooks = function (entryPoint) {
                        if (hooks[entryPoint]) {
                            hooks[entryPoint] = [];
                        }
                    };
                    /**
                     * RemoveAllHooks
                     * Public method to remove all DOMPurify hooks
                     *
                     */


                    DOMPurify.removeAllHooks = function () {
                        hooks = {};
                    };

                    return DOMPurify;
                }

                var purify = createDOMPurify();

                return purify;

            }));
//# sourceMappingURL=purify.js.map


            /***/ }),

        /***/ "./src/sidebar.js":
        /*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (/* binding */ Sidebar)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");



            class Sidebar {
                constructor() {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-ui.menu .item').vi_tab();
                    this.revision = {};
                    this.sidebar = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('#vi-wpbulky-sidebar');
                    this.historyBodyTable = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('#vi-wpbulky-history-points-list tbody');

                    this.sidebar.on('click', '.vi-wpbulky-apply-filter', this.applyFilter.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-filter-label', this.filterInputLabelFocus);
                    this.sidebar.on('focus', '.vi-wpbulky-filter-input', this.filterInputFocus);
                    this.sidebar.on('blur', '.vi-wpbulky-filter-input', this.filterInputBlur);
                    this.sidebar.on('click', '.vi-wpbulky-get-meta-fields', this.getMetaFields.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-save-meta-fields', this.saveMetaFields.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-add-new-meta-field', this.addNewMetaField.bind(this));
                    this.sidebar.find('table.vi-wpbulky-meta-fields-container tbody').sortable({axis: 'y',});
                    this.sidebar.find('table.vi-wpbulky-meta-fields-container').on('click', '.vi-wpbulky-remove-meta-row', this.removeMetaRow);

                    this.sidebar.on('click', '.vi-wpbulky-save-settings', this.saveSettings.bind(this));

                    this.sidebar.on('click', '.vi-wpbulky-view-history-point', this.viewHistoryPoint.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-recover', this.recover.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-revert-this-point', this.revertAllPosts.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-revert-this-key', this.revertPostAttribute.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-pagination a.item', this.changePage.bind(this));
                    this.sidebar.on('change', '.vi-wpbulky-go-to-page', this.changePageByInput.bind(this));
                    this.sidebar.on('click', '.vi-wpbulky-multi-select-clear', this.clearMultiSelect);

                    // this.sidebar.on('click', '.accordion .title', this.revertSinglePost.bind(this));

                    this.filter();
                    this.settings();
                    this.metafields();
                    this.history();
                }

                filter() {
                    let filterForm = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('#vi-wpbulky-posts-filter'),
                        filterInput = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-filter-input'),
                        cssTop = {top: -2},
                        cssMiddle = {top: '50%'};

                    filterInput.each((i, el) => {
                        if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(el).val()) (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(el).parent().prev().css(cssTop);
                    });

                    filterInput.on('focus', function () {
                        let label = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).prev();
                        label.css(cssTop);
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).on('blur', function () {
                            if (!(0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).val()) label.css(cssMiddle);
                        })
                    });

                    this.sidebar.on('click', '.vi-wpbulky-filter-label', function () {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).next().trigger('focus');
                    });

                    let clearableFilter = filterForm.find('.vi-wpbulky.vi-ui.dropdown').dropdown({clearable: true}),
                        compactFilter = filterForm.find('.vi-ui.compact.dropdown').dropdown();

                    this.sidebar.on('click', '.vi-wpbulky-clear-filter', function () {
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-filter-label').css(cssMiddle);
                        filterInput.val('');
                        clearableFilter.dropdown('clear');
                        compactFilter.find('.menu .item:first').trigger('click');
                    });
                }

                settings() {
                    let settingsForm = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-settings-tab');
                    settingsForm.find('select.dropdown').dropdown();
                }

                metafields() {
                    this.renderMetaFieldsTable(_attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.metaFields);
                }

                history() {
                    this.pagination(1);
                    // this.saveRevision();
                }

                pagination(currentPage, maxPage = _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.historyPages) {
                    this.sidebar.find('.vi-wpbulky-pagination').html(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].pagination(maxPage, currentPage));
                }

                applyFilter(e) {
                    let $this = this, thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);

                    if (thisBtn.hasClass('loading')) return;
                    let action = wpbulkyParams.postType ==='comment' ? 'add_filter_comment_data' : 'add_filter_data';

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {
                            sub_action: action,
                            filter_data: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('#vi-wpbulky-posts-filter').serialize(),
                            filter_key: _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.filterKey
                        },
                        beforeSend() {
                            thisBtn.addClass('loading');
                        },
                        success(res) {
                            thisBtn.removeClass('loading');
                            $this.sidebar.trigger('afterAddFilter', [res.data]);
                            _functions__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage( {title:"Success", message: 'Filtered successfully', type: "positive", duration: 3000} );
                        }
                    });
                }

                saveSettings(e) {
                    let $this = this, thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);

                    if (thisBtn.hasClass('loading')) return;

                    let action = wpbulkyParams.postType ==='comment' ? 'save_comment_settings' : 'save_settings';

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {
                            sub_action: action,
                            fields: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('form.vi-wpbulky-settings-tab').serialize()
                        },
                        beforeSend() {
                            thisBtn.addClass('loading')
                        },
                        success(res) {
                            if (res.success) {
                                _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.settings = res.data.settings;
                                clearInterval($this.autoSaveRevision);
                                // $this.saveRevision();
                                $this.sidebar.trigger('afterSaveSettings', [res.data]);
                            }
                            thisBtn.removeClass('loading')
                        }
                    });
                }

                filterInputLabelFocus() {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).next().find('input').trigger('focus');
                }

                filterInputFocus() {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).parent().prev().css({top: -2});
                }

                filterInputBlur() {
                    if (!(0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).val()) (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).parent().prev().css({top: '50%'});
                }

                getMetaFields(e) {
                    let $this = this, thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);

                    if (thisBtn.hasClass('loading')) return;

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: 'get_meta_fields', current_meta_fields: $this.getCurrentMetaFields()},
                        beforeSend() {
                            thisBtn.addClass('loading');
                        },
                        success(res) {
                            $this.renderMetaFieldsTable(res.data);
                            _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.metaFields = res.data;
                            thisBtn.removeClass('loading');
                        }
                    });
                }

                renderMetaFieldsTable(data) {
                    let html = '';

                    for (let metaKey in data) {
                        html += this.renderRow(metaKey, data);
                    }

                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-meta-fields-container tbody').html(html);
                }

                renderRow(metaKey, data) {
                    let meta = data[metaKey] || {},
                        optionHtml = '',
                        inputType = meta.input_type || '',
                        options = {
                            textinput: 'Text input',
                            texteditor: 'Text editor',
                            numberinput: 'Number input',
                            array: 'Array',
                            json: 'JSON',
                            checkbox: 'Checkbox',
                            calendar: 'Calendar',
                            image: "Image (Save image's id)",
                            imageurl: "Image (Save image's url)",
                        };

                    for (let optionValue in options) {
                        optionHtml += `<option value="${optionValue}" ${optionValue === inputType ? 'selected' : ''}>${options[optionValue]}</option>`;
                    }

                    let metaValue = meta.meta_value || '',
                        shortValue = metaValue.slice(0, 15),
                        fullValueHtml = metaValue.length > 16 ? `<div class="vi-wpbulky-full-meta-value">${metaValue}</div>` : '';

                    shortValue += shortValue.length < metaValue.length ? '...' : '';

                    return `<tr>
                        <td class="vi-wpbulky-meta-key-col vi-wpbulky-meta-key">${metaKey}</td>
                        <td class="vi-wpbulky-column-name-col"><input type="text" class="vi-wpbulky-meta-column-name" value="${meta.column_name || ''}"></td>
                        <td class="vi-wpbulky-value-format-col">
                            <div class="vi-wpbulky-display-meta-value">
                                <div class="vi-wpbulky-short-meta-value">${shortValue}</div>
                                ${fullValueHtml}
                            </div>
                        </td>
                        <td class="vi-wpbulky-column-type-col">
                            <select class="vi-wpbulky-meta-column-type">${optionHtml}</select>
                        </td>
                         <td class="vi-wpbulky-column-multiple-col">
                            <input type="checkbox" class="vi-wpbulky-meta-column-multiple" ${parseInt(meta.multiple) ? 'checked' : ''}>
                        </td>
                        <td class="vi-wpbulky-active-col vi-wpbulky-meta-field-active-column">
                            <input type="checkbox" class="vi-wpbulky-meta-column-active" ${parseInt(meta.active) ? 'checked' : ''}>
                        </td>
                        <td class="vi-wpbulky-actions-col">
                            <div class="vi-wpbulky-meta-field-actions">
                                <span class="vi-ui button basic mini vi-wpbulky-remove-meta-row"><i class="icon trash"> </i></span>
                                <span class="vi-ui button basic mini"><i class="icon move"> </i></span>
                            </div>
                        </td>
                    </tr>`;
                }

                saveMetaFields(e) {
                    let thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);

                    if (thisBtn.hasClass('loading')) return;

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: 'save_meta_fields', meta_fields: this.getCurrentMetaFields()},
                        beforeSend() {
                            thisBtn.addClass('loading');
                        },
                        success(res) {
                            thisBtn.removeClass('loading');
                            location.reload();
                        },
                        error(res) {
                            console.log(res)
                        }
                    });
                }

                getCurrentMetaFields() {
                    let meta_fields = {};
                    let metaArr = _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.metaFields;
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('table.vi-wpbulky-meta-fields-container tbody tr').each(function (i, row) {
                        let metaKey = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(row).find('.vi-wpbulky-meta-key').text();
                        meta_fields[metaKey] = {
                            column_name: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(row).find('.vi-wpbulky-meta-column-name').val(),
                            input_type: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(row).find('.vi-wpbulky-meta-column-type').val(),
                            active: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(row).find('.vi-wpbulky-meta-column-active:checked').length,
                            meta_value: metaArr[metaKey] ? metaArr[metaKey].meta_value : '',
                            multiple: (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(row).find('.vi-wpbulky-meta-column-multiple:checked').length,
                        };
                    });

                    return meta_fields;
                }

                addNewMetaField(e) {
                    let input = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget).prev(),
                        metaKey = input.val(),
                        validate = metaKey.match(/^[\w\d_-]*$/g);

                    if (!metaKey || !validate || _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.metaFields[metaKey]) return;

                    let newRow = this.renderRow(metaKey, {});
                    if (newRow) {
                        input.val('');
                        (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('table.vi-wpbulky-meta-fields-container tbody').append(newRow);
                    }
                }

                removeMetaRow() {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).closest('tr').remove();
                }

                viewHistoryPoint(e) {
                    let thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget),
                        historyiD = thisBtn.data('id'),
                        $this = this;

                    if (thisBtn.hasClass('loading')) return;

                    let action = wpbulkyParams.postType ==='comment' ? 'view_comment_history_point' : 'view_history_point';

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: action, id: historyiD},
                        beforeSend() {
                            thisBtn.addClass('loading');
                        },
                        complete() {
                        },
                        success(res) {
                            thisBtn.removeClass('loading');

                            if (res.success && res.data) {
                                let posts = res.data.compare;
                                let html = '';
                                for (let id in posts) {
                                    let item = posts[id];
                                    html += `<div class="vi-wpbulky-history-post" data-post_id="${id}">
                                        <div class="title">
                                            <i class="dropdown icon"></i>
                                            ${item.name}
                                            <span class="vi-ui button mini basic vi-wpbulky-revert-this-post">
                                                <i class="icon undo"> </i>
                                            </span>
                                            
                                        </div>`;

                                    let table = '';
                                    for (let key in item.fields) {
                                        let currentVal = typeof item.current[key] === 'string' ? item.current[key] : JSON.stringify(item.current[key]);
                                        let historyVal = typeof item.history[key] === 'string' ? item.history[key] : JSON.stringify(item.history[key]);
                                        table += `<tr>
                                            <td>${item.fields[key]}</td>
                                            <td>${currentVal}</td>
                                            <td>${historyVal}</td>
                                            <td class="">
                                                <span class="vi-ui button basic mini vi-wpbulky-revert-this-key" data-post_id="${id}" data-post_key="${key}">
                                                    <i class="icon undo"> </i>
                                                </span>
                                            </td>
                                        </tr>`;
                                    }

                                    table = `<table id="vi-wpbulky-history-point-detail" class="vi-ui celled table">
                                    <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Current value in database</th>
                                        <th>History</th>
                                        <th class="">Revert</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    ${table}
                                    </tbody>
                                </table>`;

                                    html += `<div class="content">${table}</div></div>`
                                }

                                html = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="vi-ui styled fluid accordion">${html}</div>`);

                                (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('.vi-wpbulky-history-review')
                                    .html(html).attr('data-history_id', historyiD)
                                    .prepend(`<h4>History point: ${res.data.date}</h4>`)
                                    .append(`<div class="vi-ui button tiny vi-wpbulky-revert-this-point">
                                    ${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Revert all post in this point')}
                                </div>
                                <p> ${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('The current value is the value of the post in database')}</p>`);

                                html.find('.title').on('click', (e) => $this.revertSinglePost(e));

                                html.vi_accordion();
                                html.find('.title:first').trigger('click');
                            }
                        }
                    })
                }

                recover(e) {
                    let thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget),
                        historyID = thisBtn.data('id');

                    if (thisBtn.hasClass('loading')) return;
                    let action = wpbulkyParams.postType ==='comment' ? 'revert_history_all_comments' : 'revert_history_all_posts';
                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: action, history_id: historyID},
                        beforeSend() {
                            thisBtn.addClass('loading')
                        },
                        complete() {
                            thisBtn.removeClass('loading')
                        },
                        success(res) {
                            console.log(res);
                            _functions__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage( {title:"Success", message: 'Reverted successfully', type: "positive", duration: 3000} );
                        }
                    });
                }

                revertSinglePost(e) {
                    let thisBtn;
                    if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).hasClass('vi-wpbulky-revert-this-post')) thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);
                    if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).parent().hasClass('vi-wpbulky-revert-this-post')) thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).parent();

                    if (thisBtn) {
                        e.stopImmediatePropagation();

                        let pid = thisBtn.closest('.vi-wpbulky-history-post').data('post_id'),
                            historyID = thisBtn.closest('.vi-wpbulky-history-review').attr('data-history_id');

                        if (thisBtn.hasClass('loading')) return;

                        let action = wpbulkyParams.postType ==='comment' ? 'revert_history_single_comment' : 'revert_history_single_post';

                        _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                            data: {sub_action: action, history_id: historyID, pid: pid},
                            beforeSend() {
                                thisBtn.addClass('loading')
                            },
                            complete() {
                                thisBtn.removeClass('loading')
                            },
                            success(res) {
                                console.log(res);
                                _functions__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage( {title:"Success", message: 'Reverted successfully', type: "positive", duration: 3000} );
                            }
                        });
                    }
                }

                revertAllPosts(e) {
                    let thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);
                    let historyID = thisBtn.closest('.vi-wpbulky-history-review').data('history_id');

                    if (thisBtn.hasClass('loading')) return;

                    let action = wpbulkyParams.postType ==='comment' ? 'revert_history_all_comments' : 'revert_history_all_posts';

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: action, history_id: historyID},
                        beforeSend() {
                            thisBtn.addClass('loading')
                        },
                        complete() {
                            thisBtn.removeClass('loading')
                        },
                        success(res) {
                            console.log(res);
                            _functions__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage( {title:"Success", message: 'Reverted successfully', type: "positive", duration: 3000} );
                        }
                    });
                }

                revertPostAttribute(e) {
                    let thisBtn = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget),
                        attribute = thisBtn.data('post_key'),
                        pid = thisBtn.closest('.vi-wpbulky-history-post').data('post_id'),
                        historyID = thisBtn.closest('.vi-wpbulky-history-review').data('history_id');

                    if (thisBtn.hasClass('loading')) return;

                    let action = wpbulkyParams.postType ==='comment' ? 'revert_history_comment_attribute' : 'revert_history_post_attribute';

                    _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                        data: {sub_action: action, attribute: attribute, history_id: historyID, pid: pid},
                        beforeSend() {
                            thisBtn.addClass('loading')
                        },
                        complete() {
                            thisBtn.removeClass('loading')
                        },
                        success(res) {
                            console.log(res);
                            _functions__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage( {title:"Success", message: 'Reverted Post Attribute successfully', type: "positive", duration: 3000} );
                        }
                    });
                }

                changePage(e) {
                    let page = parseInt((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget).attr('data-page'));
                    if ((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget).hasClass('active') || (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.currentTarget).hasClass('disabled') || !page) return;
                    this.loadHistoryPage(page);
                }

                changePageByInput(e) {
                    let page = parseInt((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).val());
                    let max = parseInt((0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).attr('max'));

                    if (page <= max && page > 0) this.loadHistoryPage(page);
                }

                clearMultiSelect() {
                    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(this).parent().find('.vi-ui.dropdown').dropdown('clear');
                }

                loadHistoryPage(page) {
                    let loading = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].spinner(),
                        $this = this;

                    if (page) {
                        _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                            dataType: 'text',
                            data: {sub_action: 'load_history_page', page: page},
                            beforeSend() {
                                $this.sidebar.find('.vi-wpbulky-pagination').prepend(loading);
                            },
                            complete() {
                                loading.remove();
                            },
                            success(res) {
                                $this.pagination(page);
                                (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)('#vi-wpbulky-history-points-list tbody').html(res);
                            }
                        });
                    }
                }

                saveRevision() {
                    let autoSaveTime = parseInt(_attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.settings.auto_save_revision);

                    if (autoSaveTime === 0) return;

                    let $this = this;

                    this.autoSaveRevision = setInterval(function () {
                        if (Object.keys($this.revision).length) {
                            let currentPage = $this.sidebar.find('.vi-wpbulky-pagination a.item.active').data('page') || 1;

                            let action = wpbulkyParams.postType ==='comment' ? 'auto_save_revision_comment' : 'auto_save_revision';

                            _functions__WEBPACK_IMPORTED_MODULE_1__["default"].ajax({
                                data: {sub_action: action, data: $this.revision, page: currentPage || 1},
                                success(res) {
                                    if (res.success) {
                                        if (res.data.pages) _attributes__WEBPACK_IMPORTED_MODULE_0__.Attributes.historyPages = res.data.pages;
                                        if (res.data.updatePage) $this.historyBodyTable.html(res.data.updatePage);
                                        $this.revision = {};
                                        $this.pagination(currentPage);
                                    }
                                }
                            });
                        }

                    }, autoSaveTime * 1000)
                }
            }


            /***/ }),

        /***/ "./src/templates.js":
        /*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */ });
            const Templates = {
                modal(data = {}) {
                    let {header = '', content = '', actionsHtml = ''} = data;
                    return `<div class="vi-wpbulky-modal-container">
                    <div class="vi-wpbulky-modal-main vi-ui form small">
                        <i class="close icon"></i>
                        <div class="vi-wpbulky-modal-wrapper">
                            <h3 class="header">${header}</h3>
                            <div class="content">${content}</div>
                            <div class="actions">${actionsHtml}</div>
                        </div>
                    </div>
                </div>`;
                },

                defaultAttributes(data = {}) {
                    let {html} = data;
                    return `<table class="vi-ui celled table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Attribute</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${html}
                    </tbody>
                </table>`;
                },

            };
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Templates);

            /***/ }),

        /***/ "./src/text-multi-cells-edit.js":
        /*!**************************************!*\
  !*** ./src/text-multi-cells-edit.js ***!
  \**************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (/* binding */ TextMultiCellsEdit)
                /* harmony export */ });
            /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
            /* harmony import */ var _modal_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-popup */ "./src/modal-popup.js");




            class TextMultiCellsEdit {
                constructor(obj, x, y, e) {
                    this._data = {};
                    this._data.jexcel = obj;
                    this._data.x = parseInt(x);
                    this._data.y = parseInt(y);
                    this.run();
                }

                get(id) {
                    return this._data[id] || '';
                }

                run() {
                    let formulaHtml = this.content();
                    let cell = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`td[data-x=${this.get('x') || 0}][data-y=${this.get('y') || 0}]`);
                    new _modal_popup__WEBPACK_IMPORTED_MODULE_2__.Popup(formulaHtml, cell);
                    formulaHtml.on('click', '.vi-wpbulky-apply-formula', this.applyFormula.bind(this));
                    // formulaHtml.on('change', '.vi-wpbulky-text-input', this.applyFormula.bind(this));
                }

                content() {
                    return (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="vi-wpbulky-formula-container">
                    <div class="field">
                        <input type="text" placeholder="${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Content')}" class="vi-wpbulky-text-input">
                    </div>
                    <button type="button" class="vi-ui button mini vi-wpbulky-apply-formula">${_functions__WEBPACK_IMPORTED_MODULE_1__["default"].text('Save')}</button>
                </div>`);
                }

                applyFormula(e) {
                    let form = (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).closest('.vi-wpbulky-formula-container'),
                        value = form.find('.vi-wpbulky-text-input').val(),
                        excelObj = this.get('jexcel');

                    let breakControl = false, records = [];
                    let h = excelObj.selectedContainer;
                    let start = h[1], end = h[3], x = h[0];

                    for (let y = start; y <= end; y++) {
                        if (excelObj.records[y][x] && !excelObj.records[y][x].classList.contains('readonly') && excelObj.records[y][x].style.display !== 'none' && breakControl === false) {
                            records.push(excelObj.updateCell(x, y, value));
                            excelObj.updateFormulaChain(x, y, records);
                        }
                    }

                    // Update history
                    excelObj.setHistory({
                        action: 'setValue',
                        records: records,
                        selection: excelObj.selectedCell,
                    });

                    // Update table with custom configuration if applicable
                    excelObj.updateTable();
                }

            }

            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	(() => {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/ 		__webpack_require__.n = (module) => {
            /******/ 			var getter = module && module.__esModule ?
                /******/ 				() => (module['default']) :
                /******/ 				() => (module);
            /******/ 			__webpack_require__.d(getter, { a: getter });
            /******/ 			return getter;
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = (exports, definition) => {
            /******/ 			for(var key in definition) {
                /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ 				}
                /******/ 			}
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
        /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
        /******/ 		// define __esModule on exports
        /******/ 		__webpack_require__.r = (exports) => {
            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 			}
            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 		};
        /******/ 	})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";
        /*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
        /* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
        /* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator */ "./src/calculator.js");
        /* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
        /* harmony import */ var _find_and_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-and-replace */ "./src/find-and-replace.js");
        /* harmony import */ var _text_multi_cells_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-multi-cells-edit */ "./src/text-multi-cells-edit.js");
        /* harmony import */ var _modal_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-popup */ "./src/modal-popup.js");
        /* harmony import */ var _purify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purify */ "./src/purify.js");
        /* harmony import */ var _purify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_purify__WEBPACK_IMPORTED_MODULE_7__);









        jQuery(document).ready(function ($) {

            class BulkEdit {
                constructor() {
                    this.sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]();

                    this.compare = [];
                    this.trash = [];
                    this.unTrash = [];
                    this.revision = {};

                    this.editor = $('#vi-wpbulky-container');
                    this.menubar = $('#vi-wpbulky-menu-bar');

                    this.menubar.on('click', '.vi-wpbulky-open-sidebar', this.openMenu.bind(this));
                    this.menubar.on('click', 'a.item:not(.vi-wpbulky-open-sidebar)', this.closeMenu.bind(this));
                    this.menubar.on('click', '.vi-wpbulky-new-post', this.addNewPost.bind(this));
                    this.menubar.on('click', '.vi-wpbulky-full-screen-btn', this.toggleFullScreen.bind(this));
                    this.menubar.on('click', '.vi-wpbulky-save-button', this.save.bind(this));
                    this.menubar.on('click', '.vi-wpbulky-pagination a.item', this.changePage.bind(this));
                    this.menubar.on('click', '.vi-wpbulky-get-post', this.reloadCurrentPage.bind(this));
                    this.menubar.on('change', '.vi-wpbulky-go-to-page', this.changePageByInput.bind(this));

                    this.editor.on('cellonchange', 'tr', this.cellOnChange.bind(this));
                    this.editor.on('click', '.jexcel_content', this.removeExistingEditor.bind(this));
                    this.editor.on('dblclick', this.removeContextPopup);

                    this.sidebar.sidebar.on('afterAddFilter', this.afterAddFilter.bind(this));
                    this.sidebar.sidebar.on('afterSaveSettings', this.afterSaveSettings.bind(this));
                    this.sidebar.sidebar.on('click', '.vi-wpbulky-close-sidebar', this.closeMenu.bind(this));

                    this.init();

                    $(document).on('keydown', this.keyDownControl.bind(this));
                }

                removeExistingEditor(e) {
                    if (e.target === e.currentTarget) {
                        if (this.WorkBook && this.WorkBook.edition) this.WorkBook.closeEditor(this.WorkBook.edition[0], true);
                    }
                }

                keyDownControl(e) {
                    if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
                        if (e.which === 83) {
                            e.preventDefault();
                            this.save();
                        }
                    }

                    switch (e.which) {
                        case 27:
                            this.sidebar.sidebar.removeClass('vi-wpbulky-open');
                            break;
                    }
                }

                removeContextPopup() {
                    $('.vi-wpbulky-context-popup').removeClass('vi-wpbulky-popup-active')
                }

                init() {
                    if (wpbulkyParams.columns) _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.setColumns(wpbulkyParams.columns);
                    this.pagination(1, 1);
                    this.workBookInit();
                    if ( wpbulkyParams.postType ==='comment' ) {
                        this.loadComments();
                    }else {
                        this.loadPosts();
                    }
                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].setJexcel(this.WorkBook);
                }

                cellOnChange(e, data) {
                    let {col = ''} = data;

                    if (!col) return;

                    let type = _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.idMapping[col];
                    let thisRow = $(e.target);

                    switch (type) {
                        case 'post_date':
                            let value = data.value,
                                x = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getColFromColumnType('post_status'),
                                cell = thisRow.find(`td[data-x='${x}']`).get(0),
                                time = (new Date(value)).getTime(),
                                now = Date.now(),
                                status = time > now ? 'future' : 'publish';

                            this.WorkBook.setValue(cell, status);

                            break;
                    }
                }

                workBookInit() {
                    let $this = this,
                        contextMenuItems,
                        onresizecolumn = function (instance, cell, width) {
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                                async: true,
                                data: {
                                    sub_action: 'resize_column',
                                    column_id: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.columns[cell].id,
                                    column_width: width <= 55 ? 55 : width,
                                },
                                beforeSend() {},
                                success(res) {
                                    if (res.success) {
                                        console.log(res.data);
                                    }
                                },
                                error(res) {
                                    console.log(res.data);
                                    alert(res.data);
                                },
                                complete() {}
                            });
                        };

                    function setValueToCell(obj, value) {
                        let breakControl = false, records = [], h = obj.selectedContainer, start = h[1], end = h[3], x = h[0];

                        for (let y = start; y <= end; y++) {
                            if (obj.records[y][x] && !obj.records[y][x].classList.contains('readonly') && obj.records[y][x].style.display !== 'none' && breakControl === false) {
                                records.push(obj.updateCell(x, y, value));
                                obj.updateFormulaChain(x, y, records);
                            }
                        }

                        obj.setHistory({action: 'setValue', records: records, selection: obj.selectedCell});
                        obj.updateTable();
                    }

                    switch ( wpbulkyParams.postType ) {
                        case 'comment':
                            contextMenuItems = function (items, obj, x, y, e) {
                                let cells = obj.selectedContainer;
                                x = parseInt(x);
                                y = parseInt(y);
                                if (x !== null && y !== null) {

                                    if (cells[0] === cells[2]) {
                                        switch (obj.options.columns[x].type) {
                                            case 'text':
                                                items.push({
                                                    title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Edit multiple cells'),
                                                    onclick(e) {
                                                        new _text_multi_cells_edit__WEBPACK_IMPORTED_MODULE_5__["default"](obj, x, y, e);
                                                    }
                                                });

                                                items.push({
                                                    title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Find and Replace'),
                                                    onclick(e) {
                                                        new _find_and_replace__WEBPACK_IMPORTED_MODULE_4__["default"](obj, x, y, e);
                                                    }
                                                });
                                                break;
                                            case 'number':
                                                items.push({
                                                    title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Find and Replace'),
                                                    onclick(e) {
                                                        new _find_and_replace__WEBPACK_IMPORTED_MODULE_4__["default"](obj, x, y, e);
                                                    }
                                                });
                                                break;

                                            case 'calendar':
                                                let cell = $(`td[data-x=${x}][data-y=${y}]`).get(0);
                                                if (!$(cell).hasClass('readonly')) {
                                                    items.push({
                                                        title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Open date picker'),
                                                        onclick() {
                                                            let value = obj.options.data[y][x];

                                                            var editor = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].createEditor(cell, 'input', '', false);
                                                            editor.value = value;
                                                            editor.style.left = 'unset';

                                                            let h = obj.selectedContainer;
                                                            let start = h[1], end = h[3];

                                                            if (obj.options.tableOverflow == true || obj.options.fullscreen == true) {
                                                                obj.options.columns[x].options.position = true;
                                                            }
                                                            obj.options.columns[x].options.value = obj.options.data[y][x];
                                                            obj.options.columns[x].options.opened = true;
                                                            obj.options.columns[x].options.onclose = function (el, value) {
                                                                let records = [];
                                                                value = el.value;

                                                                for (let y = start; y <= end; y++) {
                                                                    if (obj.records[y][x] && !obj.records[y][x].classList.contains('readonly') && obj.records[y][x].style.display !== 'none') {
                                                                        records.push(obj.updateCell(x, y, value));
                                                                        obj.updateFormulaChain(x, y, records);
                                                                    }
                                                                }
                                                                // obj.closeEditor(cell, true);

                                                                // Update history
                                                                obj.setHistory({
                                                                    action: 'setValue',
                                                                    records: records,
                                                                    selection: obj.selectedCell,
                                                                });

                                                                // Update table with custom configuration if applicable
                                                                obj.updateTable();
                                                            };
                                                            // Current value
                                                            jSuites.calendar(editor, obj.options.columns[x].options);
                                                            // Focus on editor
                                                            editor.focus();
                                                        }
                                                    });
                                                }

                                                break;
                                        }
                                    }

                                    if (obj.options.columns[x].type === 'custom' && typeof obj.options.columns[x].editor.tinymceInit === 'function') {
                                        items.push({
                                            title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Edit multiple cells'),
                                            onclick() {
                                                $('.vi-ui.modal').modal('show');
                                                if (tinymce.get('vi-wpbulky-text-editor') === null) {
                                                    wp.editor.initialize('vi-wpbulky-text-editor', _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.tinyMceOptions);
                                                } else {
                                                    tinymce.get('vi-wpbulky-text-editor').setContent('')
                                                }

                                                $('.vi-wpbulky-text-editor-save').off('click').on('click', function () {
                                                    let content = wp.editor.getContent('vi-wpbulky-text-editor');
                                                    setValueToCell(obj, content);
                                                    if ($(this).hasClass('vi-wpbulky-close')) $('.vi-ui.modal').modal('hide');
                                                });
                                            }
                                        });
                                    }


                                    let pid = null;

                                    if (typeof y === 'object') {
                                        let y = y.getAttribute('data-y');
                                        pid = obj.options.data[y][1];
                                    } else {
                                        pid =  obj.options.data[y][1];
                                    }
                                    items.push({type: 'line'});

                                    items.push({
                                        title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Reply' ),
                                        onclick() {

                                            $('.vi-ui.modal').modal('show');
                                            if (tinymce.get('vi-wpbulky-text-editor') === null) {
                                                wp.editor.initialize('vi-wpbulky-text-editor', _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.tinyMceOptions);
                                            } else {
                                                tinymce.get('vi-wpbulky-text-editor').setContent('')
                                            }

                                            $('.vi-wpbulky-text-editor-save').off('click').on('click', function () {
                                                let content = wp.editor.getContent('vi-wpbulky-text-editor');
                                                let h = obj.selectedContainer, start = h[1], end = h[3], x = h[0];
                                                let new_comments = [];

                                                for (let y = start; y <= end; y++) {
                                                    new_comments.push( {
                                                        comment_id : _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromCell(obj, obj.records[y][0]),
                                                        post_id : _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromCell(obj, obj.records[y][1]),
                                                    } );
                                                }

                                                $this.addNewReply( content, new_comments );
                                                if ($(this).hasClass('vi-wpbulky-close')) $('.vi-ui.modal').modal('hide');
                                            });
                                        }
                                    });

                                    if (cells[1] === cells[3]) {
                                        items.push({
                                            title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('View post'),
                                            onclick() {
                                                window.open(`${_attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.frontendUrl}?p=${pid}&preview=true`, '_blank');
                                            }
                                        });
                                    }
                                }
                                return items;
                            };
                            break;
                        default:
                            contextMenuItems =  function (items, obj, x, y, e) {
                                let cells = obj.selectedContainer;
                                x = parseInt(x);
                                y = parseInt(y);

                                if (cells[0] === cells[2]) {
                                    if (x) {
                                        if (obj.options.columns[x].type === 'checkbox') {


                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Check'),
                                                onclick(e) {
                                                    setValueToCell(obj,true);
                                                }
                                            });

                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Uncheck'),
                                                onclick(e) {
                                                    setValueToCell(obj,false);
                                                }
                                            });
                                        }

                                        if (obj.options.columns[x].type === 'numeric') {
                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Calculator'),
                                                onclick(e) {
                                                    new _calculator__WEBPACK_IMPORTED_MODULE_2__["default"](obj, x, y, e);
                                                }
                                            });
                                        }

                                        if (obj.options.columns[x].type === 'text') {
                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Edit multiple cells'),
                                                onclick(e) {
                                                    new _text_multi_cells_edit__WEBPACK_IMPORTED_MODULE_5__["default"](obj, x, y, e);
                                                }
                                            });

                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Find and Replace'),
                                                onclick(e) {
                                                    new _find_and_replace__WEBPACK_IMPORTED_MODULE_4__["default"](obj, x, y, e);
                                                }
                                            });
                                        }

                                        if (obj.options.columns[x].type === 'custom' && typeof obj.options.columns[x].editor.tinymceInit === 'function') {
                                            items.push({
                                                title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Edit multiple cells'),
                                                onclick() {
                                                    $('.vi-ui.modal').modal('show');
                                                    if (tinymce.get('vi-wpbulky-text-editor') === null) {
                                                        wp.editor.initialize('vi-wpbulky-text-editor', _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.tinyMceOptions);
                                                    } else {
                                                        tinymce.get('vi-wpbulky-text-editor').setContent('')
                                                    }

                                                    $('.vi-wpbulky-text-editor-save').off('click').on('click', function () {
                                                        let content = wp.editor.getContent('vi-wpbulky-text-editor');
                                                        setValueToCell(obj, content);
                                                        if ($(this).hasClass('vi-wpbulky-close')) $('.vi-ui.modal').modal('hide');
                                                    });
                                                }
                                            });
                                        }

                                    }
                                }

                                if (items.length) items.push({type: 'line'});

                                if (x !== null && y !== null && cells[0] === cells[2] && cells[1] === cells[3]) {
                                    let pid = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getPostIdOfCell(obj, y);

                                    items.push({
                                        title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Duplicate'),
                                        onclick() {
                                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                                                data: {sub_action: 'duplicate_post', post_id: pid},
                                                beforeSend() {
                                                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                                                },
                                                success(res) {
                                                    if (res.data.length) {
                                                        res.data.forEach(function (item, i) {
                                                            obj.insertRow(0, y + i, true, true);
                                                            obj.setRowData(y + i, item, true);
                                                        })
                                                    }
                                                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();
                                                }
                                            });
                                        }
                                    });

                                    items.push({
                                        title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Go to edit page'),
                                        onclick() {
                                            window.open(`${_attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.adminUrl}post.php?post=${pid}&action=edit`, '_blank');
                                        }
                                    });

                                    items.push({
                                        title: _functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Preview'),
                                        onclick() {
                                            window.open(`${_attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.frontendUrl}?p=${pid}&preview=true`, '_blank');
                                        }
                                    });

                                    if (items.length) items.push({type: 'line'});
                                }

                                return items;
                            };

                    }

                    // console.log(Attributes.columns);debugger;

                    this.WorkBook = $('#vi-wpbulky-spreadsheet').jexcel({
                        allowInsertRow: false,
                        allowInsertColumn: false,
                        about: false,
                        freezeColumns: 3,
                        tableOverflow: true,
                        tableWidth: '100%',
                        tableHeight: '100%',
                        columns: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.columns,
                        stripHTML: false,
                        allowExport: false,
                        allowDeleteColumn: false,
                        allowRenameColumn: false,
                        autoIncrement: false,
                        allowXCopy: false,
                        text: {deleteSelectedRows: `${_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Delete selected rows')}`},
                        contextMenuItems,
                        onresizecolumn,
                        // lazyLoading: true,

                        onchange(instance, cell, col, row, value, oldValue) {
                            if (JSON.stringify(value) !== JSON.stringify(oldValue)) {
                                $(cell).parent().trigger('cellonchange', {cell, col, row, value});

                                let pid = this.options.data[row][0];
                                $this.compare.push(pid);
                                $this.compare = [...new Set($this.compare)];
                                $this.menubar.find('.vi-wpbulky-save-button').addClass('vi-wpbulky-saveable');

                                // if (!$this.sidebar.revision[pid]) $this.sidebar.revision[pid] = {};
                                // let columnType = _f.getColumnType(col);
                                // $this.sidebar.revision[pid][columnType] = oldValue;
                                if (!$this.revision[pid]) $this.revision[pid] = {};
                                let columnType = _functions__WEBPACK_IMPORTED_MODULE_0__["default"].getColumnType(col);
                                $this.revision[pid][columnType] = oldValue;
                            }
                        },

                        onbeforechange(instance, cell, col, row, value) {
                            if (typeof value !== 'object') {
                                value = _purify__WEBPACK_IMPORTED_MODULE_7__.sanitize(value);
                            }
                            return value;
                        },

                        ondeleterow(el, rowNumber, numOfRows, rowRecords) {
                            for (let row of rowRecords) {
                                $this.trash.push(row[0].innerText);
                            }
                            if ($this.trash.length) $this.menubar.find('.vi-wpbulky-save-button').addClass('vi-wpbulky-saveable');
                        },

                        onundo(el, historyRecord) {
                            if (historyRecord && historyRecord.action === 'deleteRow') {
                                for (let row of historyRecord.rowData) {
                                    $this.unTrash.push(row[0]);
                                }
                            }
                        },

                        onselection(el, x1, y1, x2, y2, origin) {
                            if (x1 === x2 && y1 === y2) {
                                let cell = this.getCellFromCoords(x1, y1),
                                    child = $(cell).children();

                                if (child.length && child.hasClass('vi-wpbulky-gallery-has-item')) {
                                    let ids = this.options.data[y1][x1],
                                        images = '';

                                    if (ids.length) {
                                        for (let id of ids) {
                                            let src = _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage[id];
                                            images += `<li class="vi-wpbulky-gallery-image"><img src="${src}"></li>`;
                                        }
                                    }

                                    new _modal_popup__WEBPACK_IMPORTED_MODULE_6__.Popup(`<ul class="vi-wpbulky-gallery-images">${images}</ul>`, $(cell));
                                }
                            }
                        },

                        onbeforecopy() {
                            $this.firstCellCopy = null;
                        },

                        oncopying(value, x, y) {
                            if (!$this.firstCellCopy) $this.firstCellCopy = [x, y]
                        },

                        onbeforepaste(data, selectedCell) {
                            if ($this.firstCellCopy && parseInt($this.firstCellCopy[0]) !== parseInt(selectedCell[0])) data = '';
                            return data;
                        },

                        onscroll(el) {
                            let selectOpening = $(el).find('select.select2-hidden-accessible');
                            if (selectOpening.length) selectOpening.select2('close')
                        },

                    });
                }

                closeMenu(e) {
                    this.sidebar.sidebar.removeClass('vi-wpbulky-open')
                }

                openMenu(e) {
                    let tab = $(e.currentTarget).data('menu_tab');
                    let currentTab = this.sidebar.sidebar.find(`a.item[data-tab='${tab}']`);
                    if (currentTab.hasClass('active') && this.sidebar.sidebar.hasClass('vi-wpbulky-open')) {
                        this.sidebar.sidebar.removeClass('vi-wpbulky-open');
                    } else {
                        this.sidebar.sidebar.addClass('vi-wpbulky-open');
                        currentTab.trigger('click');
                    }
                }

                addNewPost() {
                    if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].is_loading()) return;
                    let postName = prompt(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Please enter new post name'));

                    if (postName) {
                        let $this = this;
                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                            data: {sub_action: 'add_new_post', post_name: postName},
                            beforeSend() {
                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                            },
                            success(res) {
                                $this.WorkBook.insertRow(0, 0, true, true);
                                $this.WorkBook.setRowData(0, res.data, true);
                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();
                            }
                        })
                    }
                }

                addNewReply( content, new_comments ) {
                    if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].is_loading()) return;

                    let $this = this;
                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                        data: {sub_action: 'add_new_reply', content, new_comments },
                        beforeSend() {
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                        },
                        success(res) {
                            console.log(res.data);
                            $this.isAdding = false;
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();
                            $this.reloadCurrentPage();
                        },
                        error(res) {
                            console.log(res);
                            alert(res.statusText + res.responseText);
                        },
                        complete() {
                            $this.isAdding = false;
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();
                        }
                    })
                }

                toggleFullScreen(e) {
                    let body = $('.wp-admin'), screenBtn = $(e.currentTarget);
                    body.toggleClass('vi-wpbulky-full-screen');

                    if (body.hasClass('vi-wpbulky-full-screen')) {
                        screenBtn.find('i.icon').removeClass('external alternate').addClass('window close outline');
                        screenBtn.attr('title', 'Exit full screen');
                    } else {
                        screenBtn.find('i.icon').removeClass('window close outline').addClass('external alternate');
                        screenBtn.attr('title', 'Full screen');
                    }

                    $.ajax({
                        url: _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxUrl,
                        type: 'post',
                        dataType: 'json',
                        data: {
                            ..._attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.ajaxData,
                            sub_action: 'set_full_screen_option',
                            status: body.hasClass('vi-wpbulky-full-screen')
                        }
                    });
                }

                getAllRows() {
                    return this.WorkBook.getData(false, true);
                }

                save() {
                    let $this = this,
                        posts = this.getAllRows(),
                        postsForSave = [];

                    for (let pid of this.compare) {
                        for (let post of posts) {
                            if (parseInt(post[0]) === parseInt(pid)) {
                                postsForSave.push(post);
                            }
                        }
                    }

                    if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].is_loading()) return;

                    function saveStep(step = 0) {
                        let range = 20,
                            start = step * range,
                            end = start + range,
                            posts = postsForSave.slice(start, end),
                            lastStep = step * range >= postsForSave.length;

                        if ( posts.length === 0 && $this.trash.length === 0 && $this.unTrash.length === 0 && step === 0 ) {
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].notice(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('Nothing change to save'));
                            return;
                        }

                        if (lastStep && step > 0) {
                            let histories = $this.WorkBook.history;
                            if (histories.length) {
                                for (let history of histories) {
                                    if (history.action !== 'deleteRow') continue;

                                    let iForDel = [];

                                    for (let i in history.rowData) {
                                        if (history.rowData[i][1] > 0) {
                                            iForDel.push(parseInt(i));
                                        }
                                    }

                                    if (iForDel.length) {
                                        history.rowData = history.rowData.filter((item, i) => !iForDel.includes(i));
                                        history.rowNode = history.rowNode.filter((item, i) => !iForDel.includes(i));
                                        history.rowRecords = history.rowRecords.filter((item, i) => !iForDel.includes(i));
                                        history.numOfRows = history.numOfRows - iForDel.length;
                                    }
                                }
                            }

                            $this.saveRevision();
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage( {title:"Success", message: 'Saved successfully', type: "positive", duration: 3000} );
                            return;
                        }

                        let action = wpbulkyParams.postType ==='comment' ? 'save_comments' : 'save_posts';

                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                            data: {
                                sub_action: action,
                                posts: JSON.stringify(posts),
                                trash: $this.trash,
                                untrash: $this.unTrash,
                            },
                            beforeSend() {
                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                            },
                            success(res) {
                                $this.trash = [];
                                $this.unTrash = [];
                                $this.compare = [];
                                $this.menubar.find('.vi-wpbulky-save-button').removeClass('vi-wpbulky-saveable');

                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();
                                saveStep(step + 1);
                            },
                            error(res) {
                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage( {title:"Error", message: res.statusText + res.responseText, type: "negative", duration: 3000} );
                                console.log(res)
                            }
                        });
                    }

                    saveStep();
                }

                loadPosts(page = 1, reCreate = false) {
                    let $this = this;

                    if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].is_loading()) return;

                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                        data: {
                            sub_action: 'load_posts',
                            page: page,
                            re_create: reCreate
                        },
                        beforeSend() {
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                        },
                        success(res) {
                            if (res.success) {
                                _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage = res.data.img_storage;

                                if (reCreate) {
                                    $this.WorkBook.destroy();
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.setColumns(res.data.columns);
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.idMapping = res.data.idMapping;
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.idMappingFlip = res.data.idMappingFlip;
                                    $this.workBookInit();
                                }
                                $this.WorkBook.options.data = res.data.posts;
                                $this.WorkBook.setData();
                                $this.pagination(res.data.max_num_pages, page);
                                $this.WorkBook.orderAfterLoad();
                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();

                                if (!res.data.posts.length) {
                                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].notice(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('No post was found'));
                                }
                            }
                        }
                    });
                }

                loadComments( page = 1, reCreate = false ) {
                    let $this = this;

                    if (_functions__WEBPACK_IMPORTED_MODULE_0__["default"].is_loading()) return;

                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                        data: {
                            sub_action: 'load_comments',
                            page: page,
                            re_create: reCreate
                        },
                        beforeSend() {
                            _functions__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
                        },
                        success(res) {
                            if (res.success) {
                                if (reCreate) {
                                    $this.WorkBook.destroy();
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.setColumns(res.data.columns);
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.idMapping = res.data.idMapping;
                                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.idMappingFlip = res.data.idMappingFlip;
                                    $this.workBookInit();
                                }
                                $this.WorkBook.options.data = res.data.posts;
                                $this.WorkBook.setData();
                                $this.pagination(res.data.max_num_pages, page);

                                _functions__WEBPACK_IMPORTED_MODULE_0__["default"].removeLoading();

                                if (!res.data.posts.length) {
                                    _functions__WEBPACK_IMPORTED_MODULE_0__["default"].notice(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('No post was found'));
                                }
                            }
                        }
                    });
                }

                pagination(maxPage, currentPage) {
                    this.menubar.find('.vi-wpbulky-pagination').html(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].pagination(maxPage, currentPage));
                }

                changePage(e) {
                    let page = parseInt($(e.currentTarget).attr('data-page'));
                    if ($(e.currentTarget).hasClass('active') || $(e.currentTarget).hasClass('disabled') || !page) return;
                    this.loadPosts(page);
                }

                changePageByInput(e) {
                    let page = parseInt($(e.target).val());
                    let max = parseInt($(e.target).attr('max'));

                    if (page <= max && page > 0) this.loadPosts(page);
                }

                reloadCurrentPage() {
                    if ( wpbulkyParams.postType ==='comment' ) {
                        this.loadComments(this.getCurrentPage());
                    }else {
                        this.loadPosts(this.getCurrentPage());
                    }
                }

                getCurrentPage() {
                    return this.menubar.find('.vi-wpbulky-pagination .item.active').data('page') || 1;
                }

                afterAddFilter(ev, data) {
                    _attributes__WEBPACK_IMPORTED_MODULE_1__.Attributes.imgStorage = data.img_storage;
                    this.WorkBook.options.data = data.posts;
                    this.WorkBook.setData();
                    this.pagination(data.max_num_pages, 1);
                    this.WorkBook.orderAfterLoad();
                    if (!data.posts.length) _functions__WEBPACK_IMPORTED_MODULE_0__["default"].notice(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].text('No post was found'))
                }

                afterSaveSettings(ev, data) {
                    if (data.fieldsChange) {
                        if ( wpbulkyParams.postType ==='comment' ) {
                            this.loadComments(this.getCurrentPage(), true);
                        }else {
                            this.loadPosts(this.getCurrentPage(), true);
                        }
                    }
                }

                saveRevision() {
                    let $this = this;
                    if (Object.keys($this.revision).length) {
                        let currentPage = $this.sidebar.sidebar.find('.vi-wpbulky-pagination a.item.active').data('page') || 1;

                        let action = wpbulkyParams.postType ==='comment' ? 'auto_save_revision_comment' : 'auto_save_revision';

                        _functions__WEBPACK_IMPORTED_MODULE_0__["default"].ajax({
                            data: {sub_action: action, data: $this.revision, page: currentPage || 1},
                            success(res) {
                                if (res.success) {
                                    if (res.data.updatePage) $('#vi-wpbulky-history-points-list tbody').html(res.data.updatePage);
                                    $this.revision = {};
                                    $this.sidebar.sidebar.find('.vi-wpbulky-pagination').html(_functions__WEBPACK_IMPORTED_MODULE_0__["default"].pagination(res.data.pages, currentPage));
                                }
                            }
                        });
                    }
                }
            }

            new BulkEdit();

        });

    })();

    /******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsQ0FDd0c7QUFDMUcsQ0FBQyx1QkFBdUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFVBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLGFBQWE7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGtEMkM7QUFDZDtBQUM3QjtBQUNlO0FBQ2Y7QUFDQSxRQUFRLDhDQUFDO0FBQ1Q7QUFDQSx1QkFBdUIsOENBQUM7QUFDeEIsZ0NBQWdDLDhDQUFDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsV0FBVztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQUM7QUFDMUIsMEJBQTBCLDhDQUFDO0FBQzNCLHNCQUFzQixRQUFRO0FBQzlCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFDLFlBQVksOENBQUM7QUFDOUIsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUM7QUFDekI7QUFDQSxZQUFZLDhDQUFDO0FBQ2IscUJBQXFCLDhDQUFDO0FBQ3RCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksOENBQUM7QUFDYixTQUFTO0FBQ1Q7QUFDQSxzRkFBc0YsZ0JBQWdCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQUM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1EQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1EQUFVO0FBQ2hELHlEQUF5RCxrREFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOENBQUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFFO0FBQ1Y7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBQztBQUM5Qiw0QkFBNEIsbURBQVU7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFFLGVBQWUscUZBQXFGO0FBQ3RIO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4Q0FBQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBRTtBQUNWO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUM7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBQztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQUMsNEJBQTRCLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBQyxjQUFjLDhDQUFDLDRCQUE0QixXQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4Q0FBQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFFO0FBQ1YsbUJBQW1CLGlGQUFpRjtBQUNwRztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVU7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZLElBQUksNENBQTRDLEdBQUcscUJBQXFCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLFVBQVU7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsUUFBUTtBQUMxRiwrSEFBK0gsdUJBQXVCO0FBQ3RKO0FBQ0E7QUFDQSwyRUFBMkUsV0FBVztBQUN0RixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFdBQVc7QUFDckY7QUFDQTtBQUNBLDZGQUE2Rix5Q0FBeUM7QUFDdEk7QUFDQTtBQUNBLDJGQUEyRix1Q0FBdUM7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBQztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFFO0FBQ1YsbUJBQW1CLHlFQUF5RTtBQUM1RjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQVU7QUFDaEMsUUFBUSw4Q0FBQztBQUNULDBCQUEwQiw4Q0FBQztBQUMzQjtBQUNBLDZCQUE2Qiw4Q0FBQztBQUM5Qiw0QkFBNEIsOENBQUM7QUFDN0Isd0JBQXdCLDhDQUFDO0FBQ3pCO0FBQ0EsMEJBQTBCLDhDQUFDO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUM7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1EQUFVO0FBQy9DO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxZQUFZLDhDQUFDO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBRTtBQUNWLG1CQUFtQixrQ0FBa0M7QUFDckQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLEdBQUc7QUFDekY7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRSxrREFBa0QsV0FBVztBQUM3RCxrREFBa0QsV0FBVztBQUM3RDtBQUNBLGlJQUFpSSxHQUFHLG1CQUFtQixJQUFJO0FBQzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQSwyQkFBMkIsOENBQUMsOENBQThDLEtBQUs7QUFDL0U7QUFDQSxvQkFBb0IsOENBQUM7QUFDckI7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBLHNDQUFzQyxrREFBRTtBQUN4QztBQUNBLHNDQUFzQyxrREFBRSxnRUFBZ0U7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBRTtBQUNWLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUUsZUFBZSxxRkFBcUY7QUFDdEg7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFDLDhEQUE4RCw4Q0FBQztBQUM1RSxZQUFZLDhDQUFDLHVFQUF1RSw4Q0FBQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBRTtBQUNkLHVCQUF1QixvREFBb0Q7QUFDM0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQUUsZUFBZSxxRkFBcUY7QUFDMUg7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQUM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBRTtBQUNWLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUUsZUFBZSxxRkFBcUY7QUFDdEg7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFFO0FBQ1YsbUJBQW1CLDBFQUEwRTtBQUM3RjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQixrREFBRSxlQUFlLG9HQUFvRztBQUNySTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQUM7QUFDN0IsWUFBWSw4Q0FBQyx3Q0FBd0MsOENBQUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQUM7QUFDN0IsMkJBQTJCLDhDQUFDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQUU7QUFDZDtBQUNBLHVCQUF1Qiw0Q0FBNEM7QUFDbkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUM7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBRTtBQUNsQiwyQkFBMkIsaUVBQWlFO0FBQzVGO0FBQ0E7QUFDQSxnREFBZ0QsbURBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1aEJBO0FBQ0EsbUJBQW1CO0FBQ25CLGFBQWEsNkNBQTZDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQsbURBQW1ELFFBQVE7QUFDM0QsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0JBQStCO0FBQy9CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNGO0FBQ087QUFDcEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQUMsY0FBYyxtQkFBbUIsV0FBVyxtQkFBbUI7QUFDbkYsWUFBWSwrQ0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBQztBQUNoQjtBQUNBLDBEQUEwRCxrREFBRSxpQkFBaUI7QUFDN0U7QUFDQSwrRkFBK0Ysa0RBQUUsY0FBYztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNjO0FBQ0w7QUFDTjtBQUNnQjtBQUNTO0FBQ3JCO0FBQ0U7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbURBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksa0RBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBRTtBQUM5QiwwREFBMEQsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFFO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtREFBVTtBQUNqRDtBQUNBLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQWtFO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrREFBRTtBQUNyRDtBQUNBLG9EQUFvRCw4REFBa0I7QUFDdEU7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLG1EQUFtRCxrREFBRTtBQUNyRDtBQUNBLG9EQUFvRCx5REFBYztBQUNsRTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0RBQUU7QUFDckQ7QUFDQSxvREFBb0QseURBQWM7QUFDbEU7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLEVBQUUsV0FBVyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQSx1REFBdUQsa0RBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGtEQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxVQUFVO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsbURBQVU7QUFDckcsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsbURBQVU7QUFDakcsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBLDZEQUE2RCxrREFBRTtBQUMvRCwwREFBMEQsa0RBQUU7QUFDNUQsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBLHVEQUF1RCxtREFBVSxhQUFhLEtBQUssSUFBSTtBQUN2RjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtEQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsMkNBQTJDLGtEQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBLDRDQUE0QyxtREFBVTtBQUN0RDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBLDRDQUE0Qyw4REFBa0I7QUFDOUQ7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBLDRDQUE0Qyx5REFBYztBQUMxRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrREFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsbURBQVU7QUFDckcsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFFO0FBQ3BDO0FBQ0E7QUFDQSxtQ0FBbUMsa0RBQUU7QUFDckM7QUFDQSxnQ0FBZ0Msa0RBQUU7QUFDbEMsMkNBQTJDLDJDQUEyQztBQUN0RjtBQUNBLHdDQUF3QyxrREFBRTtBQUMxQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLHdDQUF3QyxrREFBRTtBQUMxQztBQUNBLGlDQUFpQztBQUNqQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFFO0FBQ3JDO0FBQ0EsK0NBQStDLG1EQUFVLFVBQVUsZ0JBQWdCLElBQUk7QUFDdkY7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLG1DQUFtQyxrREFBRTtBQUNyQztBQUNBLCtDQUErQyxtREFBVSxhQUFhLEtBQUssSUFBSTtBQUMvRTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCLGtEQUFFLDhCQUE4QixFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxzQkFBc0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0RBQUU7QUFDM0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQWtCO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtREFBVTtBQUN4RCxnR0FBZ0csSUFBSTtBQUNwRztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQUssMENBQTBDLE9BQU87QUFDdEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsSUFBSTtBQUMvRTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBRTtBQUNsQixrQ0FBa0Msa0RBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFFO0FBQ2xCLDJCQUEyQixnREFBZ0Q7QUFDM0U7QUFDQSx3QkFBd0Isa0RBQUU7QUFDMUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBRTtBQUMxQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBRTtBQUNsQjtBQUNBO0FBQ0EsWUFBWSxrREFBRTtBQUNkLHVCQUF1QixvREFBb0Q7QUFDM0U7QUFDQSxvQkFBb0Isa0RBQUU7QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBRTtBQUN0QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9CQUFvQixrREFBRTtBQUN0QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBRSxRQUFRLGtEQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBRSxlQUFlLGtGQUFrRjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSx3QkFBd0Isa0RBQUU7QUFDMUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBRTtBQUMxQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHdCQUF3QixrREFBRSxlQUFlLDZGQUE2RjtBQUN0STtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUU7QUFDbEI7QUFDQSxZQUFZLGtEQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0Isa0RBQUU7QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFVO0FBQ3RDLDRCQUE0QixtREFBVTtBQUN0Qyw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFFO0FBQzFCO0FBQ0E7QUFDQSw0QkFBNEIsa0RBQUUsUUFBUSxrREFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBRTtBQUNsQjtBQUNBLFlBQVksa0RBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9CQUFvQixrREFBRTtBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7QUFDdEMsNEJBQTRCLG1EQUFVO0FBQ3RDLDRCQUE0QixtREFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQUU7QUFDMUI7QUFDQTtBQUNBLDRCQUE0QixrREFBRSxRQUFRLGtEQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsa0RBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0RBQUUsUUFBUSxrREFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFFO0FBQ2xCLDJCQUEyQixpRUFBaUU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Ysa0RBQUU7QUFDeEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL2N1c3RvbS1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL2ZpbmQtYW5kLXJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9hc3NldHMvLi9zcmMvbW9kYWwtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLy4vc3JjL3B1cmlmeS5qcyIsIndlYnBhY2s6Ly9hc3NldHMvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9hc3NldHMvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2Fzc2V0cy8uL3NyYy90ZXh0LW11bHRpLWNlbGxzLWVkaXQuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fzc2V0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3NldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fzc2V0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fzc2V0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fzc2V0cy8uL3NyYy9lZGl0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb2x1bW5GaWx0ZXIsIGN1c3RvbUNvbHVtbn0gZnJvbSBcIi4vY3VzdG9tLWNvbHVtblwiO1xyXG5cclxuQXJyYXkucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgaXRlbXMpIHtcclxuICAgIHRoaXMuc3BsaWNlLmFwcGx5KHRoaXMsIFtpbmRleCwgMF0uY29uY2F0KGl0ZW1zKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXR0cmlidXRlcyA9IHtcclxuICAgIC4uLndwYnVsa3lQYXJhbXMsXHJcbiAgICBwb3N0VHlwZXM6IHt9LFxyXG4gICAgZmlsdGVyS2V5OiBEYXRlLm5vdygpLFxyXG4gICAgc2VsZWN0UGFnZTogMSxcclxuICAgIGFqYXhEYXRhOiB7YWN0aW9uOiAndmlfd3BidWxreV9hamF4Jywgdmlfd3BidWxreV9ub25jZTogd3BidWxreVBhcmFtcy5ub25jZX0sXHJcbiAgICB0aW55TWNlT3B0aW9uczoge1xyXG4gICAgICAgIHRpbnltY2U6IHtcclxuICAgICAgICAgICAgdGhlbWU6IFwibW9kZXJuXCIsXHJcbiAgICAgICAgICAgIHNraW46IFwibGlnaHRncmF5XCIsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiBcImVuXCIsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICAgIGFsaWdubGVmdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RvcjogXCJwLGgxLGgyLGgzLGg0LGg1LGg2LHRkLHRoLGRpdix1bCxvbCxsaVwiLCBzdHlsZXM6IHt0ZXh0QWxpZ246IFwibGVmdFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdG9yOiBcImltZyx0YWJsZSxkbC53cC1jYXB0aW9uXCIsIGNsYXNzZXM6IFwiYWxpZ25sZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25jZW50ZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0b3I6IFwicCxoMSxoMixoMyxoNCxoNSxoNix0ZCx0aCxkaXYsdWwsb2wsbGlcIiwgc3R5bGVzOiB7dGV4dEFsaWduOiBcImNlbnRlclwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdG9yOiBcImltZyx0YWJsZSxkbC53cC1jYXB0aW9uXCIsIGNsYXNzZXM6IFwiYWxpZ25jZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBhbGlnbnJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdG9yOiBcInAsaDEsaDIsaDMsaDQsaDUsaDYsdGQsdGgsZGl2LHVsLG9sLGxpXCIsIHN0eWxlczoge3RleHRBbGlnbjogXCJyaWdodFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdG9yOiBcImltZyx0YWJsZSxkbC53cC1jYXB0aW9uXCIsIGNsYXNzZXM6IFwiYWxpZ25yaWdodFwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHN0cmlrZXRocm91Z2g6IHtpbmxpbmU6IFwiZGVsXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbGF0aXZlX3VybHM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVfc2NyaXB0X2hvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb252ZXJ0X3VybHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBicm93c2VyX3NwZWxsY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIGZpeF9saXN0X2VsZW1lbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnRpdGllczogXCIzOCxhbXAsNjAsbHQsNjIsZ3RcIixcclxuICAgICAgICAgICAgZW50aXR5X2VuY29kaW5nOiBcInJhd1wiLFxyXG4gICAgICAgICAgICBrZWVwX3N0eWxlczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhY2hlX3N1ZmZpeDogXCJ3cC1tY2UtNDkxMTAtMjAyMDExMTBcIixcclxuICAgICAgICAgICAgcmVzaXplOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBicmFuZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXZpZXdfc3R5bGVzOiBcImZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXdlaWdodCBmb250LXN0eWxlIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXRyYW5zZm9ybVwiLFxyXG4gICAgICAgICAgICBlbmRfY29udGFpbmVyX29uX2VtcHR5X2Jsb2NrOiB0cnVlLFxyXG4gICAgICAgICAgICB3cGVkaXRpbWFnZV9odG1sNV9jYXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgd3BfbGFuZ19hdHRyOiBcImVuLVVTXCIsXHJcbiAgICAgICAgICAgIHdwX2tlZXBfc2Nyb2xsX3Bvc2l0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgd3Bfc2hvcnRjdXRfbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkhlYWRpbmcgMVwiOiBcImFjY2VzczFcIixcclxuICAgICAgICAgICAgICAgIFwiSGVhZGluZyAyXCI6IFwiYWNjZXNzMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJIZWFkaW5nIDNcIjogXCJhY2Nlc3MzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkhlYWRpbmcgNFwiOiBcImFjY2VzczRcIixcclxuICAgICAgICAgICAgICAgIFwiSGVhZGluZyA1XCI6IFwiYWNjZXNzNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJIZWFkaW5nIDZcIjogXCJhY2Nlc3M2XCIsXHJcbiAgICAgICAgICAgICAgICBcIlBhcmFncmFwaFwiOiBcImFjY2VzczdcIixcclxuICAgICAgICAgICAgICAgIFwiQmxvY2txdW90ZVwiOiBcImFjY2Vzc1FcIixcclxuICAgICAgICAgICAgICAgIFwiVW5kZXJsaW5lXCI6IFwibWV0YVVcIixcclxuICAgICAgICAgICAgICAgIFwiU3RyaWtldGhyb3VnaFwiOiBcImFjY2Vzc0RcIixcclxuICAgICAgICAgICAgICAgIFwiQm9sZFwiOiBcIm1ldGFCXCIsXHJcbiAgICAgICAgICAgICAgICBcIkl0YWxpY1wiOiBcIm1ldGFJXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVcIjogXCJhY2Nlc3NYXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFsaWduIGNlbnRlclwiOiBcImFjY2Vzc0NcIixcclxuICAgICAgICAgICAgICAgIFwiQWxpZ24gcmlnaHRcIjogXCJhY2Nlc3NSXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFsaWduIGxlZnRcIjogXCJhY2Nlc3NMXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1c3RpZnlcIjogXCJhY2Nlc3NKXCIsXHJcbiAgICAgICAgICAgICAgICBcIkN1dFwiOiBcIm1ldGFYXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvcHlcIjogXCJtZXRhQ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJQYXN0ZVwiOiBcIm1ldGFWXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNlbGVjdCBhbGxcIjogXCJtZXRhQVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVbmRvXCI6IFwibWV0YVpcIixcclxuICAgICAgICAgICAgICAgIFwiUmVkb1wiOiBcIm1ldGFZXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJ1bGxldCBsaXN0XCI6IFwiYWNjZXNzVVwiLFxyXG4gICAgICAgICAgICAgICAgXCJOdW1iZXJlZCBsaXN0XCI6IFwiYWNjZXNzT1wiLFxyXG4gICAgICAgICAgICAgICAgXCJJbnNlcnRcXC9lZGl0IGltYWdlXCI6IFwiYWNjZXNzTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJJbnNlcnRcXC9lZGl0IGxpbmtcIjogXCJtZXRhS1wiLFxyXG4gICAgICAgICAgICAgICAgXCJSZW1vdmUgbGlua1wiOiBcImFjY2Vzc1NcIixcclxuICAgICAgICAgICAgICAgIFwiVG9vbGJhciBUb2dnbGVcIjogXCJhY2Nlc3NaXCIsXHJcbiAgICAgICAgICAgICAgICBcIkluc2VydCBSZWFkIE1vcmUgdGFnXCI6IFwiYWNjZXNzVFwiLFxyXG4gICAgICAgICAgICAgICAgXCJJbnNlcnQgUGFnZSBCcmVhayB0YWdcIjogXCJhY2Nlc3NQXCIsXHJcbiAgICAgICAgICAgICAgICBcIkRpc3RyYWN0aW9uLWZyZWUgd3JpdGluZyBtb2RlXCI6IFwiYWNjZXNzV1wiLFxyXG4gICAgICAgICAgICAgICAgXCJBZGQgTWVkaWFcIjogXCJhY2Nlc3NNXCIsXHJcbiAgICAgICAgICAgICAgICBcIktleWJvYXJkIFNob3J0Y3V0c1wiOiBcImFjY2Vzc0hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiBcImNoYXJtYXAsY29sb3JwaWNrZXIsaHIsbGlzdHMsbWVkaWEscGFzdGUsdGFiZm9jdXMsdGV4dGNvbG9yLGZ1bGxzY3JlZW4sd29yZHByZXNzLHdwYXV0b3Jlc2l6ZSx3cGVkaXRpbWFnZSx3cGVtb2ppLHdwZ2FsbGVyeSx3cGxpbmssd3BkaWFsb2dzLHdwdGV4dHBhdHRlcm4sd3B2aWV3XCIsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIiN2aS13cGJ1bGt5LXRleHQtZWRpdG9yXCIsXHJcbiAgICAgICAgICAgIHdwYXV0b3A6IHRydWUsXHJcbiAgICAgICAgICAgIGluZGVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2xiYXIxOiBcImZvcm1hdHNlbGVjdCxib2xkLGl0YWxpYyxidWxsaXN0LG51bWxpc3QsYmxvY2txdW90ZSxhbGlnbmxlZnQsYWxpZ25jZW50ZXIsYWxpZ25yaWdodCxsaW5rLHdwX21vcmUsc3BlbGxjaGVja2VyLGZ1bGxzY3JlZW4sd3BfYWR2XCIsXHJcbiAgICAgICAgICAgIHRvb2xiYXIyOiBcInN0cmlrZXRocm91Z2gsaHIsZm9yZWNvbG9yLHBhc3RldGV4dCxyZW1vdmVmb3JtYXQsY2hhcm1hcCxvdXRkZW50LGluZGVudCx1bmRvLHJlZG8sd3BfaGVscFwiLFxyXG4gICAgICAgICAgICB0YWJmb2N1c19lbGVtZW50czogXCI6cHJldiw6bmV4dFwiLFxyXG4gICAgICAgICAgICBib2R5X2NsYXNzOiBcImV4Y2VycHQgcG9zdC10eXBlLXBvc3QgcG9zdC1zdGF0dXMtcHVibGlzaCBwYWdlLXRlbXBsYXRlLWRlZmF1bHQgbG9jYWxlLWVuLXVzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZWRpYUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgICAgcXVpY2t0YWdzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2V0Q29sdW1ucyhyYXcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IEpTT04ucGFyc2UocmF3KTtcclxuICAgICAgICAgICAgQXR0cmlidXRlcy5jb2x1bW5zID0gY29sdW1ucy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCAmJiBjb2wuZWRpdG9yICYmIGN1c3RvbUNvbHVtbltjb2wuZWRpdG9yXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5lZGl0b3IgPSBjdXN0b21Db2x1bW5bY29sLmVkaXRvcl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmVkaXRvci5vcHRpb25zID0gY29sLmVkaXRvcl9vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2wgJiYgY29sLmZpbHRlciAmJiBjb2x1bW5GaWx0ZXJbY29sLmZpbHRlcl0pIGNvbC5maWx0ZXIgPSBjb2x1bW5GaWx0ZXJbY29sLmZpbHRlcl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbndpbmRvdy5BdHRyaWJ1dGVzID0gQXR0cmlidXRlcztcclxuZXhwb3J0IGNvbnN0IEkxOG4gPSB3cGJ1bGt5STE4bi5pMThuO1xyXG5leHBvcnQgY29uc3QgJCA9IGpRdWVyeTtcclxuIiwiaW1wb3J0IHskfSBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XHJcbmltcG9ydCBfZiBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL21vZGFsLXBvcHVwXCI7XHJcblxyXG5jbGFzcyBDYWxjdWxhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgeCwgeSwgZSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9kYXRhLmpleGNlbCA9IG9iajtcclxuICAgICAgICB0aGlzLl9kYXRhLnggPSBwYXJzZUludCh4KTtcclxuICAgICAgICB0aGlzLl9kYXRhLnkgPSBwYXJzZUludCh5KTtcclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2lkXSB8fCAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBsZXQgZm9ybXVsYUh0bWwgPSB0aGlzLmNvbnRlbnQoKTtcclxuICAgICAgICBsZXQgY2VsbCA9ICQoYHRkW2RhdGEteD0ke3RoaXMuZ2V0KCd4JykgfHwgMH1dW2RhdGEteT0ke3RoaXMuZ2V0KCd5JykgfHwgMH1dYCk7XHJcbiAgICAgICAgbmV3IFBvcHVwKGZvcm11bGFIdG1sLCBjZWxsKTtcclxuICAgICAgICBmb3JtdWxhSHRtbC5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktYXBwbHktZm9ybXVsYScsIHRoaXMuYXBwbHlGb3JtdWxhLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZvcm11bGFIdG1sLm9uKCdjaGFuZ2UnLCAnLnZpLXdwYnVsa3ktcm91bmRlZCcsIHRoaXMudG9nZ2xlRGVjaW1hbFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiAkKGA8ZGl2IGNsYXNzPVwidmktd3BidWxreS1mb3JtdWxhLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidmktd3BidWxreS1vcGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiK1wiPis8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi1cIj4tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgY2xhc3M9XCJ2aS13cGJ1bGt5LXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInZpLXdwYnVsa3ktdW5pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZml4ZWRcIj5uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZXJjZW50YWdlXCI+JTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ2aS13cGJ1bGt5LXJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vX3JvdW5kXCI+JHtfZi50ZXh0KCdObyByb3VuZCcpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm91bmRcIj4ke19mLnRleHQoJ1JvdW5kIHdpdGggZGVjaW1hbCcpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm91bmRfdXBcIj4ke19mLnRleHQoJ1JvdW5kIHVwJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyb3VuZF9kb3duXCI+JHtfZi50ZXh0KCdSb3VuZCBkb3duJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiMTBcIiBjbGFzcz1cInZpLXdwYnVsa3ktZGVjaW1hbFwiIHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmktdWkgYnV0dG9uIG1pbmkgdmktd3BidWxreS1hcHBseS1mb3JtdWxhXCI+JHtfZi50ZXh0KCdPSycpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGb3JtdWxhKGUpIHtcclxuICAgICAgICBsZXQgZm9ybSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy52aS13cGJ1bGt5LWZvcm11bGEtY29udGFpbmVyJyksXHJcbiAgICAgICAgICAgIG9wZXJhdG9yID0gZm9ybS5maW5kKCcudmktd3BidWxreS1vcGVyYXRvcicpLnZhbCgpLFxyXG4gICAgICAgICAgICBmVmFsdWUgPSBwYXJzZUZsb2F0KGZvcm0uZmluZCgnLnZpLXdwYnVsa3ktdmFsdWUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHVuaXQgPSBmb3JtLmZpbmQoJy52aS13cGJ1bGt5LXVuaXQnKS52YWwoKSxcclxuICAgICAgICAgICAgcm91bmRlZCA9IGZvcm0uZmluZCgnLnZpLXdwYnVsa3ktcm91bmRlZCcpLnZhbCgpLFxyXG4gICAgICAgICAgICBkZWNpbWFsID0gcGFyc2VJbnQoZm9ybS5maW5kKCcudmktd3BidWxreS1kZWNpbWFsJykudmFsKCkpLFxyXG4gICAgICAgICAgICBleGNlbE9iaiA9IHRoaXMuZ2V0KCdqZXhjZWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCFmVmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJyZWFrQ29udHJvbCA9IGZhbHNlLCByZWNvcmRzID0gW107XHJcbiAgICAgICAgbGV0IGggPSBleGNlbE9iai5zZWxlY3RlZENvbnRhaW5lcjtcclxuICAgICAgICBsZXQgc3RhcnQgPSBoWzFdLCBlbmQgPSBoWzNdLCB4ID0gaFswXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybXVsYShvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFWYWx1ZSA9IHVuaXQgPT09ICdwZXJjZW50YWdlJyA/IG9sZFZhbHVlICogZlZhbHVlIC8gMTAwIDogZlZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBvcGVyYXRvciA9PT0gJy0nID8gb2xkVmFsdWUgLSBleHRyYVZhbHVlIDogb2xkVmFsdWUgKyBleHRyYVZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJvdW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JvdW5kJzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnRvRml4ZWQoZGVjaW1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyb3VuZF91cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBNYXRoLmNlaWwobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncm91bmRfZG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBNYXRoLmZsb29yKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnQ7IHkgPD0gZW5kOyB5KyspIHtcclxuICAgICAgICAgICAgaWYgKGV4Y2VsT2JqLnJlY29yZHNbeV1beF0gJiYgIWV4Y2VsT2JqLnJlY29yZHNbeV1beF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkb25seScpICYmIGV4Y2VsT2JqLnJlY29yZHNbeV1beF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGJyZWFrQ29udHJvbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV4Y2VsT2JqLm9wdGlvbnMuZGF0YVt5XVt4XSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5wdXNoKGV4Y2VsT2JqLnVwZGF0ZUNlbGwoeCwgeSwgZm9ybXVsYSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgICAgIGV4Y2VsT2JqLnVwZGF0ZUZvcm11bGFDaGFpbih4LCB5LCByZWNvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGhpc3RvcnlcclxuICAgICAgICBleGNlbE9iai5zZXRIaXN0b3J5KHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnc2V0VmFsdWUnLFxyXG4gICAgICAgICAgICByZWNvcmRzOiByZWNvcmRzLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IGV4Y2VsT2JqLnNlbGVjdGVkQ2VsbCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRhYmxlIHdpdGggY3VzdG9tIGNvbmZpZ3VyYXRpb24gaWYgYXBwbGljYWJsZVxyXG4gICAgICAgIGV4Y2VsT2JqLnVwZGF0ZVRhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGVjaW1hbFZhbHVlKCkge1xyXG4gICAgICAgIGxldCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCcudmktd3BidWxreS1mb3JtdWxhLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGZvcm0uZmluZCgnLnZpLXdwYnVsa3ktZGVjaW1hbCcpLmhpZGUoKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJ3JvdW5kJykgZm9ybS5maW5kKCcudmktd3BidWxreS1kZWNpbWFsJykuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyIsImltcG9ydCBfZiBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XHJcblxyXG5jb25zdCBjdXN0b21Db2x1bW4gPSB7fTtcclxuY29uc3QgY29sdW1uRmlsdGVyID0ge307XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICB3aW5kb3cudmlJc0VkaXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBtZWRpYU11bHRpcGxlID0gd3AubWVkaWEoe211bHRpcGxlOiB0cnVlfSk7XHJcbiAgICBjb25zdCBtZWRpYVNpbmdsZSA9IHdwLm1lZGlhKHttdWx0aXBsZTogZmFsc2V9KTtcclxuXHJcbiAgICBjb25zdCB0bXBsID0ge1xyXG4gICAgICAgIGdhbGxlcnlJbWFnZShzcmMsIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwidmktd3BidWxreS1nYWxsZXJ5LWltYWdlXCIgZGF0YS1pZD1cIiR7aWR9XCI+PGkgY2xhc3M9XCJ2aS13cGJ1bGt5LXJlbW92ZS1pbWFnZSBkYXNoaWNvbnMgZGFzaGljb25zLW5vLWFsdFwiPiA8L2k+PGltZyBzcmM9XCIke3NyY31cIj48L2xpPmA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmlsZURvd25sb2FkKCRfZmlsZSA9IHt9KSB7XHJcbiAgICAgICAgICAgIGxldCB7aWQsIG5hbWUsIGZpbGV9ID0gJF9maWxlO1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gJChgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJiYXJzIGljb25cIj48L2k+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LWZpbGUtbmFtZVwiIHZhbHVlPVwiJHtuYW1lIHx8ICcnfVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmktd3BidWxreS1maWxlLXVybFwiIHZhbHVlPVwiJHtmaWxlIHx8ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cInZpLXdwYnVsa3ktZmlsZS1oYXNoXCIgdmFsdWU9XCIke2lkIHx8ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aS11aSBidXR0b24gbWluaSB2aS13cGJ1bGt5LWNob29zZS1maWxlXCI+JHtfZi50ZXh0KCdDaG9vc2UgZmlsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidmktd3BidWxreS1yZW1vdmUtZmlsZSBkYXNoaWNvbnMgZGFzaGljb25zLW5vLWFsdFwiPiA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktcmVtb3ZlLWZpbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGN1c3RvbUNvbHVtbi50ZXh0RWRpdG9yID0ge1xyXG5cclxuICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIGksIHZhbHVlLCBvYmopIHtcclxuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBfZi5zdHJpcEh0bWwodmFsdWUpLnNsaWNlKDAsIDUwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2VFZGl0b3IoY2VsbCwgc2F2ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cudmlJc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgaWYgKHNhdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB3cC5lZGl0b3IuZ2V0Q29udGVudCgndmktd3BidWxreS10ZXh0LWVkaXRvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0VkaXRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cC5lZGl0b3IucmVtb3ZlKCd2aS13cGJ1bGt5LXRleHQtZWRpdG9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3cC5lZGl0b3IucmVtb3ZlKCd2aS13cGJ1bGt5LXRleHQtZWRpdG9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoIFwiI3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3JcIiApLnZhbChcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5FZGl0b3IoY2VsbCwgZWwsIG9iaikge1xyXG4gICAgICAgICAgICB3aW5kb3cudmlJc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSxcclxuICAgICAgICAgICAgICAgIHggPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gb2JqLm9wdGlvbnMuZGF0YVt5XVt4XSxcclxuICAgICAgICAgICAgICAgICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQoJy52aS11aS5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGlueW1jZUluaXQoY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAkKCcudmktd3BidWxreS10ZXh0LWVkaXRvci1zYXZlJykub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3ByaW1hcnknKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd2aS13cGJ1bGt5LWNsb3NlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudmktdWkubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2JqLmNsb3NlRWRpdG9yKGNlbGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy52aS11aS5tb2RhbCAuY2xvc2UuaWNvbicpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouY2xvc2VFZGl0b3IoY2VsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsID0gJCgnLnZpLXVpLm1vZGFsJykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIG1vZGFsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGUuZGVsZWdhdGVUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY2xvc2VFZGl0b3IoY2VsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgdmFsdWUsIGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JWYWx1ZSA9IHdwLmVkaXRvci5nZXRDb250ZW50KCd2aS13cGJ1bGt5LXRleHQtZWRpdG9yJyk7XHJcbiAgICAgICAgICAgIGlmICggZWRpdG9yVmFsdWUudHJpbSgpLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVkaXRvclZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gX2Yuc3RyaXBIdG1sKHZhbHVlKS5zbGljZSgwLCA1MCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0aW55bWNlSW5pdChjb250ZW50ID0gJycpIHtcclxuICAgICAgICAgICAgY29udGVudCA9IHdwLmVkaXRvci5hdXRvcChjb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKHRpbnltY2UuZ2V0KCd2aS13cGJ1bGt5LXRleHQtZWRpdG9yJykgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoJyN2aS13cGJ1bGt5LXRleHQtZWRpdG9yJykudmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMudGlueU1jZU9wdGlvbnMudGlueW1jZS5zZXR1cCA9IGZ1bmN0aW9uIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnZpLXdwYnVsa3ktdGV4dC1lZGl0b3Itc2F2ZTpub3QoLnZpLXdwYnVsa3ktY2xvc2UpJykuYWRkQ2xhc3MoJ3ByaW1hcnknKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd3AuZWRpdG9yLmluaXRpYWxpemUoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InLCBBdHRyaWJ1dGVzLnRpbnlNY2VPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbnltY2UuZ2V0KCd2aS13cGJ1bGt5LXRleHQtZWRpdG9yJykuc2V0Q29udGVudChjb250ZW50KVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGN1c3RvbUNvbHVtbi5pbWFnZSA9IHtcclxuICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIGksIHZhbHVlLCBvYmopIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gQXR0cmlidXRlcy5pbWdTdG9yYWdlW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIF9mLmlzVXJsKHVybCkgPyAkKGNlbGwpLmh0bWwoYDxpbWcgd2lkdGg9XCI0MFwiIHNyYz1cIiR7dXJsfVwiIGRhdGEtaWQ9XCIke3ZhbHVlfVwiPmApIDogJChjZWxsKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZUVkaXRvcihjZWxsLCBzYXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKGNlbGwpLmZpbmQoJ2ltZycpLmRhdGEoJ2lkJykgfHwgJyc7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlbkVkaXRvcihjZWxsLCBlbCwgb2JqKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU2luZ2xlLm9wZW4oKS5vZmYoJ3NlbGVjdCcpLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwbG9hZGVkSW1hZ2VzID0gbWVkaWFTaW5nbGUuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJbWFnZXMgPSB1cGxvYWRlZEltYWdlcy50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgIGlmIChfZi5pc1VybChzZWxlY3RlZEltYWdlcy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChjZWxsKS5odG1sKGA8aW1nIHdpZHRoPVwiNDBcIiBzcmM9XCIke3NlbGVjdGVkSW1hZ2VzLnVybH1cIiBkYXRhLWlkPVwiJHtzZWxlY3RlZEltYWdlcy5pZH1cIj5gKTtcclxuICAgICAgICAgICAgICAgICAgICBBdHRyaWJ1dGVzLmltZ1N0b3JhZ2Vbc2VsZWN0ZWRJbWFnZXMuaWRdID0gc2VsZWN0ZWRJbWFnZXMudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jbG9zZUVkaXRvcihjZWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlQ2VsbChjZWxsLCB2YWx1ZSwgZm9yY2UpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSkgfHwgJyc7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBBdHRyaWJ1dGVzLmltZ1N0b3JhZ2VbdmFsdWVdO1xyXG4gICAgICAgICAgICBfZi5pc1VybCh1cmwpID8gJChjZWxsKS5odG1sKGA8aW1nIHdpZHRoPVwiNDBcIiBzcmM9XCIke3VybH1cIiBkYXRhLWlkPVwiJHt2YWx1ZX1cIj5gKSA6ICQoY2VsbCkuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21Db2x1bW4uaW1hZ2V1cmwgPSB7XHJcbiAgICAgICAgY3JlYXRlQ2VsbChjZWxsLCBpLCB2YWx1ZSwgb2JqKSB7XHJcbiAgICAgICAgICAgIF9mLmlzVXJsKHZhbHVlKSA/ICQoY2VsbCkuaHRtbChgPGltZyB3aWR0aD1cIjQwXCIgc3JjPVwiJHt2YWx1ZX1cIiA+YCkgOiAkKGNlbGwpLmh0bWwoJycpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2VFZGl0b3IoY2VsbCwgc2F2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJChjZWxsKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSB8fCAnJztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvcGVuRWRpdG9yKGNlbGwsIGVsLCBvYmopIHtcclxuICAgICAgICAgICAgbWVkaWFTaW5nbGUub3BlbigpLm9mZignc2VsZWN0Jykub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBsb2FkZWRJbWFnZXMgPSBtZWRpYVNpbmdsZS5zdGF0ZSgpLmdldCgnc2VsZWN0aW9uJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEltYWdlcyA9IHVwbG9hZGVkSW1hZ2VzLnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9mLmlzVXJsKHNlbGVjdGVkSW1hZ2VzLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLmh0bWwoYDxpbWcgd2lkdGg9XCI0MFwiIHNyYz1cIiR7c2VsZWN0ZWRJbWFnZXMudXJsfVwiPmApO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jbG9zZUVkaXRvcihjZWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlQ2VsbChjZWxsLCB2YWx1ZSwgZm9yY2UpIHtcclxuICAgICAgICAgICAgX2YuaXNVcmwodmFsdWUpID8gJChjZWxsKS5odG1sKGA8aW1nIHdpZHRoPVwiNDBcIiBzcmM9XCIke3ZhbHVlfVwiID5gKSA6ICQoY2VsbCkuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21Db2x1bW4uZ2FsbGVyeSA9IHtcclxuICAgICAgICBzYXZlRGF0YShjZWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdJZHMgPSBbXTtcclxuICAgICAgICAgICAgJChjZWxsKS5maW5kKCcudmktd3BidWxreS1nYWxsZXJ5LWltYWdlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJZHMucHVzaCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChjZWxsKS5maW5kKCcudmktd3BidWxreS1pZHMtbGlzdCcpLnZhbChuZXdJZHMuam9pbignLCcpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNJdGVtID0gdmFsdWUubGVuZ3RoID8gJ3ZpLXdwYnVsa3ktZ2FsbGVyeS1oYXMtaXRlbScgOiAnJztcclxuICAgICAgICAgICAgJChjZWxsKS5odG1sKGA8ZGl2IGNsYXNzPVwidmktd3BidWxreS1nYWxsZXJ5ICR7aGFzSXRlbX1cIj48aSBjbGFzcz1cImltYWdlcyBvdXRsaW5lIGljb25cIj4gPC9pPjwvZGl2PmApO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZUVkaXRvcihjZWxsLCBzYXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoc2F2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gJChjZWxsKS5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZmluZCgnLnZpLXdwYnVsa3ktZ2FsbGVyeS1pbWFnZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goJCh0aGlzKS5kYXRhKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoY2VsbCkuZmluZCgnLnZpLXdwYnVsa3ktY2VsbC1wb3B1cCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvcGVuRWRpdG9yKGNlbGwsIGVsLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksXHJcbiAgICAgICAgICAgICAgICB4ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlkcyA9IG9iai5vcHRpb25zLmRhdGFbeV1beF0sXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBfZi5jcmVhdGVFZGl0b3IoY2VsbCwgJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzID0gJycsIGNhY2hlRWRpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBvZiBpZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gQXR0cmlidXRlcy5pbWdTdG9yYWdlW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMgKz0gdG1wbC5nYWxsZXJ5SW1hZ2Uoc3JjLCBpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnYWxsZXJ5UG9wdXAgPSAkKGA8ZGl2IGNsYXNzPVwidmktd3BidWxreS1jZWxsLXBvcHVwLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInZpLXdwYnVsa3ktZ2FsbGVyeS1pbWFnZXNcIj4ke2ltYWdlc308L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpLXVpIGJ1dHRvbiB0aW55IHZpLXdwYnVsa3ktYWRkLWltYWdlXCI+JHtfZi50ZXh0KCdBZGQgaW1hZ2UnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmktdWkgYnV0dG9uIHRpbnkgdmktd3BidWxreS1yZW1vdmUtZ2FsbGVyeVwiPiR7X2YudGV4dCgnUmVtb3ZlIGFsbCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgICAgICQoZWRpdG9yKS5hcHBlbmQoZ2FsbGVyeVBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgIGdhbGxlcnlQb3B1cC5maW5kKCcudmktd3BidWxreS1nYWxsZXJ5LWltYWdlcycpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAnbGkudmktd3BidWxreS1nYWxsZXJ5LWltYWdlJyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2Vuc2l0aXZpdHk6IDQwLFxyXG4gICAgICAgICAgICAgICAgZm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmb3JjZUhlbHBlclNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGVscGVyOiAnY2xvbmUnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd2aS13cGJ1bGt5LXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgICAgIHRvbGVyYW5jZTogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ2FsbGVyeVBvcHVwLm9uKCdjbGljaycsICcudmktd3BidWxreS1yZW1vdmUtaW1hZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdhbGxlcnlQb3B1cC5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktYWRkLWltYWdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFNdWx0aXBsZS5vcGVuKCkub2ZmKCdzZWxlY3QgY2xvc2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignc2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IG1lZGlhTXVsdGlwbGUuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoYXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudCA9IGF0dGFjaG1lbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNobWVudC50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlcy5pbWdTdG9yYWdlW2F0dGFjaG1lbnQuaWRdID0gYXR0YWNobWVudC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeVBvcHVwLmZpbmQoJy52aS13cGJ1bGt5LWdhbGxlcnktaW1hZ2VzJykuYXBwZW5kKHRtcGwuZ2FsbGVyeUltYWdlKGF0dGFjaG1lbnQudXJsLCBhdHRhY2htZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdhbGxlcnlQb3B1cC5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktcmVtb3ZlLWdhbGxlcnknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5UG9wdXAuZmluZCgnLnZpLXdwYnVsa3ktZ2FsbGVyeS1pbWFnZXMnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5UG9wdXAuZmluZCgnLnZpLXdwYnVsa3ktYWRkLWltYWdlJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgdmFsdWUsIGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gJChjZWxsKS5maW5kKCcudmktd3BidWxreS1nYWxsZXJ5Jyk7XHJcbiAgICAgICAgICAgIHZhbHVlLmxlbmd0aCA/IGljb24uYWRkQ2xhc3MoJ3ZpLXdwYnVsa3ktZ2FsbGVyeS1oYXMtaXRlbScpIDogaWNvbi5yZW1vdmVDbGFzcygndmktd3BidWxreS1nYWxsZXJ5LWhhcy1pdGVtJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21Db2x1bW4uZG93bmxvYWQgPSB7XHJcbiAgICAgICAgY3JlYXRlQ2VsbChjZWxsLCBpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAkKGNlbGwpLmh0bWwoYDxkaXY+PGkgY2xhc3M9XCJkb3dubG9hZCBpY29uXCI+IDwvaT48L2Rpdj5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2VFZGl0b3IoY2VsbCwgc2F2ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoc2F2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gJChjZWxsKS5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZmluZCgndGFibGUudmktd3BidWxreS1maWxlcy1kb3dubG9hZCB0Ym9keSB0cicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByb3cuZmluZCgnLnZpLXdwYnVsa3ktZmlsZS1oYXNoJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHJvdy5maW5kKCcudmktd3BidWxreS1maWxlLXVybCcpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByb3cuZmluZCgnLnZpLXdwYnVsa3ktZmlsZS1uYW1lJykudmFsKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5FZGl0b3IoY2VsbCwgZWwsIG9iaikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksXHJcbiAgICAgICAgICAgICAgICB4ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbGVzID0gb2JqLm9wdGlvbnMuZGF0YVt5XVt4XSxcclxuICAgICAgICAgICAgICAgIGVkaXRvciA9IF9mLmNyZWF0ZUVkaXRvcihjZWxsLCAnZGl2JyksXHJcbiAgICAgICAgICAgICAgICBjYWNoZUVkaXRpb24sIHRib2R5ID0gJCgnPHRib2R5PjwvdGJvZHk+Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxlcykpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmQodG1wbC5maWxlRG93bmxvYWQoZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsZURvd25sb2FkUG9wdXAgPSAkKGA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ2aS13cGJ1bGt5LWZpbGVzLWRvd25sb2FkIHZpLXVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4ke19mLnRleHQoJ05hbWUnKX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+JHtfZi50ZXh0KCdGaWxlIFVSTCcpfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmktdWkgYnV0dG9uIHRpbnkgdmktd3BidWxreS1hZGQtZmlsZVwiPiR7X2YudGV4dCgnQWRkIGZpbGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApO1xyXG5cclxuICAgICAgICAgICAgZmlsZURvd25sb2FkUG9wdXAuZmluZCgnLnZpLXdwYnVsa3ktZmlsZXMtZG93bmxvYWQnKS5hcHBlbmQodGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgJChlZGl0b3IpLmFwcGVuZChmaWxlRG93bmxvYWRQb3B1cCk7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5zb3J0YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgZmlsZURvd25sb2FkUG9wdXAub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LWFkZC1maWxlJywgKCkgPT4gZmlsZURvd25sb2FkUG9wdXAuZmluZCgnLnZpLXdwYnVsa3ktZmlsZXMtZG93bmxvYWQgdGJvZHknKS5hcHBlbmQodG1wbC5maWxlRG93bmxvYWQoKSkpO1xyXG5cclxuICAgICAgICAgICAgZmlsZURvd25sb2FkUG9wdXAub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LWNob29zZS1maWxlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVFZGl0aW9uID0gb2JqLmVkaXRpb247XHJcbiAgICAgICAgICAgICAgICBvYmouZWRpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1lZGlhU2luZ2xlLm9wZW4oKS5vZmYoJ3NlbGVjdCBjbG9zZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBtZWRpYVNpbmdsZS5zdGF0ZSgpLmdldCgnc2VsZWN0aW9uJykuZmlyc3QoKS50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLnVybCkgcm93LmZpbmQoJy52aS13cGJ1bGt5LWZpbGUtdXJsJykudmFsKHNlbGVjdGVkLnVybCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2Nsb3NlJywgKCkgPT4gb2JqLmVkaXRpb24gPSBjYWNoZUVkaXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlRG93bmxvYWRQb3B1cC5maW5kKCcudmktd3BidWxreS1hZGQtZmlsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVDZWxsKGNlbGwsIHZhbHVlLCBmb3JjZSkge1xyXG4gICAgICAgICAgICAkKGNlbGwpLmh0bWwoYDxkaXY+PGkgY2xhc3M9XCJkb3dubG9hZCBpY29uXCI+IDwvaT48L2Rpdj5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGN1c3RvbUNvbHVtbi5saW5rX3Bvc3RzID0ge1xyXG4gICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgaSwgdmFsdWUsIG9iaikge1xyXG4gICAgICAgICAgICBfZi5mb3JtYXRUZXh0KGNlbGwsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2VFZGl0b3IoY2VsbCwgc2F2ZSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSAkKGNlbGwpLmNoaWxkcmVuKCksIHNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoc2F2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjaGlsZC5maW5kKCdzZWxlY3QnKS5zZWxlY3QyKCdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goe2lkOiBpdGVtLmlkLCB0ZXh0OiBpdGVtLnRleHR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3QyLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlbkVkaXRvcihjZWxsLCBlbCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLFxyXG4gICAgICAgICAgICAgICAgeCA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9iai5vcHRpb25zLmRhdGFbeV1beF0sXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBfZi5jcmVhdGVFZGl0b3IoY2VsbCwgJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ID0gJCgnPHNlbGVjdC8+Jyk7XHJcblxyXG4gICAgICAgICAgICAkKGVkaXRvcikuYXBwZW5kKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Quc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF9mLnRleHQoJ1NlYXJjaCBwb3N0cy4uLicpLFxyXG4gICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogQXR0cmlidXRlcy5hamF4VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQXR0cmlidXRlcy5hamF4RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246ICdzZWFyY2hfcG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXMudGVybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwdWJsaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGlkLCB0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMucHVzaCh7aWQ6IGlkLCB0ZXh0OiB0ZXh0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogdGVybXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0LmZpbmQoJ29wdGlvbicpLmF0dHIoJ3NlbGVjdGVkJywgdHJ1ZSkucGFyZW50KCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICQoZWRpdG9yKS5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVDZWxsKGNlbGwsIHZhbHVlLCBmb3JjZSwgb2JqLCB4KSB7XHJcbiAgICAgICAgICAgIF9mLmZvcm1hdFRleHQoY2VsbCwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21Db2x1bW4uYXJyYXkgPSB7XHJcbiAgICAgICAgY3JlYXRlQ2VsbChjZWxsLCBpLCB2YWx1ZSwgb2JqKSB7XHJcbiAgICAgICAgICAgICQoY2VsbCkuaHRtbCgnPGkgY2xhc3M9XCJpY29uIGVkaXRcIi8+Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsb3NlRWRpdG9yKGNlbGwsIHNhdmUpIHtcclxuICAgICAgICAgICAgbGV0IG1ldGFkYXRhID0gW107XHJcbiAgICAgICAgICAgIGlmIChzYXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IHRoaXMuZWRpdG9yLmdldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfZi5yZW1vdmVNb2RhbChjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvcGVuRWRpdG9yKGNlbGwsIGVsLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBfZi5nZXREYXRhRnJvbUNlbGwob2JqLCBjZWxsKTtcclxuICAgICAgICAgICAgbGV0IG1vZGFsID0gX2YuY3JlYXRlTW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBfZi50ZXh0KCdFZGl0IG1ldGFkYXRhJyksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt7Y2xhc3M6ICdzYXZlLW1ldGFkYXRhJywgdGV4dDogX2YudGV4dCgnU2F2ZScpfV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChjZWxsKS5hcHBlbmQobW9kYWwpO1xyXG4gICAgICAgICAgICBtb2RhbC5maW5kKCcuY29udGVudCcpLmh0bWwoJzxkaXYgaWQ9XCJ2aS13cGJ1bGt5LWpzb25lZGl0b3JcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IG1vZGFsLmZpbmQoJyN2aS13cGJ1bGt5LWpzb25lZGl0b3InKS5nZXQoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEpTT05FZGl0b3IoY29udGFpbmVyLCB7ZW5hYmxlU29ydDogZmFsc2UsIHNlYXJjaDogZmFsc2UsIGVuYWJsZVRyYW5zZm9ybTogZmFsc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0KGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aGlzVGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1RhcmdldC5oYXNDbGFzcygnY2xvc2UnKSB8fCB0aGlzVGFyZ2V0Lmhhc0NsYXNzKCd2aS13cGJ1bGt5LW1vZGFsLWNvbnRhaW5lcicpKSBvYmouY2xvc2VFZGl0b3IoY2VsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNUYXJnZXQuaGFzQ2xhc3MoJ3NhdmUtbWV0YWRhdGEnKSkgb2JqLmNsb3NlRWRpdG9yKGNlbGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVDZWxsKGNlbGwsIHZhbHVlLCBmb3JjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY3VzdG9tQ29sdW1uLnNlbGVjdDIgPSB7XHJcbiAgICAgICAgdHlwZTogJ3NlbGVjdDInLFxyXG5cclxuICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIGksIHZhbHVlLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHtzb3VyY2V9ID0gb2JqLm9wdGlvbnMuY29sdW1uc1tpXSwgbmV3VmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBPYmplY3QudmFsdWVzKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSAmJiBzb3VyY2UubGVuZ3RoKSBuZXdWYWx1ZSA9IHNvdXJjZS5maWx0ZXIoaXRlbSA9PiB2YWx1ZS5pbmNsdWRlcyhpdGVtLmlkKSk7XHJcbiAgICAgICAgICAgIF9mLmZvcm1hdFRleHQoY2VsbCwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvcGVuRWRpdG9yKGNlbGwsIGVsLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksXHJcbiAgICAgICAgICAgICAgICB4ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmoub3B0aW9ucy5kYXRhW3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ID0gJCgnPHNlbGVjdC8+JyksXHJcbiAgICAgICAgICAgICAgICB7c291cmNlLCBtdWx0aXBsZSwgcGxhY2Vob2xkZXJ9ID0gb2JqLm9wdGlvbnMuY29sdW1uc1t4XSxcclxuICAgICAgICAgICAgICAgIGVkaXRvciA9IF9mLmNyZWF0ZUVkaXRvcihjZWxsLCAnZGl2Jywgc2VsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNvdXJjZSB8fCBbXSxcclxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3QudmFsKHZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgJChlZGl0b3IpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsb3NlRWRpdG9yKGNlbGwsIHNhdmUpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gJChjZWxsKS5jaGlsZHJlbigpLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGNoaWxkLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gIWlzTmFOKGl0ZW0pID8gK2l0ZW0gOiBpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0Mi1jb250YWluZXInKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgdmFsdWUsIGZvcmNlLCBvYmosIHgpIHtcclxuICAgICAgICAgICAgbGV0IHtzb3VyY2V9ID0gb2JqLm9wdGlvbnMuY29sdW1uc1t4XSwgbmV3VmFsdWUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkgJiYgc291cmNlLmxlbmd0aCkgbmV3VmFsdWUgPSBzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gdmFsdWUuaW5jbHVkZXMoaXRlbS5pZCkpO1xyXG5cclxuICAgICAgICAgICAgX2YuZm9ybWF0VGV4dChjZWxsLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY3VzdG9tQ29sdW1uLmFqYXhfc2VhcmNoID0ge1xyXG4gICAgICAgIHR5cGU6ICdhamF4X3NlYXJjaCcsXHJcblxyXG4gICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgaSwgdmFsdWUsIG9iaikge1xyXG4gICAgICAgICAgICBfZi5mb3JtYXRUZXh0KGNlbGwsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlbkVkaXRvcihjZWxsLCBlbCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLFxyXG4gICAgICAgICAgICAgICAgeCA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSxcclxuICAgICAgICAgICAgICAgIHt0YXhvbm9teX0gPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmoub3B0aW9ucy5kYXRhW3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ID0gJCgnPHNlbGVjdC8+JyksXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBfZi5jcmVhdGVFZGl0b3IoY2VsbCwgJ2RpdicsIHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Quc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF9mLnRleHQoJ1NlYXJjaCAuLi4nKSxcclxuICAgICAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IEF0dHJpYnV0ZXMuYWpheFVybCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQXR0cmlidXRlcy5hamF4RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246ICdhamF4X3NlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teTogdGF4b25vbXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdF90eXBlOiBBdHRyaWJ1dGVzLnBvc3RUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7cmVzdWx0czogZGF0YX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdC5maW5kKCdvcHRpb24nKS5hdHRyKCdzZWxlY3RlZCcsIHRydWUpLnBhcmVudCgpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgJChlZGl0b3IpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsb3NlRWRpdG9yKGNlbGwsIHNhdmUpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gJChjZWxsKS5jaGlsZHJlbigpLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGNoaWxkLmZpbmQoJ3NlbGVjdCcpLnNlbGVjdDIoJ2RhdGEnKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goe2lkOiBpdGVtLmlkLCB0ZXh0OiBpdGVtLnRleHR9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0Mi1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgdmFsdWUsIGZvcmNlLCBvYmosIHgpIHtcclxuICAgICAgICAgICAgX2YuZm9ybWF0VGV4dChjZWxsLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICBjb2x1bW5GaWx0ZXIuc291cmNlRm9yVmFyaWF0aW9uID0gKGVsLCBjZWxsLCB4LCB5LCBvYmopID0+IHtcclxuICAgICAgICBsZXQgc291cmNlID0gb2JqLm9wdGlvbnMuY29sdW1uc1t4XS5zb3VyY2U7XHJcbiAgICAgICAgbGV0IHBvc3RUeXBlID0gX2YuZ2V0UG9zdFR5cGVGcm9tQ2VsbChjZWxsKTtcclxuICAgICAgICBpZiAocG9zdFR5cGUgPT09ICd2YXJpYXRpb24nKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IG9iai5vcHRpb25zLmNvbHVtbnNbeF0uc3ViU291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfTtcclxuXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCB7Y3VzdG9tQ29sdW1uLCBjb2x1bW5GaWx0ZXJ9OyIsImltcG9ydCB7JH0gZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgX2YgZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9tb2RhbC1wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZEFuZFJlcGxhY2Uge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCB4LCB5LCBlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEuamV4Y2VsID0gb2JqO1xyXG4gICAgICAgIHRoaXMuX2RhdGEueCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEueSA9IHBhcnNlSW50KHkpO1xyXG4gICAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaWRdIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBsZXQgZm9ybXVsYUh0bWwgPSB0aGlzLmNvbnRlbnQoKTtcclxuICAgICAgICBsZXQgY2VsbCA9ICQoYHRkW2RhdGEteD0ke3RoaXMuZ2V0KCd4JykgfHwgMH1dW2RhdGEteT0ke3RoaXMuZ2V0KCd5JykgfHwgMH1dYCk7XHJcbiAgICAgICAgbmV3IFBvcHVwKGZvcm11bGFIdG1sLCBjZWxsKTtcclxuICAgICAgICBmb3JtdWxhSHRtbC5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktYXBwbHktZm9ybXVsYScsIHRoaXMuYXBwbHlGb3JtdWxhLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICQoYDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LWZvcm11bGEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtfZi50ZXh0KCdGaW5kJyl9XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LWZpbmQtc3RyaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtfZi50ZXh0KCdSZXBsYWNlJyl9XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LXJlcGxhY2Utc3RyaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2aS11aSBidXR0b24gbWluaSB2aS13cGJ1bGt5LWFwcGx5LWZvcm11bGFcIj4ke19mLnRleHQoJ1JlcGxhY2UnKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5Rm9ybXVsYShlKSB7XHJcbiAgICAgICAgbGV0IGZvcm0gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudmktd3BidWxreS1mb3JtdWxhLWNvbnRhaW5lcicpLFxyXG4gICAgICAgICAgICBmaW5kU3RyaW5nID0gZm9ybS5maW5kKCcudmktd3BidWxreS1maW5kLXN0cmluZycpLnZhbCgpLFxyXG4gICAgICAgICAgICByZXBsYWNlU3RyaW5nID0gZm9ybS5maW5kKCcudmktd3BidWxreS1yZXBsYWNlLXN0cmluZycpLnZhbCgpLFxyXG4gICAgICAgICAgICBleGNlbE9iaiA9IHRoaXMuZ2V0KCdqZXhjZWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCFmaW5kU3RyaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBicmVha0NvbnRyb2wgPSBmYWxzZSwgcmVjb3JkcyA9IFtdO1xyXG4gICAgICAgIGxldCBoID0gZXhjZWxPYmouc2VsZWN0ZWRDb250YWluZXI7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gaFsxXSwgZW5kID0gaFszXSwgeCA9IGhbMF07XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSBzdGFydDsgeSA8PSBlbmQ7IHkrKykge1xyXG4gICAgICAgICAgICBpZiAoZXhjZWxPYmoucmVjb3Jkc1t5XVt4XSAmJiAhZXhjZWxPYmoucmVjb3Jkc1t5XVt4XS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWRvbmx5JykgJiYgZXhjZWxPYmoucmVjb3Jkc1t5XVt4XS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgYnJlYWtDb250cm9sID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXhjZWxPYmoub3B0aW9ucy5kYXRhW3ldW3hdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWUucmVwbGFjZUFsbChmaW5kU3RyaW5nLCByZXBsYWNlU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIHJlY29yZHMucHVzaChleGNlbE9iai51cGRhdGVDZWxsKHgsIHksIG5ld1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBleGNlbE9iai51cGRhdGVGb3JtdWxhQ2hhaW4oeCwgeSwgcmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBoaXN0b3J5XHJcbiAgICAgICAgZXhjZWxPYmouc2V0SGlzdG9yeSh7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3NldFZhbHVlJyxcclxuICAgICAgICAgICAgcmVjb3JkczogcmVjb3JkcyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBleGNlbE9iai5zZWxlY3RlZENlbGwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YWJsZSB3aXRoIGN1c3RvbSBjb25maWd1cmF0aW9uIGlmIGFwcGxpY2FibGVcclxuICAgICAgICBleGNlbE9iai51cGRhdGVUYWJsZSgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7JCwgQXR0cmlidXRlcywgSTE4bn0gZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gXCIuL3RlbXBsYXRlc1wiO1xyXG5cclxuY29uc3QgX2YgPSB7XHJcbiAgICBzZXRKZXhjZWwob2JqKSB7XHJcbiAgICAgICAgdGhpcy5qZXhjZWwgPSBvYmo7XHJcbiAgICB9LFxyXG5cclxuICAgIHRleHQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIEkxOG5ba2V5XSB8fCBrZXk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzVXJsOiAodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIC9eKGh0dHAocz8pOilcXC9cXC8uKlxcLig/OmpwZ3xnaWZ8cG5nKSQvaS50ZXN0KHVybCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvcm1hdFRleHQoY2VsbCwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB2YWx1ZS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW2tdKSB0ZXh0ICs9IHZhbHVlW2tdLnRleHQgKyAnOyAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlRWRpdG9yKGNlbGwsIHR5cGUsIGNvbnRlbnQgPSAnJywgZGlzcGxheSA9IHRydWUpIHtcclxuICAgICAgICBsZXQgZWRpdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXYnKSB7XHJcbiAgICAgICAgICAgICQoZWRpdG9yKS5hcHBlbmQoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0b3Iuc3R5bGUubWluV2lkdGggPSAnMzAwcHgnO1xyXG5cclxuICAgICAgICBsZXQgcG9wdXBIZWlnaHQgPSAkKGVkaXRvcikuaW5uZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgc3RhZ2UgPSAkKGNlbGwpLm9mZnNldCgpLFxyXG4gICAgICAgICAgICB4ID0gc3RhZ2UubGVmdCxcclxuICAgICAgICAgICAgeSA9IHN0YWdlLnRvcCxcclxuICAgICAgICAgICAgY2VsbFdpZHRoID0gJChjZWxsKS5pbm5lcldpZHRoKCksXHJcbiAgICAgICAgICAgIGluZm8gPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGxheSkge1xyXG4gICAgICAgICAgICBlZGl0b3Iuc3R5bGUubWluSGVpZ2h0ID0gKGluZm8uaGVpZ2h0IC0gMikgKyAncHgnO1xyXG4gICAgICAgICAgICBlZGl0b3Iuc3R5bGUubWF4SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIHkgLSA1MCkgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgZWRpdG9yLnN0eWxlLmZvbnRTaXplID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRvci5jbGFzc0xpc3QuYWRkKCd2aS11aScsICdzZWdtZW50JywgJ3ZpLXdwYnVsa3ktY2VsbC1wb3B1cCcsICd2aS13cGJ1bGt5LWVkaXRpbmcnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xyXG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZWRpdG9yKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcHVwV2lkdGggPSAkKGVkaXRvcikuaW5uZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzLmpleGNlbC5lbCkuaW5uZXJXaWR0aCgpIDwgeCArIHBvcHVwV2lkdGggKyBjZWxsV2lkdGgpIHtcclxuICAgICAgICAgICAgbGV0IGxlZnQgPSB4IC0gcG9wdXBXaWR0aCA+IDAgPyB4IC0gcG9wdXBXaWR0aCA6IDEwO1xyXG4gICAgICAgICAgICAkKGVkaXRvcikuY3NzKCdsZWZ0JywgbGVmdCArICdweCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZWRpdG9yKS5jc3MoJ2xlZnQnLCAoeCArIGNlbGxXaWR0aCkgKyAncHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCB5ICsgcG9wdXBIZWlnaHQpIHtcclxuICAgICAgICAgICAgbGV0IGggPSB5IC0gcG9wdXBIZWlnaHQgPCAwID8gMCA6IHkgLSBwb3B1cEhlaWdodDtcclxuICAgICAgICAgICAgJChlZGl0b3IpLmNzcygndG9wJywgaCArICdweCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZWRpdG9yKS5jc3MoJ3RvcCcsIHkgKyAncHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlZGl0b3I7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU1vZGFsKGRhdGEgPSB7fSkge1xyXG4gICAgICAgIGxldCB7YWN0aW9uc30gPSBkYXRhO1xyXG4gICAgICAgIGxldCBhY3Rpb25zSHRtbCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGA8c3BhbiBjbGFzcz1cIiR7aXRlbS5jbGFzc30gdmktdWkgYnV0dG9uIHRpbnlcIj4ke2l0ZW0udGV4dH08L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICQoVGVtcGxhdGVzLm1vZGFsKHsuLi5kYXRhLCBhY3Rpb25zSHRtbH0pKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlTW9kYWwoY2VsbCkge1xyXG4gICAgICAgICQoY2VsbCkuZmluZCgnLnZpLXdwYnVsa3ktbW9kYWwtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJykucmVtb3ZlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldENvbEZyb21Db2x1bW5UeXBlKGNvbFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQXR0cmlidXRlcy5pZE1hcHBpbmdGbGlwW2NvbFR5cGVdIHx8ICcnO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRQb3N0VHlwZUZyb21DZWxsKGNlbGwpIHtcclxuICAgICAgICBsZXQgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2V0Q29sRnJvbUNvbHVtblR5cGUoJ3Bvc3RfdHlwZScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmpleGNlbC5vcHRpb25zLmRhdGFbeV1beF07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFBvc3RUeXBlRnJvbVkoeSkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRDb2xGcm9tQ29sdW1uVHlwZSgncG9zdF90eXBlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuamV4Y2VsLm9wdGlvbnMuZGF0YVt5XVt4XTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Q29sdW1uVHlwZSh4KSB7XHJcbiAgICAgICAgcmV0dXJuIEF0dHJpYnV0ZXMuaWRNYXBwaW5nW3hdXHJcbiAgICB9LFxyXG5cclxuICAgIHN0cmlwSHRtbChjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICQoYDxkaXY+JHtjb250ZW50fTwvZGl2PmApLnRleHQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0YUZyb21DZWxsKG9iaiwgY2VsbCkge1xyXG4gICAgICAgIGxldCB5ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLFxyXG4gICAgICAgICAgICB4ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG4gICAgICAgIHJldHVybiBvYmoub3B0aW9ucy5kYXRhW3ldW3hdO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRQb3N0SWRPZkNlbGwob2JqLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgbGV0IHkgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5vcHRpb25zLmRhdGFbeV1bMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5vcHRpb25zLmRhdGFbdGFyZ2V0XVswXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFqYXgoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgdXJsOiB3cGJ1bGt5UGFyYW1zLmFqYXhVcmwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICB9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5kYXRhLmFjdGlvbiA9ICd2aV93cGJ1bGt5X2FqYXgnO1xyXG4gICAgICAgIG9wdGlvbnMuZGF0YS52aV93cGJ1bGt5X25vbmNlID0gd3BidWxreVBhcmFtcy5ub25jZTtcclxuICAgICAgICBvcHRpb25zLmRhdGEucG9zdF90eXBlID0gd3BidWxreVBhcmFtcy5wb3N0VHlwZTtcclxuXHJcbiAgICAgICAgJC5hamF4KG9wdGlvbnMpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGFnaW5hdGlvbihtYXhQYWdlLCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFyc2VJbnQoY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIG1heFBhZ2UgPSBwYXJzZUludChtYXhQYWdlKTtcclxuICAgICAgICBsZXQgcGFnaW5hdGlvbiA9ICcnLFxyXG4gICAgICAgICAgICBwcmV2aW91c0Fycm93ID0gYDxhIGNsYXNzPVwiaXRlbSAke2N1cnJlbnRQYWdlID09PSAxID8gJ2Rpc2FibGVkJyA6ICcnfVwiIGRhdGEtcGFnZT1cIiR7Y3VycmVudFBhZ2UgLSAxfVwiPjxpIGNsYXNzPVwiaWNvbiBhbmdsZSBsZWZ0XCI+IDwvaT48L2E+YCxcclxuICAgICAgICAgICAgbmV4dEFycm93ID0gYDxhIGNsYXNzPVwiaXRlbSAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfVwiIGRhdGEtcGFnZT1cIiR7Y3VycmVudFBhZ2UgKyAxfVwiPjxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPiA8L2k+PC9hPmAsXHJcbiAgICAgICAgICAgIGdvVG9QYWdlID0gYDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJ2aS13cGJ1bGt5LWdvLXRvLXBhZ2VcIiB2YWx1ZT1cIiR7Y3VycmVudFBhZ2V9XCIgbWluPVwiMVwiIG1heD1cIiR7bWF4UGFnZX1cIi8+YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChbMSwgY3VycmVudFBhZ2UgLSAxLCBjdXJyZW50UGFnZSwgY3VycmVudFBhZ2UgKyAxLCBtYXhQYWdlXS5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbiArPSBgPGEgY2xhc3M9XCJpdGVtICR7Y3VycmVudFBhZ2UgPT09IGkgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtcGFnZT1cIiR7aX1cIj4ke2l9PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPT09IGN1cnJlbnRQYWdlIC0gMiAmJiBjdXJyZW50UGFnZSAtIDIgPiAxKSBwYWdpbmF0aW9uICs9IGA8YSBjbGFzcz1cIml0ZW0gZGlzYWJsZWRcIj4uLi48L2E+YDtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGN1cnJlbnRQYWdlICsgMiAmJiBjdXJyZW50UGFnZSArIDIgPCBtYXhQYWdlKSBwYWdpbmF0aW9uICs9IGA8YSBjbGFzcz1cIml0ZW0gZGlzYWJsZWRcIj4uLi48L2E+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInZpLXVpIHBhZ2luYXRpb24gbWVudVwiPiR7cHJldmlvdXNBcnJvd30gJHtwYWdpbmF0aW9ufSAke25leHRBcnJvd30gPC9kaXY+ICR7Z29Ub1BhZ2V9YDtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bpbm5lcigpIHtcclxuICAgICAgICByZXR1cm4gJCgnPHNwYW4gY2xhc3M9XCJ2aS13cGJ1bGt5LXNwaW5uZXJcIj48c3BhbiBjbGFzcz1cInZpLXdwYnVsa3ktc3Bpbm5lci1pbm5lclwiPiA8L3NwYW4+PC9zcGFuPicpXHJcbiAgICB9LFxyXG5cclxuICAgIGlzX2xvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc3Bpbm5lcjtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLl9zcGlubmVyID0gdGhpcy5zcGlubmVyKCk7XHJcbiAgICAgICAgJCgnLnZpLXdwYnVsa3ktbWVudS1iYXItY2VudGVyJykuaHRtbCh0aGlzLl9zcGlubmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLl9zcGlubmVyID0gbnVsbDtcclxuICAgICAgICAkKCcudmktd3BidWxreS1tZW51LWJhci1jZW50ZXInKS5odG1sKCcnKTtcclxuICAgIH0sXHJcblxyXG4gICAgbm90aWNlKHRleHQsIGNvbG9yID0gJ2JsYWNrJykge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gJChgPGRpdiBjbGFzcz1cInZpLXdwYnVsa3ktbm90aWNlXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiPiR7dGV4dH08L2Rpdj5gKTtcclxuICAgICAgICAkKCcudmktd3BidWxreS1tZW51LWJhci1jZW50ZXInKS5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93TWVzc2FnZSh7dGl0bGUgPSAnJywgbWVzc2FnZSA9ICcnLCB0eXBlID0gJ3Bvc2l0aXZlJywgZHVyYXRpb24gPSAzMDAwfSkge1xyXG4gICAgY29uc3QgbWFpbiA9ICQoIFwiI3ZpLXdwYnVsa3ktY29udGFpbmVyXCIgKS5maW5kKCBcIiN2aS1odWktdG9hc3RcIiApO1xyXG4gICAgaWYgKCBtYWluLmdldCgwKSApIHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9ICQoIFwiPGRpdj48L2Rpdj5cIiApO1xyXG4gICAgICAgIGNvbnN0IGF1dG9SZW1vdmVUb2FzdCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbi5maW5kKCBcIi52aS11aS5tZXNzYWdlXCIgKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCBkdXJhdGlvbiArIDEwMDAgKTtcclxuXHJcbiAgICAgICAgdG9hc3Qub24oIFwiY2xpY2tcIiwgXCIuaWNvbi5jbG9zZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBtYWluLmZpbmQoIFwiLnZpLXVpLm1lc3NhZ2VcIiApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIGF1dG9SZW1vdmVUb2FzdCApO1xyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBtYWluLmNoaWxkcmVuKCkubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgbWFpbi5maW5kKCBcIi52aS1odWktdG9hc3RcIiApLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCggYXV0b1JlbW92ZVRvYXN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKGR1cmF0aW9uIC8gMTAwMCkudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJ2h0bWwnKS5hdHRyKCdkaXInKSA9PT0gJ3J0bCcpIHtcclxuICAgICAgICAgICAgdG9hc3QuY3NzKCB7IFwiYW5pbWF0aW9uXCI6IGBzbGlkZUluUmlnaHQgZWFzZSAuM3MsIGZhZGVPdXQgbGluZWFyIDFzICR7ZGVsYXl9cyBmb3J3YXJkc2AgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmNzcyggeyBcImFuaW1hdGlvblwiOiBgc2xpZGVJbkxlZnQgZWFzZSAuM3MsIGZhZGVPdXQgbGluZWFyIDFzICR7ZGVsYXl9cyBmb3J3YXJkc2AgfSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9hc3QuYWRkQ2xhc3MoIGB2aS11aSAke3R5cGV9IG1lc3NhZ2VgICk7XHJcbiAgICAgICAgdG9hc3QuaHRtbChcclxuICAgICAgICAgICAgYDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7bWVzc2FnZX08L3A+YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICggbWFpbi5jaGlsZHJlbigpLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdEVsZVR5cGUgPSBtYWluLmZpbmQoIFwiLnZpLXVpLm1lc3NhZ2VcIiApLmZpcnN0KCkuYXR0ciggXCJjbGFzc1wiICkuc3BsaXQoL1xccysvKVsxXTtcclxuICAgICAgICAgICAgaWYgKCB0eXBlICE9PSBmaXJzdEVsZVR5cGUgKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZCggdG9hc3QgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoIHRvYXN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZjsiLCJpbXBvcnQgeyR9IGZyb20gJy4vYXR0cmlidXRlcyc7XHJcblxyXG5jbGFzcyBNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwb3B1cEluc3RhbmNlID0gbnVsbDtcclxuXHJcbmNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGNlbGwpIHtcclxuICAgICAgICBpZiAoIXBvcHVwSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWRvd24ga2V5ZG93bicsIHRoaXMubW91c2Vkb3duKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvcHVwSW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoY29udGVudCwgJChjZWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2Vkb3duKGUpIHtcclxuICAgICAgICBsZXQgdGhpc1RhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICBwb3B1cCA9ICQoJy52aS13cGJ1bGt5LWNvbnRleHQtcG9wdXAnKTtcclxuXHJcbiAgICAgICAgaWYgKGUud2hpY2g9PT0yNyB8fCAhdGhpc1RhcmdldC5oYXNDbGFzcygndmktd3BidWxreS1jb250ZXh0LXBvcHVwJykgJiYgdGhpc1RhcmdldC5jbG9zZXN0KCcudmktd3BidWxreS1jb250ZXh0LXBvcHVwJykubGVuZ3RoID09PSAwICYmIHBvcHVwLmhhc0NsYXNzKCd2aS13cGJ1bGt5LXBvcHVwLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHBvcHVwLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3ZpLXdwYnVsa3ktcG9wdXAtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjb250ZW50LCBjZWxsKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gJCgnLnZpLXdwYnVsa3ktY29udGV4dC1wb3B1cCcpLFxyXG4gICAgICAgICAgICBwb3B1cFdpZHRoID0gcG9wdXAuaW5uZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLmlubmVySGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHN0YWdlID0gY2VsbC5vZmZzZXQoKSxcclxuICAgICAgICAgICAgeCA9IHN0YWdlLmxlZnQsIHkgPSBzdGFnZS50b3AsXHJcbiAgICAgICAgICAgIGNlbGxXaWR0aCA9IGNlbGwuaW5uZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCB4ICsgcG9wdXBXaWR0aCArIGNlbGxXaWR0aCkge1xyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IHggLSBwb3B1cFdpZHRoID4gMCA/IHggLSBwb3B1cFdpZHRoIDogMTA7XHJcbiAgICAgICAgICAgIHBvcHVwLmNzcygnbGVmdCcsIGxlZnQgKyAncHgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3B1cC5jc3MoJ2xlZnQnLCAoeCArIGNlbGxXaWR0aCkgKyAncHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCB5ICsgcG9wdXBIZWlnaHQpIHtcclxuICAgICAgICAgICAgbGV0IGggPSB5IC0gcG9wdXBIZWlnaHQgPCAwID8gMCA6IHkgLSBwb3B1cEhlaWdodDtcclxuICAgICAgICAgICAgcG9wdXAuY3NzKCd0b3AnLCBoICsgJ3B4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9wdXAuY3NzKCd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3B1cC5lbXB0eSgpO1xyXG4gICAgICAgIHBvcHVwLmFkZENsYXNzKCd2aS13cGJ1bGt5LXBvcHVwLWFjdGl2ZScpLmh0bWwoY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kYWwsIFBvcHVwfSIsIi8qISBAbGljZW5zZSBET01QdXJpZnkgMy4wLjIgfCAoYykgQ3VyZTUzIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIGxpY2Vuc2UgMi4wIGFuZCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIDIuMCB8IGdpdGh1Yi5jb20vY3VyZTUzL0RPTVB1cmlmeS9ibG9iLzMuMC4yL0xJQ0VOU0UgKi9cclxuXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxyXG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XHJcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XHJcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZW50cmllcyxcclxuICAgIHNldFByb3RvdHlwZU9mLFxyXG4gICAgaXNGcm96ZW4sXHJcbiAgICBnZXRQcm90b3R5cGVPZixcclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvclxyXG4gIH0gPSBPYmplY3Q7XHJcbiAgbGV0IHtcclxuICAgIGZyZWV6ZSxcclxuICAgIHNlYWwsXHJcbiAgICBjcmVhdGVcclxuICB9ID0gT2JqZWN0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcclxuXHJcbiAgbGV0IHtcclxuICAgIGFwcGx5LFxyXG4gICAgY29uc3RydWN0XHJcbiAgfSA9IHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0O1xyXG5cclxuICBpZiAoIWFwcGx5KSB7XHJcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XHJcbiAgICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoIWZyZWV6ZSkge1xyXG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcclxuICAgICAgcmV0dXJuIHg7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFzZWFsKSB7XHJcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XHJcbiAgICAgIHJldHVybiB4O1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmICghY29uc3RydWN0KSB7XHJcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xyXG4gICAgICByZXR1cm4gbmV3IEZ1bmMoLi4uYXJncyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XHJcbiAgY29uc3QgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xyXG4gIGNvbnN0IGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xyXG4gIGNvbnN0IHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcclxuICBjb25zdCBzdHJpbmdUb1N0cmluZyA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyk7XHJcbiAgY29uc3Qgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xyXG4gIGNvbnN0IHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XHJcbiAgY29uc3Qgc3RyaW5nSW5kZXhPZiA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mKTtcclxuICBjb25zdCBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gIGNvbnN0IHJlZ0V4cFRlc3QgPSB1bmFwcGx5KFJlZ0V4cC5wcm90b3R5cGUudGVzdCk7XHJcbiAgY29uc3QgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcclxuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGhpc0FyZykge1xyXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVuY29uc3RydWN0KGZ1bmMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qIEFkZCBwcm9wZXJ0aWVzIHRvIGEgbG9va3VwIHRhYmxlICovXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXksIHRyYW5zZm9ybUNhc2VGdW5jKSB7XHJcbiAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IHRyYW5zZm9ybUNhc2VGdW5jID8gdHJhbnNmb3JtQ2FzZUZ1bmMgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcclxuXHJcbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXHJcbiAgICAgIC8vIGluZGVwZW5kZW50IG9mIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gT2JqZWN0LnByb3RvdHlwZS5cclxuICAgICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxyXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBhcnJheVtsXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBsY0VsZW1lbnQgPSB0cmFuc2Zvcm1DYXNlRnVuYyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXHJcbiAgICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xyXG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2V0O1xyXG4gIH1cclxuICAvKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xyXG5cclxuICBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIGVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld09iamVjdDtcclxuICB9XHJcbiAgLyogVGhpcyBtZXRob2QgYXV0b21hdGljYWxseSBjaGVja3MgaWYgdGhlIHByb3AgaXMgZnVuY3Rpb25cclxuICAgKiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXMgYWNjb3JkaW5nbHkuICovXHJcblxyXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcclxuICAgIHdoaWxlIChvYmplY3QgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xyXG5cclxuICAgICAgaWYgKGRlc2MpIHtcclxuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcclxuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MuZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGVzYy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2ZhbGxiYWNrIHZhbHVlIGZvcicsIGVsZW1lbnQpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGh0bWwkMSA9IGZyZWV6ZShbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVjb3JhdG9yJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0ZXInLCAnbmF2JywgJ25vYnInLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3diciddKTsgLy8gU1ZHXHJcblxyXG4gIGNvbnN0IHN2ZyQxID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcclxuICBjb25zdCBzdmdGaWx0ZXJzID0gZnJlZXplKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVJbWFnZScsICdmZU1lcmdlJywgJ2ZlTWVyZ2VOb2RlJywgJ2ZlTW9ycGhvbG9neScsICdmZU9mZnNldCcsICdmZVBvaW50TGlnaHQnLCAnZmVTcGVjdWxhckxpZ2h0aW5nJywgJ2ZlU3BvdExpZ2h0JywgJ2ZlVGlsZScsICdmZVR1cmJ1bGVuY2UnXSk7IC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cclxuICAvLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2VcclxuICAvLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cclxuICAvLyBhbGxvdy1saXN0LlxyXG5cclxuICBjb25zdCBzdmdEaXNhbGxvd2VkID0gZnJlZXplKFsnYW5pbWF0ZScsICdjb2xvci1wcm9maWxlJywgJ2N1cnNvcicsICdkaXNjYXJkJywgJ2ZlZHJvcHNoYWRvdycsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XHJcbiAgY29uc3QgbWF0aE1sJDEgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInLCAnbXByZXNjcmlwdHMnXSk7IC8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxyXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxyXG5cclxuICBjb25zdCBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xyXG4gIGNvbnN0IHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcclxuXHJcbiAgY29uc3QgaHRtbCA9IGZyZWV6ZShbJ2FjY2VwdCcsICdhY3Rpb24nLCAnYWxpZ24nLCAnYWx0JywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvcGljdHVyZWlucGljdHVyZScsICdhdXRvcGxheScsICdiYWNrZ3JvdW5kJywgJ2JnY29sb3InLCAnYm9yZGVyJywgJ2NhcHR1cmUnLCAnY2VsbHBhZGRpbmcnLCAnY2VsbHNwYWNpbmcnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzJywgJ2NsZWFyJywgJ2NvbG9yJywgJ2NvbHMnLCAnY29sc3BhbicsICdjb250cm9scycsICdjb250cm9sc2xpc3QnLCAnY29vcmRzJywgJ2Nyb3Nzb3JpZ2luJywgJ2RhdGV0aW1lJywgJ2RlY29kaW5nJywgJ2RlZmF1bHQnLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVwaWN0dXJlaW5waWN0dXJlJywgJ2Rpc2FibGVyZW1vdGVwbGF5YmFjaycsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLCAnZW5jdHlwZScsICdlbnRlcmtleWhpbnQnLCAnZmFjZScsICdmb3InLCAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmbGFuZycsICdpZCcsICdpbnB1dG1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzbWFwJywgJ2tpbmQnLCAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvYWRpbmcnLCAnbG9vcCcsICdsb3cnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtZWRpYScsICdtZXRob2QnLCAnbWluJywgJ21pbmxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsICduYW1lJywgJ25vbmNlJywgJ25vc2hhZGUnLCAnbm92YWxpZGF0ZScsICdub3dyYXAnLCAnb3BlbicsICdvcHRpbXVtJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncGxheXNpbmxpbmUnLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHViZGF0ZScsICdyYWRpb2dyb3VwJywgJ3JlYWRvbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXYnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dzJywgJ3Jvd3NwYW4nLCAnc3BlbGxjaGVjaycsICdzY29wZScsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3JjbGFuZycsICdzdGFydCcsICdzcmMnLCAnc3Jjc2V0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsICd0YWJpbmRleCcsICd0aXRsZScsICd0cmFuc2xhdGUnLCAndHlwZScsICd1c2VtYXAnLCAndmFsaWduJywgJ3ZhbHVlJywgJ3dpZHRoJywgJ3htbG5zJywgJ3Nsb3QnXSk7XHJcbiAgY29uc3Qgc3ZnID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcHBhdGh1bml0cycsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJ1bml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncHJpbWl0aXZldW5pdHMnLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGFydG9mZnNldCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAnc3lzdGVtbGFuZ3VhZ2UnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm0tb3JpZ2luJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd0ZXh0bGVuZ3RoJywgJ3R5cGUnLCAndTEnLCAndTInLCAndW5pY29kZScsICd2YWx1ZXMnLCAndmlld2JveCcsICd2aXNpYmlsaXR5JywgJ3ZlcnNpb24nLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd2lkdGgnLCAnd29yZC1zcGFjaW5nJywgJ3dyYXAnLCAnd3JpdGluZy1tb2RlJywgJ3hjaGFubmVsc2VsZWN0b3InLCAneWNoYW5uZWxzZWxlY3RvcicsICd4JywgJ3gxJywgJ3gyJywgJ3htbG5zJywgJ3knLCAneTEnLCAneTInLCAneicsICd6b29tYW5kcGFuJ10pO1xyXG4gIGNvbnN0IG1hdGhNbCA9IGZyZWV6ZShbJ2FjY2VudCcsICdhY2NlbnR1bmRlcicsICdhbGlnbicsICdiZXZlbGxlZCcsICdjbG9zZScsICdjb2x1bW5zYWxpZ24nLCAnY29sdW1ubGluZXMnLCAnY29sdW1uc3BhbicsICdkZW5vbWFsaWduJywgJ2RlcHRoJywgJ2RpcicsICdkaXNwbGF5JywgJ2Rpc3BsYXlzdHlsZScsICdlbmNvZGluZycsICdmZW5jZScsICdmcmFtZScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdsYXJnZW9wJywgJ2xlbmd0aCcsICdsaW5ldGhpY2tuZXNzJywgJ2xzcGFjZScsICdscXVvdGUnLCAnbWF0aGJhY2tncm91bmQnLCAnbWF0aGNvbG9yJywgJ21hdGhzaXplJywgJ21hdGh2YXJpYW50JywgJ21heHNpemUnLCAnbWluc2l6ZScsICdtb3ZhYmxlbGltaXRzJywgJ25vdGF0aW9uJywgJ251bWFsaWduJywgJ29wZW4nLCAncm93YWxpZ24nLCAncm93bGluZXMnLCAncm93c3BhY2luZycsICdyb3dzcGFuJywgJ3JzcGFjZScsICdycXVvdGUnLCAnc2NyaXB0bGV2ZWwnLCAnc2NyaXB0bWluc2l6ZScsICdzY3JpcHRzaXplbXVsdGlwbGllcicsICdzZWxlY3Rpb24nLCAnc2VwYXJhdG9yJywgJ3NlcGFyYXRvcnMnLCAnc3RyZXRjaHknLCAnc3Vic2NyaXB0c2hpZnQnLCAnc3Vwc2NyaXB0c2hpZnQnLCAnc3ltbWV0cmljJywgJ3ZvZmZzZXQnLCAnd2lkdGgnLCAneG1sbnMnXSk7XHJcbiAgY29uc3QgeG1sID0gZnJlZXplKFsneGxpbms6aHJlZicsICd4bWw6aWQnLCAneGxpbms6dGl0bGUnLCAneG1sOnNwYWNlJywgJ3htbG5zOnhsaW5rJ10pO1xyXG5cclxuICBjb25zdCBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcd1xcV10qfFtcXHdcXFddKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxyXG5cclxuICBjb25zdCBFUkJfRVhQUiA9IHNlYWwoLzwlW1xcd1xcV10qfFtcXHdcXFddKiU+L2dtKTtcclxuICBjb25zdCBUTVBMSVRfRVhQUiA9IHNlYWwoL1xcJHtbXFx3XFxXXSp9L2dtKTtcclxuICBjb25zdCBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG5cclxuICBjb25zdCBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuXHJcbiAgY29uc3QgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfHNtc3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbiAgKTtcclxuICBjb25zdCBJU19TQ1JJUFRfT1JfREFUQSA9IHNlYWwoL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pKTtcclxuICBjb25zdCBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XHJcbiAgKTtcclxuICBjb25zdCBET0NUWVBFX05BTUUgPSBzZWFsKC9eaHRtbCQvaSk7XHJcblxyXG4gIHZhciBFWFBSRVNTSU9OUyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICAgIF9fcHJvdG9fXzogbnVsbCxcclxuICAgIE1VU1RBQ0hFX0VYUFI6IE1VU1RBQ0hFX0VYUFIsXHJcbiAgICBFUkJfRVhQUjogRVJCX0VYUFIsXHJcbiAgICBUTVBMSVRfRVhQUjogVE1QTElUX0VYUFIsXHJcbiAgICBEQVRBX0FUVFI6IERBVEFfQVRUUixcclxuICAgIEFSSUFfQVRUUjogQVJJQV9BVFRSLFxyXG4gICAgSVNfQUxMT1dFRF9VUkk6IElTX0FMTE9XRURfVVJJLFxyXG4gICAgSVNfU0NSSVBUX09SX0RBVEE6IElTX1NDUklQVF9PUl9EQVRBLFxyXG4gICAgQVRUUl9XSElURVNQQUNFOiBBVFRSX1dISVRFU1BBQ0UsXHJcbiAgICBET0NUWVBFX05BTUU6IERPQ1RZUEVfTkFNRVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRHbG9iYWwgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcclxuICAgKiBAcGFyYW0gez9UcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9IHRydXN0ZWRUeXBlcyBUaGUgcG9saWN5IGZhY3RvcnkuXHJcbiAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdCAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeClcclxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xyXG4gICAqIGFyZSBub3Qgc3VwcG9ydGVkKS5cclxuICAgKi9cclxuXHJcblxyXG4gIGNvbnN0IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcclxuICAgIGlmICh0eXBlb2YgdHJ1c3RlZFR5cGVzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXHJcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cclxuICAgIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cclxuXHJcblxyXG4gICAgbGV0IHN1ZmZpeCA9IG51bGw7XHJcbiAgICBjb25zdCBBVFRSX05BTUUgPSAnZGF0YS10dC1wb2xpY3ktc3VmZml4JztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XHJcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XHJcbiAgICAgICAgY3JlYXRlSFRNTChodG1sKSB7XHJcbiAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVTY3JpcHRVUkwoc2NyaXB0VXJsKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAvLyBQb2xpY3kgY3JlYXRpb24gZmFpbGVkIChtb3N0IGxpa2VseSBhbm90aGVyIERPTVB1cmlmeSBzY3JpcHQgaGFzXHJcbiAgICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcclxuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxyXG4gICAgICBjb25zb2xlLndhcm4oJ1RydXN0ZWRUeXBlcyBwb2xpY3kgJyArIHBvbGljeU5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjcmVhdGVkLicpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XHJcbiAgICBsZXQgd2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBnZXRHbG9iYWwoKTtcclxuXHJcbiAgICBjb25zdCBET01QdXJpZnkgPSByb290ID0+IGNyZWF0ZURPTVB1cmlmeShyb290KTtcclxuICAgIC8qKlxyXG4gICAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xyXG4gICAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMy4wLjInO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxyXG4gICAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG5cclxuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XHJcblxyXG4gICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQubm9kZVR5cGUgIT09IDkpIHtcclxuICAgICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxyXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcclxuICAgICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBET01QdXJpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGxldCB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICB9ID0gd2luZG93O1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBEb2N1bWVudEZyYWdtZW50LFxyXG4gICAgICBIVE1MVGVtcGxhdGVFbGVtZW50LFxyXG4gICAgICBOb2RlLFxyXG4gICAgICBFbGVtZW50LFxyXG4gICAgICBOb2RlRmlsdGVyLFxyXG4gICAgICBOYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAsXHJcbiAgICAgIEhUTUxGb3JtRWxlbWVudCxcclxuICAgICAgRE9NUGFyc2VyLFxyXG4gICAgICB0cnVzdGVkVHlwZXNcclxuICAgIH0gPSB3aW5kb3c7XHJcbiAgICBjb25zdCBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XHJcbiAgICBjb25zdCBjbG9uZU5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2Nsb25lTm9kZScpO1xyXG4gICAgY29uc3QgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XHJcbiAgICBjb25zdCBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XHJcbiAgICBjb25zdCBnZXRQYXJlbnROb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdwYXJlbnROb2RlJyk7IC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxyXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXHJcbiAgICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcclxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXHJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xyXG4gICAgLy8gaXMgaW5oZXJpdGVkLlxyXG5cclxuICAgIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcblxyXG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcclxuXHJcbiAgICBjb25zdCBlbXB0eUhUTUwgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCgnJykgOiAnJztcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1wbGVtZW50YXRpb24sXHJcbiAgICAgIGNyZWF0ZU5vZGVJdGVyYXRvcixcclxuICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcclxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVcclxuICAgIH0gPSBkb2N1bWVudDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1wb3J0Tm9kZVxyXG4gICAgfSA9IG9yaWdpbmFsRG9jdW1lbnQ7XHJcbiAgICBsZXQgaG9va3MgPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxyXG4gICAgICovXHJcblxyXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGVudHJpZXMgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIE1VU1RBQ0hFX0VYUFIsXHJcbiAgICAgIEVSQl9FWFBSLFxyXG4gICAgICBUTVBMSVRfRVhQUixcclxuICAgICAgREFUQV9BVFRSLFxyXG4gICAgICBBUklBX0FUVFIsXHJcbiAgICAgIElTX1NDUklQVF9PUl9EQVRBLFxyXG4gICAgICBBVFRSX1dISVRFU1BBQ0VcclxuICAgIH0gPSBFWFBSRVNTSU9OUztcclxuICAgIGxldCB7XHJcbiAgICAgIElTX0FMTE9XRURfVVJJOiBJU19BTExPV0VEX1VSSSQxXHJcbiAgICB9ID0gRVhQUkVTU0lPTlM7XHJcbiAgICAvKipcclxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XHJcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cclxuXHJcbiAgICBsZXQgQUxMT1dFRF9UQUdTID0gbnVsbDtcclxuICAgIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi5odG1sJDEsIC4uLnN2ZyQxLCAuLi5zdmdGaWx0ZXJzLCAuLi5tYXRoTWwkMSwgLi4udGV4dF0pO1xyXG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cclxuXHJcbiAgICBsZXQgQUxMT1dFRF9BVFRSID0gbnVsbDtcclxuICAgIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFsuLi5odG1sLCAuLi5zdmcsIC4uLm1hdGhNbCwgLi4ueG1sXSk7XHJcbiAgICAvKlxyXG4gICAgICogQ29uZmlndXJlIGhvdyBET01QVXJpZnkgc2hvdWxkIGhhbmRsZSBjdXN0b20gZWxlbWVudHMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYXMgd2VsbCBhcyBjdXN0b21pemVkIGJ1aWx0LWluIGVsZW1lbnRzLlxyXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gdGFnTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBjdXN0b20gZWxlbWVudHMpXHJcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxyXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgYWxsb3cgY3VzdG9tIGVsZW1lbnRzIGRlcml2ZWQgZnJvbSBidWlsdC1pbnMgaWYgdGhleSBwYXNzIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjay4gRGVmYXVsdDogYGZhbHNlYC5cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKE9iamVjdC5jcmVhdGUobnVsbCwge1xyXG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgfSxcclxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XHJcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cclxuXHJcbiAgICBsZXQgRk9SQklEX1RBR1MgPSBudWxsO1xyXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cclxuXHJcbiAgICBsZXQgRk9SQklEX0FUVFIgPSBudWxsO1xyXG4gICAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xyXG5cclxuICAgIGxldCBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xyXG4gICAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cclxuXHJcbiAgICBsZXQgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcclxuICAgIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xyXG5cclxuICAgIGxldCBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xyXG4gICAgLyogRGVjaWRlIGlmIHNlbGYtY2xvc2luZyB0YWdzIGluIGF0dHJpYnV0ZXMgYXJlIGFsbG93ZWQuXHJcbiAgICAgKiBVc3VhbGx5IHJlbW92ZWQgZHVlIHRvIGEgbVhTUyBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXHJcblxyXG4gICAgbGV0IEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IHRydWU7XHJcbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxyXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xyXG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xyXG5cclxuICAgIGxldCBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xyXG4gICAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXHJcblxyXG4gICAgbGV0IFNFVF9DT05GSUcgPSBmYWxzZTtcclxuICAgIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxyXG4gICAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cclxuXHJcbiAgICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xyXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcclxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cclxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IFJFVFVSTl9ET00gPSBmYWxzZTtcclxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxyXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xyXG5cclxuICAgIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XHJcbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cclxuICAgICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cclxuXHJcbiAgICBsZXQgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xyXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz9cclxuICAgICAqIFRoaXMgc2FuaXRpemVzIG1hcmt1cHMgbmFtZWQgd2l0aCBjb2xsaWRpbmcsIGNsb2JiZXJhYmxlIGJ1aWx0LWluIERPTSBBUElzLlxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IFNBTklUSVpFX0RPTSA9IHRydWU7XHJcbiAgICAvKiBBY2hpZXZlIGZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiBieSBpc29sYXRpbmcgdGhlIG5hbWVzcGFjZSBvZiBuYW1lZFxyXG4gICAgICogcHJvcGVydGllcyBhbmQgSlMgdmFyaWFibGVzLCBtaXRpZ2F0aW5nIGF0dGFja3MgdGhhdCBhYnVzZSB0aGUgSFRNTC9ET00gc3BlYyBydWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBIVE1ML0RPTSBzcGVjIHJ1bGVzIHRoYXQgZW5hYmxlIERPTSBDbG9iYmVyaW5nOlxyXG4gICAgICogICAtIE5hbWVkIEFjY2VzcyBvbiBXaW5kb3cgKMKnNy4zLjMpXHJcbiAgICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxyXG4gICAgICogICAtIEZvcm0gRWxlbWVudCBQYXJlbnQtQ2hpbGQgUmVsYXRpb25zICjCpzQuMTAuMylcclxuICAgICAqICAgLSBJZnJhbWUgc3JjZG9jIC8gTmVzdGVkIFdpbmRvd1Byb3hpZXMgKMKnNC44LjUpXHJcbiAgICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXHJcbiAgICAgKlxyXG4gICAgICogTmFtZXNwYWNlIGlzb2xhdGlvbiBpcyBpbXBsZW1lbnRlZCBieSBwcmVmaXhpbmcgYGlkYCBhbmQgYG5hbWVgIGF0dHJpYnV0ZXNcclxuICAgICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XHJcbiAgICBjb25zdCBTQU5JVElaRV9OQU1FRF9QUk9QU19QUkVGSVggPSAndXNlci1jb250ZW50LSc7XHJcbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXHJcblxyXG4gICAgbGV0IEtFRVBfQ09OVEVOVCA9IHRydWU7XHJcbiAgICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxyXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXHJcblxyXG4gICAgbGV0IElOX1BMQUNFID0gZmFsc2U7XHJcbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXHJcblxyXG4gICAgbGV0IFVTRV9QUk9GSUxFUyA9IHt9O1xyXG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXHJcblxyXG4gICAgbGV0IEZPUkJJRF9DT05URU5UUyA9IG51bGw7XHJcbiAgICBjb25zdCBERUZBVUxUX0ZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2Fubm90YXRpb24teG1sJywgJ2F1ZGlvJywgJ2NvbGdyb3VwJywgJ2Rlc2MnLCAnZm9yZWlnbm9iamVjdCcsICdoZWFkJywgJ2lmcmFtZScsICdtYXRoJywgJ21pJywgJ21uJywgJ21vJywgJ21zJywgJ210ZXh0JywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAncGxhaW50ZXh0JywgJ3NjcmlwdCcsICdzdHlsZScsICdzdmcnLCAndGVtcGxhdGUnLCAndGhlYWQnLCAndGl0bGUnLCAndmlkZW8nLCAneG1wJ10pO1xyXG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXHJcblxyXG4gICAgbGV0IERBVEFfVVJJX1RBR1MgPSBudWxsO1xyXG4gICAgY29uc3QgREVGQVVMVF9EQVRBX1VSSV9UQUdTID0gYWRkVG9TZXQoe30sIFsnYXVkaW8nLCAndmlkZW8nLCAnaW1nJywgJ3NvdXJjZScsICdpbWFnZScsICd0cmFjayddKTtcclxuICAgIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXHJcblxyXG4gICAgbGV0IFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xyXG4gICAgY29uc3QgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xyXG4gICAgY29uc3QgTUFUSE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcclxuICAgIGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG4gICAgY29uc3QgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XHJcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cclxuXHJcbiAgICBsZXQgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XHJcbiAgICBsZXQgSVNfRU1QVFlfSU5QVVQgPSBmYWxzZTtcclxuICAgIC8qIEFsbG93ZWQgWEhUTUwrWE1MIG5hbWVzcGFjZXMgKi9cclxuXHJcbiAgICBsZXQgQUxMT1dFRF9OQU1FU1BBQ0VTID0gbnVsbDtcclxuICAgIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoe30sIFtNQVRITUxfTkFNRVNQQUNFLCBTVkdfTkFNRVNQQUNFLCBIVE1MX05BTUVTUEFDRV0sIHN0cmluZ1RvU3RyaW5nKTtcclxuICAgIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xyXG5cclxuICAgIGxldCBQQVJTRVJfTUVESUFfVFlQRTtcclxuICAgIGNvbnN0IFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcclxuICAgIGNvbnN0IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcclxuICAgIGxldCB0cmFuc2Zvcm1DYXNlRnVuYztcclxuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cclxuXHJcbiAgICBsZXQgQ09ORklHID0gbnVsbDtcclxuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cclxuXHJcbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXHJcblxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgY29uc3QgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRlc3RWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fCB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9wYXJzZUNvbmZpZ1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XHJcblxyXG5cclxuICAgIGNvbnN0IF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIF9wYXJzZUNvbmZpZyhjZmcpIHtcclxuICAgICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cclxuXHJcblxyXG4gICAgICBpZiAoIWNmZyB8fCB0eXBlb2YgY2ZnICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNmZyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHByb3RvdHlwZSBwb2xsdXRpb24gKi9cclxuXHJcblxyXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xyXG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xyXG4gICAgICBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTLmluZGV4T2YoY2ZnLlBBUlNFUl9NRURJQV9UWVBFKSA9PT0gLTEgPyBQQVJTRVJfTUVESUFfVFlQRSA9IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgOiBQQVJTRVJfTUVESUFfVFlQRSA9IGNmZy5QQVJTRVJfTUVESUFfVFlQRTsgLy8gSFRNTCB0YWdzIGFuZCBhdHRyaWJ1dGVzIGFyZSBub3QgY2FzZS1zZW5zaXRpdmUsIGNvbnZlcnRpbmcgdG8gbG93ZXJjYXNlLiBLZWVwaW5nIFhIVE1MIGFzIGlzLlxyXG5cclxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgPyBzdHJpbmdUb1N0cmluZyA6IHN0cmluZ1RvTG93ZXJDYXNlO1xyXG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXHJcblxyXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XHJcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcclxuICAgICAgQUxMT1dFRF9OQU1FU1BBQ0VTID0gJ0FMTE9XRURfTkFNRVNQQUNFUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX05BTUVTUEFDRVMsIHN0cmluZ1RvU3RyaW5nKSA6IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTO1xyXG4gICAgICBVUklfU0FGRV9BVFRSSUJVVEVTID0gJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxyXG4gICAgICBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XHJcbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XHJcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcclxuICAgICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XHJcbiAgICAgIERBVEFfVVJJX1RBR1MgPSAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XHJcbiAgICAgIGNmZy5BRERfREFUQV9VUklfVEFHUywgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcclxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcclxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxyXG4gICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcclxuICAgICAgRk9SQklEX0NPTlRFTlRTID0gJ0ZPUkJJRF9DT05URU5UUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTO1xyXG4gICAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XHJcbiAgICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcclxuICAgICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xyXG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXHJcblxyXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXHJcblxyXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxyXG5cclxuICAgICAgQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSID0gY2ZnLkFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxyXG5cclxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxyXG5cclxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcclxuXHJcbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxyXG5cclxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXHJcblxyXG4gICAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcclxuXHJcbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxyXG5cclxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxyXG5cclxuICAgICAgU0FOSVRJWkVfTkFNRURfUFJPUFMgPSBjZmcuU0FOSVRJWkVfTkFNRURfUFJPUFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcclxuXHJcbiAgICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcclxuXHJcbiAgICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXHJcblxyXG4gICAgICBJU19BTExPV0VEX1VSSSQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSTtcclxuICAgICAgTkFNRVNQQUNFID0gY2ZnLk5BTUVTUEFDRSB8fCBIVE1MX05BTUVTUEFDRTtcclxuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgfHwge307XHJcblxyXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XHJcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKSkge1xyXG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgdHlwZW9mIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcclxuICAgICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcclxuICAgICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cclxuXHJcblxyXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XHJcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi50ZXh0XSk7XHJcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gW107XHJcblxyXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sJDEpO1xyXG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2ZyQxKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnRmlsdGVycyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIG1hdGhNbCQxKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sKTtcclxuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXHJcblxyXG5cclxuICAgICAgaWYgKGNmZy5BRERfVEFHUykge1xyXG4gICAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XHJcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNmZy5BRERfQVRUUikge1xyXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XHJcbiAgICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xyXG4gICAgICAgIGFkZFRvU2V0KFVSSV9TQUZFX0FUVFJJQlVURVMsIGNmZy5BRERfVVJJX1NBRkVfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xyXG4gICAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XHJcbiAgICAgICAgICBGT1JCSURfQ09OVEVOVFMgPSBjbG9uZShGT1JCSURfQ09OVEVOVFMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XHJcbiAgICAgIH1cclxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXHJcblxyXG5cclxuICAgICAgaWYgKEtFRVBfQ09OVEVOVCkge1xyXG4gICAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xyXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcclxuICAgICAgfVxyXG4gICAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXHJcblxyXG5cclxuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xyXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcclxuICAgICAgICBkZWxldGUgRk9SQklEX1RBR1MudGJvZHk7XHJcbiAgICAgIH0gLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxyXG4gICAgICAvLyBOb3QgYXZhaWxhYmxlIGluIElFOCwgU2FmYXJpIDUsIGV0Yy5cclxuXHJcblxyXG4gICAgICBpZiAoZnJlZXplKSB7XHJcbiAgICAgICAgZnJlZXplKGNmZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIENPTkZJRyA9IGNmZztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XHJcbiAgICBjb25zdCBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTsgLy8gQ2VydGFpbiBlbGVtZW50cyBhcmUgYWxsb3dlZCBpbiBib3RoIFNWRyBhbmQgSFRNTFxyXG4gICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XHJcbiAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IGVycm9uZW91c2x5IGRlbGV0ZWQgZnJvbVxyXG4gICAgLy8gSFRNTCBuYW1lc3BhY2UuXHJcblxyXG4gICAgY29uc3QgQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UUyA9IGFkZFRvU2V0KHt9LCBbJ3RpdGxlJywgJ3N0eWxlJywgJ2ZvbnQnLCAnYScsICdzY3JpcHQnXSk7XHJcbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXHJcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXHJcbiAgICAgKiBjb3JyZWN0bHkuICovXHJcblxyXG4gICAgY29uc3QgQUxMX1NWR19UQUdTID0gYWRkVG9TZXQoe30sIHN2ZyQxKTtcclxuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRmlsdGVycyk7XHJcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0Rpc2FsbG93ZWQpO1xyXG4gICAgY29uc3QgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCQxKTtcclxuICAgIGFkZFRvU2V0KEFMTF9NQVRITUxfVEFHUywgbWF0aE1sRGlzYWxsb3dlZCk7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCBhIERPTSBlbGVtZW50IHdob3NlIG5hbWVzcGFjZSBpcyBiZWluZyBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXHJcbiAgICAgKiAgbmFtZXNwYWNlIHRoYXQgYSBzcGVjLWNvbXBsaWFudCBwYXJzZXIgd291bGQgbmV2ZXJcclxuICAgICAqICByZXR1cm4uIFJldHVybiB0cnVlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xyXG4gICAgICBsZXQgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTsgLy8gSW4gSlNET00sIGlmIHdlJ3JlIGluc2lkZSBzaGFkb3cgRE9NLCB0aGVuIHBhcmVudE5vZGVcclxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cclxuXHJcbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xyXG4gICAgICAgIHBhcmVudCA9IHtcclxuICAgICAgICAgIG5hbWVzcGFjZVVSSTogTkFNRVNQQUNFLFxyXG4gICAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xyXG4gICAgICBjb25zdCBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xyXG5cclxuICAgICAgaWYgKCFBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcclxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gU1ZHXHJcbiAgICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXHJcbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cclxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcclxuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcclxuICAgICAgICB9IC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYWBcclxuICAgICAgICAvLyBzdmcgaWYgcGFyZW50IGlzIGVpdGhlciA8YW5ub3RhdGlvbi14bWw+IG9yIE1hdGhNTFxyXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxyXG5cclxuXHJcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcclxuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xyXG4gICAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xyXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gU1ZHIG5hbWVzcGFjZS5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xyXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBNYXRoTUxcclxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXHJcbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cclxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcclxuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XHJcbiAgICAgICAgfSAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIE1hdGhNTCBpcyB2aWFcclxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXHJcblxyXG5cclxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcclxuICAgICAgICB9IC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcclxuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIE1hdGhNTCBuYW1lc3BhY2UuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XHJcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxyXG4gICAgICAgIC8vIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzLCBhbmQgZnJvbSBNYXRoTUwgdG8gSFRNTFxyXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcclxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFICYmICFNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxyXG4gICAgICAgIC8vIG9yIFNWRyBhbmQgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiBIVE1MIG5hbWVzcGFjZVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKENPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFNbdGFnTmFtZV0gfHwgIUFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XHJcbiAgICAgIH0gLy8gRm9yIFhIVE1MIGFuZCBYTUwgZG9jdW1lbnRzIHRoYXQgc3VwcG9ydCBjdXN0b20gbmFtZXNwYWNlc1xyXG5cclxuXHJcbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IC8vIFRoZSBjb2RlIHNob3VsZCBuZXZlciByZWFjaCB0aGlzIHBsYWNlICh0aGlzIG1lYW5zXHJcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XHJcbiAgICAgIC8vIEhUTUwsIFNWRywgTWF0aE1MIG9yIGFsbG93ZWQgdmlhIEFMTE9XRURfTkFNRVNQQUNFUykuXHJcbiAgICAgIC8vIFJldHVybiBmYWxzZSBqdXN0IGluIGNhc2UuXHJcblxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogX2ZvcmNlUmVtb3ZlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgY29uc3QgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcclxuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XHJcbiAgICAgICAgZWxlbWVudDogbm9kZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcclxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIGNvbnN0IF9yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIG5vZGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcclxuICAgICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxyXG4gICAgICAgICAgZnJvbTogbm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXHJcbiAgICAgICAgICBmcm9tOiBub2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcclxuXHJcbiAgICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcclxuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XHJcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogX2luaXREb2N1bWVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGlydHkgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXHJcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBjb25zdCBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xyXG4gICAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXHJcbiAgICAgIGxldCBkb2M7XHJcbiAgICAgIGxldCBsZWFkaW5nV2hpdGVzcGFjZTtcclxuXHJcbiAgICAgIGlmIChGT1JDRV9CT0RZKSB7XHJcbiAgICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcclxuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XHJcbiAgICAgICAgLy8gUm9vdCBvZiBYSFRNTCBkb2MgbXVzdCBjb250YWluIHhtbG5zIGRlY2xhcmF0aW9uIChzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hodG1sMS9ub3JtYXRpdmUuaHRtbCNzdHJpY3QpXHJcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xyXG4gICAgICAvKlxyXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcclxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgKi9cclxuXHJcbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XHJcbiAgICAgICAgfSBjYXRjaCAoXykge31cclxuICAgICAgfVxyXG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cclxuXHJcblxyXG4gICAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KE5BTUVTUEFDRSwgJ3RlbXBsYXRlJywgbnVsbCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gZW1wdHlIVE1MIDogZGlydHlQYXlsb2FkO1xyXG4gICAgICAgIH0gY2F0Y2ggKF8pIHsvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChkaXJ0eSAmJiBsZWFkaW5nV2hpdGVzcGFjZSkge1xyXG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogX2NyZWF0ZUl0ZXJhdG9yXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnR9IHJvb3QgZG9jdW1lbnQvZnJhZ21lbnQgdG8gY3JlYXRlIGl0ZXJhdG9yIGZvclxyXG4gICAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LCByb290LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9pc0Nsb2JiZXJlZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgY29uc3QgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gX2lzQ2xvYmJlcmVkKGVsbSkge1xyXG4gICAgICByZXR1cm4gZWxtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLmhhc0NoaWxkTm9kZXMgIT09ICdmdW5jdGlvbicpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogX2lzTm9kZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBjb25zdCBfaXNOb2RlID0gZnVuY3Rpb24gX2lzTm9kZShvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBOb2RlID09PSAnb2JqZWN0JyA/IG9iamVjdCBpbnN0YW5jZW9mIE5vZGUgOiBvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBfZXhlY3V0ZUhvb2tcclxuICAgICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxyXG4gICAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xyXG4gICAgICovXHJcblxyXG5cclxuICAgIGNvbnN0IF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xyXG4gICAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGhvb2sgPT4ge1xyXG4gICAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcclxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XHJcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxyXG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgY29uc3QgX3Nhbml0aXplRWxlbWVudHMgPSBmdW5jdGlvbiBfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkge1xyXG4gICAgICBsZXQgY29udGVudDtcclxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xyXG5cclxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xyXG4gICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XHJcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XHJcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cclxuXHJcbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XHJcbiAgICAgICAgdGFnTmFtZSxcclxuICAgICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXHJcbiAgICAgIH0pO1xyXG4gICAgICAvKiBEZXRlY3QgbVhTUyBhdHRlbXB0cyBhYnVzaW5nIG5hbWVzcGFjZSBjb25mdXNpb24gKi9cclxuXHJcblxyXG4gICAgICBpZiAoY3VycmVudE5vZGUuaGFzQ2hpbGROb2RlcygpICYmICFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXHJcblxyXG5cclxuICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcclxuICAgICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXHJcbiAgICAgICAgaWYgKCFGT1JCSURfVEFHU1t0YWdOYW1lXSAmJiBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xyXG5cclxuXHJcbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5jaGlsZE5vZGVzO1xyXG5cclxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRDb3VudCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSwgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLyogQ2hlY2sgd2hldGhlciBlbGVtZW50IGhhcyBhIHZhbGlkIG5hbWVzcGFjZSAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChjdXJyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgIV9jaGVja1ZhbGlkTmFtZXNwYWNlKGN1cnJlbnROb2RlKSkge1xyXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIE1ha2Ugc3VyZSB0aGF0IG9sZGVyIGJyb3dzZXJzIGRvbid0IGdldCBub3NjcmlwdCBtWFNTICovXHJcblxyXG5cclxuICAgICAgaWYgKCh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8IHRhZ05hbWUgPT09ICdub2VtYmVkJykgJiYgcmVnRXhwVGVzdCgvPFxcL25vKHNjcmlwdHxlbWJlZCkvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xyXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXHJcblxyXG5cclxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xyXG4gICAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcclxuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBNVVNUQUNIRV9FWFBSLCAnICcpO1xyXG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSLCAnICcpO1xyXG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIFRNUExJVF9FWFBSLCAnICcpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcclxuICAgICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cclxuXHJcblxyXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG5cclxuXHJcbiAgICBjb25zdCBfaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSB7XHJcbiAgICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cclxuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXHJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgWE1MLWNvbXBhdGlibGUgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjeG1sLWNvbXBhdGlibGUgYW5kIGh0dHA6Ly93d3cudzMub3JnL1RSL3htbC8jZDBlODA0KVxyXG4gICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIsIGxjTmFtZSkpIDsgZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIHJlZ0V4cFRlc3QoQVJJQV9BVFRSLCBsY05hbWUpKSA7IGVsc2UgaWYgKCFBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCBGT1JCSURfQVRUUltsY05hbWVdKSB7XHJcbiAgICAgICAgaWYgKCAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxyXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXHJcbiAgICAgICAgLy8gYW5kIGMpIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVja1xyXG4gICAgICAgIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHwgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxyXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xyXG4gICAgICAgIGxjTmFtZSA9PT0gJ2lzJyAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdmFsdWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh2YWx1ZSkpKSA7IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSA7IGVsc2UgaWYgKHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkkkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKSkgOyBlbHNlIGlmICghdmFsdWUpIDsgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9iYXNpY0N1c3RvbUVsZW1lbnRDaGVja1xyXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxyXG4gICAgICogZm9yIG1vcmUgc29waGlzdGljYXRlZCBjaGVja2luZyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy92YWxpZGF0ZS1lbGVtZW50LW5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbm9kZSB0byBzYW5pdGl6ZVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIGNvbnN0IF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xyXG4gICAgICByZXR1cm4gdGFnTmFtZS5pbmRleE9mKCctJykgPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xyXG4gICAgICpcclxuICAgICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcclxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXHJcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcclxuICAgICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgY29uc3QgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcclxuICAgICAgbGV0IGF0dHI7XHJcbiAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgbGV0IGxjTmFtZTtcclxuICAgICAgbGV0IGw7XHJcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cclxuXHJcbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGF0dHJpYnV0ZXNcclxuICAgICAgfSA9IGN1cnJlbnROb2RlO1xyXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXHJcblxyXG4gICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGhvb2tFdmVudCA9IHtcclxuICAgICAgICBhdHRyTmFtZTogJycsXHJcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcclxuICAgICAgICBrZWVwQXR0cjogdHJ1ZSxcclxuICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXHJcbiAgICAgIH07XHJcbiAgICAgIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDtcclxuICAgICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgbmFtZXNwYWNlVVJJXHJcbiAgICAgICAgfSA9IGF0dHI7XHJcbiAgICAgICAgdmFsdWUgPSBuYW1lID09PSAndmFsdWUnID8gYXR0ci52YWx1ZSA6IHN0cmluZ1RyaW0oYXR0ci52YWx1ZSk7XHJcbiAgICAgICAgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XHJcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xyXG5cclxuICAgICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XHJcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XHJcbiAgICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XHJcblxyXG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XHJcblxyXG4gICAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcclxuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cclxuXHJcbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xyXG5cclxuXHJcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXHJcblxyXG5cclxuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCFBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgJiYgcmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcclxuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXHJcblxyXG5cclxuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XHJcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIEVSQl9FWFBSLCAnICcpO1xyXG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBUTVBMSVRfRVhQUiwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXHJcblxyXG5cclxuICAgICAgICBjb25zdCBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXHJcbiAgICAgICAgICogUHJlZml4IGlkIGFuZCBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgdXNlci1jb250ZW50LWBcclxuICAgICAgICAgKi9cclxuXHJcblxyXG4gICAgICAgIGlmIChTQU5JVElaRV9OQU1FRF9QUk9QUyAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSkge1xyXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXHJcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTsgLy8gUHJlZml4IHRoZSB2YWx1ZSBhbmQgbGF0ZXIgcmUtY3JlYXRlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FuaXRpemVkIHZhbHVlXHJcblxyXG5cclxuICAgICAgICAgIHZhbHVlID0gU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEhhbmRsZSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBUcnVzdGVkIFR5cGVzICovXHJcblxyXG5cclxuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICYmIHR5cGVvZiB0cnVzdGVkVHlwZXMgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkgOyBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZShsY1RhZywgbGNOYW1lKSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRIVE1MJzpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xyXG5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoXykge31cclxuICAgICAgfVxyXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXHJcblxyXG5cclxuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIGNvbnN0IF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xyXG4gICAgICBsZXQgc2hhZG93Tm9kZTtcclxuXHJcbiAgICAgIGNvbnN0IHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcclxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xyXG5cclxuXHJcbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XHJcblxyXG4gICAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXHJcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XHJcbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cclxuXHJcblxyXG4gICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcclxuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cclxuXHJcblxyXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xyXG5cclxuXHJcbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNhbml0aXplXHJcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XHJcblxyXG5cclxuICAgIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSkge1xyXG4gICAgICBsZXQgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuICAgICAgbGV0IGJvZHk7XHJcbiAgICAgIGxldCBpbXBvcnRlZE5vZGU7XHJcbiAgICAgIGxldCBjdXJyZW50Tm9kZTtcclxuICAgICAgbGV0IHJldHVybk5vZGU7XHJcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxyXG4gICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcclxuICAgICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xyXG5cclxuICAgICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XHJcblxyXG4gICAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcclxuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XHJcbiAgICAgIH1cclxuICAgICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xyXG5cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBSZXR1cm4gZGlydHkgSFRNTCBpZiBET01QdXJpZnkgY2Fubm90IHJ1biAqL1xyXG5cclxuXHJcbiAgICAgIGlmICghRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEFzc2lnbiBjb25maWcgdmFycyAqL1xyXG5cclxuXHJcbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xyXG4gICAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cclxuXHJcblxyXG4gICAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xyXG4gICAgICAvKiBDaGVjayBpZiBkaXJ0eSBpcyBjb3JyZWN0bHkgdHlwZWQgZm9yIElOX1BMQUNFICovXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIElOX1BMQUNFID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChJTl9QTEFDRSkge1xyXG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xyXG4gICAgICAgIGlmIChkaXJ0eS5ub2RlTmFtZSkge1xyXG4gICAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3Jvb3Qgbm9kZSBpcyBmb3JiaWRkZW4gYW5kIGNhbm5vdCBiZSBzYW5pdGl6ZWQgaW4tcGxhY2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXHJcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xyXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tLS0+Jyk7XHJcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cclxuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxyXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xyXG4gICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcclxuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xyXG5cclxuXHJcbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xyXG4gICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXHJcblxyXG4gICAgICAgIGlmICghYm9keSkge1xyXG4gICAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogUkVUVVJOX1RSVVNURURfVFlQRSA/IGVtcHR5SFRNTCA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChib2R5ICYmIEZPUkNFX0JPRFkpIHtcclxuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XHJcbiAgICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xyXG5cclxuXHJcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cclxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cclxuXHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xyXG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cclxuXHJcblxyXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXHJcblxyXG5cclxuICAgICAgaWYgKElOX1BMQUNFKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xyXG5cclxuXHJcbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XHJcbiAgICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcclxuICAgICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcclxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCB8fCBBTExPV0VEX0FUVFIuc2hhZG93cm9vdG1vZCkge1xyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcclxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXHJcbiAgICAgICAgICAgIGluIHRoZW9yeSBidXQgd2Ugd291bGQgcmF0aGVyIG5vdCByaXNrIGFub3RoZXIgYXR0YWNrIHZlY3Rvci5cclxuICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcclxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0dXJuTm9kZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xyXG4gICAgICAvKiBTZXJpYWxpemUgZG9jdHlwZSBpZiBhbGxvd2VkICovXHJcblxyXG4gICAgICBpZiAoV0hPTEVfRE9DVU1FTlQgJiYgQUxMT1dFRF9UQUdTWychZG9jdHlwZSddICYmIGJvZHkub3duZXJEb2N1bWVudCAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZSAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICYmIHJlZ0V4cFRlc3QoRE9DVFlQRV9OQU1FLCBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lKSkge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gJzwhRE9DVFlQRSAnICsgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSArICc+XFxuJyArIHNlcmlhbGl6ZWRIVE1MO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXHJcblxyXG5cclxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiwgJyAnKTtcclxuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIEVSQl9FWFBSLCAnICcpO1xyXG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgVE1QTElUX0VYUFIsICcgJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxyXG4gICAgICogc2V0Q29uZmlnXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAgICovXHJcblxyXG5cclxuICAgIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XHJcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xyXG5cclxuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSB0aGUgY29uZmlndXJhdGlvblxyXG4gICAgICogY2xlYXJDb25maWdcclxuICAgICAqXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBDT05GSUcgPSBudWxsO1xyXG4gICAgICBTRVRfQ09ORklHID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGNoZWNrIGlmIGFuIGF0dHJpYnV0ZSB2YWx1ZSBpcyB2YWxpZC5cclxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXHJcbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxyXG4gICAgICovXHJcblxyXG5cclxuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcclxuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xyXG4gICAgICBpZiAoIUNPTkZJRykge1xyXG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcclxuICAgICAgY29uc3QgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XHJcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRIb29rXHJcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gYWRkXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xyXG4gICAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcclxuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlSG9va1xyXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcclxuICAgICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxyXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IHJlbW92ZWQocG9wcGVkKSBob29rXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xyXG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVIb29rc1xyXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xyXG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcclxuICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVBbGxIb29rc1xyXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xyXG4gICAgICpcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGhvb2tzID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBET01QdXJpZnk7XHJcbiAgfVxyXG5cclxuICB2YXIgcHVyaWZ5ID0gY3JlYXRlRE9NUHVyaWZ5KCk7XHJcblxyXG4gIHJldHVybiBwdXJpZnk7XHJcblxyXG59KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcclxuIiwiaW1wb3J0IHskLCBBdHRyaWJ1dGVzfSBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XHJcbmltcG9ydCBfZiBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgJCgnLnZpLXVpLm1lbnUgLml0ZW0nKS52aV90YWIoKTtcclxuICAgICAgICB0aGlzLnJldmlzaW9uID0ge307XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gJCgnI3ZpLXdwYnVsa3ktc2lkZWJhcicpO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeUJvZHlUYWJsZSA9ICQoJyN2aS13cGJ1bGt5LWhpc3RvcnktcG9pbnRzLWxpc3QgdGJvZHknKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjbGljaycsICcudmktd3BidWxreS1hcHBseS1maWx0ZXInLCB0aGlzLmFwcGx5RmlsdGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktZmlsdGVyLWxhYmVsJywgdGhpcy5maWx0ZXJJbnB1dExhYmVsRm9jdXMpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignZm9jdXMnLCAnLnZpLXdwYnVsa3ktZmlsdGVyLWlucHV0JywgdGhpcy5maWx0ZXJJbnB1dEZvY3VzKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIub24oJ2JsdXInLCAnLnZpLXdwYnVsa3ktZmlsdGVyLWlucHV0JywgdGhpcy5maWx0ZXJJbnB1dEJsdXIpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktZ2V0LW1ldGEtZmllbGRzJywgdGhpcy5nZXRNZXRhRmllbGRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktc2F2ZS1tZXRhLWZpZWxkcycsIHRoaXMuc2F2ZU1ldGFGaWVsZHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjbGljaycsICcudmktd3BidWxreS1hZGQtbmV3LW1ldGEtZmllbGQnLCB0aGlzLmFkZE5ld01ldGFGaWVsZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIuZmluZCgndGFibGUudmktd3BidWxreS1tZXRhLWZpZWxkcy1jb250YWluZXIgdGJvZHknKS5zb3J0YWJsZSh7YXhpczogJ3knLH0pO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5maW5kKCd0YWJsZS52aS13cGJ1bGt5LW1ldGEtZmllbGRzLWNvbnRhaW5lcicpLm9uKCdjbGljaycsICcudmktd3BidWxreS1yZW1vdmUtbWV0YS1yb3cnLCB0aGlzLnJlbW92ZU1ldGFSb3cpO1xyXG5cclxuICAgICAgICB0aGlzLnNpZGViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LXNhdmUtc2V0dGluZ3MnLCB0aGlzLnNhdmVTZXR0aW5ncy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjbGljaycsICcudmktd3BidWxreS12aWV3LWhpc3RvcnktcG9pbnQnLCB0aGlzLnZpZXdIaXN0b3J5UG9pbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjbGljaycsICcudmktd3BidWxreS1yZWNvdmVyJywgdGhpcy5yZWNvdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktcmV2ZXJ0LXRoaXMtcG9pbnQnLCB0aGlzLnJldmVydEFsbFBvc3RzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktcmV2ZXJ0LXRoaXMta2V5JywgdGhpcy5yZXZlcnRQb3N0QXR0cmlidXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktcGFnaW5hdGlvbiBhLml0ZW0nLCB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjaGFuZ2UnLCAnLnZpLXdwYnVsa3ktZ28tdG8tcGFnZScsIHRoaXMuY2hhbmdlUGFnZUJ5SW5wdXQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLm9uKCdjbGljaycsICcudmktd3BidWxreS1tdWx0aS1zZWxlY3QtY2xlYXInLCB0aGlzLmNsZWFyTXVsdGlTZWxlY3QpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNpZGViYXIub24oJ2NsaWNrJywgJy5hY2NvcmRpb24gLnRpdGxlJywgdGhpcy5yZXZlcnRTaW5nbGVQb3N0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbHRlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLm1ldGFmaWVsZHMoKTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlckZvcm0gPSAkKCcjdmktd3BidWxreS1wb3N0cy1maWx0ZXInKSxcclxuICAgICAgICAgICAgZmlsdGVySW5wdXQgPSAkKCcudmktd3BidWxreS1maWx0ZXItaW5wdXQnKSxcclxuICAgICAgICAgICAgY3NzVG9wID0ge3RvcDogLTJ9LFxyXG4gICAgICAgICAgICBjc3NNaWRkbGUgPSB7dG9wOiAnNTAlJ307XHJcblxyXG4gICAgICAgIGZpbHRlcklucHV0LmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKGVsKS52YWwoKSkgJChlbCkucGFyZW50KCkucHJldigpLmNzcyhjc3NUb3ApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmaWx0ZXJJbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9ICQodGhpcykucHJldigpO1xyXG4gICAgICAgICAgICBsYWJlbC5jc3MoY3NzVG9wKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS52YWwoKSkgbGFiZWwuY3NzKGNzc01pZGRsZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktZmlsdGVyLWxhYmVsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY2xlYXJhYmxlRmlsdGVyID0gZmlsdGVyRm9ybS5maW5kKCcudmktd3BidWxreS52aS11aS5kcm9wZG93bicpLmRyb3Bkb3duKHtjbGVhcmFibGU6IHRydWV9KSxcclxuICAgICAgICAgICAgY29tcGFjdEZpbHRlciA9IGZpbHRlckZvcm0uZmluZCgnLnZpLXVpLmNvbXBhY3QuZHJvcGRvd24nKS5kcm9wZG93bigpO1xyXG5cclxuICAgICAgICB0aGlzLnNpZGViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LWNsZWFyLWZpbHRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnZpLXdwYnVsa3ktZmlsdGVyLWxhYmVsJykuY3NzKGNzc01pZGRsZSk7XHJcbiAgICAgICAgICAgIGZpbHRlcklucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgICAgIGNsZWFyYWJsZUZpbHRlci5kcm9wZG93bignY2xlYXInKTtcclxuICAgICAgICAgICAgY29tcGFjdEZpbHRlci5maW5kKCcubWVudSAuaXRlbTpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGluZ3MoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzRm9ybSA9ICQoJy52aS13cGJ1bGt5LXNldHRpbmdzLXRhYicpO1xyXG4gICAgICAgIHNldHRpbmdzRm9ybS5maW5kKCdzZWxlY3QuZHJvcGRvd24nKS5kcm9wZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGFmaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNZXRhRmllbGRzVGFibGUoQXR0cmlidXRlcy5tZXRhRmllbGRzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaXN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbigxKTtcclxuICAgICAgICAvLyB0aGlzLnNhdmVSZXZpc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2luYXRpb24oY3VycmVudFBhZ2UsIG1heFBhZ2UgPSBBdHRyaWJ1dGVzLmhpc3RvcnlQYWdlcykge1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5maW5kKCcudmktd3BidWxreS1wYWdpbmF0aW9uJykuaHRtbChfZi5wYWdpbmF0aW9uKG1heFBhZ2UsIGN1cnJlbnRQYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXIoZSkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9IHRoaXMsIHRoaXNCdG4gPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXNCdG4uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdhZGRfZmlsdGVyX2NvbW1lbnRfZGF0YScgOiAnYWRkX2ZpbHRlcl9kYXRhJztcclxuXHJcbiAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgIGZpbHRlcl9kYXRhOiAkKCcjdmktd3BidWxreS1wb3N0cy1maWx0ZXInKS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcl9rZXk6IEF0dHJpYnV0ZXMuZmlsdGVyS2V5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzQnRuLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzQnRuLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5zaWRlYmFyLnRyaWdnZXIoJ2FmdGVyQWRkRmlsdGVyJywgW3Jlcy5kYXRhXSk7XHJcbiAgICAgICAgICAgICAgICBfZi5zaG93TWVzc2FnZSgge3RpdGxlOlwiU3VjY2Vzc1wiLCBtZXNzYWdlOiAnRmlsdGVyZWQgc3VjY2Vzc2Z1bGx5JywgdHlwZTogXCJwb3NpdGl2ZVwiLCBkdXJhdGlvbjogMzAwMH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZXR0aW5ncyhlKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gdGhpcywgdGhpc0J0biA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpc0J0bi5oYXNDbGFzcygnbG9hZGluZycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdzYXZlX2NvbW1lbnRfc2V0dGluZ3MnIDogJ3NhdmVfc2V0dGluZ3MnO1xyXG5cclxuICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgc3ViX2FjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiAkKCdmb3JtLnZpLXdwYnVsa3ktc2V0dGluZ3MtdGFiJykuc2VyaWFsaXplKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNCdG4uYWRkQ2xhc3MoJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlcy5zZXR0aW5ncyA9IHJlcy5kYXRhLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJHRoaXMuYXV0b1NhdmVSZXZpc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJHRoaXMuc2F2ZVJldmlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuc2lkZWJhci50cmlnZ2VyKCdhZnRlclNhdmVTZXR0aW5ncycsIFtyZXMuZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJJbnB1dExhYmVsRm9jdXMoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmluZCgnaW5wdXQnKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcklucHV0Rm9jdXMoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY3NzKHt0b3A6IC0yfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVySW5wdXRCbHVyKCkge1xyXG4gICAgICAgIGlmICghJCh0aGlzKS52YWwoKSkgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY3NzKHt0b3A6ICc1MCUnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YUZpZWxkcyhlKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gdGhpcywgdGhpc0J0biA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpc0J0bi5oYXNDbGFzcygnbG9hZGluZycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIF9mLmFqYXgoe1xyXG4gICAgICAgICAgICBkYXRhOiB7c3ViX2FjdGlvbjogJ2dldF9tZXRhX2ZpZWxkcycsIGN1cnJlbnRfbWV0YV9maWVsZHM6ICR0aGlzLmdldEN1cnJlbnRNZXRhRmllbGRzKCl9LFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgJHRoaXMucmVuZGVyTWV0YUZpZWxkc1RhYmxlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMubWV0YUZpZWxkcyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWV0YUZpZWxkc1RhYmxlKGRhdGEpIHtcclxuICAgICAgICBsZXQgaHRtbCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBtZXRhS2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaHRtbCArPSB0aGlzLnJlbmRlclJvdyhtZXRhS2V5LCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy52aS13cGJ1bGt5LW1ldGEtZmllbGRzLWNvbnRhaW5lciB0Ym9keScpLmh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUm93KG1ldGFLZXksIGRhdGEpIHtcclxuICAgICAgICBsZXQgbWV0YSA9IGRhdGFbbWV0YUtleV0gfHwge30sXHJcbiAgICAgICAgICAgIG9wdGlvbkh0bWwgPSAnJyxcclxuICAgICAgICAgICAgaW5wdXRUeXBlID0gbWV0YS5pbnB1dF90eXBlIHx8ICcnLFxyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dGlucHV0OiAnVGV4dCBpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0ZWRpdG9yOiAnVGV4dCBlZGl0b3InLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyaW5wdXQ6ICdOdW1iZXIgaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgYXJyYXk6ICdBcnJheScsXHJcbiAgICAgICAgICAgICAgICBqc29uOiAnSlNPTicsXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiSW1hZ2UgKFNhdmUgaW1hZ2UncyBpZClcIixcclxuICAgICAgICAgICAgICAgIGltYWdldXJsOiBcIkltYWdlIChTYXZlIGltYWdlJ3MgdXJsKVwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvcHRpb25WYWx1ZSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbkh0bWwgKz0gYDxvcHRpb24gdmFsdWU9XCIke29wdGlvblZhbHVlfVwiICR7b3B0aW9uVmFsdWUgPT09IGlucHV0VHlwZSA/ICdzZWxlY3RlZCcgOiAnJ30+JHtvcHRpb25zW29wdGlvblZhbHVlXX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1ldGFWYWx1ZSA9IG1ldGEubWV0YV92YWx1ZSB8fCAnJyxcclxuICAgICAgICAgICAgc2hvcnRWYWx1ZSA9IG1ldGFWYWx1ZS5zbGljZSgwLCAxNSksXHJcbiAgICAgICAgICAgIGZ1bGxWYWx1ZUh0bWwgPSBtZXRhVmFsdWUubGVuZ3RoID4gMTYgPyBgPGRpdiBjbGFzcz1cInZpLXdwYnVsa3ktZnVsbC1tZXRhLXZhbHVlXCI+JHttZXRhVmFsdWV9PC9kaXY+YCA6ICcnO1xyXG5cclxuICAgICAgICBzaG9ydFZhbHVlICs9IHNob3J0VmFsdWUubGVuZ3RoIDwgbWV0YVZhbHVlLmxlbmd0aCA/ICcuLi4nIDogJyc7XHJcblxyXG4gICAgICAgIHJldHVybiBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aS13cGJ1bGt5LW1ldGEta2V5LWNvbCB2aS13cGJ1bGt5LW1ldGEta2V5XCI+JHttZXRhS2V5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZpLXdwYnVsa3ktY29sdW1uLW5hbWUtY29sXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LW1ldGEtY29sdW1uLW5hbWVcIiB2YWx1ZT1cIiR7bWV0YS5jb2x1bW5fbmFtZSB8fCAnJ31cIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aS13cGJ1bGt5LXZhbHVlLWZvcm1hdC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LWRpc3BsYXktbWV0YS12YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LXNob3J0LW1ldGEtdmFsdWVcIj4ke3Nob3J0VmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmdWxsVmFsdWVIdG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZpLXdwYnVsa3ktY29sdW1uLXR5cGUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidmktd3BidWxreS1tZXRhLWNvbHVtbi10eXBlXCI+JHtvcHRpb25IdG1sfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidmktd3BidWxreS1jb2x1bW4tbXVsdGlwbGUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LW1ldGEtY29sdW1uLW11bHRpcGxlXCIgJHtwYXJzZUludChtZXRhLm11bHRpcGxlKSA/ICdjaGVja2VkJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidmktd3BidWxreS1hY3RpdmUtY29sIHZpLXdwYnVsa3ktbWV0YS1maWVsZC1hY3RpdmUtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LW1ldGEtY29sdW1uLWFjdGl2ZVwiICR7cGFyc2VJbnQobWV0YS5hY3RpdmUpID8gJ2NoZWNrZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aS13cGJ1bGt5LWFjdGlvbnMtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmktd3BidWxreS1tZXRhLWZpZWxkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpLXVpIGJ1dHRvbiBiYXNpYyBtaW5pIHZpLXdwYnVsa3ktcmVtb3ZlLW1ldGEtcm93XCI+PGkgY2xhc3M9XCJpY29uIHRyYXNoXCI+IDwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aS11aSBidXR0b24gYmFzaWMgbWluaVwiPjxpIGNsYXNzPVwiaWNvbiBtb3ZlXCI+IDwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU1ldGFGaWVsZHMoZSkge1xyXG4gICAgICAgIGxldCB0aGlzQnRuID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzQnRuLmhhc0NsYXNzKCdsb2FkaW5nJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiAnc2F2ZV9tZXRhX2ZpZWxkcycsIG1ldGFfZmllbGRzOiB0aGlzLmdldEN1cnJlbnRNZXRhRmllbGRzKCl9LFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudE1ldGFGaWVsZHMoKSB7XHJcbiAgICAgICAgbGV0IG1ldGFfZmllbGRzID0ge307XHJcbiAgICAgICAgbGV0IG1ldGFBcnIgPSBBdHRyaWJ1dGVzLm1ldGFGaWVsZHM7XHJcbiAgICAgICAgJCgndGFibGUudmktd3BidWxreS1tZXRhLWZpZWxkcy1jb250YWluZXIgdGJvZHkgdHInKS5lYWNoKGZ1bmN0aW9uIChpLCByb3cpIHtcclxuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSAkKHJvdykuZmluZCgnLnZpLXdwYnVsa3ktbWV0YS1rZXknKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIG1ldGFfZmllbGRzW21ldGFLZXldID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uX25hbWU6ICQocm93KS5maW5kKCcudmktd3BidWxreS1tZXRhLWNvbHVtbi1uYW1lJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAkKHJvdykuZmluZCgnLnZpLXdwYnVsa3ktbWV0YS1jb2x1bW4tdHlwZScpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAkKHJvdykuZmluZCgnLnZpLXdwYnVsa3ktbWV0YS1jb2x1bW4tYWN0aXZlOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBtZXRhX3ZhbHVlOiBtZXRhQXJyW21ldGFLZXldID8gbWV0YUFyclttZXRhS2V5XS5tZXRhX3ZhbHVlIDogJycsXHJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogJChyb3cpLmZpbmQoJy52aS13cGJ1bGt5LW1ldGEtY29sdW1uLW11bHRpcGxlOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhX2ZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdNZXRhRmllbGQoZSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5wcmV2KCksXHJcbiAgICAgICAgICAgIG1ldGFLZXkgPSBpbnB1dC52YWwoKSxcclxuICAgICAgICAgICAgdmFsaWRhdGUgPSBtZXRhS2V5Lm1hdGNoKC9eW1xcd1xcZF8tXSokL2cpO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGFLZXkgfHwgIXZhbGlkYXRlIHx8IEF0dHJpYnV0ZXMubWV0YUZpZWxkc1ttZXRhS2V5XSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy5yZW5kZXJSb3cobWV0YUtleSwge30pO1xyXG4gICAgICAgIGlmIChuZXdSb3cpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgndGFibGUudmktd3BidWxreS1tZXRhLWZpZWxkcy1jb250YWluZXIgdGJvZHknKS5hcHBlbmQobmV3Um93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTWV0YVJvdygpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0hpc3RvcnlQb2ludChlKSB7XHJcbiAgICAgICAgbGV0IHRoaXNCdG4gPSAkKGUuY3VycmVudFRhcmdldCksXHJcbiAgICAgICAgICAgIGhpc3RvcnlpRCA9IHRoaXNCdG4uZGF0YSgnaWQnKSxcclxuICAgICAgICAgICAgJHRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpc0J0bi5oYXNDbGFzcygnbG9hZGluZycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICd2aWV3X2NvbW1lbnRfaGlzdG9yeV9wb2ludCcgOiAndmlld19oaXN0b3J5X3BvaW50JztcclxuXHJcbiAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiBhY3Rpb24sIGlkOiBoaXN0b3J5aUR9LFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNCdG4ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgJiYgcmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdHMgPSByZXMuZGF0YS5jb21wYXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gcG9zdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBwb3N0c1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LWhpc3RvcnktcG9zdFwiIGRhdGEtcG9zdF9pZD1cIiR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aS11aSBidXR0b24gbWluaSBiYXNpYyB2aS13cGJ1bGt5LXJldmVydC10aGlzLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIHVuZG9cIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0uZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFZhbCA9IHR5cGVvZiBpdGVtLmN1cnJlbnRba2V5XSA9PT0gJ3N0cmluZycgPyBpdGVtLmN1cnJlbnRba2V5XSA6IEpTT04uc3RyaW5naWZ5KGl0ZW0uY3VycmVudFtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXN0b3J5VmFsID0gdHlwZW9mIGl0ZW0uaGlzdG9yeVtrZXldID09PSAnc3RyaW5nJyA/IGl0ZW0uaGlzdG9yeVtrZXldIDogSlNPTi5zdHJpbmdpZnkoaXRlbS5oaXN0b3J5W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUgKz0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLmZpZWxkc1trZXldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y3VycmVudFZhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2hpc3RvcnlWYWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aS11aSBidXR0b24gYmFzaWMgbWluaSB2aS13cGJ1bGt5LXJldmVydC10aGlzLWtleVwiIGRhdGEtcG9zdF9pZD1cIiR7aWR9XCIgZGF0YS1wb3N0X2tleT1cIiR7a2V5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIHVuZG9cIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUgPSBgPHRhYmxlIGlkPVwidmktd3BidWxreS1oaXN0b3J5LXBvaW50LWRldGFpbFwiIGNsYXNzPVwidmktdWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkF0dHJpYnV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3VycmVudCB2YWx1ZSBpbiBkYXRhYmFzZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SGlzdG9yeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJcIj5SZXZlcnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3RhYmxlfTwvZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSAkKGA8ZGl2IGNsYXNzPVwidmktdWkgc3R5bGVkIGZsdWlkIGFjY29yZGlvblwiPiR7aHRtbH08L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnZpLXdwYnVsa3ktaGlzdG9yeS1yZXZpZXcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKS5hdHRyKCdkYXRhLWhpc3RvcnlfaWQnLCBoaXN0b3J5aUQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKGA8aDQ+SGlzdG9yeSBwb2ludDogJHtyZXMuZGF0YS5kYXRlfTwvaDQ+YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz1cInZpLXVpIGJ1dHRvbiB0aW55IHZpLXdwYnVsa3ktcmV2ZXJ0LXRoaXMtcG9pbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtfZi50ZXh0KCdSZXZlcnQgYWxsIHBvc3QgaW4gdGhpcyBwb2ludCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAke19mLnRleHQoJ1RoZSBjdXJyZW50IHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGUgcG9zdCBpbiBkYXRhYmFzZScpfTwvcD5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5maW5kKCcudGl0bGUnKS5vbignY2xpY2snLCAoZSkgPT4gJHRoaXMucmV2ZXJ0U2luZ2xlUG9zdChlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwudmlfYWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbC5maW5kKCcudGl0bGU6Zmlyc3QnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZWNvdmVyKGUpIHtcclxuICAgICAgICBsZXQgdGhpc0J0biA9ICQoZS5jdXJyZW50VGFyZ2V0KSxcclxuICAgICAgICAgICAgaGlzdG9yeUlEID0gdGhpc0J0bi5kYXRhKCdpZCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpc0J0bi5oYXNDbGFzcygnbG9hZGluZycpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IHdwYnVsa3lQYXJhbXMucG9zdFR5cGUgPT09J2NvbW1lbnQnID8gJ3JldmVydF9oaXN0b3J5X2FsbF9jb21tZW50cycgOiAncmV2ZXJ0X2hpc3RvcnlfYWxsX3Bvc3RzJztcclxuICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgZGF0YToge3N1Yl9hY3Rpb246IGFjdGlvbiwgaGlzdG9yeV9pZDogaGlzdG9yeUlEfSxcclxuICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNCdG4uYWRkQ2xhc3MoJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNCdG4ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIF9mLnNob3dNZXNzYWdlKCB7dGl0bGU6XCJTdWNjZXNzXCIsIG1lc3NhZ2U6ICdSZXZlcnRlZCBzdWNjZXNzZnVsbHknLCB0eXBlOiBcInBvc2l0aXZlXCIsIGR1cmF0aW9uOiAzMDAwfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJ0U2luZ2xlUG9zdChlKSB7XHJcbiAgICAgICAgbGV0IHRoaXNCdG47XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd2aS13cGJ1bGt5LXJldmVydC10aGlzLXBvc3QnKSkgdGhpc0J0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygndmktd3BidWxreS1yZXZlcnQtdGhpcy1wb3N0JykpIHRoaXNCdG4gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXNCdG4pIHtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwaWQgPSB0aGlzQnRuLmNsb3Nlc3QoJy52aS13cGJ1bGt5LWhpc3RvcnktcG9zdCcpLmRhdGEoJ3Bvc3RfaWQnKSxcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlJRCA9IHRoaXNCdG4uY2xvc2VzdCgnLnZpLXdwYnVsa3ktaGlzdG9yeS1yZXZpZXcnKS5hdHRyKCdkYXRhLWhpc3RvcnlfaWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzQnRuLmhhc0NsYXNzKCdsb2FkaW5nJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdyZXZlcnRfaGlzdG9yeV9zaW5nbGVfY29tbWVudCcgOiAncmV2ZXJ0X2hpc3Rvcnlfc2luZ2xlX3Bvc3QnO1xyXG5cclxuICAgICAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7c3ViX2FjdGlvbjogYWN0aW9uLCBoaXN0b3J5X2lkOiBoaXN0b3J5SUQsIHBpZDogcGlkfSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0J0bi5hZGRDbGFzcygnbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0J0bi5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnNob3dNZXNzYWdlKCB7dGl0bGU6XCJTdWNjZXNzXCIsIG1lc3NhZ2U6ICdSZXZlcnRlZCBzdWNjZXNzZnVsbHknLCB0eXBlOiBcInBvc2l0aXZlXCIsIGR1cmF0aW9uOiAzMDAwfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJ0QWxsUG9zdHMoZSkge1xyXG4gICAgICAgIGxldCB0aGlzQnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlJRCA9IHRoaXNCdG4uY2xvc2VzdCgnLnZpLXdwYnVsa3ktaGlzdG9yeS1yZXZpZXcnKS5kYXRhKCdoaXN0b3J5X2lkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzQnRuLmhhc0NsYXNzKCdsb2FkaW5nJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IHdwYnVsa3lQYXJhbXMucG9zdFR5cGUgPT09J2NvbW1lbnQnID8gJ3JldmVydF9oaXN0b3J5X2FsbF9jb21tZW50cycgOiAncmV2ZXJ0X2hpc3RvcnlfYWxsX3Bvc3RzJztcclxuXHJcbiAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiBhY3Rpb24sIGhpc3RvcnlfaWQ6IGhpc3RvcnlJRH0sXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzQnRuLmFkZENsYXNzKCdsb2FkaW5nJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzQnRuLnJlbW92ZUNsYXNzKCdsb2FkaW5nJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBfZi5zaG93TWVzc2FnZSgge3RpdGxlOlwiU3VjY2Vzc1wiLCBtZXNzYWdlOiAnUmV2ZXJ0ZWQgc3VjY2Vzc2Z1bGx5JywgdHlwZTogXCJwb3NpdGl2ZVwiLCBkdXJhdGlvbjogMzAwMH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVydFBvc3RBdHRyaWJ1dGUoZSkge1xyXG4gICAgICAgIGxldCB0aGlzQnRuID0gJChlLmN1cnJlbnRUYXJnZXQpLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSB0aGlzQnRuLmRhdGEoJ3Bvc3Rfa2V5JyksXHJcbiAgICAgICAgICAgIHBpZCA9IHRoaXNCdG4uY2xvc2VzdCgnLnZpLXdwYnVsa3ktaGlzdG9yeS1wb3N0JykuZGF0YSgncG9zdF9pZCcpLFxyXG4gICAgICAgICAgICBoaXN0b3J5SUQgPSB0aGlzQnRuLmNsb3Nlc3QoJy52aS13cGJ1bGt5LWhpc3RvcnktcmV2aWV3JykuZGF0YSgnaGlzdG9yeV9pZCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpc0J0bi5oYXNDbGFzcygnbG9hZGluZycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdyZXZlcnRfaGlzdG9yeV9jb21tZW50X2F0dHJpYnV0ZScgOiAncmV2ZXJ0X2hpc3RvcnlfcG9zdF9hdHRyaWJ1dGUnO1xyXG5cclxuICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgZGF0YToge3N1Yl9hY3Rpb246IGFjdGlvbiwgYXR0cmlidXRlOiBhdHRyaWJ1dGUsIGhpc3RvcnlfaWQ6IGhpc3RvcnlJRCwgcGlkOiBwaWR9LFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5hZGRDbGFzcygnbG9hZGluZycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0J0bi5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgX2Yuc2hvd01lc3NhZ2UoIHt0aXRsZTpcIlN1Y2Nlc3NcIiwgbWVzc2FnZTogJ1JldmVydGVkIFBvc3QgQXR0cmlidXRlIHN1Y2Nlc3NmdWxseScsIHR5cGU6IFwicG9zaXRpdmVcIiwgZHVyYXRpb246IDMwMDB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYWdlKGUpIHtcclxuICAgICAgICBsZXQgcGFnZSA9IHBhcnNlSW50KCQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXBhZ2UnKSk7XHJcbiAgICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlJykgfHwgJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdkaXNhYmxlZCcpIHx8ICFwYWdlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5sb2FkSGlzdG9yeVBhZ2UocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGFnZUJ5SW5wdXQoZSkge1xyXG4gICAgICAgIGxldCBwYWdlID0gcGFyc2VJbnQoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgIGxldCBtYXggPSBwYXJzZUludCgkKGUudGFyZ2V0KS5hdHRyKCdtYXgnKSk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlIDw9IG1heCAmJiBwYWdlID4gMCkgdGhpcy5sb2FkSGlzdG9yeVBhZ2UocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJNdWx0aVNlbGVjdCgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy52aS11aS5kcm9wZG93bicpLmRyb3Bkb3duKCdjbGVhcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRIaXN0b3J5UGFnZShwYWdlKSB7XHJcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBfZi5zcGlubmVyKCksXHJcbiAgICAgICAgICAgICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3N1Yl9hY3Rpb246ICdsb2FkX2hpc3RvcnlfcGFnZScsIHBhZ2U6IHBhZ2V9LFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5zaWRlYmFyLmZpbmQoJy52aS13cGJ1bGt5LXBhZ2luYXRpb24nKS5wcmVwZW5kKGxvYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5wYWdpbmF0aW9uKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN2aS13cGJ1bGt5LWhpc3RvcnktcG9pbnRzLWxpc3QgdGJvZHknKS5odG1sKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlUmV2aXNpb24oKSB7XHJcbiAgICAgICAgbGV0IGF1dG9TYXZlVGltZSA9IHBhcnNlSW50KEF0dHJpYnV0ZXMuc2V0dGluZ3MuYXV0b19zYXZlX3JldmlzaW9uKTtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9TYXZlVGltZSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgJHRoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9TYXZlUmV2aXNpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cygkdGhpcy5yZXZpc2lvbikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSAkdGhpcy5zaWRlYmFyLmZpbmQoJy52aS13cGJ1bGt5LXBhZ2luYXRpb24gYS5pdGVtLmFjdGl2ZScpLmRhdGEoJ3BhZ2UnKSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdhdXRvX3NhdmVfcmV2aXNpb25fY29tbWVudCcgOiAnYXV0b19zYXZlX3JldmlzaW9uJztcclxuXHJcbiAgICAgICAgICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7c3ViX2FjdGlvbjogYWN0aW9uLCBkYXRhOiAkdGhpcy5yZXZpc2lvbiwgcGFnZTogY3VycmVudFBhZ2UgfHwgMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEucGFnZXMpIEF0dHJpYnV0ZXMuaGlzdG9yeVBhZ2VzID0gcmVzLmRhdGEucGFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEudXBkYXRlUGFnZSkgJHRoaXMuaGlzdG9yeUJvZHlUYWJsZS5odG1sKHJlcy5kYXRhLnVwZGF0ZVBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMucmV2aXNpb24gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhZ2luYXRpb24oY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgYXV0b1NhdmVUaW1lICogMTAwMClcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUZW1wbGF0ZXMgPSB7XHJcbiAgICBtb2RhbChkYXRhID0ge30pIHtcclxuICAgICAgICBsZXQge2hlYWRlciA9ICcnLCBjb250ZW50ID0gJycsIGFjdGlvbnNIdG1sID0gJyd9ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LW1vZGFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LW1vZGFsLW1haW4gdmktdWkgZm9ybSBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LW1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImhlYWRlclwiPiR7aGVhZGVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+JHthY3Rpb25zSHRtbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWZhdWx0QXR0cmlidXRlcyhkYXRhID0ge30pIHtcclxuICAgICAgICBsZXQge2h0bWx9ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gYDx0YWJsZSBjbGFzcz1cInZpLXVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkF0dHJpYnV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAke2h0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+YDtcclxuICAgIH0sXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZXM7IiwiaW1wb3J0IHskfSBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XHJcbmltcG9ydCBfZiBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL21vZGFsLXBvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0TXVsdGlDZWxsc0VkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCB4LCB5LCBlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEuamV4Y2VsID0gb2JqO1xyXG4gICAgICAgIHRoaXMuX2RhdGEueCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEueSA9IHBhcnNlSW50KHkpO1xyXG4gICAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaWRdIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBsZXQgZm9ybXVsYUh0bWwgPSB0aGlzLmNvbnRlbnQoKTtcclxuICAgICAgICBsZXQgY2VsbCA9ICQoYHRkW2RhdGEteD0ke3RoaXMuZ2V0KCd4JykgfHwgMH1dW2RhdGEteT0ke3RoaXMuZ2V0KCd5JykgfHwgMH1dYCk7XHJcbiAgICAgICAgbmV3IFBvcHVwKGZvcm11bGFIdG1sLCBjZWxsKTtcclxuICAgICAgICBmb3JtdWxhSHRtbC5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktYXBwbHktZm9ybXVsYScsIHRoaXMuYXBwbHlGb3JtdWxhLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIGZvcm11bGFIdG1sLm9uKCdjaGFuZ2UnLCAnLnZpLXdwYnVsa3ktdGV4dC1pbnB1dCcsIHRoaXMuYXBwbHlGb3JtdWxhLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICQoYDxkaXYgY2xhc3M9XCJ2aS13cGJ1bGt5LWZvcm11bGEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtfZi50ZXh0KCdDb250ZW50Jyl9XCIgY2xhc3M9XCJ2aS13cGJ1bGt5LXRleHQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInZpLXVpIGJ1dHRvbiBtaW5pIHZpLXdwYnVsa3ktYXBwbHktZm9ybXVsYVwiPiR7X2YudGV4dCgnU2F2ZScpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGb3JtdWxhKGUpIHtcclxuICAgICAgICBsZXQgZm9ybSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy52aS13cGJ1bGt5LWZvcm11bGEtY29udGFpbmVyJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gZm9ybS5maW5kKCcudmktd3BidWxreS10ZXh0LWlucHV0JykudmFsKCksXHJcbiAgICAgICAgICAgIGV4Y2VsT2JqID0gdGhpcy5nZXQoJ2pleGNlbCcpO1xyXG5cclxuICAgICAgICBsZXQgYnJlYWtDb250cm9sID0gZmFsc2UsIHJlY29yZHMgPSBbXTtcclxuICAgICAgICBsZXQgaCA9IGV4Y2VsT2JqLnNlbGVjdGVkQ29udGFpbmVyO1xyXG4gICAgICAgIGxldCBzdGFydCA9IGhbMV0sIGVuZCA9IGhbM10sIHggPSBoWzBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnQ7IHkgPD0gZW5kOyB5KyspIHtcclxuICAgICAgICAgICAgaWYgKGV4Y2VsT2JqLnJlY29yZHNbeV1beF0gJiYgIWV4Y2VsT2JqLnJlY29yZHNbeV1beF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkb25seScpICYmIGV4Y2VsT2JqLnJlY29yZHNbeV1beF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGJyZWFrQ29udHJvbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZHMucHVzaChleGNlbE9iai51cGRhdGVDZWxsKHgsIHksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBleGNlbE9iai51cGRhdGVGb3JtdWxhQ2hhaW4oeCwgeSwgcmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBoaXN0b3J5XHJcbiAgICAgICAgZXhjZWxPYmouc2V0SGlzdG9yeSh7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3NldFZhbHVlJyxcclxuICAgICAgICAgICAgcmVjb3JkczogcmVjb3JkcyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBleGNlbE9iai5zZWxlY3RlZENlbGwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YWJsZSB3aXRoIGN1c3RvbSBjb25maWd1cmF0aW9uIGlmIGFwcGxpY2FibGVcclxuICAgICAgICBleGNlbE9iai51cGRhdGVUYWJsZSgpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgX2YgZnJvbSBcIi4vZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7JCwgQXR0cmlidXRlc30gZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IEZpbmRBbmRSZXBsYWNlIGZyb20gXCIuL2ZpbmQtYW5kLXJlcGxhY2VcIjtcclxuaW1wb3J0IFRleHRNdWx0aUNlbGxzRWRpdCBmcm9tICcuL3RleHQtbXVsdGktY2VsbHMtZWRpdCc7XHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL21vZGFsLXBvcHVwXCI7XHJcbmltcG9ydCAqIGFzIERPTVB1cmlmeSBmcm9tICcuL3B1cmlmeSc7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgY2xhc3MgQnVsa0VkaXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudHJhc2ggPSBbXTtcclxuICAgICAgICAgICAgdGhpcy51blRyYXNoID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucmV2aXNpb24gPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yID0gJCgnI3ZpLXdwYnVsa3ktY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJhciA9ICQoJyN2aS13cGJ1bGt5LW1lbnUtYmFyJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LW9wZW4tc2lkZWJhcicsIHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJhci5vbignY2xpY2snLCAnYS5pdGVtOm5vdCgudmktd3BidWxreS1vcGVuLXNpZGViYXIpJywgdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktbmV3LXBvc3QnLCB0aGlzLmFkZE5ld1Bvc3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktZnVsbC1zY3JlZW4tYnRuJywgdGhpcy50b2dnbGVGdWxsU2NyZWVuLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LXNhdmUtYnV0dG9uJywgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LXBhZ2luYXRpb24gYS5pdGVtJywgdGhpcy5jaGFuZ2VQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnViYXIub24oJ2NsaWNrJywgJy52aS13cGJ1bGt5LWdldC1wb3N0JywgdGhpcy5yZWxvYWRDdXJyZW50UGFnZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5tZW51YmFyLm9uKCdjaGFuZ2UnLCAnLnZpLXdwYnVsa3ktZ28tdG8tcGFnZScsIHRoaXMuY2hhbmdlUGFnZUJ5SW5wdXQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignY2VsbG9uY2hhbmdlJywgJ3RyJywgdGhpcy5jZWxsT25DaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLm9uKCdjbGljaycsICcuamV4Y2VsX2NvbnRlbnQnLCB0aGlzLnJlbW92ZUV4aXN0aW5nRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignZGJsY2xpY2snLCB0aGlzLnJlbW92ZUNvbnRleHRQb3B1cCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuc2lkZWJhci5vbignYWZ0ZXJBZGRGaWx0ZXInLCB0aGlzLmFmdGVyQWRkRmlsdGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuc2lkZWJhci5vbignYWZ0ZXJTYXZlU2V0dGluZ3MnLCB0aGlzLmFmdGVyU2F2ZVNldHRpbmdzLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuc2lkZWJhci5vbignY2xpY2snLCAnLnZpLXdwYnVsa3ktY2xvc2Utc2lkZWJhcicsIHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIHRoaXMua2V5RG93bkNvbnRyb2wuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1vdmVFeGlzdGluZ0VkaXRvcihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Xb3JrQm9vayAmJiB0aGlzLldvcmtCb29rLmVkaXRpb24pIHRoaXMuV29ya0Jvb2suY2xvc2VFZGl0b3IodGhpcy5Xb3JrQm9vay5lZGl0aW9uWzBdLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5RG93bkNvbnRyb2woZSkge1xyXG4gICAgICAgICAgICBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmICFlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gODMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIuc2lkZWJhci5yZW1vdmVDbGFzcygndmktd3BidWxreS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUNvbnRleHRQb3B1cCgpIHtcclxuICAgICAgICAgICAgJCgnLnZpLXdwYnVsa3ktY29udGV4dC1wb3B1cCcpLnJlbW92ZUNsYXNzKCd2aS13cGJ1bGt5LXBvcHVwLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0KCkge1xyXG4gICAgICAgICAgICBpZiAod3BidWxreVBhcmFtcy5jb2x1bW5zKSBBdHRyaWJ1dGVzLnNldENvbHVtbnMod3BidWxreVBhcmFtcy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uKDEsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtCb29rSW5pdCgpO1xyXG4gICAgICAgICAgICBpZiAoIHdwYnVsa3lQYXJhbXMucG9zdFR5cGUgPT09J2NvbW1lbnQnICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tbWVudHMoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfZi5zZXRKZXhjZWwodGhpcy5Xb3JrQm9vayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsT25DaGFuZ2UoZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQge2NvbCA9ICcnfSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBBdHRyaWJ1dGVzLmlkTWFwcGluZ1tjb2xdO1xyXG4gICAgICAgICAgICBsZXQgdGhpc1JvdyA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwb3N0X2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGEudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBfZi5nZXRDb2xGcm9tQ29sdW1uVHlwZSgncG9zdF9zdGF0dXMnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXNSb3cuZmluZChgdGRbZGF0YS14PScke3h9J11gKS5nZXQoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSAobmV3IERhdGUodmFsdWUpKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRpbWUgPiBub3cgPyAnZnV0dXJlJyA6ICdwdWJsaXNoJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrQm9vay5zZXRWYWx1ZShjZWxsLCBzdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd29ya0Jvb2tJbml0KCkge1xyXG4gICAgICAgICAgICBsZXQgJHRoaXMgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnVJdGVtcyxcclxuICAgICAgICAgICAgICAgIG9ucmVzaXplY29sdW1uID0gZnVuY3Rpb24gKGluc3RhbmNlLCBjZWxsLCB3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2FjdGlvbjogJ3Jlc2l6ZV9jb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX2lkOiBBdHRyaWJ1dGVzLmNvbHVtbnNbY2VsbF0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fd2lkdGg6IHdpZHRoIDw9IDU1ID8gNTUgOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbHVlVG9DZWxsKG9iaiwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBicmVha0NvbnRyb2wgPSBmYWxzZSwgcmVjb3JkcyA9IFtdLCBoID0gb2JqLnNlbGVjdGVkQ29udGFpbmVyLCBzdGFydCA9IGhbMV0sIGVuZCA9IGhbM10sIHggPSBoWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBzdGFydDsgeSA8PSBlbmQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoucmVjb3Jkc1t5XVt4XSAmJiAhb2JqLnJlY29yZHNbeV1beF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkb25seScpICYmIG9iai5yZWNvcmRzW3ldW3hdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBicmVha0NvbnRyb2wgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHMucHVzaChvYmoudXBkYXRlQ2VsbCh4LCB5LCB2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoudXBkYXRlRm9ybXVsYUNoYWluKHgsIHksIHJlY29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYmouc2V0SGlzdG9yeSh7YWN0aW9uOiAnc2V0VmFsdWUnLCByZWNvcmRzOiByZWNvcmRzLCBzZWxlY3Rpb246IG9iai5zZWxlY3RlZENlbGx9KTtcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGVUYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKCB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlICkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29tbWVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dE1lbnVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcywgb2JqLCB4LCB5LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxscyA9IG9iai5zZWxlY3RlZENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gcGFyc2VJbnQoeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ICE9PSBudWxsICYmIHkgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHNbMF0gPT09IGNlbGxzWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmoub3B0aW9ucy5jb2x1bW5zW3hdLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnRWRpdCBtdWx0aXBsZSBjZWxscycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2soZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dE11bHRpQ2VsbHNFZGl0KG9iaiwgeCwgeSwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9mLnRleHQoJ0ZpbmQgYW5kIFJlcGxhY2UnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEZpbmRBbmRSZXBsYWNlKG9iaiwgeCwgeSwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfZi50ZXh0KCdGaW5kIGFuZCBSZXBsYWNlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljayhlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBGaW5kQW5kUmVwbGFjZShvYmosIHgsIHksIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjYWxlbmRhcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9ICQoYHRkW2RhdGEteD0ke3h9XVtkYXRhLXk9JHt5fV1gKS5nZXQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQoY2VsbCkuaGFzQ2xhc3MoJ3JlYWRvbmx5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9mLnRleHQoJ09wZW4gZGF0ZSBwaWNrZXInKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9iai5vcHRpb25zLmRhdGFbeV1beF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRvciA9IF9mLmNyZWF0ZUVkaXRvcihjZWxsLCAnaW5wdXQnLCAnJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc3R5bGUubGVmdCA9ICd1bnNldCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBvYmouc2VsZWN0ZWRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBoWzFdLCBlbmQgPSBoWzNdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoub3B0aW9ucy50YWJsZU92ZXJmbG93ID09IHRydWUgfHwgb2JqLm9wdGlvbnMuZnVsbHNjcmVlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLm9wdGlvbnMuY29sdW1uc1t4XS5vcHRpb25zLnBvc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5vcHRpb25zLmNvbHVtbnNbeF0ub3B0aW9ucy52YWx1ZSA9IG9iai5vcHRpb25zLmRhdGFbeV1beF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoub3B0aW9ucy5jb2x1bW5zW3hdLm9wdGlvbnMub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5vcHRpb25zLmNvbHVtbnNbeF0ub3B0aW9ucy5vbmNsb3NlID0gZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0OyB5IDw9IGVuZDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoucmVjb3Jkc1t5XVt4XSAmJiAhb2JqLnJlY29yZHNbeV1beF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkb25seScpICYmIG9iai5yZWNvcmRzW3ldW3hdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5wdXNoKG9iai51cGRhdGVDZWxsKHgsIHksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoudXBkYXRlRm9ybXVsYUNoYWluKHgsIHksIHJlY29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iai5jbG9zZUVkaXRvcihjZWxsLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGhpc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouc2V0SGlzdG9yeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3NldFZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogcmVjb3JkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBvYmouc2VsZWN0ZWRDZWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGFibGUgd2l0aCBjdXN0b20gY29uZmlndXJhdGlvbiBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnVwZGF0ZVRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalN1aXRlcy5jYWxlbmRhcihlZGl0b3IsIG9iai5vcHRpb25zLmNvbHVtbnNbeF0ub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb2N1cyBvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoub3B0aW9ucy5jb2x1bW5zW3hdLnR5cGUgPT09ICdjdXN0b20nICYmIHR5cGVvZiBvYmoub3B0aW9ucy5jb2x1bW5zW3hdLmVkaXRvci50aW55bWNlSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnRWRpdCBtdWx0aXBsZSBjZWxscycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnZpLXVpLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW55bWNlLmdldCgndmktd3BidWxreS10ZXh0LWVkaXRvcicpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWRpdG9yLmluaXRpYWxpemUoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InLCBBdHRyaWJ1dGVzLnRpbnlNY2VPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlueW1jZS5nZXQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKS5zZXRDb250ZW50KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy52aS13cGJ1bGt5LXRleHQtZWRpdG9yLXNhdmUnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gd3AuZWRpdG9yLmdldENvbnRlbnQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZVRvQ2VsbChvYmosIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd2aS13cGJ1bGt5LWNsb3NlJykpICQoJy52aS11aS5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGlkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSB5LmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlkID0gb2JqLm9wdGlvbnMuZGF0YVt5XVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlkID0gIG9iai5vcHRpb25zLmRhdGFbeV1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHt0eXBlOiAnbGluZSd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnUmVwbHknICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy52aS11aS5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW55bWNlLmdldCgndmktd3BidWxreS10ZXh0LWVkaXRvcicpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cC5lZGl0b3IuaW5pdGlhbGl6ZSgndmktd3BidWxreS10ZXh0LWVkaXRvcicsIEF0dHJpYnV0ZXMudGlueU1jZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlueW1jZS5nZXQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKS5zZXRDb250ZW50KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudmktd3BidWxreS10ZXh0LWVkaXRvci1zYXZlJykub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gd3AuZWRpdG9yLmdldENvbnRlbnQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoID0gb2JqLnNlbGVjdGVkQ29udGFpbmVyLCBzdGFydCA9IGhbMV0sIGVuZCA9IGhbM10sIHggPSBoWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld19jb21tZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBzdGFydDsgeSA8PSBlbmQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19jb21tZW50cy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRfaWQgOiBfZi5nZXREYXRhRnJvbUNlbGwob2JqLCBvYmoucmVjb3Jkc1t5XVswXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfaWQgOiBfZi5nZXREYXRhRnJvbUNlbGwob2JqLCBvYmoucmVjb3Jkc1t5XVsxXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmFkZE5ld1JlcGx5KCBjb250ZW50LCBuZXdfY29tbWVudHMgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd2aS13cGJ1bGt5LWNsb3NlJykpICQoJy52aS11aS5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsc1sxXSA9PT0gY2VsbHNbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9mLnRleHQoJ1ZpZXcgcG9zdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYCR7QXR0cmlidXRlcy5mcm9udGVuZFVybH0/cD0ke3BpZH0mcHJldmlldz10cnVlYCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51SXRlbXMgPSAgZnVuY3Rpb24gKGl0ZW1zLCBvYmosIHgsIHksIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSBvYmouc2VsZWN0ZWRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBwYXJzZUludCh5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzWzBdID09PSBjZWxsc1syXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vcHRpb25zLmNvbHVtbnNbeF0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfZi50ZXh0KCdDaGVjaycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlVG9DZWxsKG9iaix0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9mLnRleHQoJ1VuY2hlY2snKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljayhlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZVRvQ2VsbChvYmosZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vcHRpb25zLmNvbHVtbnNbeF0udHlwZSA9PT0gJ251bWVyaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfZi50ZXh0KCdDYWxjdWxhdG9yJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2soZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENhbGN1bGF0b3Iob2JqLCB4LCB5LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoub3B0aW9ucy5jb2x1bW5zW3hdLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnRWRpdCBtdWx0aXBsZSBjZWxscycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0TXVsdGlDZWxsc0VkaXQob2JqLCB4LCB5LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9mLnRleHQoJ0ZpbmQgYW5kIFJlcGxhY2UnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljayhlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRmluZEFuZFJlcGxhY2Uob2JqLCB4LCB5LCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoub3B0aW9ucy5jb2x1bW5zW3hdLnR5cGUgPT09ICdjdXN0b20nICYmIHR5cGVvZiBvYmoub3B0aW9ucy5jb2x1bW5zW3hdLmVkaXRvci50aW55bWNlSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnRWRpdCBtdWx0aXBsZSBjZWxscycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnZpLXVpLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW55bWNlLmdldCgndmktd3BidWxreS10ZXh0LWVkaXRvcicpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWRpdG9yLmluaXRpYWxpemUoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InLCBBdHRyaWJ1dGVzLnRpbnlNY2VPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlueW1jZS5nZXQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKS5zZXRDb250ZW50KCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy52aS13cGJ1bGt5LXRleHQtZWRpdG9yLXNhdmUnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gd3AuZWRpdG9yLmdldENvbnRlbnQoJ3ZpLXdwYnVsa3ktdGV4dC1lZGl0b3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZVRvQ2VsbChvYmosIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd2aS13cGJ1bGt5LWNsb3NlJykpICQoJy52aS11aS5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkgaXRlbXMucHVzaCh7dHlwZTogJ2xpbmUnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9PSBudWxsICYmIHkgIT09IG51bGwgJiYgY2VsbHNbMF0gPT09IGNlbGxzWzJdICYmIGNlbGxzWzFdID09PSBjZWxsc1szXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGlkID0gX2YuZ2V0UG9zdElkT2ZDZWxsKG9iaiwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfZi50ZXh0KCdEdXBsaWNhdGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2YuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiAnZHVwbGljYXRlX3Bvc3QnLCBwb3N0X2lkOiBwaWR9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2YubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmluc2VydFJvdygwLCB5ICsgaSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zZXRSb3dEYXRhKHkgKyBpLCBpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2YucmVtb3ZlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnR28gdG8gZWRpdCBwYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGAke0F0dHJpYnV0ZXMuYWRtaW5Vcmx9cG9zdC5waHA/cG9zdD0ke3BpZH0mYWN0aW9uPWVkaXRgLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2YudGV4dCgnUHJldmlldycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgJHtBdHRyaWJ1dGVzLmZyb250ZW5kVXJsfT9wPSR7cGlkfSZwcmV2aWV3PXRydWVgLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkgaXRlbXMucHVzaCh7dHlwZTogJ2xpbmUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQXR0cmlidXRlcy5jb2x1bW5zKTtkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuV29ya0Jvb2sgPSAkKCcjdmktd3BidWxreS1zcHJlYWRzaGVldCcpLmpleGNlbCh7XHJcbiAgICAgICAgICAgICAgICBhbGxvd0luc2VydFJvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbGxvd0luc2VydENvbHVtbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhYm91dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmcmVlemVDb2x1bW5zOiAzLFxyXG4gICAgICAgICAgICAgICAgdGFibGVPdmVyZmxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRhYmxlV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBBdHRyaWJ1dGVzLmNvbHVtbnMsXHJcbiAgICAgICAgICAgICAgICBzdHJpcEhUTUw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dFeHBvcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dEZWxldGVDb2x1bW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZW5hbWVDb2x1bW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b0luY3JlbWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbGxvd1hDb3B5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHtkZWxldGVTZWxlY3RlZFJvd3M6IGAke19mLnRleHQoJ0RlbGV0ZSBzZWxlY3RlZCByb3dzJyl9YH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgb25yZXNpemVjb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAvLyBsYXp5TG9hZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbmNoYW5nZShpbnN0YW5jZSwgY2VsbCwgY29sLCByb3csIHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KG9sZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnBhcmVudCgpLnRyaWdnZXIoJ2NlbGxvbmNoYW5nZScsIHtjZWxsLCBjb2wsIHJvdywgdmFsdWV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaWQgPSB0aGlzLm9wdGlvbnMuZGF0YVtyb3ddWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5jb21wYXJlLnB1c2gocGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuY29tcGFyZSA9IFsuLi5uZXcgU2V0KCR0aGlzLmNvbXBhcmUpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMubWVudWJhci5maW5kKCcudmktd3BidWxreS1zYXZlLWJ1dHRvbicpLmFkZENsYXNzKCd2aS13cGJ1bGt5LXNhdmVhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoISR0aGlzLnNpZGViYXIucmV2aXNpb25bcGlkXSkgJHRoaXMuc2lkZWJhci5yZXZpc2lvbltwaWRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBjb2x1bW5UeXBlID0gX2YuZ2V0Q29sdW1uVHlwZShjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkdGhpcy5zaWRlYmFyLnJldmlzaW9uW3BpZF1bY29sdW1uVHlwZV0gPSBvbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkdGhpcy5yZXZpc2lvbltwaWRdKSAkdGhpcy5yZXZpc2lvbltwaWRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5UeXBlID0gX2YuZ2V0Q29sdW1uVHlwZShjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZXZpc2lvbltwaWRdW2NvbHVtblR5cGVdID0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbmJlZm9yZWNoYW5nZShpbnN0YW5jZSwgY2VsbCwgY29sLCByb3csIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBET01QdXJpZnkuc2FuaXRpemUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIG9uZGVsZXRlcm93KGVsLCByb3dOdW1iZXIsIG51bU9mUm93cywgcm93UmVjb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyBvZiByb3dSZWNvcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnRyYXNoLnB1c2gocm93WzBdLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdGhpcy50cmFzaC5sZW5ndGgpICR0aGlzLm1lbnViYXIuZmluZCgnLnZpLXdwYnVsa3ktc2F2ZS1idXR0b24nKS5hZGRDbGFzcygndmktd3BidWxreS1zYXZlYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbnVuZG8oZWwsIGhpc3RvcnlSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeVJlY29yZCAmJiBoaXN0b3J5UmVjb3JkLmFjdGlvbiA9PT0gJ2RlbGV0ZVJvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIGhpc3RvcnlSZWNvcmQucm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudW5UcmFzaC5wdXNoKHJvd1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIG9uc2VsZWN0aW9uKGVsLCB4MSwgeTEsIHgyLCB5Miwgb3JpZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgxID09PSB4MiAmJiB5MSA9PT0geTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB0aGlzLmdldENlbGxGcm9tQ29vcmRzKHgxLCB5MSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9ICQoY2VsbCkuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5sZW5ndGggJiYgY2hpbGQuaGFzQ2xhc3MoJ3ZpLXdwYnVsa3ktZ2FsbGVyeS1oYXMtaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWRzID0gdGhpcy5vcHRpb25zLmRhdGFbeTFdW3gxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIG9mIGlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gQXR0cmlidXRlcy5pbWdTdG9yYWdlW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICs9IGA8bGkgY2xhc3M9XCJ2aS13cGJ1bGt5LWdhbGxlcnktaW1hZ2VcIj48aW1nIHNyYz1cIiR7c3JjfVwiPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvcHVwKGA8dWwgY2xhc3M9XCJ2aS13cGJ1bGt5LWdhbGxlcnktaW1hZ2VzXCI+JHtpbWFnZXN9PC91bD5gLCAkKGNlbGwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25iZWZvcmVjb3B5KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpcnN0Q2VsbENvcHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbmNvcHlpbmcodmFsdWUsIHgsIHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR0aGlzLmZpcnN0Q2VsbENvcHkpICR0aGlzLmZpcnN0Q2VsbENvcHkgPSBbeCwgeV1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25iZWZvcmVwYXN0ZShkYXRhLCBzZWxlY3RlZENlbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuZmlyc3RDZWxsQ29weSAmJiBwYXJzZUludCgkdGhpcy5maXJzdENlbGxDb3B5WzBdKSAhPT0gcGFyc2VJbnQoc2VsZWN0ZWRDZWxsWzBdKSkgZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbnNjcm9sbChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RPcGVuaW5nID0gJChlbCkuZmluZCgnc2VsZWN0LnNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0T3BlbmluZy5sZW5ndGgpIHNlbGVjdE9wZW5pbmcuc2VsZWN0MignY2xvc2UnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvc2VNZW51KGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLnNpZGViYXIucmVtb3ZlQ2xhc3MoJ3ZpLXdwYnVsa3ktb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuTWVudShlKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWIgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgnbWVudV90YWInKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSB0aGlzLnNpZGViYXIuc2lkZWJhci5maW5kKGBhLml0ZW1bZGF0YS10YWI9JyR7dGFifSddYCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFiLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiB0aGlzLnNpZGViYXIuc2lkZWJhci5oYXNDbGFzcygndmktd3BidWxreS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhci5zaWRlYmFyLnJlbW92ZUNsYXNzKCd2aS13cGJ1bGt5LW9wZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhci5zaWRlYmFyLmFkZENsYXNzKCd2aS13cGJ1bGt5LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkTmV3UG9zdCgpIHtcclxuICAgICAgICAgICAgaWYgKF9mLmlzX2xvYWRpbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgcG9zdE5hbWUgPSBwcm9tcHQoX2YudGV4dCgnUGxlYXNlIGVudGVyIG5ldyBwb3N0IG5hbWUnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7c3ViX2FjdGlvbjogJ2FkZF9uZXdfcG9zdCcsIHBvc3RfbmFtZTogcG9zdE5hbWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLmluc2VydFJvdygwLCAwLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuV29ya0Jvb2suc2V0Um93RGF0YSgwLCByZXMuZGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLnJlbW92ZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGROZXdSZXBseSggY29udGVudCwgbmV3X2NvbW1lbnRzICkge1xyXG4gICAgICAgICAgICBpZiAoX2YuaXNfbG9hZGluZygpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgJHRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiAnYWRkX25ld19yZXBseScsIGNvbnRlbnQsIG5ld19jb21tZW50cyB9LFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZi5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBfZi5yZW1vdmVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVsb2FkQ3VycmVudFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5zdGF0dXNUZXh0ICsgcmVzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBfZi5yZW1vdmVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2dnbGVGdWxsU2NyZWVuKGUpIHtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKCcud3AtYWRtaW4nKSwgc2NyZWVuQnRuID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCd2aS13cGJ1bGt5LWZ1bGwtc2NyZWVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm9keS5oYXNDbGFzcygndmktd3BidWxreS1mdWxsLXNjcmVlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW5CdG4uZmluZCgnaS5pY29uJykucmVtb3ZlQ2xhc3MoJ2V4dGVybmFsIGFsdGVybmF0ZScpLmFkZENsYXNzKCd3aW5kb3cgY2xvc2Ugb3V0bGluZScpO1xyXG4gICAgICAgICAgICAgICAgc2NyZWVuQnRuLmF0dHIoJ3RpdGxlJywgJ0V4aXQgZnVsbCBzY3JlZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcmVlbkJ0bi5maW5kKCdpLmljb24nKS5yZW1vdmVDbGFzcygnd2luZG93IGNsb3NlIG91dGxpbmUnKS5hZGRDbGFzcygnZXh0ZXJuYWwgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW5CdG4uYXR0cigndGl0bGUnLCAnRnVsbCBzY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogQXR0cmlidXRlcy5hamF4VXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5BdHRyaWJ1dGVzLmFqYXhEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246ICdzZXRfZnVsbF9zY3JlZW5fb3B0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGJvZHkuaGFzQ2xhc3MoJ3ZpLXdwYnVsa3ktZnVsbC1zY3JlZW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEFsbFJvd3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLldvcmtCb29rLmdldERhdGEoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2F2ZSgpIHtcclxuICAgICAgICAgICAgbGV0ICR0aGlzID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHBvc3RzID0gdGhpcy5nZXRBbGxSb3dzKCksXHJcbiAgICAgICAgICAgICAgICBwb3N0c0ZvclNhdmUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHBpZCBvZiB0aGlzLmNvbXBhcmUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocG9zdFswXSkgPT09IHBhcnNlSW50KHBpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHNGb3JTYXZlLnB1c2gocG9zdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoX2YuaXNfbG9hZGluZygpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzYXZlU3RlcChzdGVwID0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBzdGVwICogcmFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyByYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0cyA9IHBvc3RzRm9yU2F2ZS5zbGljZShzdGFydCwgZW5kKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcCA9IHN0ZXAgKiByYW5nZSA+PSBwb3N0c0ZvclNhdmUubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcG9zdHMubGVuZ3RoID09PSAwICYmICR0aGlzLnRyYXNoLmxlbmd0aCA9PT0gMCAmJiAkdGhpcy51blRyYXNoLmxlbmd0aCA9PT0gMCAmJiBzdGVwID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLm5vdGljZShfZi50ZXh0KCdOb3RoaW5nIGNoYW5nZSB0byBzYXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdFN0ZXAgJiYgc3RlcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGlzdG9yaWVzID0gJHRoaXMuV29ya0Jvb2suaGlzdG9yeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yaWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBoaXN0b3J5IG9mIGhpc3Rvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkuYWN0aW9uICE9PSAnZGVsZXRlUm93JykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlGb3JEZWwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGhpc3Rvcnkucm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5LnJvd0RhdGFbaV1bMV0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlGb3JEZWwucHVzaChwYXJzZUludChpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpRm9yRGVsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkucm93RGF0YSA9IGhpc3Rvcnkucm93RGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+ICFpRm9yRGVsLmluY2x1ZGVzKGkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJvd05vZGUgPSBoaXN0b3J5LnJvd05vZGUuZmlsdGVyKChpdGVtLCBpKSA9PiAhaUZvckRlbC5pbmNsdWRlcyhpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5yb3dSZWNvcmRzID0gaGlzdG9yeS5yb3dSZWNvcmRzLmZpbHRlcigoaXRlbSwgaSkgPT4gIWlGb3JEZWwuaW5jbHVkZXMoaSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkubnVtT2ZSb3dzID0gaGlzdG9yeS5udW1PZlJvd3MgLSBpRm9yRGVsLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuc2F2ZVJldmlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Yuc2hvd01lc3NhZ2UoIHt0aXRsZTpcIlN1Y2Nlc3NcIiwgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseScsIHR5cGU6IFwicG9zaXRpdmVcIiwgZHVyYXRpb246IDMwMDB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSB3cGJ1bGt5UGFyYW1zLnBvc3RUeXBlID09PSdjb21tZW50JyA/ICdzYXZlX2NvbW1lbnRzJyA6ICdzYXZlX3Bvc3RzJztcclxuXHJcbiAgICAgICAgICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM6IEpTT04uc3RyaW5naWZ5KHBvc3RzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhc2g6ICR0aGlzLnRyYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnRyYXNoOiAkdGhpcy51blRyYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2YubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJhc2ggPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudW5UcmFzaCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5jb21wYXJlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLm1lbnViYXIuZmluZCgnLnZpLXdwYnVsa3ktc2F2ZS1idXR0b24nKS5yZW1vdmVDbGFzcygndmktd3BidWxreS1zYXZlYWJsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2YucmVtb3ZlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlU3RlcChzdGVwICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Yuc2hvd01lc3NhZ2UoIHt0aXRsZTpcIkVycm9yXCIsIG1lc3NhZ2U6IHJlcy5zdGF0dXNUZXh0ICsgcmVzLnJlc3BvbnNlVGV4dCwgdHlwZTogXCJuZWdhdGl2ZVwiLCBkdXJhdGlvbjogMzAwMH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzYXZlU3RlcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZFBvc3RzKHBhZ2UgPSAxLCByZUNyZWF0ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoX2YuaXNfbG9hZGluZygpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBfZi5hamF4KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJfYWN0aW9uOiAnbG9hZF9wb3N0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICByZV9jcmVhdGU6IHJlQ3JlYXRlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZi5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlcy5pbWdTdG9yYWdlID0gcmVzLmRhdGEuaW1nX3N0b3JhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMuc2V0Q29sdW1ucyhyZXMuZGF0YS5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMuaWRNYXBwaW5nID0gcmVzLmRhdGEuaWRNYXBwaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlcy5pZE1hcHBpbmdGbGlwID0gcmVzLmRhdGEuaWRNYXBwaW5nRmxpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLndvcmtCb29rSW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLm9wdGlvbnMuZGF0YSA9IHJlcy5kYXRhLnBvc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5Xb3JrQm9vay5zZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhZ2luYXRpb24ocmVzLmRhdGEubWF4X251bV9wYWdlcywgcGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLm9yZGVyQWZ0ZXJMb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLnJlbW92ZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLmRhdGEucG9zdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZi5ub3RpY2UoX2YudGV4dCgnTm8gcG9zdCB3YXMgZm91bmQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZENvbW1lbnRzKCBwYWdlID0gMSwgcmVDcmVhdGUgPSBmYWxzZSApIHtcclxuICAgICAgICAgICAgbGV0ICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChfZi5pc19sb2FkaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIF9mLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9hY3Rpb246ICdsb2FkX2NvbW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlX2NyZWF0ZTogcmVDcmVhdGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMuc2V0Q29sdW1ucyhyZXMuZGF0YS5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXMuaWRNYXBwaW5nID0gcmVzLmRhdGEuaWRNYXBwaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlcy5pZE1hcHBpbmdGbGlwID0gcmVzLmRhdGEuaWRNYXBwaW5nRmxpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLndvcmtCb29rSW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLldvcmtCb29rLm9wdGlvbnMuZGF0YSA9IHJlcy5kYXRhLnBvc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5Xb3JrQm9vay5zZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhZ2luYXRpb24ocmVzLmRhdGEubWF4X251bV9wYWdlcywgcGFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZi5yZW1vdmVMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5kYXRhLnBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Yubm90aWNlKF9mLnRleHQoJ05vIHBvc3Qgd2FzIGZvdW5kJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZ2luYXRpb24obWF4UGFnZSwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51YmFyLmZpbmQoJy52aS13cGJ1bGt5LXBhZ2luYXRpb24nKS5odG1sKF9mLnBhZ2luYXRpb24obWF4UGFnZSwgY3VycmVudFBhZ2UpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZVBhZ2UoZSkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZSA9IHBhcnNlSW50KCQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXBhZ2UnKSk7XHJcbiAgICAgICAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpIHx8ICQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnZGlzYWJsZWQnKSB8fCAhcGFnZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQb3N0cyhwYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZVBhZ2VCeUlucHV0KGUpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2UgPSBwYXJzZUludCgkKGUudGFyZ2V0KS52YWwoKSk7XHJcbiAgICAgICAgICAgIGxldCBtYXggPSBwYXJzZUludCgkKGUudGFyZ2V0KS5hdHRyKCdtYXgnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFnZSA8PSBtYXggJiYgcGFnZSA+IDApIHRoaXMubG9hZFBvc3RzKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVsb2FkQ3VycmVudFBhZ2UoKSB7XHJcbiAgICAgICAgICAgIGlmICggd3BidWxreVBhcmFtcy5wb3N0VHlwZSA9PT0nY29tbWVudCcgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb21tZW50cyh0aGlzLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQb3N0cyh0aGlzLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRDdXJyZW50UGFnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudWJhci5maW5kKCcudmktd3BidWxreS1wYWdpbmF0aW9uIC5pdGVtLmFjdGl2ZScpLmRhdGEoJ3BhZ2UnKSB8fCAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWZ0ZXJBZGRGaWx0ZXIoZXYsIGRhdGEpIHtcclxuICAgICAgICAgICAgQXR0cmlidXRlcy5pbWdTdG9yYWdlID0gZGF0YS5pbWdfc3RvcmFnZTtcclxuICAgICAgICAgICAgdGhpcy5Xb3JrQm9vay5vcHRpb25zLmRhdGEgPSBkYXRhLnBvc3RzO1xyXG4gICAgICAgICAgICB0aGlzLldvcmtCb29rLnNldERhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uKGRhdGEubWF4X251bV9wYWdlcywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuV29ya0Jvb2sub3JkZXJBZnRlckxvYWQoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnBvc3RzLmxlbmd0aCkgX2Yubm90aWNlKF9mLnRleHQoJ05vIHBvc3Qgd2FzIGZvdW5kJykpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZnRlclNhdmVTZXR0aW5ncyhldiwgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5maWVsZHNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICggd3BidWxreVBhcmFtcy5wb3N0VHlwZSA9PT0nY29tbWVudCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tbWVudHModGhpcy5nZXRDdXJyZW50UGFnZSgpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQb3N0cyh0aGlzLmdldEN1cnJlbnRQYWdlKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYXZlUmV2aXNpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCAkdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cygkdGhpcy5yZXZpc2lvbikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSAkdGhpcy5zaWRlYmFyLnNpZGViYXIuZmluZCgnLnZpLXdwYnVsa3ktcGFnaW5hdGlvbiBhLml0ZW0uYWN0aXZlJykuZGF0YSgncGFnZScpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IHdwYnVsa3lQYXJhbXMucG9zdFR5cGUgPT09J2NvbW1lbnQnID8gJ2F1dG9fc2F2ZV9yZXZpc2lvbl9jb21tZW50JyA6ICdhdXRvX3NhdmVfcmV2aXNpb24nO1xyXG5cclxuICAgICAgICAgICAgICAgIF9mLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtzdWJfYWN0aW9uOiBhY3Rpb24sIGRhdGE6ICR0aGlzLnJldmlzaW9uLCBwYWdlOiBjdXJyZW50UGFnZSB8fCAxfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS51cGRhdGVQYWdlKSAkKCcjdmktd3BidWxreS1oaXN0b3J5LXBvaW50cy1saXN0IHRib2R5JykuaHRtbChyZXMuZGF0YS51cGRhdGVQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJldmlzaW9uID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5zaWRlYmFyLnNpZGViYXIuZmluZCgnLnZpLXdwYnVsa3ktcGFnaW5hdGlvbicpLmh0bWwoX2YucGFnaW5hdGlvbihyZXMuZGF0YS5wYWdlcywgY3VycmVudFBhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ldyBCdWxrRWRpdCgpO1xyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==