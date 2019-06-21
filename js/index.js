let interval, tableSize = 0,
    player = 0,
    moves = 0,
    inputX = [],
    inputY = [],
    scoreO = 0,
    scoreX = 0,
    gridSize = function(e) {
        if (e < 3 || e > 10) return alert("allow board size range 3-10!"), !1;
        $("#size").hide();
        let t = "";
        for (let i = 0; i < e; i++) {
            t += "<tr>";
            for (let r = 0; r < e; r++) t += "<td id='c" + i.toString() + r.toString() + "'></td>";
            t += "</tr>"
        }
        $("table").html(t), reset(), resetScore(), $("td").on("click", tictactoe), $("td").mouseenter(function() {
            $(this).css("border-width"), $(this).fadeOut(200), $(this).fadeIn(100)
        })
    },
    checkNumeric = function() {
        return !new RegExp("[a-zA-Z]+$").test($("input").val()) || (alert("only allow numeric!"), !1)
    },
    boardSize = function() {
        if (!checkNumeric()) return !1;
        tableSize = parseInt($("input").val()), gridSize(tableSize)
    },
    playerWin = function(e) {
        for (let t = 0; t < tableSize; t++) {
            let i = 0;
            for (let r = 0; r < e.length; r++)
                if (parseInt(e[r].slice(1, 2)) === t && (i += 1), i === tableSize) return !0;
            i = 0
        }
        for (let t = 0; t < tableSize; t++) {
            let i = 0;
            for (let r = 0; r < e.length; r++)
                if (parseInt(e[r].slice(2)) === t && (i += 1), i === tableSize) return !0;
            i = 0
        }
        let t = [],
            i = [];
        for (let e = 0; e < tableSize; e++) {
            let r = "c" + e.toString() + e.toString();
            t.push(r);
            let n = "c" + (tableSize - 1 - e).toString() + e.toString();
            i.push(n)
        }
        let r = 0;
        for (let i = 0; i < tableSize; i++)
            if ($.inArray(t[i], e) > -1 && (r += 1) === tableSize) return !0;
        let n = 0;
        for (let t = 0; t < tableSize; t++)
            if ($.inArray(i[t], e) > -1 && (n += 1) === tableSize) return !0
    },
    blockClicking = function() {
        for (let e = 0; e < $("td").length; e++) $($("td")[e]).addClass("clicked")
    },
    reset = function() {
        clearInterval(interval);
        for (let e = 0; e < $("td").length; e++) $($("td")[e]).removeClass(), $($("td")[e]).html("");
        player = 0, moves = 0, inputX = [], inputY = [], $("#winner").html("")
    },
    score = function() {
        $("#scoreO").html(scoreO), $("#scoreX").html(scoreX)
    },
    resetScore = function() {
        scoreO = 0, scoreX = 0, $("#winner").html(""), score()
    },
    resetGame = function() {
        resetScore(), reset(), $("table").html(""), $("#size").show()
    },
    tictactoe = function() {
        if ($(this).hasClass("clicked")) return !1;
        moves += 1, 0 === player ? ($(this).text("O"), $(this).addClass("player_o"), player += 1, inputX.push($(this).attr("id"))) : ($(this).text("X"), $(this).addClass("player_x"), player -= 1, inputY.push($(this).attr("id"))), $(this).addClass("clicked"), (playerWin(inputX) || playerWin(inputY)) && (blockClicking(), player - 1 == 0 ? (scoreO += 1, $("#winner").html('Player <span id="playerO_win">O</span> wins!'), interval = setInterval(function() {
            $("#winX").fadeOut(500), $("#winX").fadeIn(500)
        }, 1e3)) : (scoreX += 1, $("#winner").html('Player <span id="playerX_win">X</span> wins!'), interval = setInterval(function() {
            $("#winY").fadeOut(500), $("#winY").fadeIn(500)
        }, 1e3)), score()), moves !== tableSize * tableSize || playerWin(inputX) || playerWin(inputY) || $("#winner").html("No one wins!")
    };
$("#enterSize").on("click", boardSize), $(".reset").on("click", reset), $(".resetScore").on("click", resetScore), $(".resetGame").on("click", resetGame);