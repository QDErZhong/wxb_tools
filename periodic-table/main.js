$("#list dd[id^=d]").css("cursor", "pointer");
$("#list dd[id^=d]").click(function() {
  var num = parseInt(
    $(this)
      .attr("id")
      .substr(1)
  );

  $("#tips #t_na").html(arr[num]["name"]);
  $("#tips #t_s").html(arr[num]["symbol"]);
  $("#tips #t_nu").html("原子序数：" + arr[num]["num"]);
  $("#tips #t_py").html("拼音：" + arr[num]["pinyin"]);
  $("#tips #t_w").html("原子量：" + arr[num]["weight"]);
  $("#tips #t_r").html("原子半径：" + arr[num]["radius"] + "pm");
  $("#tips #t_e").html("电子构型：" + arr[num]["electronic"] + "(图1)");
  $("#tips #t_o").html("常见氧化态：" + arr[num]["oxidation"]);
  $("#tips #t_c").html("晶体：" + arr[num]["crystal"]);
  $("#tips #t_mp").html("熔点：" + arr[num]["mp"] + "℃");
  $("#tips #t_bp").html("沸点：" + arr[num]["bp"] + "℃");
  $("#tips #t_d").html("密度：" + arr[num]["density"]);
  if (arr[num]["eleimg"] === "--") {
    $("#tips #t_ei").html("");
  } else {
    $("#tips #t_ei").html("<img src=./img/" + arr[num]["eleimg"] + ">");
  }
  if (arr[num]["cryimg"] === "--") {
    $("#tips #t_ci").html("");
  } else {
    $("#tips #t_ci").html("<img src=./img/" + arr[num]["cryimg"] + ">");
  }
});

$("#d111").mouseover(function() {
  $("#l9 dd").addClass("w");
});

$("#d111").mouseout(function() {
  $("#l9 dd").removeClass("w");
});

$("#d921").mouseover(function() {
  $("#l8 dd").addClass("w");
});

$("#d921").mouseout(function() {
  $("#l8 dd").removeClass("w");
});

$("#jjs,#jtjs,#lxys,#axys,#zjs,#ljs,#ls,#dxqt,#gdys,#fjs").mouseover(function() {
    $("#list ." + $(this).attr("id")).addClass("w");
    if ($(this).attr("id") == "lxys") $("#l8 dd,#d921").addClass("w");
    if ($(this).attr("id") == "axys") $("#l9 dd,#d111").addClass("w");
    if ($(this).attr("id") == "gdys")
      $("#l8 dd,#d921,#l9 dd,#d111").addClass("w");
    if ($(this).attr("id") == "zjs")
      $("#list .jjs, #list .jtjs, #d68, #d87, #d106").addClass("w");
  }
);
$("#jjs,#jtjs,#lxys,#axys,#zjs,#ljs,#ls,#dxqt,#gdys,#fjs").mouseout(function() {
  $("#list ." + $(this).attr("id")).removeClass("w");
  if ($(this).attr("id") == "lxys") $("#l8 dd,#d921").removeClass("w");
  if ($(this).attr("id") == "axys") $("#l9 dd,#d111").removeClass("w");
  if ($(this).attr("id") == "gdys")
    $("#l8 dd,#d921,#l9 dd,#d111").removeClass("w");
  if ($(this).attr("id") == "zjs")
    $("#list .jjs, #list .jtjs, #d68, #d87, #d106").removeClass("w");
});
$("#legend span").mouseover(function() {
  $("#list ." + $(this).attr("class")).css("font-weight", "bold");
});
$("#legend span").mouseout(function() {
  $("#list ." + $(this).attr("class")).css("font-weight", "normal");
});

$("#d127").mouseover(function() {
  $("#l8 dd,#d921").addClass("w");
});

$("#d127").mouseout(function() {
  $("#l8 dd,#d921").removeClass("w");
});

$("#d142").mouseover(function() {
  $("#l9 dd,#d111").addClass("w");
});

$("#d142").mouseout(function() {
  $("#l9 dd,#d111").removeClass("w");
});

$("#view").click(function() {
  $("#leg").toggle("slow", slide);
  var text = $("#view").html();
  if(text == "查看图例"){
    $("#view").html("关闭图例");
  } else {
    $("#view").html("查看图例");
  }
});

function slide() {
  var h = Math.abs($(document).height() - $(window).height());
  $("html,body").animate({ scrollTop: h }, "normal");
}

