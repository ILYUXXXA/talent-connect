import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "TalentHub — школьные мероприятия" }] }),
  staticData: { importedDocument: { html: { "lang": "ru" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <main className="th-landing [font-family:inherit] [overflow:hidden]">
          <header className="th-header [backdrop-filter:blur(18px)] [border:0px] [border-bottom:1px_solid_rgb(232,237,247)]! [top:0px] [z-index:40] [@media(width_<=_820px)]:min-h-[70px]">
            <div className="th-header-inner items-center flex justify-between max-w-[1240px] [height:100%] [margin:0px_auto] [@media(width_<=_820px)]:flex-wrap [@media(width_<=_820px)]:gap-[12px]">
              <a className="th-logo items-center inline-flex gap-[10px] no-underline [font-weight:850] [letter-spacing:-0.06em]" href="/">
                <span className="th-logo-mark">t.</span>
                <span>Talent<span>Hub</span></span>
              </a>
              <nav className="th-nav items-center gap-[8px] mr-[35px] [margin-left:auto] [@media(width_<=_820px)]:justify-start [@media(width_<=_820px)]:[order:3] [@media(width_<=_820px)]:[overflow-x:auto] [@media(width_<=_820px)]:[width:100%]">
                <a className="rounded-[10px] no-underline [font-weight:750]" href="#platform">Об экосистеме</a>
                <a className="rounded-[10px] no-underline [font-weight:750]" href="#how">Как это работает</a>
                <a className="rounded-[10px] no-underline [font-weight:750]" href="#partners">Партнёрства</a>
              </nav>
              <a className="th-login items-center inline-flex gap-[12px] no-underline [font-weight:800] [@media(width_<=_820px)]:[margin-left:auto]" href="/auth">Войти <span>→</span></a>
            </div>
          </header>
          <ImportedSection />
          <section className="th-intro grid max-w-[1240px] [border:0px] [margin:auto]" id="platform">
            <div className="th-section-label items-center flex gap-[8px] [font-size:10px] [font-weight:850] [letter-spacing:0.13em]">TALENTHUB / ЭКОСИСТЕМА</div>
            <div className="items-end grid">
              <h2 className="[margin:0px]">От интереса — к реальным достижениям</h2>
              <p className="[line-height:1.85]">Возможности для учащихся и инструменты для организаций собраны в одной экосистеме. Находите события, подавайте заявки, сохраняйте результаты и выстраивайте сотрудничество в единой среде.</p>
            </div>
          </section>
          <ImportedSection2 />
          <section className="th-partners items-center grid max-w-[1180px] [overflow:hidden]" id="partners">
            <div className="th-partners-copy">
              <div className="th-section-label items-center flex gap-[8px] [font-size:10px] [font-weight:850] [letter-spacing:0.13em]">СОТРУДНИЧЕСТВО</div>
              <h2 className="max-w-[410px] [margin:15px_0px]">Создавайте возможности вместе</h2>
              <p className="max-w-[470px] [line-height:1.85]">Учреждения могут находить компании и академии для совместных проектов. Партнёры, в свою очередь, могут предлагать образовательные инициативы и находить заинтересованные учреждения.</p>
              <a className="th-partner-link items-center inline-flex gap-[12px] mt-[20px] no-underline [font-size:13px] [font-weight:800]" href="/auth">Стать частью TalentHub <span>→</span></a>
            </div>
            <div className="th-partner-diagram items-center grid gap-[12px] relative [z-index:1]">
              <div className="th-partner-card items-center rounded-[13px] flex flex-col gap-[8px] justify-center text-center [backdrop-filter:blur(8px)] [border:1px_solid_rgba(255,255,255,0.22)]">
                <span className="rounded-[8px] grid h-[43px] place-items-center w-[43px] [font-size:21px]">⌂</span>
                <b>Образовательные учреждения</b>
                <small>Школы и организации</small>
              </div>
              <div className="th-partner-connector grid place-items-center [font-size:20px]">
                <span>↔</span>
              </div>
              <div className="th-partner-card items-center rounded-[13px] flex flex-col gap-[8px] justify-center text-center [backdrop-filter:blur(8px)] [border:1px_solid_rgba(255,255,255,0.22)]">
                <span className="rounded-[8px] grid h-[43px] place-items-center w-[43px] [font-size:21px]">▦</span>
                <b>Компании и академии</b>
                <small>Партнёры и инициативы</small>
              </div>
            </div>
          </section>
          <ImportedSectionTalentHub />
          <section className="th-cta rounded-[22px] flex justify-between max-w-[1236px] [border:1px_solid_rgb(220,230,255)] [@media(width_<=_600px)]:flex-col">
            <div>
              <div className="th-section-label items-center flex gap-[8px] [font-size:10px] [font-weight:850] [letter-spacing:0.13em]">TALENTHUB</div>
              <h2 className="max-w-[570px] [margin:10px_0px]">Начните открывать новые возможности</h2>
              <p className="[font-size:14px] [margin:0px]">Присоединяйтесь к единой образовательной среде.</p>
            </div>
            <a className={"th-primary items-center inline-flex gap-[18px] justify-center no-underline [font-weight:750] [&:hover]:[transform:translateY(-1px)]"} href="/auth">Открыть экосистему <span className="[font-size:17px]">→</span></a>
          </section>
          <footer className="th-footer items-center flex justify-between max-w-[1320px] [border-top:1px_solid_rgb(237,241,247)] [margin:auto] [@media(width_<=_560px)]:flex-wrap [@media(width_<=_600px)]:flex-wrap">
            <a className="th-logo items-center inline-flex gap-[10px] no-underline [font-weight:850] [letter-spacing:-0.06em]" href="/">
              <span className="th-logo-mark">t.</span>
              <span>Talent<span>Hub</span></span>
            </a>
            <span className="[font-size:9px] [@media(width_<=_600px)]:[order:3] [@media(width_<=_600px)]:[width:100%]">Образовательная экосистема возможностей и партнёрств</span>
            <small className="[font-size:9px]">© TalentHub</small>
          </footer>
        </main>
      </div>
      <div className="absolute [top:0px] [left:0px] [z-index:2147483647]" />
    </>
  );
}

function ImportedSection() {
  return (
    <section className="th-hero th-hero-clean items-center block! isolate max-w-none! [margin:0px]! [overflow:hidden]">
      <div className="th-clean-inner max-w-[1120px] relative text-left [margin:0px_auto] [width:100%]">
        <div className="th-overline items-center rounded-[99px] inline-flex gap-[10px] [border:1px_solid_rgb(219,228,255)] [border-color:rgb(229,234,255)]! [font-size:9px] [font-weight:850] [letter-spacing:0.09em] [padding:8px_12px]"><span className="rounded-[50%] h-[8px] w-[8px] [box-shadow:rgb(230,247,241)_0px_0px_0px_4px]" /> ОБРАЗОВАТЕЛЬНАЯ ЭКОСИСТЕМА</div>
        <h1 className="whitespace-nowrap [width:100%] [@media(width_<=_560px)]:whitespace-nowrap">Твои возможности<br /><em className="not-italic">В одном месте</em></h1>
        <p className="max-w-[620px] [margin:0px]">TalentHub — это образовательная экосистема, которая объединяет школьников, родителей, школы, компании и образовательные организации вокруг развития талантов, образовательных возможностей и достижений.</p>
        <div className="th-hero-actions flex [@media(width_<=_600px)]:flex-col [@media(width_<=_600px)]:flex-wrap">
          <a className={"th-primary items-center inline-flex gap-[22px] justify-center no-underline [font-weight:750] [&:hover]:[transform:translateY(-1px)]"} href="/auth">Открыть TalentHub <span className="[font-size:17px]">→</span></a>
          <a className="th-secondary no-underline [font-weight:700]" href="#platform">Узнать об экосистеме ↓</a>
        </div>
        <div className="th-clean-points grid max-w-[790px] [border-bottom:1px_solid_rgb(223,229,241)] [border-color:rgb(223,231,245)] [border-top:1px_solid_rgb(223,229,241)] [gap:0px]">
          <div className="content-center gap-x-[10px] grid grid-cols-[30px_1fr] relative">
            <span className="[font-size:10px] [font-weight:800] [grid-row:span_2] [letter-spacing:0.08em]">01</span>
            <b>Находи</b>
            <small className="mt-[4px]">Мероприятия и проекты</small>
          </div>
          <div className="content-center gap-x-[10px] grid grid-cols-[30px_1fr] relative">
            <span className="[font-size:10px] [font-weight:800] [grid-row:span_2] [letter-spacing:0.08em]">02</span>
            <b>Участвуй</b>
            <small className="mt-[4px]">Заявки и достижения</small>
          </div>
          <div className="content-center gap-x-[10px] grid grid-cols-[30px_1fr] relative">
            <span className="[font-size:10px] [font-weight:800] [grid-row:span_2] [letter-spacing:0.08em]">03</span>
            <b>Создавай</b>
            <small className="mt-[4px]">Партнёрства и инициативы</small>
          </div>
        </div>
        <div className="th-clean-decoration place-items-center [box-shadow:rgba(49,89,237,0.208)_0px_28px_55px,rgba(255,255,255,0.5)_0px_1px_1px_inset] [transform:rotate(12deg)] [@media(width_<=_600px)]:[margin:0px_0px_28px_5px]" aria-hidden="true">
          <span className="[font-weight:850] [letter-spacing:-0.1em] [transform:rotate(-12deg)]">t.</span>
          <i className="rounded-[50%] absolute [border:1px_solid_rgba(255,255,255,0.333)] [transform:rotate(-28deg)]" />
          <b className="rounded-[50%] absolute [border:1px_solid_rgba(255,255,255,0.333)] [border-color:rgba(158,177,255,0.5)]! [transform:rotate(34deg)]" />
        </div>
      </div>
    </section>
  );
}

function ImportedSection2() {
  return (
    <section className="th-features max-w-[1240px] [margin:auto]" id="how">
      <div className="th-section-heading items-end gap-[40px] justify-between">
        <div>
          <div className="th-section-label items-center flex gap-[8px] [font-size:10px] [font-weight:850] [letter-spacing:0.13em]">ВОЗМОЖНОСТИ</div>
          <h2 className="[margin:0px] [margin-top:13px]!">Всё необходимое<br />для следующего шага</h2>
        </div>
        <p className="max-w-[280px] [line-height:1.85]">От первого интереса до участия и подтверждённого результата.</p>
      </div>
      <div className="th-feature-grid grid">
        <article className={"th-feature rounded-[18px] relative [border:1px_solid_rgb(230,236,246)] [&:hover]:[transform:translateY(-5px)]"}>
          <span className="th-feature-icon rounded-[14px] grid h-[48px] place-items-center w-[48px] [font-size:23px]">⌕</span>
          <small className="absolute right-[28px] top-[31px] [font-size:10px] [font-weight:800]">01</small>
          <h3>Возможности рядом</h3>
          <p className="[line-height:1.8] [margin:0px]">Мероприятия, олимпиады, конкурсы и образовательные программы в одном каталоге.</p>
        </article>
        <article className={"th-feature rounded-[18px] relative [border:1px_solid_rgb(230,236,246)] [&:hover]:[transform:translateY(-5px)]"}>
          <span className="th-feature-icon rounded-[14px] grid h-[48px] place-items-center w-[48px] [font-size:23px]">▤</span>
          <small className="absolute right-[28px] top-[31px] [font-size:10px] [font-weight:800]">02</small>
          <h3>Личное портфолио</h3>
          <p className="[line-height:1.8] [margin:0px]">Собирайте подтверждённые достижения и отслеживайте свой образовательный путь.</p>
        </article>
        <article className={"th-feature rounded-[18px] relative [border:1px_solid_rgb(230,236,246)] [&:hover]:[transform:translateY(-5px)]"}>
          <span className="th-feature-icon rounded-[14px] grid h-[48px] place-items-center w-[48px] [font-size:23px]">↔</span>
          <small className="absolute right-[28px] top-[31px] [font-size:10px] [font-weight:800]">03</small>
          <h3>Партнёрства</h3>
          <p className="[line-height:1.8] [margin:0px]">Находите организации и создавайте совместные образовательные инициативы.</p>
        </article>
      </div>
    </section>
  );
}

function ImportedSectionTalentHub() {
  return (
    <section className="th-roles max-w-[1240px] [margin:auto]">
      <div className="th-section-heading items-end gap-[40px] justify-between">
        <div>
          <div className="th-section-label items-center flex gap-[8px] [font-size:10px] [font-weight:850] [letter-spacing:0.13em]">ДЛЯ КАЖДОГО УЧАСТНИКА</div>
          <h2 className="[margin:0px] [margin-top:13px]!">TalentHub объединяет</h2>
        </div>
        <p className="max-w-[280px] [line-height:1.85]">У каждого участника — своя роль и понятные инструменты.</p>
      </div>
      <div className="th-role-grid grid">
        <article className={"th-role [&:hover]:[transform:translateY(-4px)]"}>
          <span className="[font-size:10px] [font-weight:850]">01</span>
          <h3>Учащимся</h3>
          <p className="[line-height:1.8]">Находите интересные события, участвуйте и сохраняйте свои результаты.</p>
          <a className="no-underline [font-size:12px] [font-weight:800]" href="/auth">Открыть экосистему <b className="ml-[5px]">→</b></a>
        </article>
        <article className={"th-role [&:hover]:[transform:translateY(-4px)]"}>
          <span className="[font-size:10px] [font-weight:850]">02</span>
          <h3>Школам и учреждениям</h3>
          <p className="[line-height:1.8]">Публикуйте возможности, работайте с заявками и находите партнёров.</p>
          <a className="no-underline [font-size:12px] [font-weight:800]" href="/school">Подробнее <b className="ml-[5px]">→</b></a>
        </article>
        <article className={"th-role [&:hover]:[transform:translateY(-4px)]"}>
          <span className="[font-size:10px] [font-weight:850]">03</span>
          <h3>Компаниям и академиям</h3>
          <p className="[line-height:1.8]">Предлагайте инициативы и сотрудничайте с образовательными учреждениями.</p>
          <a className="no-underline [font-size:12px] [font-weight:800]" href="/company">Подробнее <b className="ml-[5px]">→</b></a>
        </article>
        <article className={"th-role [&:hover]:[transform:translateY(-4px)]"}>
          <span className="[font-size:10px] [font-weight:850]">04</span>
          <h3>Родителям</h3>
          <p className="[line-height:1.8]">Следите за образовательной активностью и успехами ребёнка.</p>
          <a className="no-underline [font-size:12px] [font-weight:800]" href="/parent">Подробнее <b className="ml-[5px]">→</b></a>
        </article>
      </div>
    </section>
  );
}
