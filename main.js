// adds a new Jquery selector for case-insentive :contains called with
// :containsCI
$.extend($.expr[":"], {
    "containsCI": function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || "")
            .toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});


$.get("https://www.howsmyssl.com/a/check", {
    paramOne: 1,
    paramX: 'abc'
}, function (data) {
    if (data.tls_version == "TLS 1.0") {
        $('body').remove();
        document.write('<div class="logo"><a class="logo-link" href="//lse.ac.uk/home.aspx"> <img class=' +
            '"logo-image" style="width:200px;" src="https://lseapps.secure.force.com/static/r' +
            'esource/FormAssets/London-school-of-economics-logo-with-name.svg"></a></div><p><' +
            'br><span style="font-size: medium;"><b>ERROR MESSAGE:</b><br>It looks like the s' +
            'ecurity settings for your browser are out of date. As we can only accept data pr' +
            'ovided securely, we advise that you try this link again with another browser or ' +
            'follow the instructions below to update your settings.</span></p><p>&nbsp;</p><p' +
            '><span style="font-size: medium;"><a id="IE" name="IE"></a><strong>Microsoft Int' +
            'ernet Explorer</strong></span></p><div class="content"><ol><li><span style="font' +
            '-size: medium;">Open&nbsp;<strong>Internet Explorer</strong></span></li><li><spa' +
            'n style="font-size: medium;">From the menu bar, click&nbsp;<strong>Tools&nbsp;</' +
            'strong>&gt;&nbsp;<strong>&nbsp;Internet Options</strong>&nbsp;&gt;&nbsp;<strong>' +
            'Advanced</strong>&nbsp;tab</span></li><li><span style="font-size: medium;">Scrol' +
            'l down to&nbsp;<strong>Security&nbsp;</strong>category, manually check the optio' +
            'n box for&nbsp;<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<strong>Use TLS 1.2</s' +
            'trong></span></li></ol><p><span style="font-size: medium;"><a id="Chrome" name="' +
            'Chrome"></a><strong>Google Chrome</strong></span></p><ol><li><span style="font-s' +
            'ize: medium;">Open&nbsp;<strong>Google Chrome</strong></span></li><li><span styl' +
            'e="font-size: medium;">Click&nbsp;<strong>Alt F</strong>&nbsp;and select&nbsp;<s' +
            'trong>Settings</strong></span></li><li><span style="font-size: medium;">Scroll d' +
            'own and select&nbsp;<strong>Show advanced settings...</strong></span></li><li><s' +
            'pan style="font-size: medium;">Scroll down to the&nbsp;<strong>Network&nbsp;</st' +
            'rong>section and click on&nbsp;<strong>Change proxy settings...</strong></span><' +
            '/li><li><span style="font-size: medium;">Select the&nbsp;<strong>Advanced&nbsp;<' +
            '/strong>tab</span></li><li><span style="font-size: medium;">Scroll down to&nbsp;' +
            '<strong>Security&nbsp;</strong>category, manually check the option box for&nbsp;' +
            '<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<strong>Use TLS 1.2</strong></span></' +
            'li></ol><div class="content"><p><span style="font-size: medium;"><a id="Firefox"' +
            ' name="Firefox"></a><strong>Mozilla Firefox</strong></span></p></div><ol><li><sp' +
            'an style="font-size: medium;">Open&nbsp;<strong>Firefox</strong></span></li><li>' +
            '<span style="font-size: medium;">In the address bar, type&nbsp;<strong>about:con' +
            'fig</strong>&nbsp;and press Enter</span></li><li><span style="font-size: medium;' +
            '">In the&nbsp;<strong>Search&nbsp;</strong>field, enter&nbsp;<strong>tls</strong' +
            '>. Find and double-click the entry for&nbsp;<strong>security.tls.version.min</st' +
            'rong></span></li><li><span style="font-size: medium;">Set the integer value to 3' +
            ' to force protocol of TLS 1.3</span></li></ol><p><span style="font-size: medium;' +
            '"><a id="Opera" name="Opera"></a><strong>Opera</strong></span></p><ol><li><span ' +
            'style="font-size: medium;">Open&nbsp;<strong>Opera</strong></span></li><li><span' +
            ' style="font-size: medium;">Click&nbsp;<strong>Ctrl&nbsp;</strong>plus&nbsp;<str' +
            'ong>F12</strong></span></li><li><span style="font-size: medium;">Scroll down to ' +
            'the&nbsp;<strong>Network&nbsp;</strong>section and click on&nbsp;<strong>Change ' +
            'proxy settings...</strong></span></li><li><span style="font-size: medium;">Selec' +
            't the&nbsp;<strong>Advanced&nbsp;</strong>tab</span></li><li><span style="font-s' +
            'ize: medium;">Scroll down to&nbsp;<strong>Security&nbsp;</strong>category, manua' +
            'lly check the option box for&nbsp;<strong>Use TLS 1.1&nbsp;</strong>and&nbsp;<st' +
            'rong>Use TLS 1.2</strong></span></li></ol><p><span style="font-size: medium;"><s' +
            'trong>Apple Safari</strong></span></p><p><span style="font-size: medium;">There ' +
            'are no TLS settings on Apple Safari. Please ensure you are using version 7 or la' +
            'ter.</span></p></div>');
        document.write('<style>@import url("https://fonts.googleapis.com/css?family=Roboto");body{font-f' +
            'amily:"Roboto",sans-serif;margin:auto;max-width:700px;padding:10px;}</style>');

    }
});

