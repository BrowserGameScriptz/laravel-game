/**
 * Created by Stefen on 6/8/2015.
 */

$(document).ready(function () {
    wizard();
    $('#datetimepicker1').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker4').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker5').datetimepicker({
        format: 'HH:mm'
    });
    $('#datetimepicker6').datetimepicker({
        format: 'HH:mm'
    });

    $("textarea.autogrow").autosize({append: "\n"});

    //drag_drop();
    countText();
    countPrice();
    number_formatter();

});

$(document).on('click', '#existing_merchant', function (e) {
    e.preventDefault();
    $(this).fadeOut(300, function () {
        $('#status_merchant').val(1);
        $('#new_merchant').fadeIn(300);
        $('#merchant_name').fadeOut(300, function () {
            $('select#merchant_list').show();
            $('select#merchant_list').select2({
                placeholder: "Select Merchant"
            });
        });
    })

});
$(document).on('change', '#promo_type', function (e) {
    e.preventDefault();
    if($(this).val() == 0){
        $('#voucher_information').show();
         $('#product_information').hide();
    }else if($(this).val() == 1){
        $('#product_information').show();
        $('select#product_information').select2({
                placeholder: "Select Product"
            });
         $('#voucher_information').hide();
    }

});
$(document).on('click', '#new_merchant', function (e) {
    e.preventDefault();
    $(this).fadeOut(300, function () {
        $('#status_merchant').val(0);
        $('#existing_merchant').fadeIn(300);
        $('.select2-container').fadeOut(300, function () {
            $('#merchant_name').fadeIn(300);
        });
    });

});

function number_formatter() {
    $('input#normal_price').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });

    $('input#promo_price').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });

    $('input#margin_price').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });

    $('input#nett_price').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });
}

function wizard() {
    $('#proposal').bootstrapWizard({
        onTabShow: function ($activeTab, $navigation, index) {
            var $total = $navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            var $wizard = $("#wizard");
            $wizard.find('.progress-bar').css({width: $percent + '%'});

            if ($current >= $total) {
                $wizard.find('.pager .next').hide();
                $wizard.find('.pager .finish').show();
                $wizard.find('.pager .finish').removeClass('disabled');
            } else {
                $wizard.find('.pager .next').show();
                $wizard.find('.pager .finish').hide();
            }

            //setting done class
            $navigation.find('li').removeClass('done');
            $activeTab.prevAll().addClass('done');
        }

    });
}

$(document).on('change', '#promo_type', function () {
     $('div#normal_price').fadeIn(250);
        $('div#margin_price').fadeIn(250);
        $('div#nett_price').fadeIn(250);
    if ($(this).val() == 1) {
        // $('div#normal_price').fadeOut(250);
        // $('div#margin_price').fadeOut(250);
        // $('div#nett_price').fadeOut(250);
        $('div#products').fadeIn(250);
        //$('div#products :input').attr('checked', false);
        $('div#vouchers').fadeOut(250);
        $('div#vouchers :input').attr('checked', false);
    } else {
        // $('div#normal_price').fadeIn(250);
        // $('div#margin_price').fadeIn(250);
        // $('div#nett_price').fadeIn(250);
        $('div#products').fadeOut(250);
        $('div#products :input').attr('checked', false);
        $('div#vouchers').fadeIn(250);
        //$('div#vouchers :input').attr('checked', false);
    }
});

function countText() {
    var start = $('div#droppableHolder').length;
    var end = $('div#droppableHolder').length;

    $('#add_terms').click(function (e) {
        e.preventDefault();
        $("textarea.autogrow:first").clone()
            .find("input:text").val("").end()
            .appendTo('div#terms');
        $("textarea.autogrow").autosize({append: "\n"});
        end++;
    });

    $('#remove_terms').click(function (e) {
        e.preventDefault();

        if (start < end) {
            $('textarea.autogrow').last().remove();
            end--;
        }
        else {
            toastr["warning"]("Can't Delete Row", "Error");
        }
    });
}

function countPrice() {
    var start = $('div#priceContainer').length;
    var end = $('div#priceContainer').length;

    $('#add_price').click(function (e) {
        e.preventDefault();
        $("div#priceContainer:first").clone()
            .find("input:text").val("").end()
            .appendTo('div#priceWrapper');
        number_formatter();
        end++;
    });

    $('#remove_price').click(function (e) {
        e.preventDefault();

        if (start < end) {
            $('div#priceContainer').last().remove();
            end--;
        }
        else {
            toastr["warning"]("Can't Delete Row", "Error");
        }
    });
}

$(document).on('change', '#merchant_list', function (e) {
    e.preventDefault();
    var id = $(this).val();

    $.get(apiUrl + 'merchant-data/' + id, function (data) {
        $('#address').empty().val(data.merchant_branch_address);
        $('#phone').empty().val(data.merchant_branch_phone);
        $('#contact_name').empty().val(data.owner);
        $('#contact_phone').empty().val(data.owner_contact);
    })
});

$(document).on('submit', '#proposal', function (e) {
    e.preventDefault();
    var button = $('#add_promotion').ladda();
    $('div#error ul').empty();
    var data = $(this).serialize();
    var data_id = [];
    $('.checkbox:checked').each(function () {
        data_id.push($(this).data('id'));
    });
    $.ajax({
        type: 'POST',
        url: apiUrl + 'manage-promotion',
        data: $('#proposal').serialize() + "&terms_id=" + data_id,
        beforeSend: function () {
            button.ladda('toggle');
        }
    }).done(function (data) {
        $('div#error').fadeOut('250');
        swal({title: "Success", text: 'Promotion has been created!', timer: 2000, showConfirmButton: false, type: "success"});
        $('div#print_container').html(data);

    }).fail(function (data) {
        $('div#error').fadeIn('250');
        if (data.responseJSON['errors']) {
            $.each(data.responseJSON['errors'], function (index, val) {
                $('div#error ul').append('<li>' + val + '</li>')
            })
        }
        swal({title: "Error", text: 'Check error message!', timer: 2000, showConfirmButton: false, type: "error"});
    })
        .always(function (result) {
            button.ladda('toggle');
        })
});

$(document).on('click', 'button#print', function () {
    $("div#print_container").print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet: null,
        noPrintSelector: ".no-print",
        iframe: true,
        append: null,
        prepend: null,
        manuallyCopyFormValues: true,
        deferred: $.Deferred()
    });
});

