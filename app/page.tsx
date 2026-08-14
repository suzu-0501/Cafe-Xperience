import Image from "next/image";

const links = {
  store: "https://store.starbucks.co.jp/",
  menu: "https://menu.starbucks.co.jp/",
  mobile: "https://www.starbucks.co.jp/mobile-app/",
  instagram: "https://www.instagram.com/starbucks_j/",
  anniversary: "https://www.starbucks.co.jp/30th/",
  seasonal:
    "https://stories.starbucks.co.jp/press/2026/pr-2026-07-15/",
};

const seasonal = [
  {
    number: "01",
    mood: "濃厚に、果実を楽しむ",
    name: "ぎゅぎゅっと オレンジ ＆ マンゴー フラペチーノ®",
    text: "オレンジの果肉感とマンゴーのコクを、ひと口にぎゅっと。",
    image: "/images/orange-frappuccino.jpg",
    alt: "オレンジ＆マンゴー フラペチーノの公式商品イメージ",
  },
  {
    number: "02",
    mood: "シュワっと、軽やかに",
    name: "チラックス ソーダ オレンジ ＆ マンゴー",
    text: "果実とゼリー、心地よい炭酸が重なる爽快な一杯。",
    image: "/images/orange-chillax.jpg",
    alt: "チラックス ソーダ オレンジ＆マンゴーの公式商品イメージ",
  },
  {
    number: "03",
    mood: "ティーで、すっきりと",
    name: "クラフト ジューシー オレンジ ＆ マンゴー ティー",
    text: "ジューシーな果実と、ほどよい渋みのブラックティー。",
    image: "/images/orange-tea.jpg",
    alt: "クラフト ジューシー オレンジ＆マンゴー ティーの公式商品イメージ",
  },
];

const moods = [
  { time: "07:30", title: "朝の一杯", text: "ゆっくり今日を始めたいときに", tone: "cream", icon: "☀" },
  { time: "12:15", title: "移動の途中", text: "気分を軽やかに変えたいときに", tone: "orange", icon: "↗" },
  { time: "15:00", title: "ひと休み", text: "甘い時間を楽しみたいときに", tone: "pink", icon: "✦" },
  { time: "19:10", title: "一日の終わり", text: "ほっと自分に戻りたいときに", tone: "green", icon: "☾" },
];

const classics = [
  { name: "スターバックス ラテ", type: "ESPRESSO", color: "latte" },
  { name: "ソイ ラテ", type: "PLANT BASED", color: "soy" },
  { name: "アーモンドミルク ラテ", type: "PLANT BASED", color: "almond" },
  { name: "カプチーノ", type: "ESPRESSO", color: "cappuccino" },
  { name: "カフェ モカ", type: "CHOCOLATE", color: "mocha" },
  { name: "カフェ アメリカーノ", type: "ESPRESSO", color: "americano" },
  { name: "キャラメル フラペチーノ®", type: "FRAPPUCCINO®", color: "caramel" },
  { name: "抹茶 クリーム フラペチーノ®", type: "FRAPPUCCINO®", color: "matcha" },
];