//jquery to scroll animate
(function ($) {
    $.fn.goTo = function (offset) {
        $('html, body').animate({
            scrollTop: $(this)
                .offset()
                .top + offset + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);

//Record Picker Functions
function searchForRecord(filterCriteria, search, field) {
    if (search.length >= 3) {

        $.ajax({
            url: "https://" + window.location.hostname + "/form/Form_Field_Picker?filterCriteria=" + filterCriteria + "&search=" + search,
            success: function (result) {
                if (result != null) {
                    recordPickerData[field].searchResults = result;
                    showRecordPickerOptions(field);
                } else {
                    recordPickerData[field].searchResults = undefined;
                    hideRecordPickerOptions(field);
                    console.log('no results returned');
                }

            }
        });
    }
}

let recordPickerData = {};

function showRecordPickerOptions(field) {
    hideRecordPickerOptions(field);
    let data = recordPickerData[field];
    let controllingField = data.controllingField;
    let resultContainer = document.createElement('div');
    resultContainer.className = 'record-picker-result-container';
    resultContainer.id = field + '_record-results';
    let searchResults = recordPickerData[field].searchResults;
    $(resultContainer).insertAfter(controllingField);

    for (let i = 0; i < searchResults.length; i++) {
        let resultItem = document.createElement('div');
        resultItem.className = 'record-picker-result-item';
        resultItem.innerHTML = searchResults[i][data.displayField];
        resultItem.id = searchResults[i].Id;
        $(resultContainer).append(resultItem);
    }

    $(resultContainer)
        .on('click', '.record-picker-result-item', function () {
            $(recordPickerData[field].originalField).val(this.id);
            $(recordPickerData[field].controllingField).val(this.textContent.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
            if (recordPickerData[field].outputDisplayField) {
                $(recordPickerData[field].outputDisplayField).val(this.textContent.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
            }
            hideRecordPickerOptions(field);
        });
}

function hideRecordPickerOptions(field) {
    let existingResults = document.getElementById(field + '_record-results');
    if (existingResults) {
        existingResults.remove();
    }
}


// FormAssembly Field Id , Form_Filter_Criteria__mdt name, Salesforce Field to display to user, FormAssembly field id to output display field value
function makeRecordPicker(field, filterCriteria, displayField, outputDisplayFieldId) {

    let originalField = document.getElementById(field);
    let clone = originalField.cloneNode(true);
    let outputDisplayField;
    if (outputDisplayFieldId) {
        outputDisplayField = document.getElementById(outputDisplayFieldId);
    }

    recordPickerData[field] = {
        originalField: originalField,
        controllingField: clone,
        searchValue: '',
        searchResults: undefined,
        timeout: 500,
        displayField: displayField,
        outputDisplayField: outputDisplayField

    }
    clone.id = clone.id + '_clone';
    $(clone).attr('name', clone.id + '_clone');
    $(clone).attr('autocomplete', 'off');
    $(clone).insertAfter(originalField);
    $(clone).removeClass('required');
    $(clone).removeClass('validate-custom');
    $(originalField).addClass('sv-hide');

    $(clone).on('keyup', function (event) {

        let search = $(this)
            .val()
            .trim();
        if (search.length >= 3) {
            let oldValue = recordPickerData[field].searchValue;
            if (search != oldValue) {
                recordPickerData[field].searchValue = search;
                searchForRecord(filterCriteria, search, field);
            }
        } else {
            recordPickerData[field].searchValue = '';
            hideRecordPickerOptions(field);
        }
    });

    $(clone).on('focus', function (event) {
        recordPickerData[field].searchValue = '';
        $(recordPickerData[field].originalField).val('');
        $(recordPickerData[field].controllingField).val('');

        hideRecordPickerOptions(field);

    });

    $(clone).on('blur', function (event) {
        setTimeout(function () {
            if (!$(recordPickerData[field].originalField).val()) {
                $(recordPickerData[field].controllingField).val('');
            }
            hideRecordPickerOptions(field);
        }, 1000);
    });
}

// Functions for creating repeatable accordion blocks in the form.
function prepareRepeatSection() {
    $('legend:contains("(REPEATABLE FOLD)")')
        .each(function () {
            var titleElement = $(this);
            var containingFieldset = $(this).parent();
            containingFieldset.attr('original-id', containingFieldset.attr('id'));
            var strippedTitleElement = titleElement
                .clone()
                .attr('id', '');
            containingFieldset.addClass("repeated-accordion");
            containingFieldset.addClass("accordion-folded");
            titleElement.after(strippedTitleElement);
            titleElement.hide();
            foldButton = '<div class="fold-button">+</div>';

            containingFieldset.prepend('<div class="expandAll"><a onclick="expandAll();">Expand all</a></div>');
            strippedTitleElement.after(foldButton);
            strippedTitleElement.addClass('variable-header');
            var newTitle = strippedTitleElement
                .text()
                .replace(' (REPEATABLE FOLD)', '');
            strippedTitleElement.text(newTitle);
            strippedTitleElement.attr('default-title', newTitle);

            //strips text from label
            $(this)
                .parent()
                .find('label')
                .each(function () {
                    if ($(this).text().includes(' (FOLD_HEADER)')) { }
                });
            $(this)
                .parent()
                .find('input')
                .each(function () {
                    var inputElement = $(this);
                    if ($(this).attr('title') != undefined) {
                        if ($(this).attr('title').includes(' (FOLD_HEADER)')) {
                            // assigns the order of the header as attributes and adds classes to find during
                            // binding
                            headerOrder = $(this)
                                .attr('title')
                                .split(' (FOLD_HEADER)')[1]
                                .replace('[', "");
                            headerOrder = headerOrder.replace(']', "");
                            $(this).attr('header-order', headerOrder);
                            $(this).addClass('fold-header');
                            //removes the control text from the label element
                            var labelElement = inputElement
                                .parents('.oneField')
                                .find('label');
                            var replaceText = " (FOLD_HEADER)[" + headerOrder + ']';
                            labelElement.html(labelElement.html().replace(replaceText, ""));

                        }
                    }

                });
        });
    //starts the function for adding error badges to accordions.
    setInterval(function () {
        $('.errors-badge').remove();
        $('.repeated-accordion').each(function () {
            var numErrors = ($(this).find('.errMsg').length);
            if (numErrors > 0) {

                var elem = document.createElement('div');
                elem.className = 'errors-badge';
                elem.innerHTML = numErrors + ' errors';
                $(this).prepend(elem);
            }
        });
    }, 500)
}

function expandAll() {
    $
        .each($('.fold-button'), function () {
            $(this).addClass('fold-already-bound');
            $(this)
                .parents('.repeated-accordion')
                .removeClass('accordion-folded');
            $(this).text('-');
        });
}

function bindButtons(preventClose) {
    //unbinds to rebind (prevents the same event firing more than once)#
    $('input').off('focus.enterFold');
    $('input').on('focus.enterFold', function () {
        $(this)
            .parents('.repeated-accordion.accordion-folded')
            .find('.fold-button')
            .click();
    });

    $('.fold-button').off('click.fold');
    $('.fold-button').on('click.fold', function () {
        $(this).addClass('fold-already-bound');
        $(this)
            .parents('.repeated-accordion')
            .toggleClass('accordion-folded');
        if ($(this).text() == '+') {
            //closes other open windows
            $('.fold-button:contains("\-")')
                .each(function () {
                    $(this).click();
                });
            $(this).goTo(-70);
            //toggles text
            $(this).text('-');

        } else {
            $(this).text('+');
        }
    });
}

function bindNewButton() {
    $('.duplicateSpan').off('click.fold');
    $('.duplicateSpan').on('click.fold', function () {
        $('.fold-button:contains("\-")')
            .each(function () {
                $(this).click();
            });
        bindButtons();

        var newSectionHeader = $(this)
            .prev()
            .find('.variable-header');
        newSectionHeader
            .next()
            .click();
        newSectionHeader.text(newSectionHeader.attr("default-title"));
        newSectionHeader.goTo(-70);
        bindHeaders();
    });
}

function bindHeaders() {
    $('.fold-header')
        .each(function () {
            $(this).off('change.headerBindingNamespace');
            $(this).on('change.headerBindingNamespace', function () {
                //selects all other inputs on under this header
                var titleElement = $(this)
                    .parents('.repeated-accordion')
                    .find('.variable-header');
                var newTitleArray = [];
                // builds an array of the name using the order functions then joins the array
                // with spaces
                $(this)
                    .parents('.repeated-accordion')
                    .find('.fold-header')
                    .each(function () {
                        newTitleArray[$(this).attr('header-order')] = $(this).val();
                    });
                var newTitle = newTitleArray.join(" ");
                if (newTitle == " ") {
                    newTitle = titleElement.attr('default-title');
                }
                titleElement.text(newTitle);
            });
        });

}

function squareBracketEscaper(val) {
    val = val.replace('[', '\\[');
    val = val.replace(']', '\\]');
    return val;
}

function repeatableAccordion() {
    prepareRepeatSection();
    bindNewButton();
    bindButtons();
    bindHeaders();
}

// removes the FormAssembly CSS. N.B. Salesforce moves location of css so use
// 'span.wFormWebPage' for iframe and 'head' for full site.
if (window != window.top) {
    $('link[href*="wforms-layout.css"]').remove();
} else {
    $('link[href*="wforms-layout.css"]').remove();
}

$('span.wFormWebPage > link')
    .eq(0)
    .remove();

$('.wFormContainer > style').remove();

// Adds required classes for Bootstrap as well as custom CSS and Fonts once the
// page has been loaded
$(document).ready(function () {
    // detects if the formID contains a questionmark and changes a value to show the
    // Subject Area of Interest fields then hides that field.
    if (window.location.href == "https://join.lse.ac.uk/events/TargetX_Eventsb__formpage?formid=217735?&") {
        $('#tfa_1620').val("tfa_1622");
    };
    $('#tfa_1618').hide();

    //adds in the Goolge fonts Roboto and Libre Baskerville
    WebFontConfig = {
        google: {
            families: ['Roboto::latin', 'Libre+Baskerville::latin']
        }
    };
    (function () {
        var wf = document.createElement('script');
        wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s
            .parentNode
            .insertBefore(wf, s);
    })();

    //styles radios and check boxes

    /*
    var $span = $("span.choices.vertical > span.oneChoice");
    $span.replaceWith(function () {
        return $('<div/>', {
            class: 'sv-btn sv-btn-default select-item',
            html: this.innerHTML
        });
    });
    var $span = $("span.choices.vertical");
    $span.replaceWith(function () {
        return $('<div/>', {
            class: 'sv-btn-group sv-btn-group-justified',
            html: this.innerHTML
        });
    });
    
    */

    //Adds Custom Classes/data-attributes
    $('.wFormContainer').addClass("sv-container");
    $('.primaryAction').addClass("sv-btn sv-btn-primary sv-center-block");
    $('.wfPagePreviousButton').addClass("sv-btn sv-btn-primary sv-center-block");
    $('.wfPageNextButton').addClass("sv-btn sv-btn-primary sv-center-block");

    //Adds Logo
    $('.sv-container').prepend('<a class="logo-link" href=\"//lse.ac.uk/home.aspx\"> <img class=\"logo-image\" s' +
        'rc=\"https://lseapps.secure.force.com/static/resource/FormAssets/London-school-o' +
        'f-economics-logo-with-name.svg\"><\/a>');
    $('.logo-link').wrap("<div class='logo'></div>");

    // Groups the phone elements together. Dialling Code MUST preceed the phone
    // number and be named as such.
    $(".label:containsCI(dialling code)").addClass("dialcode");
    $(".label:containsCI(dialling code)")
        .parent()
        .addClass("phone-element phone-element-dial");
    $('.phone-element')
        .next()
        .addClass("phone-element phone-element-number");
    $('.phone-element').wrapAll("<div class='phone' />");

    //Adds bootstrap rows
    $('fieldset > div.oneField').addClass("sv-row");

    //Unwraps InputWrapper and adds bootstrap form controls/style
    $('.inputWrapper')
        .children()
        .unwrap();
    $('.oneField').addClass('sv-form-group');
    $('.sv-form-group input').addClass('sv-form-control');
    $('.sv-form-group select').addClass('sv-form-control');
    $('.sv-form-group textarea').addClass('sv-form-control');

    var title = new URL(window.location)
        .searchParams
        .get('title');
    if (title) {
        $('.wFormTitle').html(title);
    }

    // adds and removes the 'full' class when an user tries to exceed the maximum
    // length for an input
    $("input")
        .keypress(function (e) {
            if ($(this).attr("maxlength")) {
                if (($(this).val().length) == $(this).attr("maxlength")) {
                    $(this).addClass("full");
                } else {
                    $(this).removeClass("full");
                };
            };
        });
    $("input").keyup(function (e) {

        if ($(this).attr("maxlength")) {
            if (($(this).val().length) == $(this).attr("maxlength")) {
                $(this).removeClass("full");
            } else {
                $(this).removeClass("full");
            };
        }
    });

    // removes the masks from fields if the user is using an Android device as this
    // does not work properly.
    var ua = navigator
        .userAgent
        .toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
        $('input').removeAttr("autoformat");
    }

    // Hides any fields with "(HIDDEN)" in the name without affecting
    // picklists/functionality

    $('label:contains("(HIDDEN)")')
        .each(function () {
            $(this)
                .parent()
                .css("visibility", "hidden")
                .outerHeight(0)
                .css("margin", "0");
        });

    // FormAssembyly have added javascript in that runs afer document.ready() that
    // wraps the div above any length indicators for fields into a div with the
    // display:none style attribute. This function checks to see if it has happened
    // and clears it so that it is visible again.
    var reDisplayFields = setInterval(function () {
        $('.lengthIndicator')
            .parent()
            .each(function () {
                if ($(this).attr("style") == 'position: relative; display: none;') {
                    $(this).attr("style", "");
                    reDisplayFields.clearInterval();
                }
            });
    }, 700);

    //replaces Assistance link with legal Disclaimer Text.
    var DisclaimerEmail = '<a href=\"mailto:';
    var emailAddress = '';
    if ($('#' + $('label:contains("Disclaimer Text")').attr('for')).length > 0) {
        emailAddress += $('#' + $('label:contains("Disclaimer Email")').attr('for')).val();
    }
    else {
        emailAddress += $('input[type="hidden"]')
            .eq(0)
            .val();
    }
    DisclaimerEmail += "\"  target=\"_top\">";
    DisclaimerEmail += emailAddress;
    DisclaimerEmail += "<\/a>";

    var DisclaimerDataProtection = '<a href=\"';
    var dataProtection = '';
    if ($('#' + $('label:contains("Disclaimer Data Protection Link")').attr('for')).length > 0) {
        dataProtection += $('#' + $('label:contains("Disclaimer Data Protection Link")').attr('for')).val();
    }
    else {
        dataProtection += $('input[type="hidden"]')
            .eq(1)
            .val();
    }

    DisclaimerDataProtection += dataProtection;
    DisclaimerDataProtection += '\">Data Protection Policy<\/a>';

    var DisclaimerText = "All fields marked <span class='RequiredField'>*</span> are compulsory.<p></p>";

    var disclaimerText = '';
    if ($('#' + $('label:contains("Disclaimer Text")').attr('for')).length > 0) {
        disclaimerText += $('#' + $('label:contains("Disclaimer Text")').attr('for')).val();
    }
    else {
        disclaimerText += $('input[type="hidden"]')
            .eq(2)
            .val();
    }

    DisclaimerText += disclaimerText;

    DisclaimerText = DisclaimerText.replace('{!Email}', DisclaimerEmail);
    DisclaimerText = DisclaimerText.replace('{!DataProtection}', DisclaimerDataProtection);
    $('form').append(DisclaimerText);
    //marks required fields with _*. Reflows text and star together.
    $('.reqMark').append('<span class="RequiredField""> *</span>');
    //hides the school picker when the window changes size
    $(window).resize(function () {
        $('ul').hide();
    });

    //sets fields which contain "Email address" to lower case.
    $('.validate-email').addClass('lowercase')
    $('.validate-email').on('keyup',function(){
        let currentVal = $(this).val().toLowerCase();
        $(this).val(currentVal );
    })
    //adds a colour to any radio buttons that say 'Decline'
    $('input[type="radio"]+label:contains("Decline")').addClass('decline-btn');

    // var tempAlertText = "Please note that from <u>02:00 - 04:00 BST on Monday 8th
    // May</u> this form will be down for scheduled maintenance and will not submit.
    // If you receive an unexpected error, please try again outside of these
    // hours."; Temporary alert message $('.wForm>form').prepend("<div
    // style=\"margin-top:20px;\" class=\"sv-alert sv-alert-info\"><i class=\"fa
    // fa-info-circle\"><\/i> \r\n " + tempAlertText + " \r\n<\/div>"); bugfix for
    // school picker field to not allow submission if a school hasn't been picked.
    $('.ui-autocomplete-input').on('blur', function () {
        var idValue = $(this)
            .parents('.oneField')
            .children('input')
            .not('.ui-autocomplete-input')
            .val();
        if (!idValue) {
            $(this).val('');
        }
    });

    //allows radiobuttons to be required
    $('.sv-form-control[type="radio"]').each(function () {
        let parent = $(this)
            .parents('.oneField')
            .not('.required');
        if (parent.attr('aria-required') == 'true') {
            parent.addClass('required');
        }
    });
});

//a function that makes sure multiple select boxes don't have the same values - add an array of each id to function to call it - ie uniqueFind(["id1", "id2", "id3"])

var uniqueFind = function (unique) {
    $(document).ready(function () {
        var idList = "#" + unique.join(", #")
        $(idList).on("change", function () {
            var alertable = "no";
            var eachId;
            var uniqueList = unique;
            for (eachId in uniqueList) {
                if ($(this).attr("id") !== uniqueList[eachId]) {
                    if ($(this).find(":selected").text() == $("#" + uniqueList[eachId]).find(":selected").text()) {
                        alertable = "yes";
                        $(this).val($(this).find("[data-default-value='true']").attr("value"));
                    }
                }
            }
            if (alertable == "yes") {
                alert("You must make a different selection for each preference")
            }
        })
    });
}

$(document).ready(function() {
  $(window).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});


var autoSubmit = function() {
  $(document).ready(
    function() {
      var datastring = $("form").serialize();
      $.ajax({
        type: 'POST',
        url: 'https://lse.tfaforms.net/responses/processor',
        data: datastring,
        success: function(data) {
          $("#modalContent").html("<h2>Thank You</h2><p>" + $(data).find('body').html() + "</p>");
          $(".close").css("display", "block")
        },
        error: function(data) {
          $("#modalContent").html("<h2>Thank You</h2><p>" + $(data).find('body').html() + "</p>");
          $(".close").css("display", "block")
        }
      });

      return false;
    }
  )
}

var modal = function() {

  $(document).ready(function() {

    $(".wFormContainer").append("<div id='myModal' class='modal'><div class='modal-content'><span class='close'>&times;</span><div id='modalContent'></div></div></div>")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      $(".modal").css("display", "none")
    }

  })

}


var makeModal = function(content) {

  $("body").height($("body").height() - 1);
  $("#modalContent").html(content)
  $(".modal").css("display", "block")







}

var mandatory = function(getField) {

  var closestFieldset = $("#" + getField).closest("fieldset").attr("id")
  var passFail = "<ol>"
  $("#" + closestFieldset).find("input[salesforceid], textarea[salesforceid], select[salesforceid]").each(function() {
    var retrieved = $(this).val();
    if ($(this).prop("tagName") == "SELECT") {
      if ($(this).find(":selected").length === 0) {

        retrieved = ""

      } else if ($(this).find(":selected").text() === "Please select...") {


        retrieved = ""

      } else {
        retrieved = "no"
      }



    }

    if (retrieved === "") {

      if ($(this).parents(".offstate").length === 0) {
        var questionMissed = $(this).prevAll(".htmlContent:first").html();
        if ($(this).prevAll(".htmlContent:first").text() !== "") {
          passFail += "<li>" + questionMissed + "</li>";
        }
      }
    } else {
      console.log(retrieved)
    }

  })
  passFail += "</ol>";
  if (passFail === "<ol></ol>") {
    passFail = ""
  }
  return passFail;



}


var nextFix = function(fieldLabel) {
  $(document).ready(function() {

    $("label.label.preField:contains('" + fieldLabel + "')").parent().css("display", "none")
    $("[id='" + fieldLabel + "trigger']").on("click", function() {

      if (mandatory($(this).attr("id")) === "") {
        $("label.label.preField:contains('" + fieldLabel + "')").parent().find("input[type='radio']").trigger("click")
      } else {
        makeModal("The form can't proceed until the following fields are completed:<br/><br/> " + mandatory($(this).attr("id")))
      }

    })


  })
}


var fieldsetPagination = function(originalField, removeHistory) {

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] == "removeHistory") {
      var removeHistory1 = 1;
    }
  }

  var leftArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRQMDR90jzhMAAADkUlEQVRo3u2Zz0tVQRTHP09LQvzRj0X6dCUtQmoRWSkJ5SYRoR9ERoUUCIbbCGkXCJHZRqH6E4Jnm9AQ1IQolCQkw6hoEbTQZ2CQ2eZpaQvnzpt39c6dGd/lbTyz8HrnnPP9ztwzZ2bOg23JscQcbAo4QgVx0WBOtFmmSUVLt5QrJPjNWkBb4hmt7I1mpi4zzHIgtNr+8orr5GUTvoF3RtBqm6HZbGRhcpgHNPne/eAdSfHlEbFQzjH2+/Re08nk1ia+i38Z4/pMN3UBtGPU0c1n30z0ku8KX8RzxdEqCaqN7KpJsKpYjrDHBb6KGcXJGDVW1jWMKdZfOWgLX8+CNE9uiAEzaSIpffyiwcb0AD+l6RSVTvAAlUwpFIxnoYRP0qyfQmd4gEL6lQ9hFAt5vJAmPU6pOlNi9Eh/oyYrokcZ/dbh1ymkZ6EvTPmoXEBTVpNfQpWmt1CJhZN6Ry9l5NuE3i3+sMojjUalXBHjOkeNkqfNwrsjbFbYp9Fqkr4vBKnEmJZpxx5+jW8hO6CXmr6wY3OFazLpmme9NHwqdPerkfF1U88w4QR/1kA/IbQ33SF3syK6zbYce3iolnMc39h5VW64UcEDcrPuCJ6e7gjhoVtYDfs7ClgUXXURwkOdsFumNLPjuOiYN0i/7vAQY17YnsnsuCBeD0YKDzAorG+s/+ulDi8qk6Hw98XTMpcYcCDgIZRnEqgQf+cihk8j+AjEfd2bSWsW4NMIZfYEbsunFmf4wBkwke/yqTFLRxWFgMcrrtG9y6J46uCxMwVfuNsQeE9jFih4CPOZBGYNCMBkFiiEzEB5iPnWKXgIvoxjk4pP8EtmwyeWFAJT8U7p1GQzcqcQuBnBU6vt2JVC4HYMLZYHEjcKmgNJMSnLI5k9Be2RDIasD6W2FLSHUrjocCxXKdwL0Q09lsOkw8UkTWGJYq1m6MUETjldzTwKC+zSaKWvZud1zrzagN3l9AgDfOCiRiN9OX2jd3VIluXsrud6Ua/ntWHKXZEWKHpN1NPVwWyXaEbMipZFSoUwB0UqgCqlSpiDMh1AvVIpzEGhEuCAUi3MQakWoESpGG6lWD3qVqwGyKMnw5VLub5PH/nhy6yGh5z2vTP9wWKcTiZcR69KMx994wpvnziXDWhP8mljwvc5gtoqE7S5/06ikzLaGZInp40txRDt3rXTTFxSbTG1xCkXDZKizfGWpSjGvS2Ryn+dy9FZJIL0FwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yMFQxMjoxMzozMSswMjowMJxegPcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjBUMTI6MTM6MzErMDI6MDDtAzhLAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
  var rightArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRQQHRS8o6mBAAABkklEQVRIx7XVv26SYRQG8J+lmyYyKCk1TCalnbiDmnQk8Q7cXHoZxBhvgAsgzvYKCEkHTUPiaI22Lp0gGjoQZnMcAC0f7wsS9HzTe873PO/J854/bGn3spGSA1VVDA1d+7kJbVPHSNz5Rjqafwc+1p+BBi6cOXNhMPP0Ha8G72oLYaylsRBpaBkLoW03By/rCaGrlozXdIXQU07f3hMmTlfmeGoi9FJZtIWJ+lqN6iZCe1m6EAu3H3hjP5NFCM8WnX2hu+B5JXzzJEnRFT7eraGmMC5I98gn4TqZRc1YeP7H0RFaS789dpmlaAlv54eSkSi8+9QqLoUr1aVIQ7hVmh6OhEFG84rPwtcExUA4YgdV3GQIfjjxRd25vULkZoqcE+Qy4LsTV+reLWXwm2CdlT3EbTq4gyGZkoFD5/Z88KLg358h14h4aCi89yAnIqueMQ9feMZcIeXhhUJKl/LTFfClUk410+ssPNFMqXaueOl+Ep5s560Hyj8YaVsP1WkWW431uZxbLJa5bbDa/tNy3cB+AexezjtEDAYdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA5LTIwVDE2OjI5OjIwKzAyOjAwuPoXgwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOS0yMFQxNjoyOToyMCswMjowMMmnrz8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC";

  var insertedDom = '<div class="section group"><div class="htmlSection"><div class="htmlContent"><img id="next" alt="next" width="32" style="display: none; float: right; height: auto;"></div></div><div class="htmlSection"><div class="htmlContent"><img id="previous" alt="previous" previous="start" width="32" style="display: none; float: right; height: auto;"></div></div><div class="htmlSection"><div class="htmlContent">&nbsp;</div></div></div>';



  $(document).ready(function() {

    var targetNode = document.getElementById(originalField);
    var history = [$("#" + originalField).find("fieldset").not(".offstate").attr("id")]
    var parentField;
    $("#" + originalField).before(insertedDom)
    document.getElementById("previous").src = leftArrow;
    document.getElementById("next").src = rightArrow;

    if ($("#" + originalField).find("fieldset").not(".offstate").length > 1) {

      try {
        parentField = $("#" + originalField).find("fieldset").not(".offstate").find("[value^='parent:']").val().split(":")[1]
      } catch (err) {
        console.log(err)
      }
      if (typeof parentField === "undefined") {
        parentField = "start"
      }
      $("img[alt='previous']").attr("previous", parentField).attr("current", $("#" + originalField).find("fieldset").not(".offstate").attr("id"))
      $("#" + parentField).addClass("offstate")
      $("#previous[previous='start']").css("display", "none")
      $("#previous[previous!='start']").css("display", "block")
    }



    // Options for the observer (which mutations to observe)
    var config = {
      attributes: true,
      childList: true,
      subtree: true,
      attributeOldValue: true
    };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (mutation.target.tagName == "FIELDSET") {

          if ($("#" + originalField).find("fieldset:not('.offstate')").length > 1) {
            $("#" + originalField).find("fieldset:not('.offstate')").not(":last").each(function() {
              $(this).addClass("offstate")
            })
          }

          try {
            if (mutation.target.className.indexOf("offstate") === -1) {
              parentField = $("#" + mutation.target.id).find("[value^='parent:']").val().split(":")[1]
            } else {
              parentField = "none"
            }
          } catch (err) {
            parentField = "start";
          }
          if (parentField !== "none") {
            $("img[alt='previous']").attr("previous", parentField).attr("current", mutation.target.id)
            $("#" + parentField).addClass("offstate")

          }
          $("#previous[previous='start']").css("display", "none")
          $("#previous[previous!='start']").css("display", "block")

          console.log(mutation.target.attributes.getNamedItem("id").value);

          if (mutation.target.attributes.getNamedItem("id").value == 'tfa_1603' && !$("#tfa_1603").hasClass("offstate")) {
            $("[type='submit']").trigger("click")
          }

        }
      }
    }
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    $("img[alt='previous']").on("click", function() {
      var previous = $(this).attr("previous");
      var current = $(this).attr("current");
      if (typeof removeHistory1 !== "undefined") {
        $("#" + previous).find("select").each(
          function() {
            $(this).find("option").find("[data-default-value='true']").removeAttr("data-default-value")
            $(this).find("option").first().next().attr("data-default-value", "true")
            $(this).val($(this).find("[data-default-value='true']").attr("value"))
          }
        );
      }
      $("#" + previous).removeClass("offstate")
      $("#" + current).addClass("offstate");
      if (typeof removeHistory1 == "undefined") {
        $("img[alt='next']").attr("next", $(this).attr("current")).css("display", "block")
      }
      if (history.findIndex(k => k == $(this).attr("current")) === -1) {
        history.push($(this).attr("current"))
      }

    })
    if (typeof removeHistory1 == "undefined") {
      $("img[alt='next']").on("click", function() {
        var next = $(this).attr("next");
        var current = $(this).attr("current");
        $("#" + next).removeClass("offstate");
        $("#" + current).addClass("offstate");
        var nextFind = history.findIndex(k => k == $("#" + originalField).find("fieldset").not(".offstate").attr("id")) + 1;
        if (history.length == nextFind + 1) {
          $(this).css("display", "none");
        }
        $(this).attr("next", history[nextFind])

      });

    }

    $("select").on("change", function() {
      $("#next").css("display", "none")

      var findHistory = history.findIndex(e => e == $("#" + originalField).find("fieldset").not(".offstate").attr("id"))
      if (findHistory !== -1) {
        history.length = findHistory;
      }

    })



  })
}


