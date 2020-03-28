$(document).ready(function () {
    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    $('.carousel').carousel({
        interval: 2000
    });
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
    $(function(){
        var countries = ["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Congo - Brazzaville","Congo - Kinshasa","Côte d’Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Réunion","Saint Helena","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","Sudan","Swaziland","São Tomé and Príncipe","Tanzania","Togo","Tunisia","Uganda","Western Sahara","Zambia","Zimbabwe","[ Americas ]","Anguilla","Antigua and Barbuda","Argentina","Aruba","Bahamas","Barbados","Belize","Bermuda","Bolivia","Brazil","British Virgin Islands","Canada","Cayman Islands","Chile","Colombia","Costa Rica","Cuba","Dominica","Dominican Republic","Ecuador","El Salvador","Falkland Islands","French Guiana","Greenland","Grenada","Guadeloupe","Guatemala","Guyana","Haiti","Honduras","Jamaica","Martinique","Mexico","Montserrat","Netherlands Antilles","Nicaragua","Panama","Paraguay","Peru","Puerto Rico","Saint Barthélemy","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Suriname","Trinidad and Tobago","Turks and Caicos Islands","U.S. Virgin Islands","United States","Uruguay","Venezuela","[ Asia ]","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Cyprus","Georgia","Hong Kong SAR China","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Macau SAR China","Malaysia","Maldives","Mongolia","Myanmar [Burma]","Nepal","Neutral Zone","North Korea","Oman","Pakistan","Palestinian Territories","People's Democratic Republic of Yemen","Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen","[ Europe ]","Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","East Germany","Estonia","Faroe Islands","Finland","France","Germany","Gibraltar","Greece","Guernsey","Hungary","Iceland","Ireland","Isle of Man","Italy","Jersey","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Metropolitan France","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Serbia and Montenegro","Slovakia","Slovenia","Spain","Svalbard and Jan Mayen","Sweden","Switzerland","Ukraine","Union of Soviet Socialist Republics","United Kingdom","Vatican City","Åland Islands","[ Oceania ]","American Samoa","Antarctica","Australia","Bouvet Island","British Indian Ocean Territory","Christmas Island","Cocos [Keeling] Islands","Cook Islands","Fiji","French Polynesia","French Southern Territories","Guam","Heard Island and McDonald Islands","Kiribati","Marshall Islands","Micronesia","Nauru","New Caledonia","New Zealand","Niue","Norfolk Island","Northern Mariana Islands","Palau","Papua New Guinea","Pitcairn Islands","Samoa","Solomon Islands","South Georgia and the South Sandwich Islands","Tokelau","Tonga","Tuvalu","U.S. Minor Outlying Islands","Vanuatu","Wallis and Futuna"];
        $( "#origin" ).autocomplete({
            source: countries,
            select: function( event , ui ) {
                $.getJSON("https://restcountries.eu/rest/v2/name/"+ui.item.label, function(result){
                    $("#flagImgOrigin").attr('src',result[0]["flag"])
                });
            }
        });
        $( "#departure" ).autocomplete({
            source: countries,
            select: function( event , ui ) {
                $.getJSON("https://restcountries.eu/rest/v2/name/"+ui.item.label, function(result){
                    $("#flagImgDeparture").attr('src',result[0]["flag"])
                });
            }
        });
    });
});