import Image from "next/image";
import { classicProducts } from "./data/classic-products";
import { galleryItems } from "./data/gallery";
import { LINKS } from "./data/links";
import { moodItems } from "./data/mood-items";
import { navigation } from "./data/navigation";
import { seasonalProducts } from "./data/seasonal-products";
import { RevealOnScroll } from "./reveal-on-scroll";

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
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function BrandLabel({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-label ${footer ? "footer-brand-label" : ""}`}>
      <span className="brand-name">STARBUCKS COFFEE</span>
      <span className="brand-meta">JAPAN · SALES SAMPLE</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ページの先頭へ">
          <BrandLabel />
        </a>
        <nav aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-cta" href={LINKS.storeSearch} target="_blank" rel="noopener noreferrer">
          店舗を探す <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-visual">
            <Image
              className="hero-static-image"
              src="/images/orange-mango-hero.jpg"
              alt="オレンジ＆マンゴーの3種のビバレッジ"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 57vw"
            />
            <div
              className="hero-mobile-loop"
              role="img"
              aria-label="オレンジ＆マンゴーの3種のビバレッジ"
            >
              <div className="hero-mobile-loop-track" aria-hidden="true">
                <span className="hero-mobile-loop-frame" />
              </div>
            </div>
            <span className="hero-sticker" aria-hidden="true">SUMMER<br />MOOD!</span>
            <span className="hero-caption">ORANGE &amp; MANGO / 2026</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span /> FIND YOUR CUP, TODAY</p>
            <h1 id="hero-title">今日は、<br /><em>どんな一杯</em>に<br className="mobile-break" />する？</h1>
            <p className="hero-lead">
              季節のビバレッジから、いつものラテまで。<br className="desktop-only" />
              気分に合う一杯を見つけて、近くのスターバックスへ。
            </p>
            <div className="button-row">
              <ExternalButton href={LINKS.storeSearch}>近くの店舗を探す</ExternalButton>
              <ExternalButton href={LINKS.menu} secondary>メニューを見る</ExternalButton>
            </div>
            <div className="hero-note" aria-hidden="true">
              <span>SCROLL</span><i />
              <p>季節のおすすめを<br />見つけにいこう。</p>
            </div>
          </div>
        </section>

        <section className="section seasonal-section" id="seasonal" aria-labelledby="seasonal-title">
          <div className="section-head split-head" data-reveal="">
            <div>
              <p className="eyebrow orange"><span /> SEASONAL</p>
              <h2 id="seasonal-title">今のおすすめ</h2>
            </div>
            <p>同じオレンジ＆マンゴーでも、濃厚・爽快・ティー。<br />気分で選べる3つの楽しみ方。</p>
          </div>
          <div className="seasonal-grid" data-reveal-list="">
            {seasonalProducts.map((item) => (
              <article className="seasonal-card" key={item.id}>
                <div className="seasonal-image">
                  <Image src={item.image} alt={item.alt} fill loading="lazy" sizes="(max-width: 767px) 82vw, 33vw" />
                  <span className="card-number" aria-hidden="true">{item.number}</span>
                </div>
                <div className="seasonal-copy">
                  <p>{item.mood}</p>
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action" data-reveal="">
            <ExternalButton href={LINKS.menu} secondary>公式メニューで見る</ExternalButton>
            <small>商品は一時的な欠品または早期に販売終了する場合があります。</small>
          </div>
        </section>

        <section className="section mood-section" id="mood" aria-labelledby="mood-title">
          <div className="section-head centered" data-reveal="">
            <p className="eyebrow"><span /> YOUR MOMENT</p>
            <h2 id="mood-title">今の気分から、<br />選んでみる。</h2>
            <p>いつもの時間にも、ちょっと気分を変えたい時にも。</p>
          </div>
          <div className="mood-grid" data-reveal-list="">
            {moodItems.map((item) => (
              <article className={`mood-card ${item.tone}`} key={item.id}>
                <span className="mood-orbit" aria-hidden="true" />
                <div className="mood-top"><span>{item.time}</span><b aria-hidden="true">{item.icon}</b></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section classic-section" id="classic" aria-labelledby="classic-title">
          <div className="section-head split-head" data-reveal="">
            <div>
              <p className="eyebrow light"><span /> CLASSICS</p>
              <h2 id="classic-title">いつもの一杯も、<br />気分に合わせて。</h2>
            </div>
            <p>ラテ、モカ、フラペチーノ®。<br />定番から選ぶ楽しさも。</p>
          </div>
          <div className="classic-grid" data-reveal-list="">
            {classicProducts.map((item, index) => (
              <article className="classic-card" key={item.id}>
                <div className={`classic-visual ${item.tone}`} aria-label="商品画像は公式メニューでご確認ください">
                  <span>CLASSIC</span>
                  <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
                  <small>IMAGE NOT SHOWN</small>
                </div>
                <p>{item.category}</p>
                <h3>{item.name}</h3>
                <a href={LINKS.menu} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}を公式メニューで見る`}>
                  公式メニューへ <Arrow />
                </a>
              </article>
            ))}
          </div>
          <div className="section-action dark-action" data-reveal="">
            <ExternalButton href={LINKS.menu}>公式メニューをもっと見る</ExternalButton>
            <small>※ 価格・取扱商品は店舗によって異なる場合があります。</small>
          </div>
        </section>

        <section className="customize-section" id="customize" aria-labelledby="customize-title">
          <div className="customize-image" data-reveal="from-left">
            <Image src="/images/orange-frappuccino.jpg" alt="ぎゅぎゅっと オレンジ＆マンゴー フラペチーノの商品写真" fill loading="lazy" sizes="(max-width: 767px) 100vw, 52vw" />
            <span className="scribble" aria-hidden="true">MY CUP,<br />MY WAY.</span>
          </div>
          <div className="customize-copy" data-reveal="from-right">
            <p className="eyebrow orange"><span /> CUSTOMIZE</p>
            <h2 id="customize-title">ひと工夫で、<br />もっと自分好みに。</h2>
            <p className="intro">その日の気分に合わせて、味わいを少し変えてみる。</p>
            <ol className="custom-list">
              <li><span>01</span><div><h3>爽やかさを重ねて</h3><p>ノンホイップ＋シトラス果肉</p></div></li>
              <li><span>02</span><div><h3>果実とチョコの組み合わせ</h3><p>シトラス果肉＋チョコレートソース</p></div></li>
              <li><span>03</span><div><h3>まろやかな味わいへ</h3><p>ホワイトモカフレーバーシロップ</p></div></li>
            </ol>
            <small>※ カスタマイズの可否・追加料金は、注文時に店舗でご確認ください。</small>
          </div>
        </section>

        <section className="pairing-section" id="pairing" aria-labelledby="pairing-title">
          <div className="pairing-placeholder" role="img" aria-label="フードペアリング投稿画像の差し替え枠" data-reveal="from-left">
            <span aria-hidden="true">PAIRING PHOTO</span>
            <p>提供画像<br />差し替え予定</p>
            <small>ORIGINAL ASSET PENDING</small>
          </div>
          <div className="pairing-copy" data-reveal="from-right">
            <span className="pair-tag"># SWEET PAIRING</span>
            <p className="eyebrow"><span /> PAIRING</p>
            <h2 id="pairing-title">甘いお供と、<br />もうひとつ楽しい時間。</h2>
            <p>ドリンクとフードの組み合わせも、その日の気分で。</p>
            <small>※ 正式商品名・価格・販売期間は掲載していません。</small>
          </div>
        </section>

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="story-inner">
            <p className="eyebrow" data-reveal=""><span /> OUR STORY</p>
            <div className="story-title" data-reveal="">
              <h2 id="story-title">一杯から、<br />つながる時間へ。</h2>
              <span className="thirty" aria-hidden="true">30<small>YEARS</small></span>
            </div>
            <div className="story-panel" aria-hidden="true" data-reveal="">
              <span>1996</span>
              <i />
              <span>2026</span>
              <strong>ONE CUP,<br />MANY MOMENTS.</strong>
            </div>
            <div className="story-bottom" data-reveal="">
              <p>1996年、東京・銀座から始まった日本のスターバックス。2026年で30周年。一杯を通じて、人やコミュニティとのつながりを大切にしてきました。</p>
              <ExternalButton href={LINKS.brandStory} secondary>30周年ストーリーを見る</ExternalButton>
            </div>
          </div>
        </section>

        <section className="section instagram-section" id="instagram" aria-labelledby="instagram-title">
          <div className="section-head split-head" data-reveal="">
            <div>
              <p className="eyebrow orange"><span /> INSTAGRAM</p>
              <h2 id="instagram-title">Instagramで、<br />次の一杯を。</h2>
            </div>
            <div className="insta-intro">
              <p>季節の新商品や楽しみ方をチェック。</p>
              <ExternalButton href={LINKS.instagram} secondary>Instagramを見る</ExternalButton>
            </div>
          </div>
          <div className="instagram-grid" data-reveal-list="">
            {galleryItems.map((item, index) => (
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" key={item.src} aria-label="スターバックス ジャパン公式Instagramを見る">
                <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="(max-width: 767px) 50vw, 25vw" />
                <span><b>{String(index + 1).padStart(2, "0")}</b><Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="store-section" id="store-search" aria-labelledby="store-title">
          <div className="store-visual" aria-hidden="true" data-reveal="from-left">
            <span className="store-pin" />
            <b aria-hidden="true">FIND<br />YOUR<br />STORE</b>
            <small>OFFICIAL STORE SEARCH</small>
          </div>
          <div className="store-copy" data-reveal="from-right">
            <p className="eyebrow"><span /> FIND A STORE</p>
            <h2 id="store-title">近くの<br />スターバックスへ。</h2>
            <p>今いる場所や行きたいエリアから、店舗を探せます。</p>
            <div className="button-row">
              <ExternalButton href={LINKS.storeSearch}>近くの店舗を探す</ExternalButton>
              <ExternalButton href={LINKS.mobileOrder} secondary>モバイルオーダーを見る</ExternalButton>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title" data-reveal="">
          <p className="eyebrow light"><span /> READY WHEN YOU ARE</p>
          <h2 id="final-title">今日の一杯を、<br />近くのお店で。</h2>
          <p>気になる一杯が見つかったら、次はお店を探すだけ。</p>
          <ExternalButton href={LINKS.storeSearch}>近くの店舗を探す</ExternalButton>
          <span className="final-doodle" aria-hidden="true">SEE YOU<br />SOON!</span>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label="ページの先頭へ">
            <BrandLabel footer />
          </a>
          <div className="footer-links">
            <a href={LINKS.website} target="_blank" rel="noopener noreferrer">公式サイト <Arrow /></a>
            <a href={LINKS.menu} target="_blank" rel="noopener noreferrer">メニュー <Arrow /></a>
            <a href={LINKS.storeSearch} target="_blank" rel="noopener noreferrer">店舗検索 <Arrow /></a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <div className="footer-note">
          <p>本ページは営業提案用サンプルです。<br />掲載情報は制作時点の公開情報・提供資料に基づきます。</p>
          <span>DESIGN SAMPLE / 2026</span>
        </div>
      </footer>
    </>
  );
}