var fieldSetpageSimple = function(parent) {
  $(document).ready(function() {
    $(".loadedbutton").remove();
    $(".loaded").css("display", "block").removeClass("loaded");
    var lastEl = $("#" + parent + " fieldset").not(".offstate").length - 1
    $("#" + parent + " fieldset").not(".offstate").each(
      function(index) {
        $(this).append("<button type='button' id='chosen" + index + "' class='loadedbutton  sv-btn sv-btn-primary sv-center-block'><span><label>Next</label></span></button>");
        if (index > 0) {
          $(this).css("display", "none")
        }
        if (index == lastEl) {
          $('#chosen' + index).css("display", "none")
        }
        $("#chosen" + index).on("click", function() {

          if (mandatory($(this).attr("id")) === "") {
            var nextup = index + 1;
            $(this).parent().css("display", "none").addClass("loaded");
            $("#chosen" + nextup).parent().css("display", "block").addClass("loaded");
          } else {
            makeModal("The form can't proceed until the following fields are completed:<br/><br/> " + mandatory($(this).attr("id")))
          }







        })

      }

    );
    $(".wfPageNextButton").on("click", function() {


      fieldSetpageSimple(parent);
    })
  })
}







var quill = [];
var form = [];
var about;
var i;
var quillMaker = function(containThis) {
  i = quill.length;
  quill[i] = new Quill('#editor-container' + containThis, {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
        ['link', 'blockquote', 'code-block'],
        [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }]
      ]
    },
    scrollingContainer: '#scrolling-container',
    placeholder: 'Please enter your response here...',
    theme: 'snow'
  });


  quill[i].on('text-change', function() {
    if ($('#editor-container' + containThis + ' .ql-editor').text() !== "") {
      $('#' + containThis).val($('#editor-container' + containThis + ' .ql-editor').html())
      $("textarea[label='" + $('#' + containThis).attr('title') + "']").val($('#editor-container' + containThis + ' .ql-editor').html())
    } else {

      $('#' + containThis).val("");
    }
  })


}