var arr = {
  1: {
    num: 1,
    name: "氢",
    pinyin: "qīng",
    english: "",
    symbol: "H",
    weight: "1.00794",
    radius: "25(53)",
    electronic: "1s<sup>1</sup>",
    oxidation: "1,-1",
    crystal: "见(图2)",
    density: "0.08988g/L",
    mp: "-259.14",
    bp: "-252.87",
    eleimg: "1.png",
    cryimg: "1-1.png"
  },

  18: {
    num: 2,
    name: "氦",
    pinyin: "hài",
    english: "",
    symbol: "He",
    weight: "4.002602",
    radius: "--",
    electronic: "1s<sup>2</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "0.1786g/L",
    mp: "-272.20",
    bp: "-268.93",
    eleimg: "2.png",
    cryimg: "--"
  },

  19: {
    num: 3,
    name: "锂",
    pinyin: "lǐ",
    english: "",
    symbol: "Li",
    weight: "6.941",
    radius: "152",
    electronic: "1s<sup>2</sup>2s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "0.534g/cm<sup>3</sup>",
    mp: "180.54",
    bp: "1342",
    eleimg: "3.png",
    cryimg: "3-1.png"
  },

  20: {
    num: 4,
    name: "铍",
    pinyin: "pí",
    english: "",
    symbol: "Be",
    weight: "9.012182",
    radius: "105(112)",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "1.85g/cm<sup>3</sup>",
    mp: "1278",
    bp: "2970",
    eleimg: "4.png",
    cryimg: "4-1.png"
  },

  31: {
    num: 5,
    name: "硼",
    pinyin: "péng",
    english: "",
    symbol: "B",
    weight: "10.811",
    radius: "117",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "2.34g/cm<sup>3</sup>",
    mp: "2300",
    bp: "3658",
    eleimg: "5.png",
    cryimg: "5-1.png"
  },

  32: {
    num: 6,
    name: "碳",
    pinyin: "tàn",
    english: "",
    symbol: "C",
    weight: "12.0107",
    radius: "70(67)",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>",
    oxidation: "±4,±2",
    crystal: "见(图2)",
    density: "2267kg/m<sup>3</sup>",
    mp: "3550",
    bp: "4827",
    eleimg: "6.png",
    cryimg: "6-1.png"
  },

  33: {
    num: 7,
    name: "氮",
    pinyin: "dàn",
    english: "",
    symbol: "N",
    weight: "14.0067",
    radius: "65(56)",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>",
    oxidation: "±3,5,4,±2,±1",
    crystal: "见(图2)",
    density: "1.2506g/L",
    mp: "-209.8",
    bp: "-195.6",
    eleimg: "7.png",
    cryimg: "7-1.png"
  },

  34: {
    num: 8,
    name: "氧",
    pinyin: "yǎng",
    english: "",
    symbol: "O",
    weight: "15.9994",
    radius: "60(48)",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>",
    oxidation: "-2,-1",
    crystal: "见(图2)",
    density: "1.429g/L",
    mp: "-222.80 ",
    bp: "-182.97 ",
    eleimg: "8.png",
    cryimg: "8-1.png"
  },

  35: {
    num: 9,
    pinyin: "fú",
    english: "",
    name: "氟",
    symbol: "F",
    weight: "18.9994",
    radius: "50(42)",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>",
    oxidation: "-1",
    crystal: "见(图2)",
    density: "1.696g/L",
    mp: "-219.62",
    bp: "-188.12 ",
    eleimg: "9.png",
    cryimg: "--"
  },

  36: {
    num: 10,
    name: "氖",
    pinyin: "nǎi",
    english: "",
    symbol: "Ne",
    weight: "20.1797",
    radius: "--",
    electronic: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "0.9002g/L",
    mp: "-248.67",
    bp: "-245.9",
    eleimg: "10.png",
    cryimg: "10-1.png"
  },

  37: {
    num: 11,
    name: "钠",
    pinyin: "nà",
    english: "",
    symbol: "Na",
    weight: "22.989768",
    radius: "186",
    electronic: "[Ne]3s<sup>1</sup>",
    oxidation: "1,",
    crystal: "见(图2)",
    density: "0.968g/cm<sup>3</sup>",
    mp: "97.72",
    bp: "883",
    eleimg: "11.png",
    cryimg: "11-1.png"
  },

  38: {
    num: 12,
    name: "镁",
    pinyin: "měi",
    english: "",
    symbol: "Mg",
    weight: "24.305",
    radius: "150(145)",
    electronic: "[Ne]3s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "1738kg/m<sup>3</sup>",
    mp: "650",
    bp: "1090",
    eleimg: "12.png",
    cryimg: "12-1.png"
  },

  49: {
    num: 13,
    name: "铝",
    pinyin: "lǚ",
    english: "",
    symbol: "Al",
    weight: "26.9815386",
    radius: "125(118)",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>1</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "2702kg/m<sup>3</sup>",
    mp: "660.3",
    bp: "2518",
    eleimg: "13.png",
    cryimg: "13-1.png"
  },

  50: {
    num: 14,
    name: "硅",
    pinyin: "guī",
    english: "",
    symbol: "Si",
    weight: "28.0855",
    radius: "110(111)",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>2</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "2330kg/m<sup>3</sup>",
    mp: "1414",
    bp: "2900",
    eleimg: "14.png",
    cryimg: "14-1.png"
  },

  51: {
    num: 15,
    name: "磷",
    pinyin: "lín",
    english: "",
    symbol: "P",
    weight: "30.973762",
    radius: "100(98)",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>3</sup>",
    oxidation: "5,±3,1",
    crystal: "见(图2)",
    density: "1823kg/m<sup>3</sup>(白磷)",
    mp: "44.2",
    bp: "280",
    eleimg: "15.png",
    cryimg: "15-1.png"
  },

  52: {
    num: 16,
    name: "硫",
    pinyin: "liú",
    english: "",
    symbol: "S",
    weight: "32.066",
    radius: "100",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>4</sup>",
    oxidation: "6,4,-2",
    crystal: "见(图2)",
    density: "2.07g/cm<sup>3</sup>",
    mp: "115.21",
    bp: "444.72",
    eleimg: "16.png",
    cryimg: "16-1.png"
  },

  53: {
    num: 17,
    name: "氯",
    pinyin: "lǜ",
    english: "",
    symbol: "Cl",
    weight: "35.453",
    radius: "100",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>5</sup>",
    oxidation: "±1,3,4,5,6,7",
    crystal: "见(图2)",
    density: "3.214g/L",
    mp: "-101.5",
    bp: "-34.04",
    eleimg: "17.png",
    cryimg: "17-1.png"
  },

  54: {
    num: 18,
    name: "氩",
    pinyin: "yà",
    english: "",
    symbol: "Ar",
    weight: "39.948",
    radius: "--(71)",
    electronic: "[Ne]3s<sup>2</sup>3p<sup>6</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "1.784g/L",
    mp: "-189.2",
    bp: "-185.7 ",
    eleimg: "18.png",
    cryimg: "18-1.png"
  },

  55: {
    num: 19,
    name: "钾",
    pinyin: "jiǎ",
    english: "",
    symbol: "K",
    weight: "39.0983",
    radius: "220(243)",
    electronic: "[Ar]4s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "856kg/m<sup>3</sup>",
    mp: "63.38",
    bp: "759",
    eleimg: "19.png",
    cryimg: "19-1.png"
  },

  56: {
    num: 20,
    name: "钙",
    pinyin: "gài",
    english: "",
    symbol: "Ca",
    weight: "40.078",
    radius: "180(194)",
    electronic: "[Ar]4s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "1550kg/m<sup>3</sup>",
    mp: "842",
    bp: "1484",
    eleimg: "20.png",
    cryimg: "20-1.png"
  },

  57: {
    num: 21,
    name: "钪",
    pinyin: "kàng",
    english: "",
    symbol: "Sc",
    weight: "44.955912",
    radius: "160(184)",
    electronic: "[Ar]3d<sup>1</sup>4s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "2985kg/m<sup>3</sup>",
    mp: "1541",
    bp: "2830",
    eleimg: "21.png",
    cryimg: "21-1.png"
  },

  58: {
    num: 22,
    name: "钛",
    pinyin: "tài",
    english: "",
    symbol: "Ti",
    weight: "47.867",
    radius: "200",
    electronic: "[Ar]3d<sup>2</sup>4s<sup>2</sup>",
    oxidation: "4,3",
    crystal: "见(图2)",
    density: "4.506g/cm<sup>3</sup>",
    mp: "1668",
    bp: "3287",
    eleimg: "22.png",
    cryimg: "22-1.png"
  },

  59: {
    num: 23,
    name: "钒",
    pinyin: "fán",
    english: "",
    symbol: "V",
    weight: "50.9415",
    radius: "135(171)",
    electronic: "[Ar]3d<sup>3</sup>4s<sup>2</sup>",
    oxidation: "5,4,3,2",
    crystal: "见(图2)",
    density: "6110kg/m<sup>3</sup>",
    mp: "1902",
    bp: "3409",
    eleimg: "23.png",
    cryimg: "23-1.png"
  },

  60: {
    num: 24,
    name: "铬",
    pinyin: "gè",
    english: "",
    symbol: "Cr",
    weight: "51.9961",
    radius: "128",
    electronic: "[Ar]3d<sup>5</sup>4s<sup>1</sup>",
    oxidation: "3,6,2",
    crystal: "见(图2)",
    density: "7.19g/cm<sup>3</sup>",
    mp: "1857",
    bp: "2672",
    eleimg: "24.png",
    cryimg: "24-1.png"
  },

  61: {
    num: 25,
    name: "锰",
    pinyin: "měng",
    english: "",
    symbol: "Mn",
    weight: "54.938045",
    radius: "127",
    electronic: "[Ar]3d<sup>5</sup>4s<sup>2</sup>",
    oxidation: "2,4,6,7,3",
    crystal: "见(图2)",
    density: "7.44g/cm<sup>3</sup>",
    mp: "1244",
    bp: "1962",
    eleimg: "25.png",
    cryimg: "25-1.png"
  },

  62: {
    num: 26,
    name: "铁",
    pinyin: "tiě",
    english: "",
    symbol: "Fe",
    weight: "55.845",
    radius: "126",
    electronic: "[Ar]3d<sup>6</sup>4s<sup>2</sup>",
    oxidation: "3,2",
    crystal: "见(图2)",
    density: "7.874g/cm<sup>3</sup>",
    mp: "1535",
    bp: "2750",
    eleimg: "26.png",
    cryimg: "26-1.png"
  },

  63: {
    num: 27,
    name: "钴",
    pinyin: "gǔ",
    english: "",
    symbol: "Co",
    weight: "58.933195",
    radius: "135(152)",
    electronic: "[Ar]3d<sup>7</sup>4s<sup>2</sup>",
    oxidation: "2,3",
    crystal: "见(图2)",
    density: "8900kg/m<sup>3</sup>",
    mp: "1495",
    bp: "2927",
    eleimg: "27.png",
    cryimg: "27-1.png"
  },

  64: {
    num: 28,
    name: "镍",
    pinyin: "niè",
    english: "",
    symbol: "Ni",
    weight: "58.6934",
    radius: "135(149)",
    electronic: "[Ar]3d<sup>8</sup>4s<sup>2</sup>",
    oxidation: "2,3",
    crystal: "见(图2)",
    density: "8908kg/m<sup>3</sup>",
    mp: "1453",
    bp: "2732",
    eleimg: "28.png",
    cryimg: "28-1.png"
  },

  65: {
    num: 29,
    name: "铜",
    pinyin: "tóng",
    english: "",
    symbol: "Cu",
    weight: "63.546",
    radius: "135(145)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>1</sup>",
    oxidation: "2,1",
    crystal: "见(图2)",
    density: "8920kg/m<sup>3</sup>",
    mp: "1084.4",
    bp: "2567",
    eleimg: "29.png",
    cryimg: "29-1.png"
  },

  66: {
    num: 30,
    name: "锌",
    pinyin: "xīn",
    english: "",
    symbol: "Zn",
    weight: "65.39",
    radius: "135(142)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "7140kg/m<sup>3</sup>",
    mp: "419.53",
    bp: "907",
    eleimg: "30.png",
    cryimg: "30-1.png"
  },

  67: {
    num: 31,
    name: "镓",
    pinyin: "jiā",
    english: "",
    symbol: "Ga",
    weight: "69.723",
    radius: "130(136)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "5904kg/m<sup>3</sup>",
    mp: "29.76",
    bp: "2403",
    eleimg: "31.png",
    cryimg: "31-1.png"
  },

  68: {
    num: 32,
    name: "锗",
    pinyin: "zhě",
    english: "",
    symbol: "Ge",
    weight: "72.61",
    radius: "125(125)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "5323kg/m<sup>3</sup>",
    mp: "938",
    bp: "2830",
    eleimg: "32.png",
    cryimg: "32-1.png"
  },

  69: {
    num: 33,
    name: "砷",
    pinyin: "shēn",
    english: "",
    symbol: "As",
    weight: "74.92160",
    radius: "115(114)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>",
    oxidation: "3,5,-3",
    crystal: "见(图2)",
    density: "5727kg/m<sup>3</sup>",
    mp: "817.2",
    bp: "613.8",
    eleimg: "33.png",
    cryimg: "33-1.png"
  },

  70: {
    num: 34,
    name: "硒",
    pinyin: "xī",
    english: "",
    symbol: "Se",
    weight: "78.96",
    radius: "115(103)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>",
    oxidation: "4,6,-2",
    crystal: "见(图2)",
    density: "4790kg/m<sup>3</sup>",
    mp: "221",
    bp: "685",
    eleimg: "34.png",
    cryimg: "34-1.png"
  },

  71: {
    num: 35,
    name: "溴",
    pinyin: "xiù",
    english: "",
    symbol: "Br",
    weight: "79.904",
    radius: "115(94)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>",
    oxidation: "±1,3,5,7",
    crystal: "见(图2)",
    density: "3119kg/m<sup>3</sup>",
    mp: "-7.2",
    bp: "59",
    eleimg: "35.png",
    cryimg: "35-1.png"
  },

  72: {
    num: 36,
    name: "氪",
    pinyin: "kè",
    english: "",
    symbol: "Kr",
    weight: "83.798",
    radius: "--(88)",
    electronic: "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "3.736g/L",
    mp: "-157.36 ",
    bp: "-153.22",
    eleimg: "36.png",
    cryimg: "36-1.png"
  },

  73: {
    num: 37,
    name: "铷",
    pinyin: "rú",
    english: "",
    symbol: "Rb",
    weight: "85.4678",
    radius: "235(265)",
    electronic: "[Kr]5s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "1532kg/m<sup>3</sup>",
    mp: "39.31",
    bp: "688",
    eleimg: "37.png",
    cryimg: "37-1.png"
  },

  74: {
    num: 38,
    name: "锶",
    pinyin: "sī",
    english: "",
    symbol: "Sr",
    weight: "87.62",
    radius: "215.1",
    electronic: "[Kr]5s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "2630kg/m<sup>3</sup>",
    mp: "769",
    bp: "1384",
    eleimg: "38.png",
    cryimg: "38-1.png"
  },

  75: {
    num: 39,
    name: "钇",
    pinyin: "yǐ",
    english: "",
    symbol: "Y",
    weight: "88.90585",
    radius: "180(212)",
    electronic: "[Kr]4d<sup>1</sup>5s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "4472kg/m<sup>3</sup>",
    mp: "1526",
    bp: "3338",
    eleimg: "39.png",
    cryimg: "39-1.png"
  },

  76: {
    num: 40,
    name: "锆",
    pinyin: "gào",
    english: "",
    symbol: "Zr",
    weight: "91.224",
    radius: "155(206)",
    electronic: "[Kr]4d<sup>2</sup>5s<sup>2</sup>",
    oxidation: "4,3",
    crystal: "见(图2)",
    density: "6511kg/m<sup>3</sup>",
    mp: "1852",
    bp: "4377",
    eleimg: "40.png",
    cryimg: "40-1.png"
  },

  77: {
    num: 41,
    name: "铌",
    pinyin: "ní",
    english: "",
    symbol: "Nb",
    weight: "92.90638",
    radius: "145",
    electronic: "[Kr]4d<sup>4</sup>5s<sup>1</sup>",
    oxidation: "5,4",
    crystal: "见(图2)",
    density: "8570kg/m<sup>3</sup>",
    mp: "2468",
    bp: "4744",
    eleimg: "41.png",
    cryimg: "41-1.png"
  },

  78: {
    num: 42,
    name: "钼",
    pinyin: "mù",
    english: "",
    symbol: "Mo",
    weight: "95.94",
    radius: "139",
    electronic: "[Kr]4d<sup>5</sup>5s<sup>1</sup>",
    oxidation: "6,5,4",
    crystal: "见(图2)",
    density: "10.2g/cm<sup>3</sup>",
    mp: "2623",
    bp: "4639",
    eleimg: "42.png",
    cryimg: "42-1.png"
  },

  79: {
    num: 43,
    name: "锝",
    pinyin: "dé",
    english: "",
    symbol: "Tc",
    weight: "98",
    radius: "135(183)",
    electronic: "[Kr]4d<sup>5</sup>5s<sup>2</sup>",
    oxidation: "7,4",
    crystal: "见(图2)",
    density: "11500kg/m<sup>3</sup>",
    mp: "2170",
    bp: "4877",
    eleimg: "43.png",
    cryimg: "43-1.png"
  },

  80: {
    num: 44,
    name: "钌",
    pinyin: "liǎo",
    english: "",
    symbol: "Ru",
    weight: "101.07",
    radius: "134",
    electronic: "[Kr]4d<sup>7</sup>5s<sup>1</sup>",
    oxidation: "3,4,2",
    crystal: "见(图2)",
    density: "12.45g/cm<sup>3</sup>",
    mp: "2334",
    bp: "4150",
    eleimg: "44.png",
    cryimg: "44-1.png"
  },

  81: {
    num: 45,
    name: "铑",
    pinyin: "lǎo",
    english: "",
    symbol: "Rh",
    weight: "102.90550",
    radius: "134",
    electronic: "[Kr]4d<sup>8</sup>5s<sup>1</sup>",
    oxidation: "3,4",
    crystal: "见(图2)",
    density: "12.41g/cm<sup>3</sup>",
    mp: "1964",
    bp: "3695",
    eleimg: "45.png",
    cryimg: "45-1.png"
  },

  82: {
    num: 46,
    name: "钯",
    pinyin: "pá",
    english: "",
    symbol: "Pd",
    weight: "106.42",
    radius: "137",
    electronic: "[Kr]4d<sup>10</sup>",
    oxidation: "2,4",
    crystal: "见(图2)",
    density: "12.023g/cm<sup>3</sup>",
    mp: "1554.9",
    bp: "2963",
    eleimg: "46.png",
    cryimg: "46-1.png"
  },

  83: {
    num: 47,
    name: "银",
    pinyin: "yín",
    english: "",
    symbol: "Ag",
    weight: "107.8682",
    radius: "144",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "10.53g/cm<sup>3</sup>",
    mp: "961.78",
    bp: "2162",
    eleimg: "47.png",
    cryimg: "47-1.png"
  },

  84: {
    num: 48,
    name: "镉",
    pinyin: "gé",
    english: "",
    symbol: "Cd",
    weight: "112.411",
    radius: "151",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "8.65g/cm<sup>3</sup>",
    mp: "321.07",
    bp: "765",
    eleimg: "48.png",
    cryimg: "48-1.png"
  },

  85: {
    num: 49,
    name: "铟",
    pinyin: "yīn",
    english: "",
    symbol: "In",
    weight: "114.818",
    radius: "155(156)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "7310kg/m<sup>3</sup>",
    mp: "156.60",
    bp: "2072",
    eleimg: "49.png",
    cryimg: "49-1.png"
  },

  86: {
    num: 50,
    name: "锡",
    pinyin: "xī",
    english: "",
    symbol: "Sn",
    weight: "118.710",
    radius: "145(145)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup>",
    oxidation: "4,2",
    crystal: "见(图2)",
    density: "7310kg/m<sup>3</sup>",
    mp: "231.89",
    bp: "2260",
    eleimg: "50.png",
    cryimg: "50-1.png"
  },

  87: {
    num: 51,
    name: "锑",
    pinyin: "tī",
    english: "",
    symbol: "Sb",
    weight: "121.760",
    radius: "145(133)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup>",
    oxidation: "3,5,-3",
    crystal: "见(图2)",
    density: "6.68g/cm<sup>3</sup>",
    mp: "630.63",
    bp: "1587",
    eleimg: "51.png",
    cryimg: "51-1.png"
  },

  88: {
    num: 52,
    name: "碲",
    pinyin: "dì",
    english: "",
    symbol: "Te",
    weight: "127.60",
    radius: "140(123)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup>",
    oxidation: "4,6,-2",
    crystal: "见(图2)",
    density: "6240kg/m<sup>3</sup>",
    mp: "449.51",
    bp: "988",
    eleimg: "52.png",
    cryimg: "52-1.png"
  },

  89: {
    num: 53,
    name: "碘",
    pinyin: "diǎn",
    english: "",
    symbol: "I",
    weight: "126.90447",
    radius: "140(115)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup>",
    oxidation: "5,7,±1,3",
    crystal: "见(图2)",
    density: "4930kg/m<sup>3</sup>",
    mp: "113.70",
    bp: "184.2",
    eleimg: "53.png",
    cryimg: "53-1.png"
  },

  90: {
    num: 54,
    name: "氙",
    pinyin: "xiān",
    english: "",
    symbol: "Xe",
    weight: "131.293",
    radius: "--(108)",
    electronic: "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "5.9kg/m<sup>3</sup>",
    mp: "-112",
    bp: "-108",
    eleimg: "54.png",
    cryimg: "54-1.png"
  },

  91: {
    num: 55,
    name: "铯",
    pinyin: "sè",
    english: "",
    symbol: "Cs",
    weight: "132.90543",
    radius: "260(298)",
    electronic: "[Xe]6s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "1879kg/m<sup>3</sup>",
    mp: "28.44",
    bp: "671",
    eleimg: "55.png",
    cryimg: "55-1.png"
  },

  92: {
    num: 56,
    name: "钡",
    pinyin: "bèi",
    english: "",
    symbol: "Ba",
    weight: "137.327",
    radius: "215(253)",
    electronic: "[Xe]6s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "3510kg/m<sup>3</sup>",
    mp: "727",
    bp: "1870",
    eleimg: "56.png",
    cryimg: "56-1.png"
  },

  93: {
    num: 72,
    name: "铪",
    pinyin: "hā",
    english: "",
    symbol: "Hf",
    weight: "178.49",
    radius: "155(208)",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup>",
    oxidation: "4,3",
    crystal: "见(图2)",
    density: "13310kg/m<sup>3</sup>",
    mp: "2233",
    bp: "4603",
    eleimg: "72.png",
    cryimg: "72-1.png"
  },

  95: {
    num: 73,
    name: "钽",
    pinyin: "tǎn",
    english: "",
    symbol: "Ta",
    weight: "180.94788",
    radius: "145(200)",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup>",
    oxidation: "5",
    crystal: "见(图2)",
    density: "16650kg/m<sup>3</sup>",
    mp: "3017",
    bp: "5458",
    eleimg: "73.png",
    cryimg: "73-1.png"
  },

  96: {
    num: 74,
    name: "钨",
    pinyin: "wū",
    english: "",
    symbol: "W",
    weight: "183.84",
    radius: "139",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup>",
    oxidation: "6,5,4",
    crystal: "见(图2)",
    density: "19.35g/cm<sup>3</sup>",
    mp: "3422",
    bp: "5555",
    eleimg: "74.png",
    cryimg: "74-1.png"
  },

  97: {
    num: 75,
    name: "铼",
    pinyin: "lái",
    english: "",
    symbol: "Re",
    weight: "186.207",
    radius: "137",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup>",
    oxidation: "7,4",
    crystal: "见(图2)",
    density: "21.02g/cm<sup>3</sup>",
    mp: "3186",
    bp: "5596",
    eleimg: "75.png",
    cryimg: "75-1.png"
  },

  98: {
    num: 76,
    name: "锇",
    pinyin: "é",
    english: "",
    symbol: "Os",
    weight: "190.23",
    radius: "135",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>",
    oxidation: "8,4",
    crystal: "见(图2)",
    density: "22.59g/cm<sup>3</sup>",
    mp: "3033",
    bp: "5012",
    eleimg: "76.png",
    cryimg: "76-1.png"
  },

  99: {
    num: 77,
    name: "铱",
    pinyin: "yī",
    english: "",
    symbol: "Ir",
    weight: "192.217",
    radius: "136",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup>",
    oxidation: "4,3",
    crystal: "见(图2)",
    density: "22.42g/cm<sup>3</sup>",
    mp: "2466",
    bp: "4428",
    eleimg: "77.png",
    cryimg: "77-1.png"
  },

  100: {
    num: 78,
    name: "铂",
    pinyin: "bó",
    english: "",
    symbol: "Pt",
    weight: "195.08",
    radius: "139",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>9</sup>6s<sup>1</sup>",
    oxidation: "4,2",
    crystal: "见(图2)",
    density: "21.45g/cm<sup>3</sup>",
    mp: "1773",
    bp: "3827",
    eleimg: "78.png",
    cryimg: "78-1.png"
  },

  101: {
    num: 79,
    name: "金",
    pinyin: "jīn",
    english: "",
    symbol: "Au",
    weight: "196.96654",
    radius: "144",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "19.30g/cm<sup>3</sup>",
    mp: "1064.18",
    bp: "2856",
    eleimg: "79.png",
    cryimg: "79-1.png"
  },

  102: {
    num: 80,
    name: "汞",
    pinyin: "gǒng",
    english: "",
    symbol: "Hg",
    weight: "200.59",
    radius: "150(171)",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>",
    oxidation: "2,1",
    crystal: "见(图2)",
    density: "13579.04kg/m<sup>3</sup>",
    mp: "-38.83",
    bp: "356.73",
    eleimg: "80.png",
    cryimg: "80-1.png"
  },

  103: {
    num: 81,
    name: "铊",
    pinyin: "tā",
    english: "",
    symbol: "Tl",
    weight: "204.3833",
    radius: "190(156)",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup>",
    oxidation: "1,3",
    crystal: "见(图2)",
    density: "11850kg/m<sup>3</sup>",
    mp: "304",
    bp: "1473",
    eleimg: "81.png",
    cryimg: "81-1.png"
  },

  104: {
    num: 82,
    name: "铅",
    pinyin: "qiān",
    english: "",
    symbol: "Pb",
    weight: "207.2",
    radius: "180(154)",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup>",
    oxidation: "2,4",
    crystal: "见(图2)",
    density: "11340kg/m<sup>3</sup>",
    mp: "327.46",
    bp: "1740",
    eleimg: "82.png",
    cryimg: "82-1.png"
  },

  105: {
    num: 83,
    name: "铋",
    pinyin: "bì",
    english: "",
    symbol: "Bi",
    weight: "208.98037",
    radius: "160(143)",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup>",
    oxidation: "3,5,-3",
    crystal: "见(图2)",
    density: "9780kg/m<sup>3</sup>",
    mp: "271",
    bp: "1564",
    eleimg: "83.png",
    cryimg: "83-1.png"
  },

  106: {
    num: 84,
    name: "钋",
    pinyin: "pō",
    english: "",
    symbol: "Po",
    weight: "209",
    radius: "190(135)",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup>",
    oxidation: "4,2,6,-2",
    crystal: "见(图2)",
    density: "9.4g/cm<sup>3</sup>",
    mp: "254",
    bp: "962",
    eleimg: "84.png",
    cryimg: "84-1.png"
  },

  107: {
    num: 85,
    name: "砹",
    pinyin: "ài",
    english: "",
    symbol: "At",
    weight: "210",
    radius: "--",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup>",
    oxidation: "5,-1,7",
    crystal: "见(图2)",
    density: "--",
    mp: "302",
    bp: "370",
    eleimg: "85.png",
    cryimg: "--"
  },

  108: {
    num: 86,
    name: "氡",
    pinyin: "dōng",
    english: "",
    symbol: "Rn",
    weight: "222",
    radius: "--",
    electronic:
      "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>6</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "9.73kg/m<sup>3</sup>",
    mp: "-71.15",
    bp: "-61.85",
    eleimg: "86.png",
    cryimg: "86-1.png"
  },

  109: {
    num: 87,
    name: "钫",
    pinyin: "fāng",
    english: "",
    symbol: "Fr",
    weight: "223.0197",
    radius: "--",
    electronic: "[Rn]7s<sup>1</sup>",
    oxidation: "1",
    crystal: "见(图2)",
    density: "1.87g/cm<sup>3</sup>",
    mp: "27",
    bp: "677",
    eleimg: "87.png",
    cryimg: "87-1.png"
  },

  110: {
    num: 88,
    name: "镭",
    pinyin: "léi",
    english: "",
    symbol: "Ra",
    weight: "226.0254",
    radius: "215",
    electronic: "[Rn]7s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "6.0g/m<sup>3</sup>(20℃)",
    mp: "700",
    bp: "1140",
    eleimg: "88.png",
    cryimg: "--"
  },

  112: {
    num: 104,
    name: "鈩",
    pinyin: "lú",
    english: "",
    symbol: "Rf",
    weight: "261",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup>预测",
    oxidation: "4",
    crystal: "见(图2)",
    density: "--",
    mp: "2673",
    bp: "6073",
    eleimg: "104.png",
    cryimg: "--"
  },

  113: {
    num: 105,
    name: "钅杜",
    pinyin: "dù",
    english: "",
    symbol: "Db",
    weight: "268",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>3</sup>7s<sup>2</sup>预测",
    oxidation: "5",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "105.png",
    cryimg: "--"
  },

  114: {
    num: 106,
    name: "钅喜",
    pinyin: "xǐ",
    english: "",
    symbol: "Sg",
    weight: "266",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>4</sup>7s<sup>2</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "--",
    cryimg: "--"
  },

  115: {
    num: 107,
    name: "钅波",
    pinyin: "bō",
    english: "",
    symbol: "Bh",
    weight: "262",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>5</sup>7s<sup>2</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "--",
    cryimg: "--"
  },

  116: {
    num: 108,
    name: "钅黑",
    pinyin: "hēi",
    english: "",
    symbol: "Hs",
    weight: "265",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>6</sup>7s<sup>2</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "--",
    cryimg: "--"
  },

  117: {
    num: 109,
    name: "钅麦",
    pinyin: "mài",
    english: "",
    symbol: "Mt",
    weight: "266",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "109.png",
    cryimg: "--"
  },

  118: {
    num: 110,
    name: "鐽（钅达）",
    pinyin: "dá",
    english: "dá",
    symbol: "Ds",
    weight: "271",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "110.png",
    cryimg: "--"
  },

  119: {
    num: 111,
    name: "錀（钅仑）",
    pinyin: "lún",
    english: "",
    symbol: "Rg",
    weight: "283",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "111.png",
    cryimg: "--"
  },

  120: {
    num: 112,
    name: "鎶",
    pinyin: "",
    english: "",
    symbol: "Cn",
    weight: "285",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "112.png",
    cryimg: "--"
  },

  121: {
    num: 113,
    name: "钅尔",
    pinyin: "nǐ",
    english: "",
    symbol: "Nh",
    weight: "287",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "113.png",
    cryimg: "--"
  },

  122: {
    num: 114,
    name: "钅夫",
    pinyin: "fū",
    english: "",
    symbol: "Fl",
    weight: "289",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "114.png",
    cryimg: "--"
  },

  123: {
    num: 115,
    name: "镆",
    pinyin: "mó",
    english: "",
    symbol: "Mc",
    weight: "291",
    radius: "--",
    electronic:
      "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>3</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "--",
    cryimg: "--"
  },

  124: {
    num: 116,
    name: "钅立",
    pinyin: "lì",
    english: "",
    symbol: "Lv",
    weight: "293",
    radius: "--",
    electronic:
      "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>4</sup>",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "116.png",
    cryimg: "--"
  },

  125: {
    num: 117,
    name: "石田",
    pinyin: "tián",
    english: "",
    symbol: "Ts",
    weight: "294",
    radius: "--",
    electronic: "--",
    oxidation: "--",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "117.png",
    cryimg: "--"
  },

  126: {
    num: 118,
    name: "气+奥",
    pinyin: "ào",
    english: "",
    symbol: "Og",
    weight: "294",
    radius: "152",
    electronic:
      "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>6</sup>",
    oxidation: "0,2,4",
    crystal: "见(图2)",
    density: "13.65g/cm<sup>3</sup>(预测)",
    mp: "23.5",
    bp: "80±30",
    eleimg: "118.png",
    cryimg: "--"
  },

  128: {
    num: 57,
    name: "镧",
    pinyin: "lán",
    english: "",
    symbol: "La",
    weight: "138.90547",
    radius: "195",
    electronic: "[Xe]5d<sup>1</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "6146kg/m<sup>3</sup>",
    mp: "920",
    bp: "3457",
    eleimg: "57.png",
    cryimg: "57-1.png"
  },

  129: {
    num: 58,
    name: "铈",
    pinyin: "shì",
    english: "",
    symbol: "Ce",
    weight: "140.115",
    radius: "185",
    electronic: "[Xe]4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup>",
    oxidation: "3,4",
    crystal: "见(图2)",
    density: "6689kg/m<sup>3</sup>",
    mp: "798",
    bp: "3426",
    eleimg: "58.png",
    cryimg: "58-1.png"
  },

  130: {
    num: 59,
    name: "镨",
    pinyin: "pǔ",
    english: "",
    symbol: "Pr",
    weight: "140.90765",
    radius: "185(247)",
    electronic: "[Xe]4f<sup>3</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "6773kg/m<sup>3</sup>",
    mp: "931",
    bp: "3512",
    eleimg: "59.png",
    cryimg: "59-1.png"
  },

  131: {
    num: 60,
    name: "钕",
    pinyin: "nǚ",
    english: "",
    symbol: "Nd",
    weight: "144.242",
    radius: "185(206)",
    electronic: "[Xe]4f<sup>4</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "7.01g/cm<sup>3</sup>",
    mp: "1024",
    bp: "3100",
    eleimg: "60.png",
    cryimg: "60-1.png"
  },

  132: {
    num: 61,
    name: "钷",
    pinyin: "pǒ",
    english: "",
    symbol: "Pm",
    weight: "145",
    radius: "185(205)",
    electronic: "[Xe]4f<sup>5</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "7264kg/m<sup>3</sup>",
    mp: "1100",
    bp: "3000",
    eleimg: "61.png",
    cryimg: "--"
  },

  133: {
    num: 62,
    name: "钐",
    pinyin: "shān",
    english: "",
    symbol: "Sm",
    weight: "150.36",
    radius: "185(238)",
    electronic: "[Xe]4f<sup>6</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "7.54g/cm<sup>3</sup>",
    mp: "1072",
    bp: "1791",
    eleimg: "62.png",
    cryimg: "62-1.png"
  },

  134: {
    num: 63,
    name: "铕",
    pinyin: "yǒu",
    english: "",
    symbol: "Eu",
    weight: "151.965",
    radius: "185(231)",
    electronic: "[Xe]4f<sup>7</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "5244kg/m<sup>3</sup>",
    mp: "822",
    bp: "1597",
    eleimg: "63.png",
    cryimg: "63-1.png"
  },

  135: {
    num: 64,
    name: "钆",
    pinyin: "gá",
    english: "",
    symbol: "Gd",
    weight: "157.25",
    radius: "188(233)",
    electronic: "[Xe]4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "7901kg/m<sup>3</sup>",
    mp: "1312",
    bp: "3266",
    eleimg: "64.png",
    cryimg: "64-1.png"
  },

  136: {
    num: 65,
    name: "铽",
    pinyin: "tè",
    english: "",
    symbol: "Tb",
    weight: "158.92534",
    radius: "175(225)",
    electronic: "[Xe]4f<sup>9</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "8219kg/m<sup>3</sup>",
    mp: "1356",
    bp: "3230",
    eleimg: "65.png",
    cryimg: "65-1.png"
  },

  137: {
    num: 66,
    name: "镝",
    pinyin: "dí",
    english: "",
    symbol: "Dy",
    weight: "162.500",
    radius: "175(228)",
    electronic: "[Xe]4f<sup>10</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "8551kg/m<sup>3</sup>",
    mp: "1412",
    bp: "2562",
    eleimg: "66.png",
    cryimg: "66-1.png"
  },

  138: {
    num: 67,
    name: "钬",
    pinyin: "huǒ",
    english: "",
    symbol: "Ho",
    weight: "164.9303",
    radius: "247",
    electronic: "[Xe]4f<sup>11</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "8800kg/m<sup>3</sup>",
    mp: "1474",
    bp: "2695",
    eleimg: "67.png",
    cryimg: "67-1.png"
  },

  139: {
    num: 68,
    name: "铒",
    pinyin: "ěr",
    english: "",
    symbol: "Er",
    weight: "167.26",
    radius: "175(226)",
    electronic: "[Xe]4f<sup>12</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "9066kg/m<sup>3</sup>",
    mp: "1522",
    bp: "2510",
    eleimg: "68.png",
    cryimg: "68-1.png"
  },

  140: {
    num: 69,
    name: "铥",
    pinyin: "diū",
    english: "",
    symbol: "Tm",
    weight: "168.93421",
    radius: "175(222)",
    electronic: "[Xe]4f<sup>13</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "9321kg/m<sup>3</sup>",
    mp: "1545",
    bp: "1947",
    eleimg: "69.png",
    cryimg: "69-1.png"
  },

  1401: {
    num: 70,
    name: "镱",
    pinyin: "yì",
    english: "",
    symbol: "Yb",
    weight: "173.04",
    radius: "175(222)",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>0</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "6.98g/cm<sup>3</sup>",
    mp: "824",
    bp: "1194",
    eleimg: "70.png",
    cryimg: "70-1.png"
  },

  141: {
    num: 71,
    name: "镥",
    pinyin: "lǔ",
    english: "",
    symbol: "Lu",
    weight: "174.967",
    radius: "175(217)",
    electronic: "[Xe]4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "9841kg/m<sup>3</sup>",
    mp: "1652",
    bp: "3402",
    eleimg: "71.png",
    cryimg: "71-1.png"
  },

  143: {
    num: 89,
    name: "锕",
    pinyin: "ā",
    english: "",
    symbol: "Ac",
    weight: "227.0278",
    radius: "195",
    electronic: "[Rn]6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "10070kg/m<sup>3</sup>",
    mp: "1050",
    bp: "3200",
    eleimg: "89.png",
    cryimg: "89-1.png"
  },

  144: {
    num: 90,
    name: "钍",
    pinyin: "tǔ",
    english: "",
    symbol: "Th",
    weight: "232.0381",
    radius: "160.6",
    electronic: "[Rn]5f<sup>0</sup>6d<sup>2</sup>7s<sup>2</sup>",
    oxidation: "4",
    crystal: "见(图2)",
    density: "11724kg/m<sup>3</sup>",
    mp: "1600",
    bp: "4788",
    eleimg: "90.png",
    cryimg: "90-1.png"
  },

  145: {
    num: 91,
    name: "镤",
    pinyin: "pú",
    english: "",
    symbol: "Pa",
    weight: "231.03588",
    radius: "180",
    electronic: "[Rn]5f<sup>2</sup>6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "5",
    crystal: "见(图2)",
    density: "15370kg/m<sup>3</sup>",
    mp: "1840",
    bp: "4027",
    eleimg: "91.png",
    cryimg: "91-1.png"
  },

  146: {
    num: 92,
    name: "鈾",
    pinyin: "yóu",
    english: "",
    symbol: "U",
    weight: "238.02891",
    radius: "156",
    electronic: "[Rn]5f<sup>3</sup>6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "6,4",
    crystal: "见(图2)",
    density: "18.95g/cm<sup>3</sup>",
    mp: "1132.2 ",
    bp: "4131",
    eleimg: "92.png",
    cryimg: "92-1.png"
  },

  147: {
    num: 93,
    name: "镎",
    pinyin: "ná",
    english: "",
    symbol: "Np",
    weight: "237.0482",
    radius: "175",
    electronic: "[Rn]5f<sup>4</sup>6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "5",
    crystal: "见(图2)",
    density: "20250kg/m<sup>3</sup>",
    mp: "640",
    bp: "3902",
    eleimg: "93.png",
    cryimg: "93-1.png"
  },

  148: {
    num: 94,
    name: "钚",
    pinyin: "bù",
    english: "",
    symbol: "Pu",
    weight: "244",
    radius: "159",
    electronic: "[Rn]5f<sup>6</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "4,3",
    crystal: "见(图2)",
    density: "19.816g/cm<sup>3</sup>",
    mp: "639.4",
    bp: "3228",
    eleimg: "94.png",
    cryimg: "94-1.png"
  },

  149: {
    num: 95,
    name: "镅",
    pinyin: "méi",
    english: "",
    symbol: "Am",
    weight: "243",
    radius: "175",
    electronic: "[Rn]5f<sup>7</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "13.6g/cm<sup>3</sup>",
    mp: "1176",
    bp: "2607",
    eleimg: "95.png",
    cryimg: "95-1.png"
  },

  150: {
    num: 96,
    name: "锔",
    pinyin: "jū",
    english: "",
    symbol: "Cm",
    weight: "247",
    radius: "174",
    electronic: "[Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "13.511g/cm<sup>3</sup>",
    mp: "1340",
    bp: "3110",
    eleimg: "96.png",
    cryimg: "--"
  },

  151: {
    num: 97,
    name: "锫",
    pinyin: "péi",
    english: "",
    symbol: "Bk",
    weight: "247",
    radius: "170",
    electronic: "[Rn]5f<sup>9</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "14790kg/m<sup>3</sup>",
    mp: "986",
    bp: "2200",
    eleimg: "97.png",
    cryimg: "--"
  },

  152: {
    num: 98,
    name: "锎",
    pinyin: "kāi",
    english: "",
    symbol: "Cf",
    weight: "251",
    radius: "--",
    electronic: "[Rn]5f<sup>10</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "15100kg/m<sup>3</sup>",
    mp: "900",
    bp: "1745",
    eleimg: "98.png",
    cryimg: "--"
  },

  153: {
    num: 99,
    name: "锿",
    pinyin: "āi",
    english: "",
    symbol: "Es",
    weight: "252",
    radius: "--",
    electronic: "[Rn]5f<sup>11</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "13500kg/m<sup>3</sup>",
    mp: "860",
    bp: "--",
    eleimg: "99.png",
    cryimg: "--"
  },

  154: {
    num: 100,
    name: "镄",
    pinyin: "fèi",
    english: "",
    symbol: "Fm",
    weight: "257",
    radius: "--",
    electronic: "[Rn]5f<sup>12</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "--",
    mp: "1527",
    bp: "--",
    eleimg: "100.png",
    cryimg: "--"
  },

  155: {
    num: 101,
    name: "钔",
    pinyin: "mén",
    english: "",
    symbol: "Md",
    weight: "258",
    radius: "--",
    electronic: "[Rn]5f<sup>13</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "--",
    mp: "827",
    bp: "--",
    eleimg: "101.png",
    cryimg: "--"
  },

  1551: {
    num: 102,
    name: "锘",
    pinyin: "nuò",
    english: "",
    symbol: "No",
    weight: "259",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>0</sup>7s<sup>2</sup>",
    oxidation: "2",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "102.png",
    cryimg: "--"
  },

  156: {
    num: 103,
    name: "铹",
    pinyin: "láo",
    english: "",
    symbol: "Lr",
    weight: "260",
    radius: "--",
    electronic: "[Rn]5f<sup>14</sup>6d<sup>1</sup>7s<sup>2</sup>",
    oxidation: "3",
    crystal: "见(图2)",
    density: "--",
    mp: "--",
    bp: "--",
    eleimg: "103.png",
    cryimg: "--"
  }
};
