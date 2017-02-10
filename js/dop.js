$(document).ready(function() {
    function calkProt(sum, sqr) {
        var ret;
        ret = sqr * 100 / sum;
        return ret + 30;
    };

    function raschet_kotla(sqr) {
        var gaz, el, pelet, drova, ugol, sum;

        if ($(".nas_av").data("chek") == "active") {
            gaz = 0.82;
            el = 1.56;
            pelet = 0.62;
            drova = 0.19;
            ugol = 0.43;
        } else if ($(".predpr_av").data("chek") == "active") {
            gaz = 1.07;
            el = 1.90;
            pelet = 0.62;
            drova = 0.19;
            ugol = 0.43;
        }

        var el_new = Math.floor(sqr * 216 * el);
        var gaz_new = Math.floor(sqr * 216 * gaz);
        var pelet_new = Math.floor(sqr * 216 * pelet);
        var drova_new = Math.floor(sqr * 216 * drova);
        var ugol_new = Math.floor(sqr * 216 * ugol);

        sum = Number(el_new) + Number(gaz_new) + Number(pelet_new) + Number(drova_new) + Number(ugol_new);

        $(".el_cena_av").html("" + el_new + " грн.");
        $(".gaz_cena_av").html("" + gaz_new + " грн.");
        $(".pelet_cena_av").html("" + pelet_new + " грн.");
        $(".drova_cena_av").html("" + drova_new + " грн.");
        $(".ugol_cena_av").html("" + ugol_new + " грн.");

        $(".el_color").css("width", calkProt(sum, el_new) + "%");
        $(".gaz_color").css("width", calkProt(sum, gaz_new) + "%");
        $(".pelet_color").css("width", calkProt(sum, pelet_new) + "%");
        $(".drova_color").css("width", calkProt(sum, drova_new) + "%");
        $(".ugol_color").css("width", calkProt(sum, ugol_new) + "%");

    }

    $(".knopka_av").on("click", function() {
        var sqr;
        sqr = $(".kvm_av").val();
        if ($(".nas_av").data("chek") == "active") {
            raschet_kotla(sqr);
        } else {
            raschet_kotla(sqr);
        }
    });

    var status;
    $(".nas_av").on("click", function() {
        status = $(this).data("chek");
        if (status != "active") {
            $(".active_av").removeClass("active_av");
            $(".predpr_av").data("chek", " ");
            $(this).data("chek", "active");
            $(this).addClass("active_av");
        }
    });
    $(".predpr_av").on("click", function() {
        status = $(this).data("chek");
        if (status != "active") {
            $(".active_av").removeClass("active_av");
            $(".nas_av").data("chek", " ");
            $(this).data("chek", "active");
            $(this).addClass("active_av");
        }
    });
});