var savedMake = function() {
  var saved = {};
  var keyid;
  var response;
  var eachresponse;
  $("[title='savedquestionids']").each(function(index) {
    eachresponse = {};
    keyid = $(this).val()
    response = $("textarea[title='savedanswers']").eq(index).val();
    eachresponse.savedquestionid = keyid;
    eachresponse.response = response;
    saved[keyid] = eachresponse;
  })

  return saved;

}

var questionMake = function() {

  $("textarea[title='questions'], textarea[title='questionids'], textarea[title='sfquestionids']").parent().css("display", "none");
  $(".removeLink, .duplicateLink").css("display", "none");

  var questions = {};
  var keyid;
  var question;
  var sfquestion;
  var eachquestion;
  $("[title='questionids']").each(function(index) {
    eachquestion = {};
    keyid = $(this).val();
    question = $("textarea[title='questions']").eq(index).val();
    sfquestion = $("textarea[title='sfquestionids']").eq(index).val();
    eachquestion.sfquestionid = sfquestion;
    eachquestion.questionlabel = keyid;
    eachquestion.question = question;
    questions[sfquestion] = eachquestion;
  });
  return questions;
}

var makeQuestions = function() {
  $(document).ready(function() {

      $("input[type='checkbox'], input[type='radio']").each(function() {
        $(this).attr("title", $(this).parent().parent().parent().find("label.preField").text());
      })
      var questions = questionMake();
      var i = 0;
      $.each(questions, function(key, value) {
        $("[title='" + value.questionlabel + "']:not([readonly])").attr("salesforceid", value.sfquestionid).before("<div class='htmlContent'>" + value.question + "</div>");
        $("textarea[title='questions']").eq(i).attr("label", value.questionlabel);
        i++;
      });
      $("textarea[title='questions']").val("").html("");

    }

  )


}




