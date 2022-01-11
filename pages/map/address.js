import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = { width: '1280px', height: '800px' }

const center = { lat: 36.2048, lng: 138.2529 }

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const markers = homes.map((home) => (
    <Marker
      title={home.title}
      position={{
        lat: home.location.latitude,
        lng: home.location.longitude
      }}
    ></Marker>
  ))

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)

const homes = [
  {
    id: '272',
    urlPath: '/homes/272',
    title: '松本A邸',
    prefecture: '長野県',
    description: 'DIYの大きなテーブルを囲んで交流を楽しむ家',
    isNew: true,
    name: 'リバ邸まつもと',
    tag: '提携',
    address: '〒3990033 長野県松本市笹賀7068-1',
    location: {
      url: 'https://maps.google.com/?q=36.16728548,137.94368245',
      latitude: 36.16728548,
      longitude: 137.94368245
    }
  },
  {
    id: '271',
    urlPath: '/homes/271',
    title: 'いすみB邸',
    prefecture: '千葉県',
    description: '広々個室でのんびり過ごす、猫がいる癒しの家',
    isNew: true,
    name: '',
    tag: '',
    address: '〒2994615 千葉県いすみ市岬町井沢29-3',
    location: {
      url: 'https://maps.google.com/?q=35.29961931,140.38139559',
      latitude: 35.29961931,
      longitude: 140.38139559
    }
  },
  {
    id: '270',
    urlPath: '/homes/270',
    title: '長崎A邸',
    prefecture: '長崎県',
    description: '築130年の伝統文化財ステイ！歴史文化を堪能できる家',
    isNew: true,
    name: '',
    tag: '提携',
    address: '〒8500911 長崎県長崎市東山手町3-36 長崎居留地12A',
    location: {
      url: 'https://maps.google.com/?q=32.73804125,129.8733208',
      latitude: 32.73804125,
      longitude: 129.8733208
    }
  },
  {
    id: '269',
    urlPath: '/homes/269',
    title: '京都西陣C邸',
    prefecture: '京都府',
    description: 'おばあちゃん家のようなゲストハウス連携の家',
    isNew: true,
    name: '京都ゲストハウス木音',
    tag: '提携',
    address: '〒6028319 京都府京都市上京区溝前町100',
    location: {
      url: 'https://maps.google.com/?q=35.03095354,135.74054178',
      latitude: 35.03095354,
      longitude: 135.74054178
    }
  },
  {
    id: '268',
    urlPath: '/homes/268',
    title: '京都聖護院B邸',
    prefecture: '京都府',
    description: 'いつかにタイムスリップしたようなノスタルジックな家',
    isNew: true,
    name: 'ゲストハウス和楽庵',
    tag: '提携',
    address: '〒6068392 京都府京都市左京区聖護院山王町19-2',
    location: {
      url: 'https://maps.google.com/?q=35.01751448,135.77944738',
      latitude: 35.01751448,
      longitude: 135.77944738
    }
  },
  {
    id: '267',
    urlPath: '/homes/267',
    title: '阿久根A邸',
    prefecture: '鹿児島県',
    description: '豊な自然と美味しい魚介がある街のゲストハウス連携の家',
    isNew: true,
    name: 'イワシビル',
    tag: '提携',
    address: '〒8991626 鹿児島県阿久根市鶴見町76',
    location: {
      url: 'https://maps.google.com/?q=32.01403634,130.19729887',
      latitude: 32.01403634,
      longitude: 130.19729887
    }
  },
  {
    id: '264',
    urlPath: '/homes/264',
    title: '新大阪A邸',
    prefecture: '大阪府',
    description: '都会と下町を同時に味わう和モダンハウス',
    isNew: true,
    name: '',
    tag: '',
    address: '〒5320003 大阪府大阪市淀川区宮原1丁目19-34',
    location: {
      url: 'https://maps.google.com/?q=34.73734809,135.49943518',
      latitude: 34.73734809,
      longitude: 135.49943518
    }
  },
  {
    id: '265',
    urlPath: '/homes/265',
    title: '椎名町A邸',
    prefecture: '東京都',
    description: '築50年の民家をセルフリノベした木の温もりが感じられる家',
    isNew: true,
    name: '',
    tag: '提携',
    address: '〒1710052 東京都豊島区南長崎2-22-16',
    location: {
      url: 'https://maps.google.com/?q=35.72684015,139.69015172',
      latitude: 35.72684015,
      longitude: 139.69015172
    }
  },
  {
    id: '262',
    urlPath: '/homes/262',
    title: '遠野A邸',
    prefecture: '岩手県',
    description: '銀河鉄道のSL列車を眺めながら、川のせせらぎに癒される家',
    isNew: true,
    name: '',
    tag: '',
    address: '〒0280304 岩手県遠野市宮守町下宮守26地割203-14',
    location: {
      url: 'https://maps.google.com/?q=39.3506044,141.34858156',
      latitude: 39.3506044,
      longitude: 141.34858156
    }
  },
  {
    id: '261',
    urlPath: '/homes/261',
    title: '榛東A邸',
    prefecture: '群馬県',
    description: '多目的スタジオを併設！地域巡りの拠点としても最適な家',
    isNew: true,
    name: '月兎園',
    tag: '提携',
    address: '〒3703502 群馬県北群馬郡榛東村山子田2089-1',
    location: {
      url: 'https://maps.google.com/?q=36.44728198,138.96430457',
      latitude: 36.44728198,
      longitude: 138.96430457
    }
  },
  {
    id: '260',
    urlPath: '/homes/260',
    title: '白老A邸',
    prefecture: '北海道',
    description:
      '老舗旅館を元にリノベーション、地域に根付いた暮らしを味わえる家',
    isNew: true,
    name: 'haku hostel + cafe bar',
    tag: '提携',
    address: '〒0590905 北海道白老郡白老町大町3-1-7',
    location: {
      url: 'https://maps.google.com/?q=42.55259463,141.35802183',
      latitude: 42.55259463,
      longitude: 141.35802183
    }
  },
  {
    id: '257',
    urlPath: '/homes/257',
    title: '久我山A邸',
    prefecture: '東京都',
    description: 'モダンで落ち着いた雰囲気の広々リビングでゆったり過ごす家',
    isNew: true,
    name: '',
    tag: '',
    address: '〒1680082 東京都杉並区久我山4-42-29',
    location: {
      url: 'https://maps.google.com/?q=35.69219755,139.59696892',
      latitude: 35.69219755,
      longitude: 139.59696892
    }
  },
  {
    id: '259',
    urlPath: '/homes/259',
    title: '金沢D邸',
    prefecture: '石川県',
    description: '歴史と現代美術の融合の街で過ごす、リノベーション古民家',
    isNew: true,
    name: '',
    tag: '提携',
    address: '〒9200994 石川県金沢市茨木町29-7',
    location: {
      url: 'https://maps.google.com/?q=36.55903531,136.65721658',
      latitude: 36.55903531,
      longitude: 136.65721658
    }
  },
  {
    id: '258',
    urlPath: '/homes/258',
    title: '西神A邸',
    prefecture: '兵庫県',
    description: '杉と漆喰でこだわった温かみのある家',
    isNew: true,
    name: '',
    tag: '',
    address: '〒6512277 兵庫県神戸市西区美賀多台5-8-11',
    location: {
      url: 'https://maps.google.com/?q=34.72024469,135.00387855',
      latitude: 34.72024469,
      longitude: 135.00387855
    }
  },
  {
    id: '254',
    urlPath: '/homes/254',
    title: '桜島A邸',
    prefecture: '鹿児島県',
    description: '島と街をフェリーで繋ぐ！活火山との暮らしを楽しむ家',
    isNew: true,
    name: '',
    tag: '',
    address: '〒8911420 鹿児島県鹿児島市桜島赤水町944',
    location: {
      url: 'https://maps.google.com/?q=31.57485199,130.61077814',
      latitude: 31.57485199,
      longitude: 130.61077814
    }
  },
  {
    id: '253',
    urlPath: '/homes/253',
    title: '小伝馬町A邸',
    prefecture: '東京都',
    description: '日本橋エリアで、様々な価値観に触れることが出来る家',
    isNew: false,
    name: 'hostel DEN',
    tag: '提携',
    address: '〒1030023 東京都中央区日本橋本町4-13-8',
    location: {
      url: 'https://maps.google.com/?q=35.69108537,139.77669387',
      latitude: 35.69108537,
      longitude: 139.77669387
    }
  },
  {
    id: '250',
    urlPath: '/homes/250',
    title: '甲府B邸',
    prefecture: '山梨県',
    description: '山梨の中心繁華街で音楽と過ごすADDressの家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4000032 山梨県甲府市中央4丁目3-21',
    location: {
      url: 'https://maps.google.com/?q=35.660705,138.57134',
      latitude: 35.660705,
      longitude: 138.57134
    }
  },
  {
    id: '251',
    urlPath: '/homes/251',
    title: '岐阜A邸',
    prefecture: '岐阜県',
    description: '周辺アクセスが抜群。穏やかな地域でシェアハウス暮らしを',
    isNew: false,
    name: 'sharehouse180°岐阜',
    tag: '提携',
    address: '〒5008866 岐阜県岐阜市寺島町3-5-1',
    location: {
      url: 'https://maps.google.com/?q=35.41335432,136.74960179',
      latitude: 35.41335432,
      longitude: 136.74960179
    }
  },
  {
    id: '240',
    urlPath: '/homes/240',
    title: '沖縄那覇C邸',
    prefecture: '沖縄県',
    description: '国際通り徒歩圏内の好立地にあるアパートメントタイプの家',
    isNew: false,
    name: 'シャトーティーダ那覇',
    tag: '提携',
    address: '〒9020067 沖縄県沖縄県那覇市安里3丁目',
    location: {
      url: 'https://maps.google.com/?q=26.22028536,127.69554206',
      latitude: 26.22028536,
      longitude: 127.69554206
    }
  },
  {
    id: '249',
    urlPath: '/homes/249',
    title: '永平寺町A邸',
    prefecture: '福井県',
    description: 'ミシュラン2つ星の「大本山永平寺」近くにあるオール電化の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒9101138 福井県吉田郡永平寺町松岡松ケ原4丁目801',
    location: {
      url: 'https://maps.google.com/?q=36.0934135,136.2879327',
      latitude: 36.0934135,
      longitude: 136.2879327
    }
  },
  {
    id: '248',
    urlPath: '/homes/248',
    title: '葉山A邸',
    prefecture: '神奈川県',
    description: '江ノ島を遠望できるマリンリゾートな葉山の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2400111 神奈川県三浦郡葉山町一色569-8',
    location: {
      url: 'https://maps.google.com/?q=35.26864168,139.59089209',
      latitude: 35.26864168,
      longitude: 139.59089209
    }
  },
  {
    id: '247',
    urlPath: '/homes/247',
    title: '横須賀中央A邸',
    prefecture: '神奈川県',
    description: '軍艦が有名な日米の雰囲気が融合した街並みを楽しめる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2380017 神奈川県横須賀市上町4-32',
    location: {
      url: 'https://maps.google.com/?q=35.27239049,139.66552236',
      latitude: 35.27239049,
      longitude: 139.66552236
    }
  },
  {
    id: '245',
    urlPath: '/homes/245',
    title: '錦糸町A邸',
    prefecture: '東京都',
    description: 'アクセス良好で運河に囲まれた自然豊かな住宅街にある家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1350002 東京都江東区住吉2-16-11',
    location: {
      url: 'https://maps.google.com/?q=35.68990083,139.81520184',
      latitude: 35.68990083,
      longitude: 139.81520184
    }
  },
  {
    id: '244',
    urlPath: '/homes/244',
    title: '熊野B邸',
    prefecture: '和歌山県',
    description: '山川に囲まれた桃源郷の様な近露エリアで大自然を楽しめる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒6461402 和歌山県田辺市中辺路町近露419-1',
    location: {
      url: 'https://maps.google.com/?q=33.81808751,135.60729834',
      latitude: 33.81808751,
      longitude: 135.60729834
    }
  },
  {
    id: '242',
    urlPath: '/homes/242',
    title: '大和西大寺A邸',
    prefecture: '奈良県',
    description: '広々としたキッチンで料理を楽しめる巣ごもり向けな家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒6310837 奈良県奈良市若葉台4丁目4ー17',
    location: {
      url: 'https://maps.google.com/?q=34.69018265,135.77211875',
      latitude: 34.69018265,
      longitude: 135.77211875
    }
  },
  {
    id: '243',
    urlPath: '/homes/243',
    title: '郡上明宝A邸',
    prefecture: '岐阜県',
    description: '山と川に囲まれた自然の中で開放的な別荘ライフを味わえる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒5014303 岐阜県岐阜県郡上市 明宝気良252-6',
    location: {
      url: 'https://maps.google.com/?q=35.85961422,137.02835971',
      latitude: 35.85961422,
      longitude: 137.02835971
    }
  },
  {
    id: '241',
    urlPath: '/homes/241',
    title: '伊豆大島A邸',
    prefecture: '東京都',
    description: '温暖な気候に恵まれていて、豊かな自然を満喫できる離島の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1000212 東京都大島町波浮港17番地',
    location: {
      url: 'https://maps.google.com/?q=34.6936032,139.44464984',
      latitude: 34.6936032,
      longitude: 139.44464984
    }
  },
  {
    id: '239',
    urlPath: '/homes/239',
    title: '都農A邸',
    prefecture: '宮崎県',
    description: '自然豊かな小さな町で、都農ならではの生活や日常を',
    isNew: false,
    name: 'まちづくりHOSTEL ALA',
    tag: '提携',
    address: '〒8891201 宮崎県児湯郡都農町川北3539-7',
    location: {
      url: 'https://maps.google.com/?q=32.2488718,131.56523507',
      latitude: 32.2488718,
      longitude: 131.56523507
    }
  },
  {
    id: '238',
    urlPath: '/homes/238',
    title: '釜石B邸',
    prefecture: '岩手県',
    description: '四方が山に囲まれた大自然を感じながらゆったり過ごせる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒0260001 岩手県岩手県釜石市平田第二池割',
    location: {
      url: 'https://maps.google.com/?q=39.24528031,141.86970863',
      latitude: 39.24528031,
      longitude: 141.86970863
    }
  },
  {
    id: '206',
    urlPath: '/homes/206',
    title: '篠崎A邸',
    prefecture: '東京都',
    description: '江戸川が流れる静かな住宅街でどこか懐かしさを感じる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1330061 東京都江戸川区篠崎町6-22-2',
    location: {
      url: 'https://maps.google.com/?q=35.70229178,139.90528157',
      latitude: 35.70229178,
      longitude: 139.90528157
    }
  },
  {
    id: '237',
    urlPath: '/homes/237',
    title: '名古屋E邸',
    prefecture: '愛知県',
    description: 'コワーキングスペース併設。大型シェアハウスに住まう',
    isNew: false,
    name: '金山東Multiple Share180°',
    tag: '提携',
    address: '〒4660059 愛知県名古屋市昭和区福江2丁目1-29',
    location: {
      url: 'https://maps.google.com/?q=35.14459727,136.91176057',
      latitude: 35.14459727,
      longitude: 136.91176057
    }
  },
  {
    id: '236',
    urlPath: '/homes/236',
    title: '名古屋D邸',
    prefecture: '愛知県',
    description: '元旅館を改装した、昭和の下町のような雰囲気を味わえる家',
    isNew: false,
    name: '',
    tag: '',
    address:
      '〒4530821 愛知県名古屋市中村区大宮町１丁目８−１アゲハアパートメント大宮',
    location: {
      url: 'https://maps.google.com/?q=35.16743772,136.86536538',
      latitude: 35.16743772,
      longitude: 136.86536538
    }
  },
  {
    id: '235',
    urlPath: '/homes/235',
    title: '対馬A邸',
    prefecture: '長崎県',
    description: '海まで徒歩3分！どこからでもオーシャンビューを楽しめる家',
    isNew: false,
    name: '民泊ゆづり葉',
    tag: '提携',
    address: '〒8170326 長崎県対馬市美津島町根緒9-8',
    location: {
      url: 'https://maps.google.com/?q=34.24741761,129.31663521',
      latitude: 34.24741761,
      longitude: 129.31663521
    }
  },
  {
    id: '229',
    urlPath: '/homes/229',
    title: '佐倉A邸',
    prefecture: '千葉県',
    description: '成田空港まで最短18分！歴史や文化を堪能できる施設提携の家',
    isNew: false,
    name: 'おもてなしラボ',
    tag: '提携',
    address: '〒2850023 千葉県佐倉市新町168',
    location: {
      url: 'https://maps.google.com/?q=35.71951943,140.23304641',
      latitude: 35.71951943,
      longitude: 140.23304641
    }
  },
  {
    id: '234',
    urlPath: '/homes/234',
    title: '沖縄本部B邸',
    prefecture: '沖縄県',
    description: '数々の人気スポットが徒歩圏内に位置する沖縄本島北部の家',
    isNew: false,
    name: 'ゆくりなリゾート沖縄　海風',
    tag: '提携',
    address: '〒9050206 沖縄県国頭郡本部町石川799-2',
    location: {
      url: 'https://maps.google.com/?q=26.69247437,127.88214778',
      latitude: 26.69247437,
      longitude: 127.88214778
    }
  },
  {
    id: '233',
    urlPath: '/homes/233',
    title: '信濃大町A邸',
    prefecture: '長野県',
    description: '信州北アルプスの自然と歴史ある町並みを同時に堪能できる家',
    isNew: false,
    name: '林屋旅館',
    tag: '提携',
    address: '〒3980002 長野県大町市大町3314-5',
    location: {
      url: 'https://maps.google.com/?q=36.50221553,137.85973015',
      latitude: 36.50221553,
      longitude: 137.85973015
    }
  },
  {
    id: '232',
    urlPath: '/homes/232',
    title: '音戸A邸',
    prefecture: '広島県',
    description: '瀬戸内でゆっくりした時間を過ごせる築100年の連携の家',
    isNew: false,
    name: 'モダン古民家宿　音戸イロリバHOUSE',
    tag: '提携',
    address: '〒7371201 広島県呉市音戸町坪井1-2-18',
    location: {
      url: 'https://maps.google.com/?q=34.19691289,132.53649882',
      latitude: 34.19691289,
      longitude: 132.53649882
    }
  },
  {
    id: '231',
    urlPath: '/homes/231',
    title: '京都岡崎A邸',
    prefecture: '京都府',
    description: '岡崎エリアで心落ち着く生活ができるゲストハウス連携の家',
    isNew: false,
    name: 'Ya▲Do! KYOTO OKAZAKI',
    tag: '提携',
    address: '〒6068355 京都府京都市左京区新東洞院町249-1',
    location: {
      url: 'https://maps.google.com/?q=35.01352751,135.77546135',
      latitude: 35.01352751,
      longitude: 135.77546135
    }
  },
  {
    id: '230',
    urlPath: '/homes/230',
    title: '五島B邸',
    prefecture: '長崎県',
    description: '五島列島福江島にある地域密着レンタルスペースとの連携の家',
    isNew: false,
    name: 'knit.',
    tag: '提携',
    address: '〒8530002 長崎県五島市中央町6-35',
    location: {
      url: 'https://maps.google.com/?q=32.69506943,128.84373543',
      latitude: 32.69506943,
      longitude: 128.84373543
    }
  },
  {
    id: '228',
    urlPath: '/homes/228',
    title: 'さぬきA邸',
    prefecture: '香川県',
    description: '瀬戸内の穏やかな時間と海の幸を堪能する',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7692101 香川県さぬき市志度796-3',
    location: {
      url: 'https://maps.google.com/?q=34.32347436,134.17624523',
      latitude: 34.32347436,
      longitude: 134.17624523
    }
  },
  {
    id: '227',
    urlPath: '/homes/227',
    title: '韮崎A邸',
    prefecture: '山梨県',
    description: '山梨巡りの拠点にピッタリ！商店街に位置する施設提携の家',
    isNew: false,
    name: 'chAho Hostel Nirasaki / Outdoor Base',
    tag: '提携',
    address: '〒4070023 山梨県韮崎市中央町10-22',
    location: {
      url: 'https://maps.google.com/?q=35.70950516,138.4500841',
      latitude: 35.70950516,
      longitude: 138.4500841
    }
  },
  {
    id: '226',
    urlPath: '/homes/226',
    title: '甲府A邸',
    prefecture: '山梨県',
    description: '様々な活動目的の拠点に！甲府の老舗ゲストハウス連携の家',
    isNew: false,
    name: 'BACCHUS KOFU GUESTHOUSE',
    tag: '提携',
    address: '〒4000031 山梨県甲府市丸の内3−33−12',
    location: {
      url: 'https://maps.google.com/?q=35.65886042,138.5665334',
      latitude: 35.65886042,
      longitude: 138.5665334
    }
  },
  {
    id: '223',
    urlPath: '/homes/223',
    title: '飯綱A邸',
    prefecture: '長野県',
    description:
      '自然と人の温かさを感じる暮らしを体感。赤瓦屋根が特徴の旅館連携の家',
    isNew: false,
    name: '丸為旅館',
    tag: '提携',
    address: '〒3891211 長野県上水内郡飯綱町牟礼509-3',
    location: {
      url: 'https://maps.google.com/?q=36.75279907,138.24625866',
      latitude: 36.75279907,
      longitude: 138.24625866
    }
  },
  {
    id: '225',
    urlPath: '/homes/225',
    title: '種子島A邸',
    prefecture: '鹿児島県',
    description: '種子島の中央からチャレンジを応援するゲストハウス連携の家',
    isNew: false,
    name: 'チャレンジ拠点YOKANA',
    tag: '提携',
    address: '〒8913604 鹿児島県熊毛郡中種子町野間5184-25',
    location: {
      url: 'https://maps.google.com/?q=30.53431172,130.95955753',
      latitude: 30.53431172,
      longitude: 130.95955753
    }
  },
  {
    id: '224',
    urlPath: '/homes/224',
    title: '小田原C邸',
    prefecture: '神奈川県',
    description: '海、山どちらも堪能できる、女性でも安心の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2560804 神奈川県小田原市羽根尾435-3',
    location: {
      url: 'https://maps.google.com/?q=35.29309533,139.2327791',
      latitude: 35.29309533,
      longitude: 139.2327791
    }
  },
  {
    id: '214',
    urlPath: '/homes/214',
    title: '氷見B邸',
    prefecture: '富山県',
    description: '海と山に囲まれた港町で昔ながらの雰囲気を味わえる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒9350015 富山県氷見市伊勢大町1-6-8',
    location: {
      url: 'https://maps.google.com/?q=36.85065303,136.98890521',
      latitude: 36.85065303,
      longitude: 136.98890521
    }
  },
  {
    id: '222',
    urlPath: '/homes/222',
    title: '箱根芦ノ湖A邸',
    prefecture: '神奈川県',
    description: '芦ノ湖の高台に位置する森の中の家',
    isNew: false,
    name: 'クリンゲルバウム',
    tag: '提携',
    address: '〒2500522 神奈川県足柄下郡箱根町元箱根160-114',
    location: {
      url: 'https://maps.google.com/?q=35.241467,139.001154',
      latitude: 35.241467,
      longitude: 139.001154
    }
  },
  {
    id: '217',
    urlPath: '/homes/217',
    title: '美馬B邸',
    prefecture: '徳島県',
    description: '印刷工場に泊まれるゲストハウス連携の家',
    isNew: false,
    name: 'ADLIVE',
    tag: '提携',
    address: '〒7793602 徳島県美馬市脇町猪尻字若宮南131-2',
    location: {
      url: 'https://maps.google.com/?q=34.0634166,134.15945457',
      latitude: 34.0634166,
      longitude: 134.15945457
    }
  },
  {
    id: '219',
    urlPath: '/homes/219',
    title: '福岡B邸',
    prefecture: '福岡県',
    description: '福岡にあるアクセス抜群！居心地の良いゲストハウス連携の家',
    isNew: false,
    name: 'Fukuoka Guesthouse HIVE',
    tag: '提携',
    address: '〒8120036 福岡県福岡市博多区上呉服町4-3',
    location: {
      url: 'https://maps.google.com/?q=33.59777032,130.41172052',
      latitude: 33.59777032,
      longitude: 130.41172052
    }
  },
  {
    id: '220',
    urlPath: '/homes/220',
    title: '福岡C邸',
    prefecture: '福岡県',
    description: '溢れ出る安心感。築100年をリノベーションした家',
    isNew: false,
    name: 'Fukuoka Guesthouse SHIP',
    tag: '提携',
    address: '〒8120033 福岡県福岡市博多区大博町8-26',
    location: {
      url: 'https://maps.google.com/?q=33.6032161,130.40638736',
      latitude: 33.6032161,
      longitude: 130.40638736
    }
  },
  {
    id: '221',
    urlPath: '/homes/221',
    title: '稲敷A邸',
    prefecture: '茨城県',
    description: '田んぼに囲まれた地で田舎ならではの空気感を味わえる家',
    isNew: false,
    name: 'INASHIKI NEST',
    tag: '提携',
    address: '〒3000623 茨城県稲敷市四箇1480INASHIKI NEST',
    location: {
      url: 'https://maps.google.com/?q=35.96095373,140.38882314',
      latitude: 35.96095373,
      longitude: 140.38882314
    }
  },
  {
    id: '216',
    urlPath: '/homes/216',
    title: '須賀川A邸',
    prefecture: '福島県',
    description: '四季折々の行事を通じて伝統文化を感じられる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒9620832 福島県須賀川市本町87-2',
    location: {
      url: 'https://maps.google.com/?q=33.59036531,130.37995809',
      latitude: 33.59036531,
      longitude: 130.37995809
    }
  },
  {
    id: '218',
    urlPath: '/homes/218',
    title: '沼津A邸',
    prefecture: '静岡県',
    description: '日本一高い富士山と、日本一深い駿河湾の両方を楽しめる家',
    isNew: false,
    name: '',
    tag: '提携',
    address: '〒4100895 静岡県沼津市新町4',
    location: {
      url: 'https://maps.google.com/?q=35.09407618,138.85670374',
      latitude: 35.09407618,
      longitude: 138.85670374
    }
  },
  {
    id: '213',
    urlPath: '/homes/213',
    title: '八女B邸',
    prefecture: '福岡県',
    description: '何もない贅沢を味わえる！地域活性化のシンボルと連携した家',
    isNew: false,
    name: '天空の茶屋敷',
    tag: '提携',
    address: '〒8341222 福岡県八女市黒木町笠原11260',
    location: {
      url: 'https://maps.google.com/?q=33.21504363,130.75728294',
      latitude: 33.21504363,
      longitude: 130.75728294
    }
  },
  {
    id: '212',
    urlPath: '/homes/212',
    title: '福岡A邸',
    prefecture: '福岡県',
    description: '大濠公園を眺めるアットホームなホステルと連携した家',
    isNew: false,
    name: 'UNPLAN Fukuoka',
    tag: '提携',
    address: '〒8100074 福岡県福岡市中央区大手門3-4-1',
    location: {
      url: 'https://maps.google.com/?q=33.59036531,130.37995809',
      latitude: 33.59036531,
      longitude: 130.37995809
    }
  },
  {
    id: '211',
    urlPath: '/homes/211',
    title: '道後温泉A邸',
    prefecture: '愛媛県',
    description: '風情溢れる温泉街近くに建つ、くつろぎと癒しの湯上り空間',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7900845 愛媛県松山市道後今市6-6',
    location: {
      url: 'https://maps.google.com/?q=33.85010778,132.77674359',
      latitude: 33.85010778,
      longitude: 132.77674359
    }
  },
  {
    id: '210',
    urlPath: '/homes/210',
    title: '各務原A邸',
    prefecture: '岐阜県',
    description: '不動産のプロがこだわった2021年リノベーション済みの家',
    isNew: false,
    name: '',
    tag: '提携',
    address: '〒5090141 岐阜県岐阜県各務原市鵜沼各務原町',
    location: {
      url: 'https://maps.google.com/?q=35.40252696,136.90941747',
      latitude: 35.40252696,
      longitude: 136.90941747
    }
  },
  {
    id: '209',
    urlPath: '/homes/209',
    title: '勝浦A邸',
    prefecture: '千葉県',
    description: '白砂とエメラルドグリーンの海を堪能できる贅沢な暮らし',
    isNew: false,
    name: '',
    tag: '提携',
    address: '〒2995245 千葉県千葉県勝浦市興津',
    location: {
      url: 'https://maps.google.com/?q=35.13577307,140.24725957',
      latitude: 35.13577307,
      longitude: 140.24725957
    }
  },
  {
    id: '199',
    urlPath: '/homes/199',
    title: '沖縄真栄田岬A邸',
    prefecture: '沖縄県',
    description: '沖縄中部、真栄田岬で海街暮らしを',
    isNew: false,
    name: '沖縄真栄田岬A邸',
    tag: '提携',
    address: '〒9040416 沖縄県沖縄県国頭郡恩納村山田2380沖縄真栄田A邸',
    location: {
      url: 'https://maps.google.com/?q=26.43052685,127.77769721',
      latitude: 26.43052685,
      longitude: 127.77769721
    }
  },
  {
    id: '176',
    urlPath: '/homes/176',
    title: '京都新町通A邸',
    prefecture: '京都府',
    description: 'コミュニティホステルで人と繋がることのできる家',
    isNew: false,
    name: 'WeBase 京都',
    tag: '提携',
    address: '〒6008445 京都府京都市下京区岩戸山町436-1',
    location: {
      url: 'https://maps.google.com/?q=35.00033168,135.75659918',
      latitude: 35.00033168,
      longitude: 135.75659918
    }
  },
  {
    id: '188',
    urlPath: '/homes/188',
    title: '京丹後A邸',
    prefecture: '京都府',
    description: '海の京都「丹後」で自然に囲まれた古民家ローカル体験を！',
    isNew: false,
    name: '',
    tag: '',
    address: '〒6292522 京都府京丹後市大宮町三重245',
    location: {
      url: 'https://maps.google.com/?q=35.57258864,135.1160077',
      latitude: 35.57258864,
      longitude: 135.1160077
    }
  },
  {
    id: '204',
    urlPath: '/homes/204',
    title: '尾道D邸',
    prefecture: '広島県',
    description: '尾道の新しい出会いを愉しみを感じられる家',
    isNew: false,
    name: 'SINGAI CABIN',
    tag: '提携',
    address: '〒7220045 広島県尾道市久保2-9-1',
    location: {
      url: 'https://maps.google.com/?q=34.41179957,133.20546298',
      latitude: 34.41179957,
      longitude: 133.20546298
    }
  },
  {
    id: '205',
    urlPath: '/homes/205',
    title: '名古屋C邸',
    prefecture: '愛知県',
    description: '名古屋駅から約20分！ゆったり過ごせる純和風の庭が素敵な家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4570014 愛知県名古屋市南区呼続1-4-15',
    location: {
      url: 'https://maps.google.com/?q=35.1129477,136.92717353',
      latitude: 35.1129477,
      longitude: 136.92717353
    }
  },
  {
    id: '203',
    urlPath: '/homes/203',
    title: '大阪此花A邸',
    prefecture: '大阪府',
    description: 'あのテーマパークも！大阪どこでもアクセス抜群の家',
    isNew: false,
    name: 'ジェイホッパーズ大阪ユニバーサル',
    tag: '提携',
    address: '〒5540024 大阪府大阪市此花区島屋3-10-12',
    location: {
      url: 'https://maps.google.com/?q=34.67522872,135.44302354',
      latitude: 34.67522872,
      longitude: 135.44302354
    }
  },
  {
    id: '202',
    urlPath: '/homes/202',
    title: '大阪新世界B邸',
    prefecture: '大阪府',
    description: '通天閣の麓で大阪の「オモロイ」を体感できる家',
    isNew: false,
    name: 'The PAX hostel',
    tag: '提携',
    address: '〒5560002 大阪府大阪市浪速区恵美須東1-20-5',
    location: {
      url: 'https://maps.google.com/?q=34.65266203,135.50542887',
      latitude: 34.65266203,
      longitude: 135.50542887
    }
  },
  {
    id: '201',
    urlPath: '/homes/201',
    title: '金山A邸',
    prefecture: '山形県',
    description: '金山の雄大な大自然に佇むドイツ風ホテル',
    isNew: false,
    name: 'シェーネスハイム金山（JR）',
    tag: '提携',
    address: '〒9995401 山形県最上郡金山町有屋1400番地',
    location: {
      url: 'https://maps.google.com/?q=38.91715555,140.39299534',
      latitude: 38.91715555,
      longitude: 140.39299534
    }
  },
  {
    id: '200',
    urlPath: '/homes/200',
    title: '荒川A邸',
    prefecture: '東京都',
    description: '人と人を繋ぐ東京の下町',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1160011 東京都荒川区西尾久4-17-8',
    location: {
      url: 'https://maps.google.com/?q=35.74735398,139.75956532',
      latitude: 35.74735398,
      longitude: 139.75956532
    }
  },
  {
    id: '198',
    urlPath: '/homes/198',
    title: '大阪福島A邸',
    prefecture: '大阪府',
    description: '料亭の風情が残るゲストハウスで気軽な滞在を',
    isNew: false,
    name: 'ゲストハウス由苑',
    tag: '提携',
    address: '〒5530003 大阪府大阪市福島区福島2-9-23',
    location: {
      url: 'https://maps.google.com/?q=34.69464289,135.48658448',
      latitude: 34.69464289,
      longitude: 135.48658448
    }
  },
  {
    id: '197',
    urlPath: '/homes/197',
    title: '柳川A邸',
    prefecture: '福岡県',
    description: 'みんなが集まるおばあちゃん家を改装した拠点でゆっくりと',
    isNew: false,
    name: '柳川ゲストハウス ほりわり',
    tag: '提携',
    address: '〒8320065 福岡県柳川市沖端町7',
    location: {
      url: 'https://maps.google.com/?q=33.15813236,130.39669202',
      latitude: 33.15813236,
      longitude: 130.39669202
    }
  },
  {
    id: '196',
    urlPath: '/homes/196',
    title: '京都七条通A邸',
    prefecture: '京都府',
    description: '充実した共有スペースで本に囲まれて「住まう」体験を',
    isNew: false,
    name: 'TUNE STAY KYOTO',
    tag: '提携',
    address: '〒6008310 京都府京都府京都市下京区七条通新町西入夷之町708',
    location: {
      url: 'https://maps.google.com/?q=34.98912458,135.75613087',
      latitude: 34.98912458,
      longitude: 135.75613087
    }
  },
  {
    id: '195',
    urlPath: '/homes/195',
    title: '鎌倉C邸',
    prefecture: '神奈川県',
    description: '鎌倉大仏様のお膝元で、アジアンリゾート気分を満喫',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2480027 神奈川県鎌倉市笛田５丁目４５−２８',
    location: {
      url: 'https://maps.google.com/?q=35.31920643,139.52732091',
      latitude: 35.31920643,
      longitude: 139.52732091
    }
  },
  {
    id: '193',
    urlPath: '/homes/193',
    title: '多摩平A邸',
    prefecture: '東京都',
    description: '駅徒歩8分！豊かな自然環境の中に佇むリノベーション団地',
    isNew: false,
    name: 'りえんと多摩平',
    tag: '提携',
    address: '〒1910062 東京都日野市多摩平三丁目1番8号りえんと多摩平244号棟',
    location: {
      url: 'https://maps.google.com/?q=35.6638396,139.37765361',
      latitude: 35.6638396,
      longitude: 139.37765361
    }
  },
  {
    id: '194',
    urlPath: '/homes/194',
    title: '箱根湯本A邸',
    prefecture: '神奈川県',
    description: '旧東海道の箱根峠の手前、湯本で心身共に湯治で癒す',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2500311 神奈川県足柄下郡箱根町湯本206HOT小川ビル603,604',
    location: {
      url: 'https://maps.google.com/?q=35.231872,139.110996',
      latitude: 35.231872,
      longitude: 139.110996
    }
  },
  {
    id: '192',
    urlPath: '/homes/192',
    title: '郡上八幡B邸',
    prefecture: '岐阜県',
    description: '古き良き城下町でゆるりとした生活を送れる提携拠点',
    isNew: false,
    name: '郡上八幡ゲストハウスまちやど',
    tag: '提携',
    address:
      '〒5014222 岐阜県郡上市八幡町島谷674-1郡上八幡ゲストハウスまちやど',
    location: {
      url: 'https://maps.google.com/?q=35.74786523,136.95947747',
      latitude: 35.74786523,
      longitude: 136.95947747
    }
  },
  {
    id: '191',
    urlPath: '/homes/191',
    title: '上五島A邸',
    prefecture: '長崎県',
    description: '長崎五島の美しい海を徒歩30秒の距離で味わる提携拠点',
    isNew: false,
    name: '五島バックパッカーズ ぽれ',
    tag: '提携',
    address:
      '〒8574214 長崎県南松浦郡新上五島町七目郷1005-2五島バックパッカーズ　ぽれ',
    location: {
      url: 'https://maps.google.com/?q=32.98013802,129.10122275',
      latitude: 32.98013802,
      longitude: 129.10122275
    }
  },
  {
    id: '190',
    urlPath: '/homes/190',
    title: '尾道C邸',
    prefecture: '広島県',
    description: '多様な人の集まりから五感が刺激されるゲストハウス連携拠点',
    isNew: false,
    name: 'ゲストハウス　ヤドカーリ',
    tag: '提携',
    address: '〒7220035 広島県尾道市土堂1-9-13',
    location: {
      url: 'https://maps.google.com/?q=34.40608178,133.19726214',
      latitude: 34.40608178,
      longitude: 133.19726214
    }
  },
  {
    id: '186',
    urlPath: '/homes/186',
    title: '宇佐A邸',
    prefecture: '大分県',
    description: '長い歴史を持つ古民家で大自然の暮らしを体験',
    isNew: false,
    name: 'エコビレッジ地球人村',
    tag: '提携',
    address: '〒8720514 大分県大分県宇佐市安心院町鳥越1255エコビレッジ地球人材',
    location: {
      url: 'https://maps.google.com/?q=33.41060345,131.34222067',
      latitude: 33.41060345,
      longitude: 131.34222067
    }
  },
  {
    id: '185',
    urlPath: '/homes/185',
    title: '水戸A邸',
    prefecture: '茨城県',
    description: '水戸の古民家で地域に溶け込んだ暮らしを',
    isNew: false,
    name: '水戸宿泊交流場',
    tag: '提携',
    address: '〒3100817 茨城県水戸市柳町2-7-18水戸宿泊交流場',
    location: {
      url: 'https://maps.google.com/?q=36.367195,140.49154645',
      latitude: 36.367195,
      longitude: 140.49154645
    }
  },
  {
    id: '143',
    urlPath: '/homes/143',
    title: '逗子B邸',
    prefecture: '神奈川県',
    description: '温かみのあるリノベーション民家でゆったり逗子ライフを',
    isNew: false,
    name: 'AMIGO HOUSE',
    tag: '提携',
    address: '〒2490007 神奈川県逗子市新宿3-2-40',
    location: {
      url: 'https://maps.google.com/?q=35.29555722,139.57108274',
      latitude: 35.29555722,
      longitude: 139.57108274
    }
  },
  {
    id: '184',
    urlPath: '/homes/184',
    title: '淡路島A邸',
    prefecture: '兵庫県',
    description: 'クロマツ林が広がる瀬戸内海国立公園に隣接する癒しの家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒6560304 兵庫県南あわじ市松帆古津路1010−9',
    location: {
      url: 'https://maps.google.com/?q=34.33808672,134.73878286',
      latitude: 34.33808672,
      longitude: 134.73878286
    }
  },
  {
    id: '183',
    urlPath: '/homes/183',
    title: '沖縄明道A邸',
    prefecture: '沖縄県',
    description: '沖縄の生活に根差したエリアでゆるりとした暮らしを',
    isNew: false,
    name: '移住体験型ホテル',
    tag: '提携',
    address: '〒9042152 沖縄県沖縄県沖縄市明道1-12-13移住体験型ホテル',
    location: {
      url: 'https://maps.google.com/?q=26.357667,127.82320327',
      latitude: 26.357667,
      longitude: 127.82320327
    }
  },
  {
    id: '182',
    urlPath: '/homes/182',
    title: '池上A邸',
    prefecture: '東京都',
    description: 'パブリックな「場」として住み開かれた池上の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1460082 東京都大田区池上4-11-9',
    location: {
      url: 'https://maps.google.com/?q=35.57545191,139.7056256',
      latitude: 35.57545191,
      longitude: 139.7056256
    }
  },
  {
    id: '181',
    urlPath: '/homes/181',
    title: '坂出A邸',
    prefecture: '香川県',
    description: 'お遍路にも最適な立地に位置する提携拠点てレトロな雰囲気を',
    isNew: false,
    name: '　ニューセンチュリー坂出',
    tag: '提携',
    address:
      '〒7620003 香川県坂出市久米町1丁目25番8号ホテルニューセンチュリー坂出',
    location: {
      url: 'https://maps.google.com/?q=34.32174622,133.85630746',
      latitude: 34.32174622,
      longitude: 133.85630746
    }
  },
  {
    id: '180',
    urlPath: '/homes/180',
    title: '沖縄那覇B邸',
    prefecture: '沖縄県',
    description: '沖縄の閑静な住宅街に位置するホテルの提携拠点',
    isNew: false,
    name: 'ホテル　オロックス',
    tag: '提携',
    address: '〒9010152 沖縄県那覇市小禄1-1-1ホテル　オロックス',
    location: {
      url: 'https://maps.google.com/?q=26.19600244,127.67666797',
      latitude: 26.19600244,
      longitude: 127.67666797
    }
  },
  {
    id: '179',
    urlPath: '/homes/179',
    title: '沖縄比屋根A邸',
    prefecture: '沖縄県',
    description: '沖縄本島の中心で沖縄ならではの自然や暮らしを',
    isNew: false,
    name: 'ヒヤグンラナイリゾート',
    tag: '提携',
    address: '〒9042173 沖縄県沖縄市比屋根7-2-15ヒヤグンラナイリゾート',
    location: {
      url: 'https://maps.google.com/?q=26.32307059,127.81183092',
      latitude: 26.32307059,
      longitude: 127.81183092
    }
  },
  {
    id: '178',
    urlPath: '/homes/178',
    title: '尾道B邸',
    prefecture: '広島県',
    description: 'シェアキッチン併設！海を見渡せるのどかな家',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒7220032 広島県尾道市西土堂町3-2',
    location: {
      url: 'https://maps.google.com/?q=34.406443,133.195164',
      latitude: 34.406443,
      longitude: 133.195164
    }
  },
  {
    id: '6',
    urlPath: '/homes/6',
    title: '南伊豆A邸',
    prefecture: '静岡県',
    description: '都心にほど近い南国 温泉付きの別荘に暮らす',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4150304 静岡県賀茂郡南伊豆町加納405-5',
    location: {
      url: 'https://maps.google.com/?q=34.647339,138.8537322',
      latitude: 34.647339,
      longitude: 138.8537322
    }
  },
  {
    id: '177',
    urlPath: '/homes/177',
    title: '高山A邸',
    prefecture: '岐阜県',
    description: '飛騨高山で落ち着いた心地よい空間での暮らしを',
    isNew: false,
    name: '力車イン',
    tag: '提携',
    address: '〒5060016 岐阜県高山市末広町54インターナショナル旅籠　力車イン',
    location: {
      url: 'https://maps.google.com/?q=36.14329383,137.25537504',
      latitude: 36.14329383,
      longitude: 137.25537504
    }
  },
  {
    id: '172',
    urlPath: '/homes/172',
    title: '出雲A邸',
    prefecture: '島根県',
    description: '神社に隣接した連携拠点でゆっくりとした時間を',
    isNew: false,
    name: 'すのさわ',
    tag: '提携',
    address: '〒6930503 島根県出雲市佐田町須佐731-1',
    location: {
      url: 'https://maps.google.com/?q=35.23401231,132.73780816',
      latitude: 35.23401231,
      longitude: 132.73780816
    }
  },
  {
    id: '169',
    urlPath: '/homes/169',
    title: '五城目A邸',
    prefecture: '秋田県',
    description: '木工職人が工房を構える広くて開放的な家',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒0181704 秋田県gojome-a@address.love',
    location: {
      url: 'https://maps.google.com/?q=39.94861912,140.12139929',
      latitude: 39.94861912,
      longitude: 140.12139929
    }
  },
  {
    id: '170',
    urlPath: '/homes/170',
    title: '沖縄北谷A邸',
    prefecture: '沖縄県',
    description: '異国情緒あふれる空間で砂辺エリアならではの暮らしを',
    isNew: false,
    name: 'AIEN COFFEE&HOSTEL',
    tag: '提携',
    address: '〒9040114 沖縄県中頭郡北谷町港6-9AIEN COFFEE&HOSTEL',
    location: {
      url: 'https://maps.google.com/?q=26.32254296,127.75068271',
      latitude: 26.32254296,
      longitude: 127.75068271
    }
  },
  {
    id: '167',
    urlPath: '/homes/167',
    title: '津和野A邸',
    prefecture: '島根県',
    description: '江戸末期に建てられた石州瓦の古民家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒6995604 島根県鹿足郡津和野町森村イ−530',
    location: {
      url: 'https://maps.google.com/?q=34.46341109,131.77254169',
      latitude: 34.46341109,
      longitude: 131.77254169
    }
  },
  {
    id: '166',
    urlPath: '/homes/166',
    title: '氷見A邸',
    prefecture: '富山県',
    description: '大自然の中で非日常な時間を',
    isNew: false,
    name: 'Bed&Kitchen SORAIRO',
    tag: '提携',
    address: '〒9350263 富山県氷見市小久米485',
    location: {
      url: 'https://maps.google.com/?q=36.84555921,136.90402604',
      latitude: 36.84555921,
      longitude: 136.90402604
    }
  },
  {
    id: '163',
    urlPath: '/homes/163',
    title: '京都堀川八条A邸',
    prefecture: '京都府',
    description: '好立地で京都をしっかり満喫できる家',
    isNew: false,
    name: 'WISE OWL HOSTELS KYOTO',
    tag: '提携',
    address:
      '〒6018416 京都府京都市南区西九条池ノ内町96-1WISE OWL HOSTELS KYOTO',
    location: {
      url: 'https://maps.google.com/?q=34.98291758,135.75354639',
      latitude: 34.98291758,
      longitude: 135.75354639
    }
  },
  {
    id: '162',
    urlPath: '/homes/162',
    title: '天草A邸',
    prefecture: '熊本県',
    description: '海あり！山あり！農作業あり！の自然派の家',
    isNew: false,
    name: '天草農工房ふぁおの宿',
    tag: '提携',
    address: '〒8617203 熊本県天草市有明町大浦333-2',
    location: {
      url: 'https://maps.google.com/?q=32.51162671,130.36564153',
      latitude: 32.51162671,
      longitude: 130.36564153
    }
  },
  {
    id: '161',
    urlPath: '/homes/161',
    title: '蔵王温泉A邸',
    prefecture: '山形県',
    description: '蔵王温泉を中心に四季折々の情緒を嗜める提携拠点',
    isNew: false,
    name: '吉田屋旅館',
    tag: '提携',
    address: '〒9902301 山形県山形市蔵王温泉13番地吉田屋旅館',
    location: {
      url: 'https://maps.google.com/?q=38.1684773,140.396889',
      latitude: 38.1684773,
      longitude: 140.396889
    }
  },
  {
    id: '168',
    urlPath: '/homes/168',
    title: '鴨宮A邸',
    prefecture: '神奈川県',
    description: '趣向を凝らした庭と広縁が旅館を思わせる、小田原エリアの家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2500863 神奈川県小田原市飯泉236−7',
    location: {
      url: 'https://maps.google.com/?q=35.28011725,139.17530299',
      latitude: 35.28011725,
      longitude: 139.17530299
    }
  },
  {
    id: '165',
    urlPath: '/homes/165',
    title: '長野B邸',
    prefecture: '長野県',
    description: '料理やクラフトビールを味わい、人との緩やかな繋がりを',
    isNew: false,
    name: 'MASH cafe&bed NAGANO',
    tag: '提携',
    address: '〒3800824 長野県長野市南石堂町1426Mashcafe&bedNAGANO',
    location: {
      url: 'https://maps.google.com/?q=36.64567595,138.18657684',
      latitude: 36.64567595,
      longitude: 138.18657684
    }
  },
  {
    id: '154',
    urlPath: '/homes/154',
    title: '名古屋B邸',
    prefecture: '愛知県',
    description: '名古屋駅徒歩圏内のマンションで、都会的な生活を',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4510046 愛知県名古屋市西区牛島町2-10 1108号室',
    location: {
      url: 'https://maps.google.com/?q=35.17652045,136.88007263',
      latitude: 35.17652045,
      longitude: 136.88007263
    }
  },
  {
    id: '156',
    urlPath: '/homes/156',
    title: '阿字ヶ浦A邸',
    prefecture: '茨城県',
    description: '阿字ヶ浦海岸を一望できる、海辺での暮らし',
    isNew: false,
    name: '阿字ヶ浦クラブ',
    tag: '提携',
    address: '〒3111201 茨城県ひたちなか市阿字ケ浦町9番地阿字ヶ浦クラブ',
    location: {
      url: 'https://maps.google.com/?q=36.38390248,140.61793621',
      latitude: 36.38390248,
      longitude: 140.61793621
    }
  },
  {
    id: '160',
    urlPath: '/homes/160',
    title: '金沢C邸',
    prefecture: '石川県',
    description: '金沢の中心地に位置し、落ち着いた空間を味わえる提携拠点',
    isNew: false,
    name: 'Blue Hour Kanazawa',
    tag: '提携',
    address:
      '〒9200852 石川県金沢市此花町3-3ライブ1ビルB棟3FRCBlue Hour Kanazawa',
    location: {
      url: 'https://maps.google.com/?q=36.57690102,136.65121214',
      latitude: 36.57690102,
      longitude: 136.65121214
    }
  },
  {
    id: '159',
    urlPath: '/homes/159',
    title: '沖縄泡瀬A邸',
    prefecture: '沖縄県',
    description: '沖縄の東海岸を一望し、落ち着いた暮らしを',
    isNew: false,
    name: 'ヴィラ泡瀬111',
    tag: '提携',
    address: '〒9042172 沖縄県沖縄市泡瀬1-15-57ヴィラ泡瀬111',
    location: {
      url: 'https://maps.google.com/?q=26.3221338,127.83923758',
      latitude: 26.3221338,
      longitude: 127.83923758
    }
  },
  {
    id: '151',
    urlPath: '/homes/151',
    title: '三浦B邸',
    prefecture: '神奈川県',
    description: 'ディープな雰囲気漂う、相模湾が見渡せる日当たりの良い家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2380242 神奈川県三浦市東岡町8−28',
    location: {
      url: 'https://maps.google.com/?q=35.14537297,139.61837873',
      latitude: 35.14537297,
      longitude: 139.61837873
    }
  },
  {
    id: '153',
    urlPath: '/homes/153',
    title: '吉野B邸',
    prefecture: '奈良県',
    description: '桜で名高い吉野町で、築100年以上の古民家体験を',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒6393111 奈良県吉野郡吉野町上市201',
    location: {
      url: 'https://maps.google.com/?q=34.39538778,135.85513851',
      latitude: 34.39538778,
      longitude: 135.85513851
    }
  },
  {
    id: '157',
    urlPath: '/homes/157',
    title: '阿字ヶ浦B邸',
    prefecture: '茨城県',
    description: '隣接した芝生でアウトドアな雰囲気を味わえる提携拠点',
    isNew: false,
    name: '満洲屋',
    tag: '提携',
    address: '〒3111202 茨城県ひたちなか市磯崎町4625-2満州屋',
    location: {
      url: 'https://maps.google.com/?q=36.38213151,140.61476629',
      latitude: 36.38213151,
      longitude: 140.61476629
    }
  },
  {
    id: '152',
    urlPath: '/homes/152',
    title: '金沢A邸',
    prefecture: '石川県',
    description: '"HYGGE"をテーマにした暮らしを体験できる提携拠点',
    isNew: false,
    name: 'LINNAS Kanazawa',
    tag: '提携',
    address: '〒9200902 石川県金沢市尾張町1-2-8LINNAS Kanazawa',
    location: {
      url: 'https://maps.google.com/?q=36.57077922,136.65984866',
      latitude: 36.57077922,
      longitude: 136.65984866
    }
  },
  {
    id: '150',
    urlPath: '/homes/150',
    title: '飛騨A邸',
    prefecture: '岐阜県',
    description: '北アルプスや飛騨山脈に囲まれたノスタルジーな提携拠点',
    isNew: false,
    name: '八ツ三館',
    tag: '提携',
    address: '〒5094241 岐阜県岐阜県飛騨市古川町向町1-8-27八ツ三館',
    location: {
      url: 'https://maps.google.com/?q=36.23304179,137.18782551',
      latitude: 36.23304179,
      longitude: 137.18782551
    }
  },
  {
    id: '145',
    urlPath: '/homes/145',
    title: '西粟倉A邸',
    prefecture: '岡山県',
    description: '西粟倉の古民家で、ユーモラスな家守との滞在を',
    isNew: false,
    name: '西粟倉邸',
    tag: '提携',
    address: '〒7070503 岡山県英田郡西粟倉村影石1099',
    location: {
      url: 'https://maps.google.com/?q=35.18446994,134.33601317',
      latitude: 35.18446994,
      longitude: 134.33601317
    }
  },
  {
    id: '148',
    urlPath: '/homes/148',
    title: '熱海渚A邸',
    prefecture: '静岡県',
    description: '熱海の今昔を感じる渚町、レトロポップなアドレスの家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4130114 静岡県熱海市渚町15-3',
    location: {
      url: 'https://maps.google.com/?q=35.094537,139.074562',
      latitude: 35.094537,
      longitude: 139.074562
    }
  },
  {
    id: '147',
    urlPath: '/homes/147',
    title: '大阪新世界A邸',
    prefecture: '大阪府',
    description: 'なんばエリアに位置しているゲストハウスの提携拠点',
    isNew: false,
    name: '04VillageHostel NAMBA',
    tag: '提携',
    address: '〒5560001 大阪府大阪市浪速区下寺3-12-904VillageHostel NAMBA',
    location: {
      url: 'https://maps.google.com/?q=34.6550359,135.50856499',
      latitude: 34.6550359,
      longitude: 135.50856499
    }
  },
  {
    id: '137',
    urlPath: '/homes/137',
    title: '熊野A邸',
    prefecture: '和歌山県',
    description: '熊野古道沿いの古民家で不便さも生活の一つの味に',
    isNew: false,
    name: '熊野古道古民家宿HAGI',
    tag: '提携',
    address: '〒6461401 和歌山県田辺市中辺路町野中1068',
    location: {
      url: 'https://maps.google.com/?q=33.82458624,135.62937473',
      latitude: 33.82458624,
      longitude: 135.62937473
    }
  },
  {
    id: '146',
    urlPath: '/homes/146',
    title: '小豆島A邸',
    prefecture: '香川県',
    description: '風光明媚なオリーブの島で、島暮らしを満喫する',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7614101 香川県小豆郡土庄町甲83',
    location: {
      url: 'https://maps.google.com/?q=34.48287596,134.18642036',
      latitude: 34.48287596,
      longitude: 134.18642036
    }
  },
  {
    id: '144',
    urlPath: '/homes/144',
    title: '燕A邸',
    prefecture: '新潟県',
    description: '銅器職人のオーナーが住む築100年の古民家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒9590265 新潟県燕市吉田東町2-11',
    location: {
      url: 'https://maps.google.com/?q=37.6935037,138.88079617',
      latitude: 37.6935037,
      longitude: 138.88079617
    }
  },
  {
    id: '140',
    urlPath: '/homes/140',
    title: '雑司が谷A邸',
    prefecture: '東京都',
    description: '懐かしい商店と洒落たお店が混在する雑司が谷のレトロハウス',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1710032 東京都豊島区雑司が谷2-13-17',
    location: {
      url: 'https://maps.google.com/?q=35.7189,139.7175',
      latitude: 35.7189,
      longitude: 139.7175
    }
  },
  {
    id: '135',
    urlPath: '/homes/135',
    title: '湯本温泉A邸',
    prefecture: '福島県',
    description: '福島いわきの温泉街に暮らす',
    isNew: false,
    name: 'Guesthouse & Kitchen Hace',
    tag: '提携',
    address: '〒9728321 福島県福島県いわき市 常磐湯本町三函189-3',
    location: {
      url: 'https://maps.google.com/?q=37.00981964,140.8453782',
      latitude: 37.00981964,
      longitude: 140.8453782
    }
  },
  {
    id: '142',
    urlPath: '/homes/142',
    title: '名古屋A邸',
    prefecture: '愛知県',
    description: '名古屋の下町情緒溢れる商店街に位置するゲストハウスの提携拠点',
    isNew: false,
    name: 'なごのや',
    tag: '提携',
    address:
      '〒4510042 愛知県愛知県名古屋市西区那古野1-6-13喫茶、食堂、民宿。なごのや',
    location: {
      url: 'https://maps.google.com/?q=35.17628187,136.89167552',
      latitude: 35.17628187,
      longitude: 136.89167552
    }
  },
  {
    id: '141',
    urlPath: '/homes/141',
    title: '沖縄那覇A邸',
    prefecture: '沖縄県',
    description: '沖縄のビーチに近い好立地なゲストハウスの提携拠点',
    isNew: false,
    name: 'ヴィラコースト西町',
    tag: '提携',
    address: '〒9000037 沖縄県沖縄県那覇市辻1-2-15ヴィラコースト西町',
    location: {
      url: 'https://maps.google.com/?q=26.21641771,127.67149103',
      latitude: 26.21641771,
      longitude: 127.67149103
    }
  },
  {
    id: '136',
    urlPath: '/homes/136',
    title: '熱海来宮A邸',
    prefecture: '静岡県',
    description: '熱海の山手で川の音を聴き過ごす昭和民家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4130034 静岡県熱海市西山町18-66',
    location: {
      url: 'https://maps.google.com/?q=35.108106,139.061921',
      latitude: 35.108106,
      longitude: 139.061921
    }
  },
  {
    id: '132',
    urlPath: '/homes/132',
    title: '武雄A邸',
    prefecture: '佐賀県',
    description: '北欧家具で寛いでから徒歩2分の武雄温泉で小休止',
    isNew: false,
    name: '',
    tag: '',
    address: '〒8430022 佐賀県武雄市武雄町武雄7272-2',
    location: {
      url: 'https://maps.google.com/?q=33.19460359,130.01614822',
      latitude: 33.19460359,
      longitude: 130.01614822
    }
  },
  {
    id: '130',
    urlPath: '/homes/130',
    title: '押上A邸',
    prefecture: '東京都',
    description: '夜まで東京を遊びつくす旅人が集まる連携拠点',
    isNew: false,
    name: 'WISE OWL HOSTEL TOKYO RIVER',
    tag: '提携',
    address: '〒1310033 東京都東京都墨田区向島1-23-3',
    location: {
      url: 'https://maps.google.com/?q=35.71074983,139.80476581',
      latitude: 35.71074983,
      longitude: 139.80476581
    }
  },
  {
    id: '133',
    urlPath: '/homes/133',
    title: '大阪天満A邸',
    prefecture: '大阪府',
    description: '日本一長い商店街で、安くて旨くておもろいグルメな体験を！',
    isNew: false,
    name: '',
    tag: '',
    address: '〒5300035 大阪府大阪市北区同心2-3-28',
    location: {
      url: 'https://maps.google.com/?q=34.70247738,135.51670795',
      latitude: 34.70247738,
      longitude: 135.51670795
    }
  },
  {
    id: '131',
    urlPath: '/homes/131',
    title: '大洲A邸',
    prefecture: '愛媛県',
    description: '伊予の小京都「大洲」で古き良き洋館暮らしを満喫する',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7950012 愛媛県大洲市大洲89',
    location: {
      url: 'https://maps.google.com/?q=33.50798102,132.54779975',
      latitude: 33.50798102,
      longitude: 132.54779975
    }
  },
  {
    id: '127',
    urlPath: '/homes/127',
    title: '石巻A邸',
    prefecture: '宮城県',
    description: '石巻の被災地復興を支えるゲストハウスの提携拠点',
    isNew: false,
    name: 'ゲストハウスみらい',
    tag: '提携',
    address: '〒9860042 宮城県宮城県石巻市鹿妻南鹿妻南5-1-69',
    location: {
      url: 'https://maps.google.com/?q=38.41988653,141.34557484',
      latitude: 38.41988653,
      longitude: 141.34557484
    }
  },
  {
    id: '129',
    urlPath: '/homes/129',
    title: '別府A邸',
    prefecture: '大分県',
    description:
      'レトロな町並みと別府地獄めぐりが楽しめる 緑豊かな温泉付き別荘',
    isNew: false,
    name: '別府ちくぜんや山荘',
    tag: '提携',
    address: '〒8740042 大分県別府市鉄輪東10-5',
    location: {
      url: 'https://maps.google.com/?q=33.31800545,131.48196365',
      latitude: 33.31800545,
      longitude: 131.48196365
    }
  },
  {
    id: '128',
    urlPath: '/homes/128',
    title: '鹿屋A邸',
    prefecture: '鹿児島県',
    description: '自然豊かな大隅半島に位置する廃校利用された拠点',
    isNew: false,
    name: 'ユクサおおすみ海の学校',
    tag: '提携',
    address: '〒8912313 鹿児島県鹿屋市天神町3629-1',
    location: {
      url: 'https://maps.google.com/?q=31.37278423,130.77974483',
      latitude: 31.37278423,
      longitude: 130.77974483
    }
  },
  {
    id: '123',
    urlPath: '/homes/123',
    title: '鶴巻温泉C邸',
    prefecture: '神奈川県',
    description: 'ベージュトーンの洗練された内装と快適設備が自慢の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2570002 神奈川県秦野市鶴巻南5-2-8',
    location: {
      url: 'https://maps.google.com/?q=35.3821414,139.2818313',
      latitude: 35.3821414,
      longitude: 139.2818313
    }
  },
  {
    id: '126',
    urlPath: '/homes/126',
    title: '沖縄本部A邸',
    prefecture: '沖縄県',
    description: '南国リゾート沖縄の海近ゲストハウスの提携拠点',
    isNew: false,
    name: 'Camp House',
    tag: '提携',
    address: '〒9050226 沖縄県国頭郡本部町健堅1165',
    location: {
      url: 'https://maps.google.com/?q=26.64527737,127.88075717',
      latitude: 26.64527737,
      longitude: 127.88075717
    }
  },
  {
    id: '124',
    urlPath: '/homes/124',
    title: '綾部A邸',
    prefecture: '京都府',
    description: '京都府の中でも里山の風景が楽しめる綾部にある連携拠点',
    isNew: false,
    name: '里山ゲストハウスクチュール',
    tag: '提携',
    address: '〒6231124 京都府綾部市五泉町下ノ段16',
    location: {
      url: 'https://maps.google.com/?q=35.40635562,135.4206579',
      latitude: 35.40635562,
      longitude: 135.4206579
    }
  },
  {
    id: '121',
    urlPath: '/homes/121',
    title: '京都舞鶴A邸',
    prefecture: '京都府',
    description: '非日常に里帰り風情と交流を楽しむゲストハウス',
    isNew: false,
    name: 'ゲストハウス宰嘉庵かなで',
    tag: '提携',
    address: '〒6240925 京都府舞鶴市丹波35',
    location: {
      url: 'https://maps.google.com/?q=35.44987368,135.32842778',
      latitude: 35.44987368,
      longitude: 135.32842778
    }
  },
  {
    id: '119',
    urlPath: '/homes/119',
    title: '門司港A邸',
    prefecture: '福岡県',
    description: 'レトロモダンな街「門司港」駅近くに建つ元旅館の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒8010833 福岡県北九州市門司区清滝4-4-6',
    location: {
      url: 'https://maps.google.com/?q=33.942632,130.964612',
      latitude: 33.942632,
      longitude: 130.964612
    }
  },
  {
    id: '120',
    urlPath: '/homes/120',
    title: '岩国A邸',
    prefecture: '山口県',
    description: '日本三名橋「錦帯橋」のほど近く。御庄川沿いに建つ木造家屋',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7410083 山口県岩国市御庄836',
    location: {
      url: 'https://maps.google.com/?q=34.16557068,132.15392494',
      latitude: 34.16557068,
      longitude: 132.15392494
    }
  },
  {
    id: '125',
    urlPath: '/homes/125',
    title: '京都西陣B邸',
    prefecture: '京都府',
    description: 'シンプルで上質な施設で西陣との繋がりを',
    isNew: false,
    name: 'KéFU(ケフ) stay&lounge',
    tag: '提携',
    address: '〒6028476 京都府京都市上京区桐木町880',
    location: {
      url: 'https://maps.google.com/?q=35.03224804,135.742891',
      latitude: 35.03224804,
      longitude: 135.742891
    }
  },
  {
    id: '117',
    urlPath: '/homes/117',
    title: '熱海銀座A邸',
    prefecture: '静岡県',
    description: '熱海銀座のまちやどでローカルを感じる暮らし',
    isNew: false,
    name: 'MARUYA',
    tag: '提携',
    address: '〒4130013 静岡県熱海市銀座町7-81',
    location: {
      url: 'https://maps.google.com/?q=35.09655372,139.07383813',
      latitude: 35.09655372,
      longitude: 139.07383813
    }
  },
  {
    id: '118',
    urlPath: '/homes/118',
    title: '郡上八幡A邸',
    prefecture: '岐阜県',
    description: '日本三大盆踊り「郡上おどり」の街を満喫',
    isNew: false,
    name: 'タテマチノイエ',
    tag: '提携',
    address: '〒5014222 岐阜県郡上市八幡町島谷703-1',
    location: {
      url: 'https://maps.google.com/?q=35.74801063,136.95905019',
      latitude: 35.74801063,
      longitude: 136.95905019
    }
  },
  {
    id: '122',
    urlPath: '/homes/122',
    title: '静岡榛原A邸',
    prefecture: '静岡県',
    description: '静岡の秘境を味わえるゲストハウスの提携拠点',
    isNew: false,
    name: 'ゆる宿Voketto',
    tag: '提携',
    address: '〒4280417 静岡県榛原郡川根本町青部703ゆる宿Voketto',
    location: {
      url: 'https://maps.google.com/?q=35.08896141,138.11628784',
      latitude: 35.08896141,
      longitude: 138.11628784
    }
  },
  {
    id: '116',
    urlPath: '/homes/116',
    title: '秩父A邸',
    prefecture: '埼玉県',
    description: '秩父エリアを満喫できるゲストハウスの提携拠点',
    isNew: false,
    name: '働coリビング',
    tag: '提携',
    address: '〒3680041 埼玉県秩父市番場町3-4小泉ビル5階',
    location: {
      url: 'https://maps.google.com/?q=35.99681492,139.0851666',
      latitude: 35.99681492,
      longitude: 139.0851666
    }
  },
  {
    id: '112',
    urlPath: '/homes/112',
    title: '藤沢A邸',
    prefecture: '神奈川県',
    description: 'ラテンカラーの内装がアクセント、光あふれる湘南の隠れ家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2510024 神奈川県藤沢市鵠沼橘２丁目１−１４',
    location: {
      url: 'https://maps.google.com/?q=35.33465574,139.48289395',
      latitude: 35.33465574,
      longitude: 139.48289395
    }
  },
  {
    id: '115',
    urlPath: '/homes/115',
    title: '富士吉田A邸',
    prefecture: '山梨県',
    description: 'ワークスペース完備。富士山信仰を伝える町で静かに暮らす。',
    isNew: false,
    name: '深沢ビル3階',
    tag: '提携',
    address: '〒4030005 山梨県富士吉田市上吉田1-10-12深澤ビル3F 302/304',
    location: {
      url: 'https://maps.google.com/?q=35.48226,138.797481',
      latitude: 35.48226,
      longitude: 138.797481
    }
  },
  {
    id: '113',
    urlPath: '/homes/113',
    title: '静岡用宗A邸',
    prefecture: '静岡県',
    description: 'オーナー自らDIY！リゾート感漂う港町でスローライフを！',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4210123 静岡県静岡市駿河区石部14−29',
    location: {
      url: 'https://maps.google.com/?q=34.917976,138.357767',
      latitude: 34.917976,
      longitude: 138.357767
    }
  },
  {
    id: '100',
    urlPath: '/homes/100',
    title: '吉野A邸',
    prefecture: '奈良県',
    description: '吉野川が部屋から望めるゲストハウス提携拠点',
    isNew: false,
    name: 'ゲストハウス三奇楼',
    tag: '提携',
    address: '〒6393111 奈良県吉野郡吉野町上市207',
    location: {
      url: 'https://maps.google.com/?q=34.395379,135.854889',
      latitude: 34.395379,
      longitude: 135.854889
    }
  },
  {
    id: '94',
    urlPath: '/homes/94',
    title: '真鶴A邸',
    prefecture: '神奈川県',
    description: 'ターコイズブルーの外壁が目印の西海岸テイストの家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2590202 神奈川県足柄下郡真鶴町岩６７８−５８',
    location: {
      url: 'https://maps.google.com/?q=35.164426,139.135748',
      latitude: 35.164426,
      longitude: 139.135748
    }
  },
  {
    id: '111',
    urlPath: '/homes/111',
    title: '上野A邸',
    prefecture: '東京都',
    description: '上野公園から徒歩圏内の下町東京を味わえる提携拠点',
    isNew: false,
    name: 'ゲストハウスtoco.',
    tag: '提携',
    address: '〒1100004 東京都台東区下谷2-13-21',
    location: {
      url: 'https://maps.google.com/?q=35.72203721,139.7839525',
      latitude: 35.72203721,
      longitude: 139.7839525
    }
  },
  {
    id: '110',
    urlPath: '/homes/110',
    title: '京都西陣A邸',
    prefecture: '京都府',
    description: '金閣寺近くの西陣織の生産地、歴史感じる新拠点',
    isNew: false,
    name: 'EXPO HOSTEL',
    tag: '提携',
    address: '〒6038224 京都府京都市北区紫野西藤ノ森町2-4',
    location: {
      url: 'https://maps.google.com/?q=35.03673698,135.74651587',
      latitude: 35.03673698,
      longitude: 135.74651587
    }
  },
  {
    id: '108',
    urlPath: '/homes/108',
    title: '浅草A邸',
    prefecture: '東京都',
    description: '浅草駅徒歩圏内の下町を満喫できるゲストハウス',
    isNew: false,
    name: 'Nui. HOSTEL&BAR LOUNGE',
    tag: '提携',
    address: '〒1110051 東京都台東区蔵前2-14-13',
    location: {
      url: 'https://maps.google.com/?q=35.70386539,139.79342299',
      latitude: 35.70386539,
      longitude: 139.79342299
    }
  },
  {
    id: '105',
    urlPath: '/homes/105',
    title: '京都聖護院A邸',
    prefecture: '京都府',
    description: '井伊直弼の京都藩邸の跡地で哲学とARTを味わえる拠点',
    isNew: false,
    name: '京都　月と',
    tag: '提携',
    address: '〒6068392 京都府京都市左京区聖護院山王町19-7',
    location: {
      url: 'https://maps.google.com/?q=35.01751649,135.77962323',
      latitude: 35.01751649,
      longitude: 135.77962323
    }
  },
  {
    id: '106',
    urlPath: '/homes/106',
    title: '京都河原町A邸',
    prefecture: '京都府',
    description: '先駆的なカルチャーイベントも楽しめる新拠点',
    isNew: false,
    name: 'Len Kyoto Kawaramachi',
    tag: '提携',
    address: '〒6008028 京都府京都市下京区植松町７０９－３',
    location: {
      url: 'https://maps.google.com/?q=34.998693,135.767312',
      latitude: 34.998693,
      longitude: 135.767312
    }
  },
  {
    id: '104',
    urlPath: '/homes/104',
    title: '東神田A邸',
    prefecture: '東京都',
    description: '洗練された都会のミニマル拠点',
    isNew: false,
    name: 'unito CHIYODA',
    tag: '提携',
    address: '〒1010031 東京都千代田区東神田1-7-10unito CHYODA 2F',
    location: {
      url: 'https://maps.google.com/?q=35.694777,139.779351',
      latitude: 35.694777,
      longitude: 139.779351
    }
  },
  {
    id: '103',
    urlPath: '/homes/103',
    title: '大洗A邸',
    prefecture: '茨城県',
    description: 'ワークスペース完備！海の町でわーケーションライフを！',
    isNew: false,
    name: '',
    tag: '',
    address: '〒3111301 茨城県東茨城郡大洗町磯浜町1333',
    location: {
      url: 'https://maps.google.com/?q=36.314296,140.564912',
      latitude: 36.314296,
      longitude: 140.564912
    }
  },
  {
    id: '102',
    urlPath: '/homes/102',
    title: '高畠A邸',
    prefecture: '山形県',
    description: '高畠駅隣接好立地のザ・ホテル拠点',
    isNew: false,
    name: 'ホテルフォルクローロ高畠',
    tag: '提携',
    address: '〒9992173 山形県東置賜郡高畠町山崎200',
    location: {
      url: 'https://maps.google.com/?q=37.992097,140.153078',
      latitude: 37.992097,
      longitude: 140.153078
    }
  },
  {
    id: '101',
    urlPath: '/homes/101',
    title: '角館A邸',
    prefecture: '秋田県',
    description: '秋田、角館の城下町ホテル提携拠点',
    isNew: false,
    name: 'フォルクローロ角館',
    tag: '提携',
    address: '〒0140368 秋田県仙北市角館町中菅沢１４',
    location: {
      url: 'https://maps.google.com/?q=39.591319,140.5707',
      latitude: 39.591319,
      longitude: 140.5707
    }
  },
  {
    id: '98',
    urlPath: '/homes/98',
    title: '武蔵新城A邸',
    prefecture: '神奈川県',
    description: 'バルコニーでつながる2つの部屋',
    isNew: false,
    name: '',
    tag: '',
    address:
      '〒2110042 神奈川県川崎市中原区下新城３丁目２−１５セシーズイシイ6　407・408号室',
    location: {
      url: 'https://maps.google.com/?q=35.581619,139.629688',
      latitude: 35.581619,
      longitude: 139.629688
    }
  },
  {
    id: '99',
    urlPath: '/homes/99',
    title: '塩尻A邸',
    prefecture: '長野県',
    description: '塩尻のローカルシェアハウス提携拠点',
    isNew: false,
    name: '坂勘',
    tag: '提携',
    address: '〒3996301 長野県塩尻市贄川1538-1',
    location: {
      url: 'https://maps.google.com/?q=36.009168,137.85779',
      latitude: 36.009168,
      longitude: 137.85779
    }
  },
  {
    id: '95',
    urlPath: '/homes/95',
    title: '大湊A邸',
    prefecture: '青森県',
    description: '青森、大湊のロケーション抜群のホテル提携拠点',
    isNew: false,
    name: 'フォルクローロ大湊',
    tag: '提携',
    address: '〒0350084 青森県むつ市大湊新町7-20',
    location: {
      url: 'https://maps.google.com/?q=41.280428,141.160848',
      latitude: 41.280428,
      longitude: 141.160848
    }
  },
  {
    id: '96',
    urlPath: '/homes/96',
    title: '釜石A邸',
    prefecture: '岩手県',
    description: '釜石駅隣接のロケーション抜群のホテル提携拠点',
    isNew: false,
    name: 'フォルクローロ三陸釜石',
    tag: '提携',
    address: '〒0260031 岩手県釜石市鈴子町22-4',
    location: {
      url: 'https://maps.google.com/?q=39.273174,141.872352',
      latitude: 39.273174,
      longitude: 141.872352
    }
  },
  {
    id: '97',
    urlPath: '/homes/97',
    title: '花巻A邸',
    prefecture: '岩手県',
    description: '花巻ののどかな田舎風景に囲まれたホテル提携拠点',
    isNew: false,
    name: 'フォルクローロ花巻東和',
    tag: '提携',
    address: '〒0280115 岩手県花巻市東和町安俵6区134',
    location: {
      url: 'https://maps.google.com/?q=39.383707,141.221909',
      latitude: 39.383707,
      longitude: 141.221909
    }
  },
  {
    id: '93',
    urlPath: '/homes/93',
    title: '大阪庄内A邸',
    prefecture: '大阪府',
    description: '林間学校を思い出す、懐かし個性あふれるホステル',
    isNew: false,
    name: 'Music Uni Street BackPackers HOSTEL',
    tag: '提携',
    address: '〒5610834 大阪府豊中市庄内栄町1-8-18',
    location: {
      url: 'https://maps.google.com/?q=34.751975,135.467361',
      latitude: 34.751975,
      longitude: 135.467361
    }
  },
  {
    id: '92',
    urlPath: '/homes/92',
    title: '日本橋A邸',
    prefecture: '東京都',
    description: '東海道五十三次の出発点日本橋にたたずむホステル',
    isNew: false,
    name: 'Citan',
    tag: '提携',
    address: '〒1030011 東京都中央区日本橋大伝馬町15-2',
    location: {
      url: 'https://maps.google.com/?q=35.691555,139.781361',
      latitude: 35.691555,
      longitude: 139.781361
    }
  },
  {
    id: '90',
    urlPath: '/homes/90',
    title: '軽井沢A邸',
    prefecture: '長野県',
    description: '日本を代表する高原リゾート地で満喫する別荘ライフ',
    isNew: false,
    name: '',
    tag: '',
    address: '〒3890111 長野県北佐久郡軽井沢町大字長倉3356-8',
    location: {
      url: 'https://maps.google.com/?q=36.356088,138.589022',
      latitude: 36.356088,
      longitude: 138.589022
    }
  },
  {
    id: '89',
    urlPath: '/homes/89',
    title: '高知B邸',
    prefecture: '高知県',
    description: '高知の温かい人情を感じることができるホステル',
    isNew: false,
    name: 'EN HOSTEL&LOCAL COMMUNITY',
    tag: '提携',
    address: '〒7800821 高知県高知市桜井町1丁目12-2',
    location: {
      url: 'https://maps.google.com/?q=33.563057,133.547565',
      latitude: 33.563057,
      longitude: 133.547565
    }
  },
  {
    id: '84',
    urlPath: '/homes/84',
    title: '新潟佐渡A邸',
    prefecture: '新潟県',
    description: '豊かな佐渡金山エリア、美しい岸壁から日本海を一望',
    isNew: false,
    name: 'ホテルファミリーオ佐渡相川',
    tag: '提携',
    address: '〒9522136 新潟県佐渡市小川1267-1',
    location: {
      url: 'https://maps.google.com/?q=38.060932,138.235653',
      latitude: 38.060932,
      longitude: 138.235653
    }
  },
  {
    id: '86',
    urlPath: '/homes/86',
    title: '弘前A邸',
    prefecture: '青森県',
    description:
      '青森弘前のスナック店舗をリノベーションしたユニークな無人ホテル',
    isNew: false,
    name: 'GOOD OLD HOTEL',
    tag: '提携',
    address: '〒0368193 青森県弘前市新鍛冶町80-2グランドパレス1号館2階',
    location: {
      url: 'https://maps.google.com/?q=40.600136,140.47047',
      latitude: 40.600136,
      longitude: 140.47047
    }
  },
  {
    id: '83',
    urlPath: '/homes/83',
    title: '三浦A邸',
    prefecture: '神奈川県',
    description: '相模湾まで徒歩1分、三浦半島の港町で旬の魚を楽しむ',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2380243 神奈川県三浦市三崎１丁目１０−４',
    location: {
      url: 'https://maps.google.com/?q=35.142312,139.621198',
      latitude: 35.142312,
      longitude: 139.621198
    }
  },
  {
    id: '82',
    urlPath: '/homes/82',
    title: '三豊A邸',
    prefecture: '香川県',
    description: '旬の野菜に讃岐うどん、田舎の日本家屋で地元の味に舌鼓',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7690401 香川県三豊市財田町財田上２０９０−１',
    location: {
      url: 'https://maps.google.com/?q=34.121396,133.78089',
      latitude: 34.121396,
      longitude: 133.78089
    }
  },
  {
    id: '79',
    urlPath: '/homes/79',
    title: '小田原B邸',
    prefecture: '神奈川県',
    description: '昭和レトロ。レコードが聴ける小田原のゲストハウス拠点',
    isNew: false,
    name: 'Tipy records inn',
    tag: '提携',
    address: '〒2500011 神奈川県小田原市栄町2-4-13',
    location: {
      url: 'https://maps.google.com/?q=35.256685,139.158061',
      latitude: 35.256685,
      longitude: 139.158061
    }
  },
  {
    id: '78',
    urlPath: '/homes/78',
    title: '静岡蒲原A邸',
    prefecture: '静岡県',
    description: '旧東海道の歴史ある宿場町の古民家ホステル拠点',
    isNew: false,
    name: 'Backpackers Hostel 燕之宿',
    tag: '提携',
    address: '〒4213203 静岡県静岡市清水区蒲原3丁目19-27',
    location: {
      url: 'https://maps.google.com/?q=35.1193,138.603012',
      latitude: 35.1193,
      longitude: 138.603012
    }
  },
  {
    id: '77',
    urlPath: '/homes/77',
    title: '岡山奉還町B邸',
    prefecture: '岡山県',
    description: '商店街にたたずむ和洋折衷なレトロクラシカルな家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7000026 岡山県岡山市北区奉還町4-9-23',
    location: {
      url: 'https://maps.google.com/?q=34.668464,133.910452',
      latitude: 34.668464,
      longitude: 133.910452
    }
  },
  {
    id: '74',
    urlPath: '/homes/74',
    title: '備前日生A邸',
    prefecture: '岡山県',
    description: 'グローバルな住人との国際交流も楽しめる連携拠点',
    isNew: false,
    name: 'The English Club',
    tag: '提携',
    address: '〒7013204 岡山県備前市日生町日生639-43',
    location: {
      url: 'https://maps.google.com/?q=34.733242,134.27338',
      latitude: 34.733242,
      longitude: 134.27338
    }
  },
  {
    id: '72',
    urlPath: '/homes/72',
    title: '館山B邸',
    prefecture: '千葉県',
    description: '房総半島の南端、館山のホテル拠点',
    isNew: false,
    name: 'ホテル ファミリーオ館山',
    tag: '提携',
    address: '〒2940031 千葉県館山市大賀81-17',
    location: {
      url: 'https://maps.google.com/?q=34.981459,139.825468',
      latitude: 34.981459,
      longitude: 139.825468
    }
  },
  {
    id: '69',
    urlPath: '/homes/69',
    title: '京都九条A邸',
    prefecture: '京都府',
    description: '元銭湯のコワーキングスペースがある連携拠点',
    isNew: false,
    name: 'Kyoto Kujo Inn',
    tag: '提携',
    address: '〒6018027 京都府京都市南区東九条中御霊町65',
    location: {
      url: 'https://maps.google.com/?q=34.978103,135.762499',
      latitude: 34.978103,
      longitude: 135.762499
    }
  },
  {
    id: '71',
    urlPath: '/homes/71',
    title: '京都西大路A邸',
    prefecture: '京都府',
    description: '魅力溢れる家守と「バイクとヨガ」も楽しめる京都の秘密基地',
    isNew: false,
    name: 'FUJITAYA BnB',
    tag: '提携',
    address: '〒6008878 京都府京都市下京区西七条北西野町37-1',
    location: {
      url: 'https://maps.google.com/?q=34.989803,135.734134',
      latitude: 34.989803,
      longitude: 135.734134
    }
  },
  {
    id: '68',
    urlPath: '/homes/68',
    title: '熊本A邸',
    prefecture: '熊本県',
    description: '火の国熊本。駅からアクセス抜群のホテル拠点',
    isNew: false,
    name: '熊本グリーンホテル',
    tag: '提携',
    address: '〒8600806 熊本県熊本市中央区花畑町12-11',
    location: {
      url: 'https://maps.google.com/?q=32.800797,130.706019',
      latitude: 32.800797,
      longitude: 130.706019
    }
  },
  {
    id: '65',
    urlPath: '/homes/65',
    title: '尾道A邸',
    prefecture: '広島県',
    description: '尾道唯一の漁師町の建つ波打ち際の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7220054 広島県尾道市尾崎本町10-7',
    location: {
      url: 'https://maps.google.com/?q=34.41091743,133.21091',
      latitude: 34.41091743,
      longitude: 133.21091
    }
  },
  {
    id: '66',
    urlPath: '/homes/66',
    title: 'いわきA邸',
    prefecture: '福島県',
    description: 'いわき駅徒歩5分の地域に根ざしたゲストハウス',
    isNew: false,
    name: 'Guest House & Lounge FARO iwaki',
    tag: '提携',
    address: '〒9708026 福島県いわき市平字三町目8-2やまとビル',
    location: {
      url: 'https://maps.google.com/?q=37.055706,140.892378',
      latitude: 37.055706,
      longitude: 140.892378
    }
  },
  {
    id: '64',
    urlPath: '/homes/64',
    title: '丹波篠山A邸',
    prefecture: '兵庫県',
    description: '丹波篠山城下町の築150年古民家ゲストハウス',
    isNew: false,
    name: '丹波篠山城下町ゲストハウスKOMEYA',
    tag: '提携',
    address: '〒6692323 兵庫県丹波篠山市立町106番地2',
    location: {
      url: 'https://maps.google.com/?q=35.07538,135.223273',
      latitude: 35.07538,
      longitude: 135.223273
    }
  },
  {
    id: '63',
    urlPath: '/homes/63',
    title: '古淵A邸',
    prefecture: '神奈川県',
    description: '町田の隣で、駅近のアクセス良好な家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2520344 神奈川県相模原市南区古淵1丁目13−2−9',
    location: {
      url: 'https://maps.google.com/?q=35.558619,139.417868',
      latitude: 35.558619,
      longitude: 139.417868
    }
  },
  {
    id: '62',
    urlPath: '/homes/62',
    title: '小樽B邸',
    prefecture: '北海道',
    description: '多国籍な旅人と一期一会の出会いを楽しめる、小樽のゲストハウス',
    isNew: false,
    name: 'OTARUYADO',
    tag: '提携',
    address: '〒0470032 北海道小樽市稲穂1丁目3-10YADOビル',
    location: {
      url: 'https://maps.google.com/?q=43.195665,140.998482',
      latitude: 43.195665,
      longitude: 140.998482
    }
  },
  {
    id: '61',
    urlPath: '/homes/61',
    title: '神戸A邸',
    prefecture: '兵庫県',
    description: '日本三大夜景を楽しめる港町神戸のゲストハウス',
    isNew: false,
    name: 'ゲストハウス萬家',
    tag: '提携',
    address: '〒6570836 兵庫県神戸市灘区城内通4-4-10',
    location: {
      url: 'https://maps.google.com/?q=34.707978,135.216772',
      latitude: 34.707978,
      longitude: 135.216772
    }
  },
  {
    id: '60',
    urlPath: '/homes/60',
    title: '品川A邸',
    prefecture: '東京都',
    description: '東京品川にたたずむ下町情緒あるれるゲストハウス',
    isNew: false,
    name: 'ゲストハウス品川宿',
    tag: '提携',
    address: '〒1400001 東京都品川区北品川1-22-16',
    location: {
      url: 'https://maps.google.com/?q=35.621761,139.740375',
      latitude: 35.621761,
      longitude: 139.740375
    }
  },
  {
    id: '58',
    urlPath: '/homes/58',
    title: '大阪豊能A邸',
    prefecture: '大阪府',
    description: '大阪・梅田駅から約1時間で行ける里山コミュニティ',
    isNew: false,
    name: 'ハナビ',
    tag: '提携',
    address: '〒5630101 大阪府豊能郡豊能町吉川67',
    location: {
      url: 'https://maps.google.com/?q=34.916453,135.445892',
      latitude: 34.916453,
      longitude: 135.445892
    }
  },
  {
    id: '56',
    urlPath: '/homes/56',
    title: '白馬A邸',
    prefecture: '長野県',
    description:
      '冬はスキー、夏は登山。年間通して楽しめるリゾート地白馬のゲストハウス。',
    isNew: false,
    name: '白馬シェア',
    tag: '提携',
    address: '〒3999301 長野県北安曇郡白馬村北城7071-17',
    location: {
      url: 'https://maps.google.com/?q=36.697526,137.863831',
      latitude: 36.697526,
      longitude: 137.863831
    }
  },
  {
    id: '55',
    urlPath: '/homes/55',
    title: '平井A邸',
    prefecture: '東京都',
    description: '静かで落ち着いた下町拠点。銭湯巡りがおすすめです',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1320035 東京都江戸川区平井5-15-10平井駅北口駅前ビル3階',
    location: {
      url: 'https://maps.google.com/?q=35.7065191,139.8419426',
      latitude: 35.7065191,
      longitude: 139.8419426
    }
  },
  {
    id: '57',
    urlPath: '/homes/57',
    title: '倉敷児島A邸',
    prefecture: '岡山県',
    description: '日本建築の技が凝縮された茶室のある倉敷の古民家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒7110911 岡山県倉敷市児島小川4-7-63',
    location: {
      url: 'https://maps.google.com/?q=34.474835,133.805258',
      latitude: 34.474835,
      longitude: 133.805258
    }
  },
  {
    id: '50',
    urlPath: '/homes/50',
    title: '取手A邸',
    prefecture: '茨城県',
    description: '各居室から日本庭園を堪能、ゆったりとした昭和の日本家屋',
    isNew: false,
    name: '',
    tag: '',
    address: '〒3020027 茨城県取手市駒場1-22-34',
    location: {
      url: 'https://maps.google.com/?q=35.91455,140.05599',
      latitude: 35.91455,
      longitude: 140.05599
    }
  },
  {
    id: '49',
    urlPath: '/homes/49',
    title: '小樽A邸',
    prefecture: '北海道',
    description: 'ノスタルジーを感じられる小樽の無人型ホテル拠点',
    isNew: false,
    name: 'UCHI LIVING STAY',
    tag: '提携',
    address: '〒0470028 北海道小樽市相生町4番40号',
    location: {
      url: 'https://maps.google.com/?q=43.19249678,141.00355',
      latitude: 43.19249678,
      longitude: 141.00355
    }
  },
  {
    id: '48',
    urlPath: '/homes/48',
    title: '小田原A邸',
    prefecture: '神奈川県',
    description: 'かまぼこ通りの元酒店をリノベーション！遊び心あふれる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2500012 神奈川県小田原市本町３丁目３−11',
    location: {
      url: 'https://maps.google.com/?q=35.247994,139.160944',
      latitude: 35.247994,
      longitude: 139.160944
    }
  },
  {
    id: '47',
    urlPath: '/homes/47',
    title: '南相馬A邸',
    prefecture: '福島県',
    description: '地元住民と滞在者が混ざり合う、泊まれるコワーキング',
    isNew: false,
    name: '小高パイオニアヴィレッジ',
    tag: '提携',
    address: '〒9792124 福島県南相馬市小高区本町1-87',
    location: {
      url: 'https://maps.google.com/?q=37.56286,140.991739',
      latitude: 37.56286,
      longitude: 140.991739
    }
  },
  {
    id: '46',
    urlPath: '/homes/46',
    title: '佐伯A邸',
    prefecture: '大分県',
    description: 'スナック街に佇む住人に愛されるゲストハウス',
    isNew: false,
    name: 'さんかくワサビ',
    tag: '提携',
    address: '〒8760845 大分県佐伯市内町3-26 2階',
    location: {
      url: 'https://maps.google.com/?q=32.95743,131.895852',
      latitude: 32.95743,
      longitude: 131.895852
    }
  },
  {
    id: '44',
    urlPath: '/homes/44',
    title: '富良野A邸',
    prefecture: '北海道',
    description: '富良野の森の中にいるような雰囲気を感じられる家',
    isNew: false,
    name: 'ホステルトマール',
    tag: '提携',
    address: '〒0760031 北海道富良野市本町2-27コンシェルジュフラノ ３Ｆ',
    location: {
      url: 'https://maps.google.com/?q=43.347141,142.388061',
      latitude: 43.347141,
      longitude: 142.388061
    }
  },
  {
    id: '43',
    urlPath: '/homes/43',
    title: '矢板A邸',
    prefecture: '栃木県',
    description: '日光・那須への玄関口。傾斜地に建つ3F建ての別荘',
    isNew: false,
    name: '',
    tag: '',
    address: '〒3291577 栃木県矢板市玉田431-100',
    location: {
      url: 'https://maps.google.com/?q=36.7523637,139.910797',
      latitude: 36.7523637,
      longitude: 139.910797
    }
  },
  {
    id: '45',
    urlPath: '/homes/45',
    title: '枚方A邸',
    prefecture: '大阪府',
    description: '高度経済成長期の昭和レトロ空間にタイムスリップ',
    isNew: false,
    name: '',
    tag: '',
    address: '〒5730102 大阪府枚方市長尾家具町3丁目7番29号',
    location: {
      url: 'https://maps.google.com/?q=34.836838,135.710408',
      latitude: 34.836838,
      longitude: 135.710408
    }
  },
  {
    id: '28',
    urlPath: '/homes/28',
    title: '大網白里A邸',
    prefecture: '千葉県',
    description: '住宅街に佇むゆったりくつろげる家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2993234 千葉県大網白里市みずほ台2−5−22',
    location: {
      url: 'https://maps.google.com/?q=35.5136603,140.3036653',
      latitude: 35.5136603,
      longitude: 140.3036653
    }
  },
  {
    id: '41',
    urlPath: '/homes/41',
    title: 'いすみA邸',
    prefecture: '千葉県',
    description: 'いすみ市浪花駅近の田舎情緒あふれる築浅の一軒家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2980012 千葉県いすみ市小沢1686',
    location: {
      url: 'https://maps.google.com/?q=35.2202319,140.3755069',
      latitude: 35.2202319,
      longitude: 140.3755069
    }
  },
  {
    id: '40',
    urlPath: '/homes/40',
    title: '岡山奉還町A邸',
    prefecture: '岡山県',
    description: '昭和なレトロ商店街のアート隠れ家「デニム部屋」に住まう',
    isNew: false,
    name: 'YADO KARI',
    tag: '提携',
    address: '〒7000026 岡山県岡山市北区奉還町3-8-7',
    location: {
      url: 'https://maps.google.com/?q=34.6690862,133.9116539',
      latitude: 34.6690862,
      longitude: 133.9116539
    }
  },
  {
    id: '39',
    urlPath: '/homes/39',
    title: '鎌倉B邸',
    prefecture: '神奈川県',
    description: '北鎌倉から徒歩3分。丘の上の森の図書室',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2470062 神奈川県鎌倉市山ノ内1275-1',
    location: {
      url: 'https://maps.google.com/?q=35.3355722,139.5449753',
      latitude: 35.3355722,
      longitude: 139.5449753
    }
  },
  {
    id: '38',
    urlPath: '/homes/38',
    title: '唐津A邸',
    prefecture: '佐賀県',
    description: '伝統が息づく歴史あふれる町にある「駅前複合商業施設」に住む',
    isNew: false,
    name: 'HOTEL KARAE',
    tag: '提携',
    address: '〒8470045 佐賀県唐津市京町1783番地KARAE 3階',
    location: {
      url: 'https://maps.google.com/?q=33.4472823,129.96912588',
      latitude: 33.4472823,
      longitude: 129.96912588
    }
  },
  {
    id: '37',
    urlPath: '/homes/37',
    title: '十日町A邸',
    prefecture: '新潟県',
    description:
      '世界最大規模の国際芸術祭「越後妻有アートトリエンナーレ」で里山生活',
    isNew: false,
    name: 'みんなの家',
    tag: '提携',
    address: '〒9498551 新潟県十日町市馬場丁1253-2',
    location: {
      url: 'https://maps.google.com/?q=37.0948327,138.7293769',
      latitude: 37.0948327,
      longitude: 138.7293769
    }
  },
  {
    id: '36',
    urlPath: '/homes/36',
    title: '清里A邸',
    prefecture: '山梨県',
    description: '八ヶ岳南麓のおとなの高原リゾート',
    isNew: false,
    name: '',
    tag: '',
    address: '〒4070301 山梨県北杜市高根町清里念場原3545番地1510',
    location: {
      url: 'https://maps.google.com/?q=35.8983333,138.4374444',
      latitude: 35.8983333,
      longitude: 138.4374444
    }
  },
  {
    id: '35',
    urlPath: '/homes/35',
    title: '千倉A邸',
    prefecture: '千葉県',
    description: '南房総の温暖な気候と風光明媚な漁師町に建つ家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2950021 千葉県南房総市千倉町平舘７８６−２',
    location: {
      url: 'https://maps.google.com/?q=34.9536067,139.9620069',
      latitude: 34.9536067,
      longitude: 139.9620069
    }
  },
  {
    id: '34',
    urlPath: '/homes/34',
    title: '鶴巻温泉B邸',
    prefecture: '神奈川県',
    description: 'ハイキングコースのふもとにあるオシャレな山小屋',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2570007 神奈川県秦野市鶴巻2074-10',
    location: {
      url: 'https://maps.google.com/?q=35.384079,139.2707277',
      latitude: 35.384079,
      longitude: 139.2707277
    }
  },
  {
    id: '33',
    urlPath: '/homes/33',
    title: '鶴巻温泉A邸',
    prefecture: '神奈川県',
    description: '新宿から1時間、日帰り温泉徒歩5分の好立地な温泉街',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2570002 神奈川県秦野市鶴巻南4-17-29',
    location: {
      url: 'https://maps.google.com/?q=35.380842,139.278631',
      latitude: 35.380842,
      longitude: 139.278631
    }
  },
  {
    id: '32',
    urlPath: '/homes/32',
    title: '逗子A邸',
    prefecture: '神奈川県',
    description: '小坪漁港とリゾートが融合するかわいい港町',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2490008 神奈川県逗子市小坪４丁目１９−１８',
    location: {
      url: 'https://maps.google.com/?q=35.2960021,139.5595185',
      latitude: 35.2960021,
      longitude: 139.5595185
    }
  },
  {
    id: '31',
    urlPath: '/homes/31',
    title: '習志野A邸',
    prefecture: '千葉県',
    description: '下町商店街の先に建つ「ベッドタウンの豪邸」',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2750011 千葉県習志野市大久保４丁目６−１１',
    location: {
      url: 'https://maps.google.com/?q=35.6893501,140.0541668',
      latitude: 35.6893501,
      longitude: 140.0541668
    }
  },
  {
    id: '30',
    urlPath: '/homes/30',
    title: '茂原A邸',
    prefecture: '千葉県',
    description: '朝日と眺めが気持ち良い拠点で、家族家守でお迎え入れます',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2970063 千葉県茂原市長谷６１３−３',
    location: {
      url: 'https://maps.google.com/?q=35.4306427,140.2744278',
      latitude: 35.4306427,
      longitude: 140.2744278
    }
  },
  {
    id: '29',
    urlPath: '/homes/29',
    title: '一宮B邸',
    prefecture: '千葉県',
    description: 'サーファーの町一宮の駅近の家',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2994302 千葉県長生郡一宮町田町13-6',
    location: {
      url: 'https://maps.google.com/?q=35.3772885,140.3653121',
      latitude: 35.3772885,
      longitude: 140.3653121
    }
  },
  {
    id: '27',
    urlPath: '/homes/27',
    title: 'みなかみA邸',
    prefecture: '群馬県',
    description: 'わーケーションに最適！ゆったりくつろぐ温泉ステイ',
    isNew: false,
    name: 'ホテル ファミリーオみなかみ',
    tag: '提携',
    address: '〒3791418 群馬県利根郡みなかみ町須川623',
    location: {
      url: 'https://maps.google.com/?q=36.7025619,138.9037134',
      latitude: 36.7025619,
      longitude: 138.9037134
    }
  },
  {
    id: '26',
    urlPath: '/homes/26',
    title: '益子A邸',
    prefecture: '栃木県',
    description: '東京から一番近い陶芸の産地で陶芸家気分を味わえる',
    isNew: false,
    name: 'ゲストハウスnobori',
    tag: '提携',
    address: '〒3214217 栃木県芳賀郡益子町益子4327-2',
    location: {
      url: 'https://maps.google.com/?q=36.4651642,140.1099949',
      latitude: 36.4651642,
      longitude: 140.1099949
    }
  },
  {
    id: '24',
    urlPath: '/homes/24',
    title: '御宿A邸',
    prefecture: '千葉県',
    description: '白い砂浜と青い海近くの自然豊かなリゾート拠点',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2995106 千葉県夷隅郡御宿町須賀497-18',
    location: {
      url: 'https://maps.google.com/?q=35.1854266,140.354615',
      latitude: 35.1854266,
      longitude: 140.354615
    }
  },
  {
    id: '23',
    urlPath: '/homes/23',
    title: '伊那A邸',
    prefecture: '長野県',
    description: '雄大な山々を眺め、新来者に優しい街で新たな交流を育む',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒3960026 長野県伊那市西町4880-7',
    location: {
      url: 'https://maps.google.com/?q=35.8376272,137.9575615',
      latitude: 35.8376272,
      longitude: 137.9575615
    }
  },
  {
    id: '22',
    urlPath: '/homes/22',
    title: '茅ヶ崎A邸',
    prefecture: '神奈川県',
    description: '牧歌的な風景が魅力の海の街',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2530073 神奈川県茅ヶ崎市中島381-3',
    location: {
      url: 'https://maps.google.com/?q=35.3300967,139.3720876',
      latitude: 35.3300967,
      longitude: 139.3720876
    }
  },
  {
    id: '16',
    urlPath: '/homes/16',
    title: '宇城A邸',
    prefecture: '熊本県',
    description: '1万冊の古本に囲まれた明治建築の町屋',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒8690621 熊本県宇城市小川町小川80',
    location: {
      url: 'https://maps.google.com/?q=32.58502,130.7072922',
      latitude: 32.58502,
      longitude: 130.7072922
    }
  },
  {
    id: '17',
    urlPath: '/homes/17',
    title: '多良木A邸',
    prefecture: '熊本県',
    description: '引退したブルートレインをリノベして”電車”生活！？',
    isNew: false,
    name: 'ブルートレインたらぎ',
    tag: '提携',
    address: '〒8680501 熊本県球磨郡多良木町多良木1534-2',
    location: {
      url: 'https://maps.google.com/?q=32.3006393,130.9132356',
      latitude: 32.3006393,
      longitude: 130.9132356
    }
  },
  {
    id: '15',
    urlPath: '/homes/15',
    title: '清川A邸',
    prefecture: '神奈川県',
    description: '美しい自然に囲まれた秘境 神奈川県唯一の村 「清川村」',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2430112 神奈川県愛甲郡清川村煤ヶ谷1780',
    location: {
      url: 'https://maps.google.com/?q=35.476885,139.2817864',
      latitude: 35.476885,
      longitude: 139.2817864
    }
  },
  {
    id: '14',
    urlPath: '/homes/14',
    title: '二子玉川A邸',
    prefecture: '東京都',
    description: '良質家具に囲まれた世田谷生活',
    isNew: false,
    name: '',
    tag: '',
    address: '〒1570067 東京都世田谷区喜多見1-33-14',
    location: {
      url: 'https://maps.google.com/?q=35.6246567,139.5968677',
      latitude: 35.6246567,
      longitude: 139.5968677
    }
  },
  {
    id: '13',
    urlPath: '/homes/13',
    title: '新富A邸',
    prefecture: '宮崎県',
    description: '美しい海と豊かな大地を有する日向の国で、のどかな暮らしを',
    isNew: false,
    name: '新富ノ家',
    tag: '提携',
    address: '〒8891402 宮崎県宮崎県児湯郡新富町三納代２２６６－８',
    location: {
      url: 'https://maps.google.com/?q=32.0717458,131.5005151',
      latitude: 32.0717458,
      longitude: 131.5005151
    }
  },
  {
    id: '8',
    urlPath: '/homes/8',
    title: '札幌A邸',
    prefecture: '北海道',
    description: '憧れの北海道暮らしは札幌から',
    isNew: false,
    name: 'BUIE ARTROOM',
    tag: '提携',
    address: '〒0620931 北海道札幌市豊平区平岸一条2丁目8-8',
    location: {
      url: 'https://maps.google.com/?q=43.0413887,141.3646875',
      latitude: 43.0413887,
      longitude: 141.3646875
    }
  },
  {
    id: '4',
    urlPath: '/homes/4',
    title: '鎌倉A邸',
    prefecture: '神奈川県',
    description: '鎌倉の四季と暮らす 休日は江ノ電でお出掛けも',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2470061 神奈川県鎌倉市台1544',
    location: {
      url: 'https://maps.google.com/?q=35.3402827,139.5363227',
      latitude: 35.3402827,
      longitude: 139.5363227
    }
  },
  {
    id: '1',
    urlPath: '/homes/1',
    title: '南房総A邸',
    prefecture: '千葉県',
    description: '玄関を出たら目の前は海 波の音が聴こえる家',
    isNew: false,
    name: 'ADDress',
    tag: '提携',
    address: '〒2992402 千葉県南房総市富浦町豊岡847-5',
    location: {
      url: 'https://maps.google.com/?q=35.0525664,139.8291025',
      latitude: 35.0525664,
      longitude: 139.8291025
    }
  },
  {
    id: '11',
    urlPath: '/homes/11',
    title: '岩美A邸',
    prefecture: '鳥取県',
    description: '築120年の古民家で建てられた「新築の古い家」',
    isNew: false,
    name: 'ひでしま',
    tag: '提携',
    address: '〒6810073 鳥取県岩美郡岩美町大谷2182-668',
    location: {
      url: 'https://maps.google.com/?q=35.5782118,134.2979924',
      latitude: 35.5782118,
      longitude: 134.2979924
    }
  },
  {
    id: '10',
    urlPath: '/homes/10',
    title: '三好A邸',
    prefecture: '徳島県',
    description: '「へそ」から四国をホッピング 三好を知れる交流も',
    isNew: false,
    name: 'heso camp',
    tag: '提携',
    address: '〒7780012 徳島県三好市池田町イケミナミ2091-1',
    location: {
      url: 'https://maps.google.com/?q=34.025116,133.7998697',
      latitude: 34.025116,
      longitude: 133.7998697
    }
  },
  {
    id: '9',
    urlPath: '/homes/9',
    title: '美馬A邸',
    prefecture: '徳島県',
    description: '時間帯によって表情が変わるうだつの町並みの散策がおすすめ。',
    isNew: false,
    name: 'のどけや',
    tag: '提携',
    address: '〒7793610 徳島県美馬市脇町脇町大字脇町117−1',
    location: {
      url: 'https://maps.google.com/?q=34.0686899,134.1457313',
      latitude: 34.0686899,
      longitude: 134.1457313
    }
  },
  {
    id: '2',
    urlPath: '/homes/2',
    title: '一宮A邸',
    prefecture: '千葉県',
    description: '歩いて九十九里浜へ 木造瓦葺きの平屋でのんびり海暮らし',
    isNew: false,
    name: '',
    tag: '',
    address: '〒2994301 千葉県長生郡一宮町一宮507-3',
    location: {
      url: 'https://maps.google.com/?q=35.3777707,140.3814773',
      latitude: 35.3777707,
      longitude: 140.3814773
    }
  }
]
