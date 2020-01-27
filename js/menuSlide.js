function test(){
            if (!$('#toDis').hasClass('unlocked')) {
                $('#toDis').toggleClass('unlocked');
                $("#toDis").css("height", 0);
            } else if($('#toDis').hasClass('unlocked') && windowsize <= 425) {
                $('#toDis').toggleClass('unlocked');
                $("#toDis").css("height", 115);
            } else {
                $('#toDis').toggleClass('unlocked');
                $("#toDis").css("height", 102);
            }

            // if($('#toDis').hasClass('unlocked') && windowsize <= 425) {
            //     $('#toDis').toggleClass('unlocked');
            //     $("#toDis").css("height", 115);
            // } else {
            //     $('#toDis').toggleClass('unlocked');
            //     $("#toDis").css("height", 102);
            // }

            if (!$('#toDisCheckBox').hasClass('unlocked')) {
                $('#toDisCheckBox').toggleClass('unlocked');
                $("#toDisCheckBox").css("height", 0);
                $("#toDisCheckBox").css("margin", 0);

            } else {
                $('#toDisCheckBox').toggleClass('unlocked');
                $("#toDisCheckBox").css("height", 15);
                $("#toDisCheckBox").css("margin-top", 24);
            }

            if (!$('#toDisCheckBox1').hasClass('unlocked')) {
                $('#toDisCheckBox1').toggleClass('unlocked');
                $("#toDisCheckBox1").css("height", 0);
                $("#toDisCheckBox1").css("margin", 0);
            } else {
                $('#toDisCheckBox1').toggleClass('unlocked');
                $("#toDisCheckBox1").css("height", 15);
                $("#toDisCheckBox1").css("margin-top", 24);
            }

            if (!$('#toDisToggleUl').hasClass('unlocked')) {
                $('#toDisToggleUl').toggleClass('unlocked');
                $("#toDisToggleUl").css("height", 0);
                $("#toDisToggleUl").css("margin", 0);
            } else if($('#toDisToggleUl').hasClass('unlocked') && windowsize <= 425) {
                $('#toDisToggleUl').toggleClass('unlocked');
                $("#toDisToggleUl").css("height", 60);
            } else {
                $('#toDisToggleUl').toggleClass('unlocked');
                $("#toDisToggleUl").css("height", 25);
                $("#toDisToggleUl").css("margin-top", 24);
            }

            if (!$('#toDisRange').hasClass('unlocked')) {
                $('#toDisRange').toggleClass('unlocked');
                $('#toDisRange').toggleClass('overflow-hidden');
                $("#toDisRange").css("height", 0);
            } else if($('#toDisRange').hasClass('unlocked') && windowsize <= 425) {
                $('#toDisRange').toggleClass('unlocked');
                $('#toDisRange').toggleClass('overflow-hidden');
                $("#toDisRange").css("height", 120);
            } else {
                $('#toDisRange').toggleClass('unlocked');
                $('#toDisRange').toggleClass('overflow-hidden');
                $("#toDisRange").css("height", 102);
            }
        }