var savedResponses = function() {
  $(document).ready(function() {
    var savedResponses = savedMake();
    console.log(savedResponses);
    $.each(savedResponses, function(key, value) {
      console.log(value.response)
      if ($("[salesforceid='" + value.savedquestionid + "']").prop("tagName") == "SELECT") {
        $("[salesforceid='" + value.savedquestionid + "']").val($("[salesforceid='" + value.savedquestionid + "']").find("option:contains('" + value.response + "')").attr("value"));
        $("[salesforceid='" + value.savedquestionid + "'] option").each(function() {
          $(this).removeAttr("selected")
        });
        $("[salesforceid='" + value.savedquestionid + "']").find("option:contains('" + value.response + "')").attr('selected', true)
        $("[salesforceid='" + value.savedquestionid + "']").change();
      } else if ($("[salesforceid='" + value.savedquestionid + "']").attr("type") == "checkbox" || $("[salesforceid='" + value.savedquestionid + "']").attr("type") == "radio") {
        if (value.response === "true") {
          $("[salesforceid='" + value.savedquestionid + "']").attr('checked', true).prop('checked', true)
        }
      } else {

        $("[salesforceid='" + value.savedquestionid + "']").val(value.response);

      }
    })


  })
}



cloneAnswers = function() {
  $(document).ready(function() {
    $("select").on("change click", function() {
      $("textarea[label='" + $(this).attr('title') + "']").val($(this).find(":selected").text());
    })
    $("input, textarea").on("keyup change blur click", function() {
      if ($(this).attr("type") == "checkbox" || $(this).attr("type") == "radio") {
        if ($(this).is(':checked')) {
          $("textarea[label='" + $(this).attr('title') + "']").val("true")
        } else {
          $("textarea[label='" + $(this).attr('title') + "']").val("false")
        }
      } else {
        $("textarea[label='" + $(this).attr('title') + "']").val($(this).val())
      }
    })


  })

}


