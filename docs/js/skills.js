var skills=[
    {
        id:"nz",
        className:"Co",
        skillName:"謎倍率",
        ef:{
            blow:[0,5],
            shot:[0,5],
            magical:[0,5],
            tech:[0,5]
        },
        label:['なし','あり'],
        default:1
    },
    {
        id:"wb",
        className:"Co",
        skillName:"ウィークバレット",
        ef:{
            blow:[0,20],
            shot:[0,20],
            magical:[0,20],
            tech:[0,20]
        },
        label:["なし","あり"],
    },
    {
        id:"sst",
        className:"Co",
        skillName:"シフタストライク",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,10],
            tech:[0,10]
        },
        label:["なし","あり"]
    },
    {
        id:"wpb",
        className:"Co",
        skillName:"ウェポンブースト",
        ef:{
            blow:[0,2.5,5,7.5,10],
            shot:[0,2.5,5,7.5,10],
            magical:[0,0,0,0,0],
            tech:[0,2.5,5,7.5,10]
        },
        label:["なし","1","2","3","4"],
        onlymain:-1
    },
    {
        id:"rm",
        className:"Co",
        skillName:"各職レアマスタリー",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,0],
            tech:[0,10]
        },
        label:["なし","あり"],
        onlymain:-1
    },
    {
        id:"hlv",
        className:"Co",
        skillName:"ハイレベルボーナス",
        ef:{
            blow:[0,5,1025],
            shot:[0,5,1025],
            magical:[0,5,1025],
            tech:[0,5,1025]
        },
        label:["なし","5","5+5"]
    },
    {
        id:"g",
        className:"Co",
        skillName:"各種ギア",
        ef:{
            blow:[0,5,10,15,20,30,50],
            shot:[0,5,10,15,20,30,50],
            magical:[0,0,0,0,0,0,0],
            tech:[0,0,0,0,0,0,0]
        },
        label:["なし","JB1TMG2","DB1JB2TMG3","DB2JB3","TD2DB3","TMGMAX","TD3"]
    },
    {
        id:"ja",
        className:"Co",
        skillName:"ジャストアタック",
        ef:{
            blow:[0,30],
            shot:[0,30],
            magical:[0,0],
            tech:[0,30]
        },
        label:["なし","あり"]
    },
    {
        id:"hus",
        className:"Hu",
        skillName:"フューリーS or ガードS",
        ef:{
            blow:[0,20,32.3,38.915,45.53,50],
            shot:[0,10,21.275,27.33875,33.4025,50],
            magical:[0,0,0,5,10,50],
            tech:[0,0,0,5,10,50]
        },
        label:["なし","ﾌｭｰﾘｰ","+Sｱｯﾌﾟ","+ｺﾝﾎﾞ5","+ｺﾝﾎﾞ10","ｶﾞﾄﾞｽﾀｱﾄﾞﾊﾞﾝｽ"],
        onlymain:5,
        default:4
    },
    {
        id:"warb",
        className:"Hu",
        skillName:"ウォーブレイブ",
        ef:{
            blow:[0,3,6,9,12,15],
            shot:[0,3,6,9,12,15],
            magical:[0,3,6,9,12,15],
            tech:[0,3,6,9,12,15]
        },
        label:["なし","lv1","lv2","lv3","lv4","lv5"],
        onlymain:-1,
    },
    {
        id:"jab",
        className:"Hu",
        skillName:"JAボーナス",
        ef:{
            blow:[0,5,10,21],
            shot:[0,5,10,21],
            magical:[0,0,0,0],
            tech:[0,0,0,0]
        },
        label:["なし","1lv5","1lv10","1lv10+2lv10"],
        default:3
    },
    {
        id:"nvg",
        className:"Hu",
        skillName:"ネバーギブアップ",
        ef:{
            blow:["0","200","220","240","260","300"],
            shot:["0","0","0","0","0","0"],
            magical:["0","0","0","0","0","0"],
            tech:["0","0","0","0","0","0"]
        },
        label:["なし","1","2","3","4","5"],
    },
    {
        id:"fis",
        className:"Fi",
        skillName:"ﾌﾞﾚｲﾌﾞS or ﾜｲｽﾞS",
        ef:{
            blow:[0,30,35,40,54,75.5],
            shot:[0,30,35,40,54,75.5],
            magical:[0,30,35,40,54,75.5],
            tech:[0,30,35,40,54,75.5]
        },
        label:["なし","ﾜｲｽﾞ前","ﾌﾞﾚｲﾌﾞ後orﾜｲｽﾞ後","ﾌﾞﾚｲﾌﾞ前","ﾌﾞﾚｲﾌﾞSｱｯﾌﾟ","ﾜｲｽﾞSｱｯﾌﾟ"],
        default:4
    },
    {
        id:"lmtb",
        className:"Fi",
        skillName:"リミットブレイク",
        ef:{
            blow:[0,4,8,12,16,20],
            shot:[0,0,0,0,0,0],
            magical:[0,0,0,0,0,0],
            tech:[0,0,0,0,0,0]
        },
        label:["なし","1","2","3","4","5"],
        onlymain:-1
    },
    {
        id:"crst",
        className:"Fi",
        skillName:"クリティカルストライク",
        ef:{
            blow:[[0],[15]],
            shot:[[0],[15]],
            magical:[[0],[15]],
            tech:[[0],[15]]
        },
        label:["なし","あり"],
        onlymain:-1
    },
    {
        id:"tajab",
        className:"Fi",
        skillName:"ﾃｯｸｱｰﾂJAﾎﾞｰﾅｽ",
        ef:{
            blow:[0,5,6,8,10,15],
            shot:[0,5,6,8,10,15],
            magical:[0,0,0,0,0,0],
            tech:[0,5,6,8,10,15]
        },
        label:["なし","1","2","3","4","5"],
        default:5
    },
    {
        id:"halfs",
        className:"Fi",
        skillName:"ハーフラインスレイヤー",
        ef:{
            blow:["0","20","22","24","26","28","34","40","60","80","100"],
            shot:["0","20","22","24","26","28","34","40","60","80","100"],
            magical:["0","20","22","24","26","28","34","40","60","80","100"],
            tech:["0","20","22","24","26","28","34","40","60","80","100"]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"deads",
        className:"Fi",
        skillName:"デッドラインスレイヤー",
        ef:{
            blow:["0","40","44","49","54","60","67","75","100","125","150"],
            shot:["0","40","44","49","54","60","67","75","100","125","150"],
            magical:["0","40","44","49","54","60","67","75","100","125","150"],
            tech:["0","40","44","49","54","60","67","75","100","125","150"]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"pps",
        className:"Fi",
        skillName:"PPスレイヤー",
        ef:{
            blow:["0","50","65","80","95","110","125","140","155","170","200"],
            shot:["0","50","65","80","95","110","125","140","155","170","200"],
            magical:["0","50","65","80","95","110","125","140","155","170","200"],
            tech:["0","50","65","80","95","110","125","140","155","170","200"]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"crzb",
        className:"Fi",
        skillName:"クレイジービート ",
        ef:{
            blow:["0","100","120","140","160","200"],
            shot:["0","0","0","0","0","0"],
            magical:["0","0","0","0","0","0"],
            tech:["0","0","0","0","0","0"]
        },
        label:["なし","1","2","3","4","5"]
    },
    {
        id:"chs",
        className:"Fi",
        skillName:"チェイスアドバンス",
        ef:{
            blow:[0,10,15,25],
            shot:[0,0,0,0],
            magical:[0,0,0,0],
            tech:[0,0,0,0]
        },
        label:["なし","10","15","25"]
    },
    {
        id:"chsp",
        className:"Fi",
        skillName:"ﾁｪｲｽｱﾄﾞﾊﾞﾝｽﾌﾟﾗｽ",
        ef:{
            blow:[0,5,7,9,11,15],
            shot:[0,5,7,9,11,15],
            magical:[0,5,7,9,11,15],
            tech:[0,5,7,9,11,15]
        },
        label:["なし","1","2","3","4","5"]
    },
    {
        id:"pwb",
        className:"Ra",
        skillName:"パワーバレット ",
        ef:{
            blow:["0","0","0","0","0","0"],
            shot:["0","50","60","70","80","100"],
            magical:["0","0","0","0","0","0"],
            tech:["0","0","0","0","0","0"]
        },
        label:["なし","1","2","3","4","5"]
    },
    {
        id:"wha",
        className:"Ra",
        skillName:"ｳｨｰｸﾋｯﾄｱﾄﾞﾊﾞﾝｽ",
        ef:{
            blow:[0,0,0],
            shot:[0,15,32.25],
            magical:[0,0,0],
            tech:[0,0,0]
        },
        label:["なし","1lv10","1lv10+2lv10"],
        default:2
    },
    {
        id:"ssms",
        className:"Ra",
        skillName:"ｽﾀﾝﾃﾞｨﾝｸﾞorﾑｰﾋﾞﾝｸﾞｽﾅｲﾌﾟ",
        ef:{
            blow:[0,0,0,0,0],
            shot:[0,20.75,25,32.25,43.75],
            magical:[0,0,0,0,0],
            tech:[0,0,0,0,0]
        },
        label:["なし","ｽﾀ1lv5+ｽﾀ2lv1","ﾑﾋﾞlv10","ｽﾀ1lv5+ｽﾀ2lv5","ｽﾀ1lv10+ｽﾀ2lv10"],
        default:4
    },
    {
        id:"fh",
        className:"Ra",
        skillName:"ファーストヒット",
        ef:{
            blow:[0,4,8,12,16,20],
            shot:[0,4,8,12,16,20],
            magical:[0,4,8,12,16,20],
            tech:[0,4,8,12,16,20]
        },
        label:["なし","1","2","3","4","5"],
    },
    {
        id:"ss",
        className:"Ra",
        skillName:"シャープシューター",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,10],
            tech:[0,10]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"ct",
        className:"Gu",
        skillName:"チェイントリガー",
        ef:{
            blow:[0,20,30,50,60,65,70,75,80,85,90,100],
            shot:[0,20,30,50,60,65,70,75,80,85,90,100],
            magical:[0,20,30,50,60,65,70,75,80,85,90,100],
            tech:[0,20,30,50,60,65,70,75,80,85,90,100]
        },
        label:["なし","1-","9-","19-","29-","39-","49-","59-","69-","79-","89-","99-"]
    },
    {
        id:"cf",
        className:"Gu",
        skillName:"チェインフィニッシュ",
        ef:{
            blow:[0,50,90,150],
            shot:[0,50,90,150],
            magical:[0,0,0,0],
            tech:[0,0,0,0]
        },
        label:["なし","1","5","10"],
        onlymain:-1
    },
    {
        id:"ht",
        className:"Gu",
        skillName:"ハイタイム",
        ef:{
            blow:[0,20],
            shot:[0,20],
            magical:[0,20],
            tech:[0,20]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"zra",
        className:"Gu",
        skillName:"ゼロレンジアドバンス",
        ef:{
            blow:[0,0,0,0],
            shot:[0,5,10,15.5,21],
            magical:[0,0,0,0],
            tech:[0,0,0,0]
        },
        label:["なし","1lv5","1lv10","1lv5+2lv10","1lv10+2lv10"],
        default:4
    },
    {
        id:"pk",
        className:"Gu",
        skillName:"パーフェクトキーパー",
        ef:{
            blow:[0,10,11,12,13,14,15,16,17,18,20],
            shot:[0,10,11,12,13,14,15,16,17,18,20],
            magical:[0,10,11,12,13,14,15,16,17,18,20],
            tech:[0,10,11,12,13,14,15,16,17,18,20]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"],
        default:10
    },
    {
        id:"ea",
        className:"Gu",
        skillName:"エアリアルアドバンス",
        ef:{
            blow:[0,2,4,6,8,10,12,14,16,18,20],
            shot:[0,2,4,6,8,10,12,14,16,18,20],
            magical:[0,2,4,6,8,10,12,14,16,18,20],
            tech:[0,2,4,6,8,10,12,14,16,18,20]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"tmgm",
        className:"Gu",
        skillName:"TMGマスタリー",
        ef:{
            blow:[[0],[5]],
            shot:[[0],[5]],
            magical:[[0],[5]],
            tech:[[0],[5]]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"srb",
        className:"Gu",
        skillName:"SロールJAボーナス",
        ef:{
            blow:[0,2,4,6,8,10],
            shot:[0,2,4,6,8,10],
            magical:[0,2,4,6,8,10],
            tech:[0,2,4,6,8,10]
        },
        label:["なし","1","2","3","4","5"]
    },
    {
        id:"ff",
        className:"Fo",
        skillName:"フォトンフレア",
        ef:{
            blow:["0","0","0","0","0","0","0","0","0","0","0"],
            shot:["0","0","0","0","0","0","0","0","0","0","0"],
            magical:["0","20","40","60","80","100","120","140","160","180","200"],
            tech:["0","20","40","60","80","100","120","140","160","180","200"]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"ffa",
        className:"Fo",
        skillName:"フォトンフレアアドバンス",
        ef:{
            blow:["0","0","0","0","0","0","0","0","0","0","0"],
            shot:["0","0","0","0","0","0","0","0","0","0","0"],
            magical:["0","20","40","60","80","100","120","140","160","180","200"],
            tech:["0","20","40","60","80","100","120","140","160","180","200"]
        },
        label:["なし","1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id:"ffab",
        className:"Fo",
        skillName:"フォトンフレアアフターバースト",
        ef:{
            blow:["0","0"],
            shot:["0","0"],
            magical:["0","100"],
            tech:["0","100"]
        },
        label:["なし","あり"],
    },
    {
        id:"tjaa",
        className:"Fo",
        skillName:"テックJAアドバンス",
        ef:{
            blow:[0,0],
            shot:[0,0],
            magical:[0,0],
            tech:[0,10]
        },
        label:["なし","あり"],
        default:1
    },
    {
        id:"tjant",
        className:"Fo",
        skillName:"ﾁｬｰｼﾞorﾉｰﾏﾙﾃｯｸｱﾄﾞﾊﾞﾝｽ",
        ef:{
            blow:[0,0,0],
            shot:[0,0,0],
            magical:[0,0,0],
            tech:[0,10,21]
        },
        label:["なし","ﾁｬｰｼﾞ1lv10 ﾉｰﾏﾙﾃｯｸlv10","ﾁｬｰｼﾞ1lv10+ﾁｬｰｼﾞ2lv5"],
        default:2
    },
    {
        id:"ttb",
        className:"Fo",
        skillName:"タリステックボーナス",
        ef:{
            blow:[0,0],
            shot:[0,0],
            magical:[0,0],
            tech:[0,20]
        },
        label:["なし","あり"]
    },
    //エレメントコンバージョンは独自計算のため組み込み済み
    {
        id:"fom",
        className:"Fo",
        skillName:"属性マスタリー(Fo)",
        ef:{
            blow:[0,0,0,0,0,0],
            shot:[0,0,0,0,0,0],
            magical:[0,0,0,0,0,0],
            tech:[0,5,18.8,25.4,29.6,36.8,44]
        },
        label:["なし","1lv1","1lv2+2lv1","1lv5+2lv1","1lv2+2lv5","1lv5+2lv5","1lv10+2lv5"],
        default:6
    },
    {
        id:"wl",
        className:"Te",
        skillName:"ウォンドラバーズ",
        ef:{
            blow:[0,5,18,40],
            shot:[0,0,0,0],
            magical:[0,0,0,0],
            tech:[0,0,0,0]
        },
        label:["なし","1","3","5"],
        default:3
    },
    //ウォンドリアクターは独自計算のため組み込み済み
    {
        id:"ewh",
        className:"Te",
        skillName:"エレメントウィークヒット",
        ef:{
            blow:[0,10,20],
            shot:[0,10,20],
            magical:[0,10,20],
            tech:[0,10,20]
        },
        label:["なし","非弱点属性","弱点属性"],
        default:2
    },
    {
        id:"tem",
        className:"Te",
        skillName:"属性マスタリー(Te)",
        ef:{
            blow:[0,0,0,0,0,0],
            shot:[0,0,0,0,0,0],
            magical:[0,0,0,0,0,0],
            tech:[0,5,18.8,25.4,29.6,36.8,44]
        },
        label:["なし","1lv1","1lv2+2lv1","1lv5+2lv1","1lv2+2lv5","1lv5+2lv5","1lv10+2lv5"],
        default:6
    },
    {
        id:"brs",
        className:"Br",
        skillName:"アベレージS or ウィークS",
        ef:{
            blow:[0,15,35],
            shot:[0,15,35],
            magical:[0,15,35],
            tech:[0,15,35]
        },
        label:["なし","ｱﾍﾞ","ｳｨｰｸ"],
        default:1
    },
    {
        id:"brsup",
        className:"Br",
        skillName:"ｽﾀﾝｽｱｯﾌﾟ & ｽﾀﾝｽﾁｬｰｼﾞ",
        ef:{
            blow:[0,10,21],
            shot:[0,10,21],
            magical:[0,10,21],
            tech:[0,10,21]
        },
        label:["なし","ｱｯﾌﾟlv10","ｱｯﾌﾟlv10+ﾁｬｰｼﾞlv10"],
        default:1
    },
    {
        id:"cjab",
        className:"Br",
        skillName:"コンバットJAボーナス",
        ef:{
            blow:[0,5,7,9,12,15],
            shot:[0,0,0,0,0,0],
            magical:[0,0,0,0,0,0],
            tech:[0,0,0,0,0,0]
        },
        label:["なし","1","2","3","4","5"],
        default:5
    },
    {
        id:"comf",
        className:"Br",
        skillName:"コンバットフィニッシュ",
        ef:{
            blow:[0,100,120,140,160,200],
            shot:[0,0,0,0,0,0],
            magical:[0,0,0,0,0,0],
            tech:[0,0,0,0,0,0]
        },
        label:["なし","1","2","3","4","5"]
    },
    {
        id:"rpup",
        className:"Br",
        skillName:"ラピッドシュートアップ",
        ef:{
            blow:["0","0","0","0","0"],
            shot:["0","100","240","440","500"],
            magical:["0","0","0","0","0"],
            tech:["0","0","0","0","0"]
        },
        label:["なし","1lv1","1lv3+2lv1","1lv3+2lv5","1lv5+2lv5"],
        default:4
    },
    {
        id:"rpm",
        className:"Br",
        skillName:"ラピッドシュートマスタリー",
        ef:{
            blow:[0,15],
            shot:[0,15],
            magical:[0,0],
            tech:[0,15]
        },
        label:["なし","あり"],
        default:1
    },
    {
        id:"aa",
        className:"Br",
        skillName:"アタックアドバンス",
        ef:{
            blow:[0,35],
            shot:[0,35],
            magical:[0,35],
            tech:[0,35]
        },
        label:["なし","あり"]
    },
    {
        id:"cs",
        className:"Br",
        skillName:"チャージシュート",
        ef:{
            blow:[0,0,0],
            shot:[0,9,15],
            magical:[0,0,0],
            tech:[0,0,0]
        },
        label:["なし","3","5"]
    },
    {
        id:"bos",
        className:"Bo",
        skillName:"ｴﾚﾒﾝﾀﾙS or ﾌﾞﾚｲｸS",
        ef:{
            blow:[0,15,17.5,20,35],
            shot:[0,15,17.5,20,35],
            magical:[0,15,17.5,20,35],
            tech:[0,15,17.5,20,35]
        },
        label:["なし","ｴﾚ非弱点","SDﾎﾞｰﾅｽ","ｴﾚ弱点","ﾌﾞﾚｲｸ"],
        onlymain:2,
        default:3
    },
    {
        id:"bosup",
        className:"Bo",
        skillName:"スタンスアップ",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,10],
            tech:[0,10]
        },
        label:["なし","あり"],
        default:1
    },
    {
        id:"pbfup",
        className:"Bo",
        skillName:"PBF&ﾌｨｰﾊﾞｰｱｯﾌﾟ",
        ef:{
            blow:[0,100,160],
            shot:[0,0,0],
            magical:[0,0,0],
            tech:[0,0,0]
        },
        label:["なし","PBF","PBF+ﾌｨｰﾊﾞｰｱｯﾌﾟ"]
    },
    {
        id:"rpja",
        className:"Bo",
        skillName:"ラピッドブーストJAボーナス",
        ef:{
            blow:[0,15],
            shot:[0,15],
            magical:[0,0],
            tech:[0,15]
        },
        label:["なし","あり"]
    },
    {
        id:"sea",
        className:"Bo",
        skillName:"シフタエアアタックブースト",
        ef:{
            blow:[0,5],
            shot:[0,5],
            magical:[0,5],
            tech:[0,5]
        },
        label:["なし","あり"],
        default:1
    },
    {
        id:"ae",
        className:"Su",
        skillName:"アルターエゴ",
        ef:{
            blow:[0,0,0],
            shot:[0,0,0],
            magical:[0,15,20],
            tech:[0,15,20]
        },
        label:["なし","5","10"],
        onlymain:-1,
        default:1
    },
    {
        id:"pasf",
        className:"Su",
        skillName:"ﾎﾟｲﾝﾄｱｼｽﾄ & ｻﾎﾟｰﾄﾌｧｲｱ",
        ef:{
            blow:[0,10,15,26.5],
            shot:[0,10,15,26.5],
            magical:[0,10,15,26,6],
            tech:[0,10,15,26.5]
        },
        label:["なし","ｻﾎﾟﾌｧ","ﾎﾟｲｱｼ","ﾎﾟｲｱｼ+ｻﾎﾟﾌｧ"],
        default:3
    },
    {
        id:"all",
        className:"Su",
        skillName:"オールアタックボーナス",
        ef:{
            blow:[0,32.25],
            shot:[0,32.25],
            magical:[0,32.25],
            tech:[0,32.25]
        },
        label:["なし","あり"],
        default:1
    },
    {
        id:"ps",
        className:"Su",
        skillName:"ペットシンパシー",
        ef:{
            blow:[0,0],
            shot:[0,0],
            magical:[0,20],
            tech:[0,0]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"pewh",
        className:"Su",
        skillName:"ペットエレメントウィークヒット",
        ef:{
            blow:[0,5],
            shot:[0,5],
            magical:[0,10],
            tech:[0,5]
        },
        label:["なし","あり"]
    },
    {
        id:"hrt",
        className:"Hr",
        skillName:"ヒーロータイム",
        ef:{
            blow:["0","999"],
            shot:["0","999"],
            magical:["0","999"],
            tech:["0","999"]
        },
        label:["なし","あり"],
        onlymain:-1
    },
    {
        id:"hrct",
        className:"Hr",
        skillName:"ヒーローカウンター",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,10],
            tech:[0,0]
        },
        label:["なし","あり"],
        onlymain:-1
    },
    {
        id:"hrb",
        className:"Hr",
        skillName:"ヒーローブースト",
        ef:{
            blow:[0,60],
            shot:[0,60],
            magical:[0,60],
            tech:[0,60]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"hrwb",
        className:"Hr",
        skillName:"ヒーローウェポンブースト",
        ef:{
            blow:[0,125],
            shot:[0,125],
            magical:[0,125],
            tech:[0,125]
        },
        label:["なし","あり"],
        onlymain:-1,
        default:1
    },
    {
        id:"hrab",
        className:"Hr",
        skillName:"Hアタックボーナス",
        ef:{
            blow:[0,10],
            shot:[0,10],
            magical:[0,10],
            tech:[0,10]
        },
        label:["なし","あり"],
        onlymain:-1
    },
    {
        id:"ahc",
        className:"Hr",
        skillName:"オーラハイチャージ",
        ef:{
            blow:[0,5,7,9,10],
            shot:[0,0,0,0,0],
            magical:[0,0,0,0,0],
            tech:[0,0,0,0,0]
        },
        label:["なし","1","2","3","4","5"],
        onlymain:-1
    }
]

var skillsId={};
for (var i=0;i<skills.length;i++){
    var key=skills[i].id
    skillsId[key]={
        className:skills[i].className,
        ef:skills[i].ef
    };
}
