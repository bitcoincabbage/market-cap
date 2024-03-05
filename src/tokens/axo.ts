import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const AXO = "420000029ad9527271b1b1e3c27ee065c18df70a4a4cfc3093a41a4441584f";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 42_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, AXO, [
    "addr1qxxgertdvw306w8sqmr4qu3nkz3p96enr3wfwu84v0yg7mkzk33etrwedujlkplzn8dnvedkh8xehpy3xhpfcqglvg5qsq4w73",
  ]);

  //ISPO, presale, dev vesting scripts > 2000 AXO
  const lockedRawAddresses = [
    "addr1q825pv0wp4uqcjuv0puuwsrjwncmmmh9wdnqwakeg8gyvq24ma4a4vxazadkxwmt5l4j8am9jrf6r8udw69ppacf52pq2jnq2e",
    "addr1qyffzz4s0hzumlh2pjy7mv0tdv0eqs5xm8jggel3kh04c7c22gfz9v4d79dkx7wxw7qtgt3ft779y0vngk79pfl8l3aq3rcv6z",
    "addr1w8mw7eec62zxt08vs8cjhaeasven302gefslymk8hzcavmgnuud4p",
    "addr1w9sztrrqc5pg7d0jw7ltjg78m6sqfuuwqqvm4ytfuedh93cmw7v4q",
    "addr1wxh85yeg0ctgtk44thsedn0c8x56zw70atfxfrfsn3m4p3cxm3237",
    "addr1w9jk4242h8ad7xkekdh2h3sw8s3lakmtfffeewdzesg0rjqt63gll",
    "addr1w96n0c5e4tqe7tg4vyazp98l3756zdsxj8vlpdjwwf2skeqvczlwh",
    "addr1wxfq7f900fkxwgg0fjlr9q0x0t86yt3jtd7v4vjev8k8e7qglue47",
    "addr1wx6dgn2jp0h599anajq8f4k7arlwlkcvlr2mzcrkxr0n2vqf6rkfv",
    "addr1w9y9jgkke4k8qqqjud09wawjm50kaprf573h86pspwy0acslfkcn5",
    "addr1wyqq5punt7k67aev90tg383e8zugcgmyx44j3d34f7t760cy4cpgu",
    "addr1w88yuqel37a0lkw74ser8g0cwd08gwyu5uueratg0zgzjpqefxzj2",
    "addr1wxv7pxygz5g34u52t7xrqdc5ghwy0ta6y4d2uef93enua8sxy5d62",
    "addr1w83jq3437v03zmyn5udxd6flaj77a0au2s5xeegu9rgp9jsk4gx7w",
    "addr1w93ww4hcdzjn2ekgc4vvhglsg3aq5sd9hz5qy8jlqntqg0qglcrz7",
    "addr1w80z2ykmgkmjw8r4tvxrmqju587ryqqgskre3ekkh2zkzksq3jvyp",
    "addr1w99gguyswrmrz037y87jcm0nxlwpcv6chnwymt7etddrfsc2p036l",
    "addr1w9q4ej2wfhakzqj9m7xv8yrpdtqmyn3z4t74uk5p0c70jyc528j3r",
    "addr1wyp4y4eu2vw7amh06z28nm4eayl8k7sllp5jq2385y3uhxsr20r89",
    "addr1wxha4jypzg2ux9exetm6jlvwacrnmlxuk4t4en8y9grezwqfwm878",
    "addr1w9kq5g0fwwj93tawgrchg8tyxakxfgjtuj7kvvrhn4y7lvcrzp438",
    "addr1wx3qd7auh6u993k0qlku5jy2c9w7jxzq75akxhznch63edcq37jpz",
    "addr1wyryrz0qh9adl8a48d20jn67w8sj0yykwcpg90juafxvzssy5kakv",
    "addr1wy4zhtqa8d73sreffgsmsukl67ql6q7aw08h5knuprpq6gght0tlw",
    "addr1w8x02pua2pwyzdgf3uztsztjtw2r6yak8k6wrt44rkuqetgmh84l8",
    "addr1wx5qvr6gd4ummds7mhqfjndun43wmq99sz2nyxvs8d4u6pqvs5h82",
    "addr1wyf9l9jnlmwr459w99cj4w2kzmp82svks8esxuxxrl6yjwc6vf4nh",
    "addr1w9l7jxn8fn7c83fhz63yn7thez0s07xvuux5vt84nwhpleqpcjp5g",
    "addr1wxckawnvd5s0590ap8drznqd8frh24x0g3s5x9jcgapx24s0j4q02",
    "addr1w9ekxe53vw8gzf9sfq47acr06hs9uqsekwkwzwe95tlgnggx60ap5",
    "addr1w8hyrnn7axypdnhxmakfqaqszztt7kzu3n62aanmka963aqnme8k8",
    "addr1w8hra9xff83rqegm3ah8pjsh5cxgm69xnyrtud0q6kk5xws2yljnp",
    "addr1w9fc99cme69krllns5305kxyqxd5x8lp525sr727eymgmaghm2307",
    "addr1w8v6lwk9mwddu3ln3ycd238u450j244rf0frhzh62pegt7q3j9t6h",
    "addr1wyfj87namn6hr5h9vl3dft44t2a9q6spurawe0mncf928pgnlu6k5",
    "addr1w9metcrmc6rv5rxzjpgaj25vkp9zdyjxrmy9fgtrqevvqlcvhz3k5",
    "addr1w9k2dyqmcc43kgx6t4yguq0ehh87nsm2zxmaatp2fswfdqgk73qzh",
    "addr1wyv2pwge09ytgxgsj6ll0f05wx5zp6gra2dcf4p0ryx9c6q5ntnsd",
    "addr1wxdjjjpccfhhl9rqz2jtrym8jj2ys8t5904z2g2a0hl6jzct98xkm",
    "addr1w9jfudpkhlqyjs09zppz9p0pnj6alc57h5mjjesuyphqraqdwu0x3",
    "addr1wyut7dg8ruyhf8pgny9etc5zfrcgv2skkwjt9m3f72f2g2cwrdhtz",
    "addr1w9pf8d2l2v6efqvg43tdct9s53zzapkpwg9kpkp8dmt56mq05xru6",
    "addr1wxyk5zncrgrzlw2ewc845sk9vqd8nwcyvcj0du2000rzuzc7yt93y",
    "addr1wx284wm6nn6nvx98zhsunhwlawu6el36w43zh6zglwvrsrssvtalp",
    "addr1wyydgwyrals0gmdvjwj6g87x3vjatl0u56wldc5t5ch67rsxf2q4e",
    "addr1wyq2u2jzpjnf63y2qhakfxx030yfxkvlp4k93wwyjvh59mc7j3qgf",
    "addr1w8tlqx9qu0d9hnnhlxxj6slsx3n392682r4r5j3j0n4z49s64fjv6",
    "addr1wxat2dzxh47gsfmrh3lf7unm4pfa28wllml268l8cj64dmgju8ukx",
    "addr1w8q3uqutarsfwg6s0wdyllrzdxlumlmqd4ncwcex89wxj9q2w3n98",
    "addr1wxfts2fx5ep5x570d2cumnqpch07j0hjxnrhww3p4y43gksz6q968",
    "addr1wyql6jkag56lpqv8xddgwd4qqrcpy8r57j58d92kpyzc96g0tylfy",
    "addr1wx9gm7dx43nt2428u389xgdp4wl9qnmc7py4y23r5sf8rfq5uwhz8",
    "addr1wxthdkgppsfw32qm95l7f0sep60kf3ez56k9hu9hswg772q9qpv2d",
    "addr1wyczpqrcnhxu4q0uj3wu85vj9vsvuw3r8zd4jx7xylelazct3r44p",
    "addr1wydtjcw4r3emp2qnvn6yv8z63mwkdwvudme0v6dx4l4vqcqtzrzxj",
    "addr1wy6g7w9dsz6lnj9xle6rsvxegjjjm0ededyjvcs6j36xu6crktut6",
    "addr1w8hsy44576nsz5ddd7a0udu0ydkgmhklx480segk3lzsl0gp8au0x",
    "addr1w9tcg0p3v595x5t0cqm6pszky4hurrjqwqerrhf7mwuejuq7depsf",
    "addr1w855updtncc0jw037pyxmn4naht2va43n8g3k6r3mxztetsy78xa8",
    "addr1w8nu35l95097548530ygj6935cgjxx5fkcrzmj37tyhwhcsg0z6kw",
    "addr1w8x9w6f7ta9kg7efsrpthm47782t33h0mv5nrgakkf6kjzsur8npf",
    "addr1w93f028jpzu9c7jj93pj4naxwy2e6ysk0dl4p5ak3h8sz5q5tg80d",
    "addr1wxl88mshkzzxrmeu96fdkkcs3s4us2lc3af7lsy8k4g7rqq5yyjky",
    "addr1w9kxnqhpdfx4s7jpt62tgeq9puw74rz4a08tryp04umunvssxf66p",
    "addr1w9ej99lkc20xpmsvv7t2qtcrwt623w0m8zaruxtwz8v79mcrfyzkd",
    "addr1wxf92maqsyku05auqdvtx4sdns3wzgykxxmrc4mqwgffqdge9ds0m",
    "addr1wx7vu79c8e77w6mljmelrlm3tte9xq5xfydr7jn5chjdfuczf587y",
    "addr1w8e63fkpj9cgaezy74n4rp0pperlum0l6ajljp4pse2kz0gppeakv",
    "addr1wx7ewp7dh3h0wnthp7xv4vmfwwet2s928t7d5de5yw426ncpvccdh",
    "addr1wx0phme5keuakdy2x5q0jrp5unej7p5am0pw78rcn0a49achr4e2x",
    "addr1wydl0nlhgwgzwl6yxvjy4h8s092qdgh6fyup59c08w5hqgcjct8t4",
    "addr1wytey3ru202mdk9226d89z7deefn48ymmftpeka4amfcs8qyw9hu9",
    "addr1wyt2m5xllp6rzreeaj6cfxhr8fwmyn3xec5dyt3qsg6z4ysl5dw3p",
    "addr1w85nwn7rd3hyfcfm5h5tdfyn62sh8nkepmex29hntuwrgssg73nk3",
    "addr1wxp848ndlu3naz9jjjl2zrcxmqx054t33wujy2jl9cw08rcmcaecq",
    "addr1wy7raktf9fexvwgwp07z82ddyryhvv9alexqq2zpqrau8rgqk8xry",
    "addr1wyn8hkajy3anh9gyaln4rr0caaeu0synw4d32y6dnlpfj4qxx63kt",
    "addr1w8pn4a0mqwffz6vm4cywccjd4sm2jyzj3dwehgppcg0ljcqyccjrx",
    "addr1w9f45u7yk2mt6f4r6ep93hmsavaure7dq7gy8fyecpl8ggsgavm94",
    "addr1wxjjcwmmtndg4xl82jjua7v6zfkdrv7pdt6xk0u6mf553qsa6dwka",
    "addr1w8jk0rcgvfsvqlu54gneefd45tyfup8yjraa6xu9437689qak9y6n",
    "addr1wx0yyvm8jq7svmhm5pjrzv258rr5acughguddn0z34r22acg8334n",
    "addr1w8n6g9syskxf2cgpvea0qze4plllwf8vtxequvmr2v2wlusrj2d5e",
    "addr1wxm48p2ag236skp3g4nf3m42wqtpxhd5ddn0pf0y56pvq5gssnzxm",
    "addr1w9yfkrw8xswmr6tt0yhlpaxw3uy3vps6ucjh5t5j42yma6qfzzgxf",
    "addr1wyx75pqln0p6sy63sdfhm40ejejtjp80amv3d6xyvj9n64cqs798n",
    "addr1wx3a8p95dt47qe3eqxu7ewg2ce286kcwm489kkz0s00h63gzecxvy",
    "addr1wyahum86sjuzg63z52snemfx5qqwzcxph408hwqe6aatasgezz7dx",
    "addr1w8tvadszasc0pwe0lzdjle7st22tcq9pm5m80lf38snzm2smrk9c4",
    "addr1w84qdfw2snm3s5yjjryrhd3gnfxn8ewuc0m45k6n96fm9dggq7w5f",
    "addr1wxrpqravr6yaeqtp3clwvq37tpwa3gk2m5vdw5w07ywwj0suyv9ph",
    "addr1w9gc6knhpgem953t22faxyszqshxvrfqqz4tnytcgrhkwwgy4wxtg",
    "addr1w9zjts7scz5xvtqkltrque9lzvpwxqjz8as6jmk0ej9w90qq6m2mf",
    "addr1w8xa74m690uuhey3kaz07d8q0z24l8pdtkc003p4twvvlqcrpvq02",
    "addr1w8j22vw93438h77atgcjdlv2cysw52r0p0ecn7sne4qe36cje5mhe",
    "addr1wyc3ka3enn04x0nm23jaxztvx0e4w357m5z7h59my49sduqznfw5j",
    "addr1w8jrshxc56u7qmh48hrlx2n6pvdy39mprz70qsufheadrnc4t3hfs",
    "addr1w86q8zfuzf73xfawmsfs8sdr9zy7ksjthqzpgrw7srrt2xqf8g6yh",
    "addr1wyt0tfyghw5dqhauwy3gpqdaqed027drq4psn22km0ns9asgr8rts",
    "addr1w93nnt0rcpr72a44c90ytqkgke46w22nx9stkhtvvcqep0spnpdfn",
    "addr1w9cfscja9cunyxal7s2w4328uzly7fxtssl67mvvf28cdss7egh3m",
    "addr1w8pj5nlnk3v89udlcph27jel2xxh049hswfcehq4vgjynkgvlvzzg",
    "addr1wy0usqqcsdcwlayjz4aehvjny38cemnufspwyph9q54l7vg3972mx",
    "addr1w96npn6xzdv928q8903aklf3vqkxw06kupyxdlm7h6sxf5cn7g5sh",
    "addr1w82lfr2arxphqq6y58f9a5p20lagl9hx26q3mdt3cfqlrwsgudh9k",
    "addr1wxh2q36yt7zfujhrr98tyxy74nykmp5rw8mkmx7sphq2meqntsgtt",
    "addr1wx6l6qjekm0presjntv4y88429m7m68hkvhxkl2aek0dh2cy73tvt",
    "addr1wxa2ah0y0j2n2afr0deq9vpgvatupw3gswxmyxw4zxuxksck2r806",
    "addr1wyaqhvgy654e8h6pddac0d8wc54uwqzy7xv8y6pylemserq0ee3ar",
    "addr1w9qzpelu9hn45pefc0xr4ac4kdxeswq7pndul2vuj59u8tqaxdznu",
    "addr1w897ar4svgpd8ex2w7yvcefhrcjyq5pn2fdddqjv5murcmqpvgjj5",
    "addr1wy74sf3y3m2hvrdl25c2rpc9fl2xxq20ve54tfejgtm4yhgvj46ez",
    "addr1w9u2syg3fywm088vgmqvnrm8aw307q530vxvsyfc2mdc4rqj4wumu",
    "addr1w9pxjdk2vpy2s340fnpz6wjaryljp8aw56qdh640jw28vtsmfyssc",
    "addr1w8x5nhfwmfekvelk9qj3s7wn3wrxuerwfwksjn7fz72v7tqydk2l2",
    "addr1w9caeeskhusaxzv77zl4l69w83hfwpxz3tndvtymhvuu8rsvmesgh",
    "addr1w8nny3sdkeamzs75dm5csncjd0dee5em0v24k6jrdw5lsycpgxwum",
    "addr1wxf364jnvjh7shzk2tdv0h0tr4lqnetx0w6lzy3mlua3dcsytgpsn",
    "addr1w9ne4ycqr24dt52ywuxzqylxwhhlxs0jayhdqxyvvvjr2zq5ctcps",
    "addr1w9n8trhwpzq9ygqsvkqzjxh05rxc6hj9am8vg6wpkduqhfghdux7t",
    "addr1wxwlqyn6th3m7zkjqz7edclnsgv7m5zfj8wa6aqst57av2qqw5y97",
    "addr1wxytt4a5lfvyd48ek0utsf7vsfetpfnlgn3z6vn8jz2dneganm8sm",
    "addr1w8wmeurezxpklm48dfdkwww45fx5k78rux06wwwp5h0dyxg3tf86z",
    "addr1wx67pkeqzs3k9nlqnkn00gatchv66uwd9lg9ylheuv0llygwuyr74",
    "addr1w8g6nah0swkt3lqphjw7a8htl4pdfd7m4lgx0te4vgrw8zgnku8nu",
    "addr1wx7dlp0fd2d5x24evnwpkhxmnkmpru7nrlrjamlkp4p8cwsag9x4l",
    "addr1wx35xed82nd9dm5wjslggl2v0rzpz2vk59j23ywej8tyzaszghaxu",
    "addr1w8zfd74drndg03curc58hs9kgk5tzuqacqsu97rqm2x0xpqekcam6",
    "addr1w9pllp82k72vuj47dw53gr8s7s97feg2zxnf7pt6uhsat2sjjlwz3",
    "addr1wyjpk3hqv2kxkcvwfrhnfvn4tsywsxt5sj8pd2cjxl3edrq4gyack",
    "addr1w8xv42pz2t5etedggsadg0xyqk3gapglj9ywpu4w0vqkz2cjkkluj",
    "addr1wxy9qftcv7gxe70wu0ftkwky95mpp3qv3u539p35lt7trzskfl7x2",
    "addr1w9vn06rfap0rduxe6vs5agjhxr6sx4kx0wgqvgqqwcslxvqdftewy",
    "addr1w8q248annrcnwm676u6x6yrdqnhp20h0kzehrq79w80de3skff9rn",
    "addr1w97wxypwewpsqs9hr4ztpjry24tq3cr2r8trzf6zh5n05wqf8jphq",
    "addr1wyz9zg4sxwen778lr94lva2q9dyt2yc44stevfejdludsrgvz9qrz",
    "addr1wy8m9zk2swtx4tq8r6jl58283tj3u4ydvg2s0m7n5s0m5pc877lrt",
    "addr1w9e5e36ly9394z3pe3n28fw8dgpm2f6gy273vk9fmdcswfcurtvym",
    "addr1w94s0p67z04jtd9hpgy4lr6mm7kz8tjmglyyhw6xmna3kgc3x2gjr",
    "addr1w92dj77th2tcuw4pm6p5ak6twengvlpt6rj9sr7ffdcjtmgr272z8",
    "addr1wy6hk05an3kfzzgmuq9ch8m27g4hfw6jefu4pj8jnl846ugzles8q",
    "addr1w80hh5umdj23l8kgfyg0rxq04mxepmc3a29veh4qg3597ks2d0elz",
    "addr1w8mhf28s09q4y2e5u9n24f7y6uchh5p48ceshufrafdrsxqfkwc4v",
    "addr1w8lcrt3ms8pyawrd4q6llpq7q0g07ejhjl5qfmj5wdcdqys9qsceu",
    "addr1wx92w70z74ph8p92gnasgy9zufx2cusa0llvnxsply7n3nqhgwsqj",
    "addr1w9agen6dytm3fsspcwnv5my6h0y74far3ph0394yt9sulrcl27e0s",
    "addr1wy4jf6ta0excxzau822xgvlyasv4z4p7r2zudy07xx4j2uq50mg6r",
    "addr1w96f4syryngwrvswgls3a6xwaewm80xe0sectn6gdgs377gc22hrn",
    "addr1w83m4velwd0malj39snd3pm2sh2h4h6edqj7e2xqm3mklfqdlt730",
    "addr1w90kve3qd4quwu7d5uw7w2pep49tgr66mfs6qcmzcmc9tncfqdny0",
    "addr1w8svk8has6ufxmesk8v999agw4dlqd8jtrmlcw37rw7g5kcpkgwrh",
    "addr1wyj95udrdftx790qc50s09r0rdavkwgdmp3ycrd46j9lv7gyn2s04",
    "addr1wyl0uu0d5zwq90lplmjrl5s0k0gtwn0x5vk7lrw2a9dantcl7xdjy",
    "addr1w8l46h97hsmes59g7he9pk2zuj795849p9yde4eq4l2nnsqfwj9fa",
    "addr1wy5jk60fxx9zsfdzvmr3grwan45t8du6yhu4n7xqj359wjgy88tma",
    "addr1w8dvws4jq0ntkaa6l069k5ddhce7aevcuf9qjns7ahyeehc8cfh4r",
    "addr1w8fdxeehsl2e2th3la45duu6pp8q9p733z2r863xcyak4jc5maadx",
    "addr1w9czd42mlgp262qshc7p4r4tjsqtydwzm7e9nsrclvfaukc2mq8m5",
    "addr1wyup5ykdtg7ca0jjy38tcc5rkp7hsezay5n4u7xwm2asujqmrzlxr",
    "addr1w8c94k77yu9qmnz8suddkd8m9hj4ylwl2uj2cgdvx6509fsgwlmwp",
    "addr1w8hd4r6hkl58c9hhjg8ms7a84qs7txefsd2225y8ys6qdxqzx0jqs",
    "addr1wx0wddytafwql5ud8lc8hzlhq88rmlc054v98gg8xr2e94c9gvxag",
    "addr1w90lre6zkcs8nqg5v9akl5fanz7c5978xfk6rgjjv95pfpgkxcd49",
    "addr1w8rj8kg0rtxnvhhk7sumprksm5s06c2dyhnjsyr6ez8ls6gapkpe5",
    "addr1wxr8eh0a92tnej5sr25r4ry9x43pfu66jswz7tlnr69d0rss3efkt",
    "addr1w9f5yuapfzpq8u4gz8p7302gvvguya0y7fuxwsg8tevfprqyvvt89",
    "addr1w8cyvewphdnnjmpa8ru7tggunywv29g25qk5lng3c7ydcysx80uma",
    "addr1w9wnr85h7kqslmjx84gg220wdmpu4hc5myzdqpy3vuptxkgtzvqy7",
    "addr1w96ecmvz8p3uthyuhjr4geyj2tf84flx7xlxqqhkh77lm3c5ex70t",
    "addr1wx8335u6dpgeua766flum6karafaqc0w5h0uxmn272vhlzc99204r",
    "addr1w8wa2384acfzan7q3nt84j4vq5kxzckshzq7ca3l53wyxvgxy4aud",
    "addr1wxuxmaru4nm48hu08k7dwdwqdxdr90gkqerf5p4xaqvlf2cvudyh7",
    "addr1w83frc4ztfhy539pmr5yunvt5gw7wvgzk6rm6mjx39lrp0sevjl50",
    "addr1w84xqs5mk25l3vlr5kqrl5efz5qerk0y9wjhdw249pk5h3gx06rgh",
    "addr1wyj66cagjkm2yzn2h62ktnaqm6fm0wuwef2y5gmum3lvets4mu5hl",
    "addr1wx34ps6nzrvy4nhr8f57qycvj2yth4ee3f80ta09sxtp8fg6xyg0a",
    "addr1wy22w7rz06szfmdlk5wzv40ehr4zxs03g2tap6ycc6fq27cdfszec",
    "addr1w8k43rfzt7xwztw5cz3ae2qsryn84y6ve78mxx282qd0l4q85vhcd",
    "addr1wxxfhtr0x7gw6ghclp36cmj596uryqkdukhl63vr0c2hnrsxggp9w",
    "addr1wxkd6zyrpp5dtmal56vx4tjy23dutz7d0w3uqws0vps83uq9kj8u5",
    "addr1w9l7x6jp6cpwjkhh70rdl4mmd9vgyaw5zhevtgd4gr6xsxcp3yrfs",
    "addr1w83wnvvu3jnshswdzzmvmkmeek3u2dmc8e4pcq8q33nravgmmyqu9",
    "addr1wyq7zeczjurrqt5puaxfkrjt030aham9qzmvxe77mvm6jcczdekw0",
    "addr1wx247aapx97t8m9qdptr98q4t4jsmnmmjxha6z9memxyrkqpj50qa",
    "addr1wyu0jrlej6vjy0npfllvja20uq43ma06d05ee5s5eldx2jc5s3rc8",
    "addr1w9268zt5lt35pzgtv9s6w3munqz6trmz4vvl58jfxquzamq25nd6f",
    "addr1w8dndfr4zh4m05zzr2aewnrfglwatuqc2dmey2t3vcsxymcxt90vc",
    "addr1wyqza6yx22ehgjdp8j0nx4facc3k863n6d0976lduasyzpcwpaqt9",
    "addr1w95dv8g9cs7df2vusxdkrfy95ry0hujk70aaug2myta4lyqk2xqv6",
    "addr1w8rv6duhrh4hvq4l425pxtgf05sh8pyxmnwh39zl3ce77nqflkw0c",
    "addr1wxf9hgpcadg0kh8a2p4mwe6ffs4taq48se3d3m797mghw0cmp9h9s",
    "addr1wy7tppuafddtyqq2jcfcerxyphhqqv463j3l3mmdq9fsfhg57hepu",
    "addr1wye8tgeh2vcysyls6kdlfjunqjz88ml7su0neplnn9eua6q3v3yqn",
    "addr1wy63v29x7zxmr3xuj8mlnuaqqm0cyw8pnz54gmvvl20r6mcwntcn5",
    "addr1wyznghqsgerrevnye4zc8y3tlefvrv7kywqtwdmtaz7q44cqckh07",
    "addr1w9autsh8ng736f040z0spyc4wxps4s7qqny7g4fex0jdh4spwhq4y",
    "addr1wyyc47tnt9gr32ruf4yat54scqkr9z4la32h4fzglmnxyfs44vv8f",
    "addr1wylhph7r2hs64xxwch3fr8z45eu736xlcphr2eu336005lcc7xxvd",
    "addr1w8tcnuqtye5qy4cqz0ryffcrkku5gzy2la4dm2qql652j2gxhy6lp",
    "addr1wyfe4036js332c680fnkgdpfrf0l4tlzxcqatzjaw2fdvjgekhskz",
    "addr1w8s7xwamw62yhmkd9y50jml439gcu3gyvmm0xu9t52mhj6q8qhg4v",
    "addr1wycygdq6vdsuzpajwq5d5r5cus2tl9d86gclep24xv4hw2qwjn8gc",
    "addr1w9pfx99uwkhudgu465rtguhgmx3qet9hlt8nffc72y0ge3gvdlrxh",
    "addr1w8tx4337gaflphvkj9f92vyldvh4r2cxeah4kehp9x3cd7g7j3ud9",
    "addr1wxwlcxsmjnvzk985qn6c4ldmejgayyfmnh3hz5es92gp7wsg8crhm",
    "addr1w8cjz2lp6rpmwfv7538kt6fxyr7pevlcd7yzkgwxgd3ezeqh6y5hz",
    "addr1wxna8ywszp0qdk2d9fguadf57g2nzyvujhu9pca8xaxjwvgtt229j",
    "addr1w805wvm24mp7c3w32tsuv3c4cj7fmrwy4qnv5xfv8jzkvzgrqs99q",
    "addr1wyswu2y3djdu7yp8se8hh78dkkw0w86q33dteedrhkzqzlqdk8gus",
    "addr1wxgh2qn6jta65zl2t8cphn3hgn4ynwtlrwxeezjj40hfn0sljswym",
    "addr1w8enlvtjegjrgrglk4gwshrkcsfycynq049ff8avthfx87gzkysqr",
    "addr1w8gtp4g5vg7j65avzwpunsd4h46l0nwg2e0z2eunmv8ysugdfzgxa",
    "addr1w9h2aauf4rx0kqckyg3sumg02ly089rkx0625ts677eg0lqc9qs8c",
    "addr1wx0z5qu4a03vxgr58j2kkfpwh9snqv93xgy05l6zaz98yesv4kpn4",
    "addr1w8x39p86h2lf7kje335u7xgqxdxcmydr6h4fy5p328h7cwgac7t4w",
    "addr1w8nmnk4p02ws7qqx5c82l5qnwgst4kyfxu7883andgsvrhg53dvuf",
    "addr1w9jcwfrjfhvja9eddf66nag405tnffucw92l6dtc2kdu8dsx4r8ta",
    "addr1wywzqekps2tqucwqgu0e7jndxqp4yqjrp3p7ltc2jpx864qjjtjsx",
    "addr1wx8pummvqq340ssawjjmp4de6pyy3mp3re6rw8pwtc8y7rc904q2x",
    "addr1wycyc8q5n77es0cdcmet6drethuh086cu0al4jx7rnhvw3gxpp4z5",
    "addr1w87axvz9flnpsldel2r3pf08gx0057e8hk3y0pdvtnw9nxqkpks7s",
    "addr1wy2u63vtc0vfgvwts5353x3njpyg93xvpthjntue67unznc6wjnnw",
    "addr1wx4z7663tpjz50g3qlxekdshalf3rwrawc9s6pwnxa5leacjh3w83",
    "addr1w8unrw0wru39hx45rcgelgw6xq8ffkqlctjg0zfk34pmx8q6kayuw",
    "addr1wynwxxxhcgtzd6txnutdmas5pqz6hlf0e3srhk9saajpahskjyfac",
    "addr1wyjplmj9tty0vtqj99z8zvl3jv6ljtxl6z4ujzt97n8kfrcaxxvhl",
    "addr1w8nqajs6m926lxykg6q948kmn59h4yxrhg2j0hulv6yyg6q0eqqks",
    "addr1wysrdlq07ac80hpe9440a7rpma7rqsendhvg3kfzxpmqwps77aaf0",
    "addr1w9dp6ergqu55l0rc3sveqc7g8grzcgveg42uqleaqf5wd3qaragfg",
    "addr1w9hk7nfnr0xg5nuxayvyp5wfe2h69h4nk4gsrz6x82e73lcjpjvz2",
    "addr1w8nk7ejh2f8rhrz2nl4dpujpzqzyjr64kf4nqyxrtmmnzeqn796hr",
    "addr1w8ga39l2ugfyqrn55m4s36hd3wj0vfx6xjvaq3hljt5xtgs2tzc8h",
    "addr1w8q6nj7v6uyscfesknn357663jr4762r0nau3jutel6j8jq0qgz5d",
    "addr1w9tv2fzr2j5qlg99g9rwkzh0ta2k0vx4vc2shmespy5jzwgkr4qem",
    "addr1w9zxsj337sr0njx5ejavk53jrwj5haq437ddrj0rjkayu4cwuqepl",
    "addr1w9gcecv8d8pjnc58f0623mxz6xdz3skektp64d7keqhv2pgetd5tn",
    "addr1wxmw2cpalaujm3kh2qxn5wvahl33ha9qa6au77apaepla4q36wcen",
    "addr1w8gc3um4hrryq8tlum9ktqfxw0culq2czjdmlknwe9nwntgut03dw",
    "addr1wydq82pt7hkt89umf250s6nd3un2kdgpmd9cf5jd8n54kqglgz0yy",
    "addr1wxl7kur6rakfmc3qxepns89nzq0xl5gg5keclemglpa3swgwgx686",
    "addr1w8h2ljjkeckycfpeyeaw34vtcpdcs2sz3a05rp7wxxc9gzsz20htp",
    "addr1wxr32fnsfck0x7scue3pvqtrhqjymr80ljy2sqx6s0f7mkck4p6xv",
    "addr1wycesam6cwck54ds7s0syppgeleeqlrz2td0f54dqjjv98g8j9ldl",
    "addr1wxu0uqjrepm6gkd99nefacee4xnn8q2xzfvnqruzkj9kv3qmxvn0v",
    "addr1w95h4q5xgj9a5j5avm267h5kv5lr2fymyfjulweef9me0kqqqehry",
    "addr1wy30a65jd6njyxkhelx39gznal7s0vmw8kuudn64ncpv5ecujwdm0",
    "addr1wyfj3gdwlm8y9ehwqmanw3std2h4dv8cagsz43vv2c3vgkqq9mdxq",
    "addr1wx86hxu6gwcszt3t8cufu9mhmvxveqk6zd5umszh790qngcwe0m3u",
    "addr1w8g08zfj60t5k36cgypf06lj88qs8jkltxctpf4m03efuls4rdxmx",
    "addr1wx7k475ahwrjazt7ce97l4tns92p637drjy2r04vgvphqtcqlrkuc",
    "addr1w9z4ggn2wdgugaykmlsnstljkp3ctndc869376374uf6dwshpsd40",
    "addr1wxxvzgtacznlq9pc3uz2zqmzlpgnt0hpd04e4kw4pk8j4gsfc5dh2",
    "addr1wy27pfclspxjhym2442uruqtrf4g55vl9ppywskcuerr65gw2l44e",
    "addr1wyrkpl5yywe97cwpkyvylc6na92zlmarkwra8kzgyjlegrgdjwmnv",
    "addr1w9zc2yd4wstmth04txv5nmksz742rvy2wyd63mhemj2ajqge9m3nq",
    "addr1w8tms5r2xpxc82r0fe0tznk2ycfdwaznth2lecw6jyc3gjgr27chw",
    "addr1w8sy2wjpwj3wf8um2228qejumd5aug52w4u5yzhn7x3arrquu6v4r",
    "addr1w82ckqvvwwv35lwv3m6mjvszyqdl47y3zj0ghhn3a8tgw2shdupxj",
    "addr1wyt4pp6t7c3hnkkvmrlqwdr2vr3zk6xaekmunnguyvt3n3gp3k492",
    "addr1wy835tdgjtfpaxamrua8en3fttukdr2alv3nnzfyzaunnggsu5q6u",
    "addr1w8mwltj87z3tnc2hr5995atu4apqng4g90zyhh0rgm0cf4qjp63mk",
    "addr1wyvdjj8z06p0ud3z0n8j06xuglnvsu6urjzr8u4lg523lds8pf3pd",
    "addr1w8zwxr39wwzrksgha6xsrv8z6w595zrq02ndp9naj7cw5gs40g3m2",
    "addr1w9h52hu8rk336pe7dgx7548gm4y3d9zwhngwjlslkce9wgsehfl6s",
  ];

  const promises = [];
  for (let i = 0; i < lockedRawAddresses.length; i += 25) {
    const addresses = lockedRawAddresses.slice(i, i + 25);
    promises.push(getAmountInAddresses(blockFrost, AXO, addresses));
  }

  const results = await Promise.all(promises);
  const lockedRaw = results.reduce((a, b) => a + b, BigInt(0));

  const locked = Number(lockedRaw) / 1_000_000_000;
  const treasury = Number(treasuryRaw) / 1_000_000_000;
  return {
    circulating: (total - treasury - locked).toString(),
    total: total.toString(),
  };
};

export default fetcher;