var prefillConvert = function(prefillId, addedChoices, updateField) {
  $(document).ready(function() {
    var dataset = $("#" + prefillId).attr("data-dataset-json");
    if (typeof dataset !== "undefined") {
      $.each(addedChoices, function(index, value) {
        dataset += ',{"a": "' + value + '"}]';
      })
      dataset = dataset.replace(/],/gi, ",");
      $("#" + prefillId).attr("data-dataset-json", dataset);
      var prefillTitle = $("#" + prefillId).attr("title");
      var checkme = $.parseJSON(dataset);
      var newLabel;
      if (typeof $("#" + prefillId).parent().find(".htmlContent").html() !== "undefined") {
        newLabel = "<div class='htmlContent'>" + $("#" + prefillId).parent().find(".htmlContent").html() + "</div>";
      } else {
        newLabel = "";
      }
      var newSelect = "<select id='" + prefillId + "controller' title='" + prefillTitle + "' class='sv-form-control'><option value=''>Please select...</option>";
      var selected;
      $.each(checkme, function(index, value) {
        if (value.a == $("#" + prefillId).val()) {
          selected = "selected";
        } else {
          selected = "";
        }
        newSelect += "<option value='" + value.a.replace(/'/g, "&apos;") + "' " + selected + ">" + value.a + "</option>";
      })
      newSelect += "</select><br/><br/><input type='text' id='" + prefillId + "controllernew' style='display: none' class='sv-form-control'>";



      $("#" + prefillId).parent().css("display", "none").before(newLabel + newSelect);

      $.each(addedChoices, function(index, value) {
        $("#" + prefillId + "controller option[value='" + value + "']").addClass('addedChoice')
      })


      $("#" + prefillId + "controller").on("change", function() {

        if ($(this).val() !== "Create New") {
          $("#" + prefillId).val($(this).val());
          $("#" + prefillId + "controllernew").val($(this).val());

          $("#" + updateField).val($(this).val())
          $("#" + updateField).trigger('click')
          $("#" + prefillId + "controllernew").css("display", "none")
        } else {
          $("#" + prefillId + "controllernew").css("display", "block").attr("placeholder", "Project Title")

        }

      });
      $(".fa").css("display", "none");
      $("#" + prefillId + "controllernew").on("keyup", function() {
        $('[salesforceid="' + $("#" + prefillId).attr("salesforceid") + '"]').val($(this).val())

      })
    }

  })

}