const gallery = [
  { src: "/images/orange-mango-hero.jpg", alt: "オレンジ＆マンゴーの3種のビバレッジ" },
  { src: "/images/orange-frappuccino.jpg", alt: "オレンジ＆マンゴー フラペチーノ" },
  { src: "/images/orange-chillax.jpg", alt: "オレンジ＆マンゴーのチラックス ソーダ" },
  { src: "/images/orange-tea.jpg", alt: "オレンジ＆マンゴー ティー" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ExternalButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ページの先頭へ">
          <span className="brand-mark">S</span>
          <span className="brand-type">
            <b>STARBUCKS</b>
            <small>COFFEE · JAPAN</small>
          </span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#seasonal">おすすめ</a>
          <a href="#classic">定番</a>
          <a href="#enjoy">楽しみ方</a>
          <a href="#story">About</a>
        </nav>
        <a className="header-cta" href={links.store} target="_blank" rel="noreferrer">
          店舗を探す <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-visual">
          <Image
            src="/images/orange-mango-hero.jpg"
            alt="オレンジ＆マンゴーの3種のビバレッジ"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 58vw"
          />
          <span className="hero-sticker">SUMMER<br />MOOD!</span>
          <span className="hero-caption">ORANGE &amp; MANGO / 2026</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> FIND YOUR CUP, TODAY</p>
          <h1>今日は、<br /><em>どんな一杯</em>にする？</h1>
          <p className="hero-lead">
            季節のビバレッジから、いつものラテまで。<br className="desktop-only" />
            気分に合う一杯を見つけて、近くのスターバックスへ。
          </p>
          <div className="button-row">
            <ExternalButton href={links.store}>近くの店舗を探す</ExternalButton>
            <ExternalButton href={links.menu} secondary>メニューを見る</ExternalButton>
          </div>
          <div className="hero-note">
            <span>SCROLL</span><i />
            <p>季節のおすすめを<br />見つけにいこう。</p>
          </div>
        </div>
      </section>

      <section className="section seasonal-section" id="seasonal">
        <div className="section-head split-head">
          <div>
            <p className="eyebrow orange"><span /> SEASONAL PICKS</p>
            <h2>今のおすすめ</h2>
          </div>
          <p>同じオレンジ＆マンゴーでも、濃厚・爽快・ティー。<br />気分で選べる3つの楽しみ方。</p>
        </div>
        <div className="seasonal-grid">
          {seasonal.map((item) => (
            <article className="seasonal-card" key={item.name}>
              <div className="seasonal-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 82vw, 33vw" />
                <span className="card-number">{item.number}</span>
              </div>
              <div className="seasonal-copy">
                <p>{item.mood}</p>
                <h3>{item.name}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="section-action">
          <ExternalButton href={links.seasonal} secondary>公式情報で詳しく見る</ExternalButton>
          <small>※ 一時的な欠品または早期販売終了となる場合があります。</small>
        </div>
      </section>

      <section className="section mood-section" id="enjoy">
        <div className="section-head centered">
          <p className="eyebrow"><span /> PICK A MOMENT</p>
          <h2>今の気分から、<br />選んでみる。</h2>
          <p>いつもの時間にも、ちょっと気分を変えたい時にも。</p>
        </div>
        <div className="mood-grid">
          {moods.map((mood) => (
            <article className={`mood-card ${mood.tone}`} key={mood.title}>
              <div className="mood-top"><span>{mood.time}</span><b>{mood.icon}</b></div>
              <div>
                <h3>{mood.title}</h3>
                <p>{mood.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section classic-section" id="classic">
        <div className="section-head split-head">
          <div>
            <p className="eyebrow light"><span /> THE CLASSICS</p>
            <h2>いつもの一杯も、<br />気分に合わせて。</h2>
          </div>
          <p>ラテ、モカ、フラペチーノ®。<br />定番から選ぶ楽しさも。</p>
        </div>
        <div className="classic-grid">
          {classics.map((item, index) => (
            <article className="classic-card" key={item.name}>
              <div className={`cup-stage ${item.color}`} aria-hidden="true">
                <span className="cup-lid" />
                <span className="cup"><i>S</i></span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <p>{item.type}</p>
              <h3>{item.name}</h3>
              <a href={links.menu} target="_blank" rel="noreferrer" aria-label={`${item.name}を公式メニューで見る`}>
                公式メニューへ <Arrow />
              </a>
            </article>
          ))}
        </div>
        <div className="section-action dark-action">
          <ExternalButton href={links.menu}>公式メニューをもっと見る</ExternalButton>
          <small>※ 価格・取扱商品は店舗によって異なる場合があります。</small>
        </div>
      </section>

      <section className="customize-section">
        <div className="customize-image">
          <Image src="/images/orange-frappuccino.jpg" alt="オレンジ＆マンゴー フラペチーノのカスタマイズイメージ" fill sizes="(max-width: 767px) 100vw, 52vw" />
          <span className="scribble">MY CUP,<br />MY WAY.</span>
        </div>
        <div className="customize-copy">
          <p className="eyebrow orange"><span /> CUSTOMIZE</p>
          <h2>ひと工夫で、<br />もっと自分好みに。</h2>
          <p className="intro">その日の気分に合わせて、味わいを少し変えてみる。</p>
          <ol className="custom-list">
            <li><span>01</span><div><h3>さらに爽やかに</h3><p>シトラス果肉を追加して、果実感をプラス。</p></div></li>
            <li><span>02</span><div><h3>コクをもうひとつ</h3><p>ホワイトモカフレーバーシロップを追加。</p></div></li>
            <li><span>03</span><div><h3>すっきり楽しむ</h3><p>ノンホイップで、軽やかな仕上がりに。</p></div></li>
          </ol>
          <small>※ カスタマイズの可否・追加料金は、注文時に店舗でご確認ください。</small>
        </div>
      </section>

      <section className="pairing-section">
        <div className="pairing-copy">
          <span className="pair-tag"># SWEET PAIRING</span>
          <p className="eyebrow"><span /> FOOD &amp; BEVERAGE</p>
          <h2>甘いお供と、<br />もうひとつ楽しい時間。</h2>
          <p>ドリンクとフードの組み合わせも、その日の気分で。果実の一杯に、甘いひと皿を添えてみるのも楽しみ方のひとつです。</p>
          <ExternalButton href={links.menu} secondary>フードメニューを見る</ExternalButton>
        </div>
        <div className="pairing-art" aria-label="ドリンクとスイーツを合わせる楽しみ方のイメージ">
          <div className="orange-slice">GOOD<br />TOGETHER</div>
          <div className="drink-shape"><span>S</span></div>
          <div className="cake-shape"><i /></div>
          <p>DRINK <b>＋</b> SWEETS</p>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-inner">
          <p className="eyebrow light"><span /> 30 YEARS IN JAPAN</p>
          <div className="story-title">
            <h2>一杯から、<br />つながる時間へ。</h2>
            <span className="thirty">30<small>YEARS</small></span>
          </div>
          <div className="story-bottom">
            <p>1996年、東京・銀座に日本第1号店をオープン。2026年に日本上陸30周年を迎えました。変わらないのは、一杯を通じた人とのつながりです。</p>
            <ExternalButton href={links.anniversary} secondary>30周年ストーリーを見る</ExternalButton>
          </div>
        </div>
      </section>

      <section className="section instagram-section">
        <div className="section-head split-head">
          <div>
            <p className="eyebrow orange"><span /> @STARBUCKS_J</p>
            <h2>Instagramで、<br />次の一杯を。</h2>
          </div>
          <div className="insta-intro"><p>季節の新商品や楽しみ方をチェック。</p><ExternalButton href={links.instagram} secondary>Instagramを見る</ExternalButton></div>
        </div>
        <div className="instagram-grid">
          {gallery.map((item, i) => (
            <a href={links.instagram} target="_blank" rel="noreferrer" key={`${item.src}-${i}`} aria-label="スターバックス ジャパン公式Instagramを見る">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 50vw, 25vw" />
              <span><b>0{i + 1}</b><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="store-section">
        <div className="store-map" aria-hidden="true">
          <span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" />
          <span className="map-dot dot-one">S</span><span className="map-dot dot-two">S</span><span className="map-dot dot-three">S</span>
          <b>FIND<br />YOUR<br />STORE</b>
        </div>
        <div className="store-copy">
          <p className="eyebrow"><span /> STORE SEARCH</p>
          <h2>近くの<br />スターバックスへ。</h2>
          <p>今いる場所や行きたいエリアから、店舗を探せます。</p>
          <div className="button-row">
            <ExternalButton href={links.store}>近くの店舗を探す</ExternalButton>
            <ExternalButton href={links.mobile} secondary>モバイルオーダーを見る</ExternalButton>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow light"><span /> READY WHEN YOU ARE</p>
        <h2>今日の一杯を、<br />近くのお店で。</h2>
        <p>気になる一杯が見つかったら、次はお店を探すだけ。</p>
        <ExternalButton href={links.store}>近くの店舗を探す</ExternalButton>
        <span className="final-doodle">SEE YOU<br />SOON!</span>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label="ページの先頭へ">
            <span className="brand-mark">S</span>
            <span className="brand-type"><b>STARBUCKS</b><small>COFFEE · JAPAN</small></span>
          </a>
          <div className="footer-links">
            <a href="https://www.starbucks.co.jp/" target="_blank" rel="noreferrer">公式サイト <Arrow /></a>
            <a href={links.menu} target="_blank" rel="noreferrer">メニュー <Arrow /></a>
            <a href={links.store} target="_blank" rel="noreferrer">店舗検索 <Arrow /></a>
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <div className="footer-note">
          <p>本ページは営業提案用サンプルです。掲載情報は制作時点の公開情報・提供資料に基づきます。</p>
          <span>DESIGN SAMPLE / 2026</span>
        </div>
      </footer>
    </main>
  );
}
