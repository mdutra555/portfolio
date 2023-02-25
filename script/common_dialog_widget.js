/**

 * Common Dialog Widget

 * @author Mauro Dutra <mdutra@mdisys.pw>

 * @copyright Copyright (c) 2023, MDi Sys Professional Web Developer

 * @license This code is licensed under MIT license (see https://github.com/mdutra555/portfolio/blob/main/LICENSE )
  
 * @acknowledgement Thanks to all Dev Community contributors for their tutorials and https://stackoverflow.com/ posts 
 *   I couldn't do any of my without your gracious contributions.
 
*/

var flApp = flApp || {};
    
flApp.commonDialog = (function (options) {

    const _dialog = document.getElementById("modal_dialog");
    const _okBtn = document.getElementById("dialog_ok");
    const _continueBtn = document.getElementById("dialog_continue");
    const _cancelBtn = document.getElementById("dialog_cancel");

    _dialog.returnValue = "OK";

    var self = this;

    const defaults = {
        dialogWidth : '600px',
        dialogTitle : 'Set the dialog title',
        dialogMessage : 'Set the dialog message',
        setDelayedCallback : false        
    }

    const opt = Object.assign({}, defaults, options)

    let focusOnButton = 'btn-ok'

    this.setDialogWidth = function(options) {
        let width = opt.dialogWidth
        if (options) {
            if (!flApp.isEmpty(options.dialogWidth)) width = options.dialogWidth
        }
        document.getElementById("modal_dialog").style.width(width);
    }

    this.setDialogTitle = function(options) {
        let title = opt.dialogTitle
        if (options) {
            if (!flApp.isEmpty(options.dialogTitle)) title = options.dialogTitle
        }
        document.getElementById("dialog_title").innerHTML = title;
    }

    this.setDialogMessage = function(options) {
        let msg = opt.dialogMessage
        if (options) {
            if (!flApp.isEmpty(options.dialogMessage)) title = options.dialogMessage
        }
        document.getElementById("dialog_message").innerHTML = msg;
    }

    this.setCustomButtons = function(options) {
        if (options) {
            if (!flApp.isEmpty(options.continueBtnTitle))  {
                _continueBtn.innerHTML = options.continueBtnTitle
            }
        }
        if (options) {
            if (!flApp.isEmpty(options.cancelBtnTitle))  {
                _cancelBtn.innerHTML = options.cancelBtnTitle
            }
        }
    }

    _dialog.addEventListener('close', (event) => {
        if (typeof(opt.onCloseCallback) == 'function') opt.onCloseCallback(event);
    });

    _okBtn.addEventListener('click', (event) => {
        _dialog.returnValue = "OK";
        if (typeof(opt.onOKCallback) == 'function') opt.onOKCallback(event);
    });

    _cancelBtn.addEventListener('click', (event) => {
        _dialog.returnValue = "CANCEL";
        if (typeof(opt.onCancelCallback) == 'function') opt.onCancelCallback(event);
    });

    _continueBtn.addEventListener('click', (event) => {
        _dialog.returnValue = "CONTINUE";
        if (typeof(opt.onContinueCallback) == 'function') opt.onContinueCallback(event);
    });

    return {
        openDialog : function(options) {
            const opt = Object.assign({}, defaults, options)
            self.setDialogWidth(options)
            self.setDialogTitle(options)
            self.setDialogMessage(options)
            self.setCustomButtons(options)
            _dialog.showModal()
        }
    }

})();