var addNewProject = function() {
  $(document).ready(function() {
      $("#tfa_2238").css("display", "none")
      if ($("#tfa_2238").val() !== "") {
        var y = 0;
        $("#tfa_1834controller option").each(
          function() {
            if ($(this).attr("value") == $("#tfa_2238").val()) {
              $(this).attr("selected", "selected")
              y = 1;
            }

          }
        )
        if (y === 0) {
          $("select#tfa_1834controller").append("<option value='" + $("#tfa_2238").val().replace(/'/g, "&apos;") + "' selected>" + $("#tfa_2238").val() + "</option>")
        }
      }
      $("#tfa_1965").css("display", "none");
      $("[id^='tfa_2725']").css("display", "none");

      $("#tfa_1834controller").on("change", function() {
        if ($(this).val() !== "Create New") {
          var selectedproject = $(this).val()
          console.log(selectedproject);
          $("input[title='project']").each(

            function() {
              console.log($(this).val())
              if ($(this).val() === selectedproject) {
                parentfield = $(this).parent().parent().attr("id").replace("[", "\\[").replace("]", "\\]")
                console.log($($("#" + parentfield).html()).find('[title="funder"]').val())
                var behavioural = $($("#" + parentfield).html()).find('[title="funder"]').val()

                $('[title="1.2b"]').val($($("#" + parentfield).html()).find('[title="funder"]').val())
                $("#editor-container" + $('[title="1.2d"]').attr("id") + " .ql-editor").html($($("#" + parentfield).html()).find('[title="abstract"]').val())
                $('[title="1.2f"]').find("option:contains('" + behavioural + "')").attr('selected', true)
                $("#editor-container" + $('[title="1.2e"]').attr("id") + " .ql-editor").html($($("#" + parentfield).html()).find('[title="country"]').val())
                $('[title="1.2g"]').val($($("#" + parentfield).html()).find('[title="start"]').val())
                $('[title="1.2h"]').val($($("#" + parentfield).html()).find('[title="duration"]').val())


              }


            }
          )
        }

        $("#tfa_1970").prop('checked', true);
        $("#tfa_1970").trigger("click");
        $("#tfa_1834controllernew").focus()


      })

      $("#tfa_1834controllernew").on("keyup", function() {
        $("#tfa_2238").val($(this).val())
        $("#tfa_2238").trigger('click')
      })

      if ($("#tfa_1834controllernew").length === 0) {
        $("#tfa_1834").on("keyup", function() {
          $("#tfa_2238").val($(this).val())
          $("#tfa_2238").trigger('click')
        })
        $("#tfa_1970").trigger('click');
      }


    }


  )



}






var textareaConvert = function() {
  $(document).ready(function() {
    $("textarea[title*='question'], textarea[title*='savedanswers']").each(
      function() {
        $(this).css("display", "none").before("<div class='htmlContent'>" + $(this).text().replace(/\n/g, "<br>") + "</div>")

      }
    )
    $("textarea").not("[title*='question'], textarea[title*='savedanswers']").each(function() {
      $(this).css("display", "none")
      $(this).before('<div id="editor-container' + $(this).attr("id") + '">' + $(this).val() + '</div>');
      quillMaker($(this).attr("id"))
    })

  })
}







var saveFix = function() {

  var loader = "data:image/gif;base64,R0lGODlhGAAYAPcAAP8AAP8BAf8CAv8DA/8EBP8FBf8GBv8HB/8ICP8JCf8KCv8LC/8MDP8NDf8ODv8PD/8QEP8REf8SEv8TE/8UFP8VFf8WFv8XF/8YGP8ZGf8aGv8bG/8cHP8dHf8eHv8fH/8gIP8hIf8iIv8jI/8kJP8lJf8mJv8nJ/8oKP8pKf8qKv8rK/8sLP8tLf8uLv8vL/8wMP8xMf8yMv8zM/80NP81Nf82Nv83N/84OP85Of86Ov87O/88PP89Pf8+Pv8/P/9AQP9BQf9CQv9DQ/9ERP9FRf9GRv9HR/9ISP9JSf9KSv9LS/9MTP9NTf9OTv9PT/9QUP9RUf9SUv9TU/9UVP9VVf9WVv9XV/9YWP9ZWf9aWv9bW/9cXP9dXf9eXv9fX/9gYP9hYf9iYv9jY/9kZP9lZf9mZv9nZ/9oaP9paf9qav9ra/9sbP9tbf9ubv9vb/9wcP9xcf9ycv9zc/90dP91df92dv93d/94eP95ef96ev97e/98fP99ff9+fv9/f/+AgP+Bgf+Cgv+Dg/+EhP+Fhf+Ghv+Hh/+IiP+Jif+Kiv+Li/+MjP+Njf+Ojv+Pj/+QkP+Rkf+Skv+Tk/+UlP+Vlf+Wlv+Xl/+YmP+Zmf+amv+bm/+cnP+dnf+env+fn/+goP+hof+iov+jo/+kpP+lpf+mpv+np/+oqP+pqf+qqv+rq/+srP+trf+urv+vr/+wsP+xsf+ysv+zs/+0tP+1tf+2tv+3t/+4uP+5uf+6uv+7u/+8vP+9vf++vv+/v//AwP/Bwf/Cwv/Dw//ExP/Fxf/Gxv/Hx//IyP/Jyf/Kyv/Ly//MzP/Nzf/Ozv/Pz//Q0P/R0f/S0v/T0//U1P/V1f/W1v/X1//Y2P/Z2f/a2v/b2//c3P/d3f/e3v/f3//g4P/h4f/i4v/j4//k5P/l5f/m5v/n5//o6P/p6f/q6v/r6//s7P/t7f/u7v/v7//w8P/x8f/y8v/z8//09P/19f/29v/39//4+P/5+f/6+v/7+//8/P/9/f/+/v///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQIBgD/ACwAAAAAGAAYAAAI7wD/CRyIL97AcUd6ZJnkbaBDh/ykwdmDT6A7QV94kHD18CG+VC1AELI3kN+9dc/gdXQ4zASSYRVXDoQ37N7Dd6e++ZPpkJWJUPse7uTpUBwTFMyIEvV3TISae99cqVT6MF+hPfEsiUhK9aG9ilxyqOsq8wcXm2Q7HvnDL61Dd+K8jXUr0N8hIXQd5itzI+/AdkGk/MuH1m00Eozk+SkUMy28U9nwvQlBbGjeaCqSgPP7j98oEqq6lqs1zyuwd0rzLYOCohjReNHY5es38J6iEiY6keT5ysQPMohQ/8OHx0wyfUq7QaJygwi5ge92OwwIACH5BAgGAP8ALAAAAAAYABgAAAj8AP8JHHgvWqQvofwJZBfKWb2BECHKG4TCAw9R/QQ2c3GiTbR9ESHiUwQHGLp8A+sJo0NCSLeQEO/hg/nv3rBS9iLy85aTJkR/GSNOI0IqqM+I+OT9sxdHhC+FR0U66mMvmoo4PaMO1GdnxLJRLYBpDVnMAyJ1yuiNjbjOR5a1MPWVIgUXZj9/QOuGNCVKn16IX3Sk+3uv2bpIHMTqVeZiU7QSb1DCxdeHRDJ7fRRl1erPmAkzSuPNhNuvFI9lIe+OrZcNJER7qIiNDqlPMk1vQ0jkOXZvKztkeyz5pcnvGRoSLZ4J7GdKSIgRfOZFnbfM0zqB/kBZKYRMbcSAACH5BAgGAP8ALAAAAAAYABgAAAj/AP8JHCiQ3BshNm5w8kewoUOB69J0kTNHGMN/5qbte2hvWDuB/uLZ06evn0B+kGaIqtfQXqUVpy4+9KfsCQhJ9gbuKzUii7eHBP2B+5JC2MBqNZpwkwlUYDhU7AaeY3SMaVOQDfeZvMq168N+68b5s+r137w2aEIF21pW4L0wOm7A0dd2ID89L2i8oVv33z48M4Bkydm3H7FQa8rE6wvSX7h0bBlL/tdvY9C2/p45KjfQ3apwZcddceFsYLEUXsKRbShuDIhMfP/Zg+QhSrPVIFWdWDSvIb1OMB5Zrrzv3ryL7HrRe6gvmrmBxvTsKSPn3UDcDf19ohFjR5rnDwMCADs=";

  $(document).ready(
    function() {

      function jq(myid) {

        return "#" + myid.replace(/(:|\.|\[|\]|,|=|@)/g, "\\");

      }

      $(".saveAndResume").css("visibility", "hidden").css("position", "absolute");
      var savebutton = '<input value="Save" type="button" style="float: right" class="saveme sv-btn sv-btn-primary primaryAction"/><img id="loader" style="visibility: hidden; float: right;margin-right: 10px; margin-top: 24px" src="' + loader + '" alt="saving..." />';
      $("#tfa_switchedoff").val("");
      $(".wFormContainer").append(savebutton).prepend(savebutton);
      $(".saveme").on("click", function() {
        $("input, textarea").each(function() {

          if ($(this).attr("type") == "checkbox" || $(this).attr("type") == "radio") {
            if ($(this).is(':checked')) {
              $("textarea[label='" + $(this).attr('title') + "']").val("true")
            } else {
              $("textarea[label='" + $(this).attr('title') + "']").val("false")
            }
          } else {
            $("textarea[label='" + $(this).attr('title') + "']").val($(this).val())
          }

          console.log($(this).attr("id") + ":" + $(this).val())
        })


        $("#loader").css("visibility", "visible");
        $("#tfa_saveForLater").trigger("click");
        $("#tfa_resumeLater").removeAttr("disabled")
        $("[name='tfa_saveForLater']").val("1");
        var removeable = "";
        var numbersVal = $("[id$='-RC']");
        var removedString = "^";
        var iterate = $("textarea[title='questions']").each(function() {
          try {
            removeable = jq($(this).closest(".removeable").attr("id"))
          } catch (error) {
            removeable = "";
          }
          if (($(this).val() === "" || $(this).val() == null) && removeable !== "") {
            removedString += "," + $(this).closest(".removeable").attr("id");
          }



        })
        removedString = removedString.replace(/^,/g, "");
        var returnTo = numbersVal.val();
        numbersVal.val(numbersVal.val() + "|" + removedString)
        $.when(iterate).then(function() {

          var formTitle = $("input[title='requestid']").val();
          var datastring = $("form").serialize();
          console.log(datastring);
          $.ajax({
            type: 'POST',
            url: 'https://lse.tfaforms.net/responses/processor',
            data: datastring,
            success: function(data) {
              $("#tfa_saveForLater").trigger("click");
              $("#tfa_resumeLater").attr("disabled", "disabled")
              wFORMS.behaviors.paging.warnOnUnload = false;
              $.ajax({
                type: 'POST',
                url: window.location.href,
                success: function(requestsaved) {
                  var requestList = $(requestsaved).find('[title="Saved"]').attr("data-dataset-json").replace(/[\[\]']+/g, '').replace(/[\{\}']+/g, '').replace(/[\"']+/g, '').split(",");
                  request = requestList[0].split(":")[1]
                  $("[title='requestid']").val(request);
                  numbersVal.val(returnTo);
                  $("[name='tfa_saveForLater']").val("");
                }
              })
              $("html").load($("html").html());
              $("body").height($("body").height() - 1);

              $("#loader").css("visibility", "hidden");
              var message = "";
              var errormessage = "";
              if (typeof $(data).find(".wFormsCustomMessage").html() !== "undefined") {
                message = $(data).find(".wFormsCustomMessage").html();
              }
              if (typeof $(data).find(".errorMessage").html() !== "undefined") {
                errormessage = $(data).find(".wFormsCustomMessage").html();
              }
              $(".wFormTitle").before("<div id='notification'>" + message + "<br/>" + errormessage + "</div>");
              $("#notification").fadeOut(3000, function() {
                $("#notification").remove();
              });
            },
            error: function() {

              alert($(data).find(".errorMessage").html())
              numbersVal.val(returnTo);
              $("[name='tfa_saveForLater']").val("");
            }
          });

        })


        return false;
      });
    }
  )
}


var supervisorFix = function() {

  $(document).ready(function() {

    var supervisor;

    supervisor = $("#tfa_1933").val();
    if (supervisor === "") {
      supervisor = $("#tfa_1945").val()
    }
    if (supervisor === "") {
      supervisor = $("#tfa_1955").val()
    }
    $("#tfa_2244").val(supervisor);

    $("#tfa_1933, #tfa_1945, #tfa_1955").on("keyup blur", function() {
      $("#tfa_2244").val($(this).val())
      console.log("change")

    })



  })


}



var investigatorFix = function() {

  $(document).ready(function() {

    if ($("#tfa_1844").val() !== "" && $("#tfa_1839").find(":selected").text() === "No") {
      $("#tfa_2245").val($("#tfa_1844").val())
    }

    if ($("#tfa_1839").find(":selected").text() === "No") {
      console.log($("#tfa_1839").find(":selected").text())
      $("#tfa_1844").on("keyup blur", function() {
        $("#tfa_2245").val($(this).val())

      })

    } else {
      console.log($("#tfa_1839").find(":selected").text())
      $("#tfa_2245").val($("#tfa_2246").val())

    }

    $("#tfa_1839").on("change", function() {
      investigatorFix();

    })

  })


}


(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.autosize = mod.exports;
	}
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});





var stopSubmit = function() {
  $(document).ready(
    function() {
      function jq(myid) {

        return "#" + myid.replace(/(:|\.|\[|\]|,|=|@)/g, "\\");

      }



      $("#finalSubmit").on("click", function() {
        var removeable = "";
        var numbersVal = "";
        var removedString = "^";
        var iterate = $("textarea[title='questions']").each(function() {
          try {
            removeable = jq($(this).closest(".removeable").attr("id"))
          } catch (error) {
            removeable = "";
          }
          if (($(this).val() === "" || $(this).val() == null) && removeable !== "") {
            removedString += "," + $(this).closest(".removeable").attr("id");
            numbersVal = $("#" + $(this).closest(".removeable").attr("id").split("[")[0] + "\\[0\\]-RC");
          }



        })
        removedString = removedString.replace(/^,/g, "");

        numbersVal.val(numbersVal.val() + "|" + removedString)
        $.when(iterate).then(function() {
          $("input[type='submit']").trigger("click")

        });
      })
    })
}
