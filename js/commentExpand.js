// Applied globally on all textareas with the "autoExpand" class
$(document)
    .one('focus.autoExpand1', 'textarea.autoExpand1', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand1', 'textarea.autoExpand1', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 22);
        this.rows = minRows + rows;
    });

    