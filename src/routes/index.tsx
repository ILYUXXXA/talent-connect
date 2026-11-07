import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";
import teamPhoto from "../assets/talenthub-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TalentHub — школьные мероприятия" },
    { name: "description", content: "TalentHub — образовательная экосистема мероприятий, достижений и партнёрств для учащихся, родителей, школ и компаний." },
    { property: "og:title", content: "TalentHub — школьные мероприятия" },
    { property: "og:description", content: "Мероприятия, достижения и образовательные партнёрства в одной экосистеме TalentHub." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "lang": "ru" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <main className="th-landing th-redesign">
          <header className="th-header">
            <div className="th-header-inner">
              <a className="th-logo" href="/">
                <span className="th-logo-mark">t.</span>
                <span>Talent<span>Hub</span></span>
              </a>
              <nav className="th-nav">
                <a  href="#platform">Об экосистеме</a>
                <a  href="#how">Как это работает</a>
                <a  href="#partners">Партнёрства</a>
              </nav>
              <a className="th-login" href="/auth">Войти <span>→</span></a>
            </div>
          </header>
          <ImportedSection />
          <section className="th-intro" id="platform">
            <div className="th-section-label">TALENTHUB / ЭКОСИСТЕМА</div>
            <div >
              <h2 >От интереса — к реальным достижениям</h2>
              <p >Возможности для учащихся и инструменты для организаций собраны в одной экосистеме. Находите события, подавайте заявки, сохраняйте результаты и выстраивайте сотрудничество в единой среде.</p>
            </div>
          </section>
          <ImportedSection2 />
          <section className="th-partners" id="partners">
            <div className="th-partners-copy">
              <div className="th-section-label">СОТРУДНИЧЕСТВО</div>
              <h2 >Создавайте возможности вместе</h2>
              <p >Учреждения могут находить компании и академии для совместных проектов. Партнёры, в свою очередь, могут предлагать образовательные инициативы и находить заинтересованные учреждения.</p>
              <a className="th-partner-link" href="/auth">Стать частью TalentHub <span>→</span></a>
            </div>
            <div className="th-partner-diagram">
              <div className="th-partner-card">
                <span >⌂</span>
                <b>Образовательные учреждения</b>
                <small>Школы и организации</small>
              </div>
              <div className="th-partner-connector">
                <span>↔</span>
              </div>
              <div className="th-partner-card">
                <span >▦</span>
                <b>Компании и академии</b>
                <small>Партнёры и инициативы</small>
              </div>
            </div>
          </section>
          <ImportedSectionTalentHub />
          <section className="th-cta">
            <div>
              <div className="th-section-label">TALENTHUB</div>
              <h2 >Начните открывать новые возможности</h2>
              <p >Присоединяйтесь к единой образовательной среде.</p>
            </div>
            <a className="th-primary" href="/auth">Открыть экосистему <span >→</span></a>
          </section>
          <footer className="th-footer">
            <a className="th-logo" href="/">
              <span className="th-logo-mark">t.</span>
              <span>Talent<span>Hub</span></span>
            </a>
            <span >Образовательная экосистема возможностей и партнёрств</span>
            <small >© TalentHub</small>
          </footer>
        </main>
      </div>
      <div  />
    </>
  );
}

function ImportedSection() {
  return (
    <>
      <section className="th-editorial-hero">
        <img className="th-hero-photo" src={teamPhoto} alt="Учащиеся вместе работают над технологическим проектом" width={1920} height={1024} />
        <div className="th-editorial-inner">
          <div className="th-overline"><span /> ОБРАЗОВАТЕЛЬНАЯ ЭКОСИСТЕМА</div>
          <div className="th-hero-brand">Talent<span>Hub</span> /</div>
          <h1>Твои возможности<br /><em>В одном месте</em></h1>
          <p>TalentHub — это образовательная экосистема, которая объединяет школьников, родителей, школы, компании и образовательные организации вокруг развития талантов, образовательных возможностей и достижений.</p>
          <div className="th-hero-actions">
            <a className="th-primary" href="/auth">Открыть TalentHub <span>→</span></a>
            <a className="th-secondary" href="#platform">Узнать об экосистеме ↓</a>
          </div>
        </div>
        <span className="th-photo-caption">Мероприятия. Люди. Достижения.</span>
      </section>
      <div className="th-editorial-points">
        <div><span>01 /</span><b>Находи</b><small>Мероприятия и проекты</small><i>↗</i></div>
        <div><span>02 /</span><b>Участвуй</b><small>Заявки и достижения</small><i>↗</i></div>
        <div><span>03 /</span><b>Создавай</b><small>Партнёрства и инициативы</small><i>↗</i></div>
      </div>
    </>
  );
}

function ImportedSection2() {
  return (
    <section className="th-features" id="how">
      <div className="th-section-heading">
        <div>
          <div className="th-section-label">ВОЗМОЖНОСТИ</div>
          <h2 >Всё необходимое<br />для следующего шага</h2>
        </div>
        <p >От первого интереса до участия и подтверждённого результата.</p>
      </div>
      <div className="th-feature-grid">
        <article className="th-feature">
          <span className="th-feature-icon">⌕</span>
          <small >01</small>
          <h3>Возможности рядом</h3>
          <p >Мероприятия, олимпиады, конкурсы и образовательные программы в одном каталоге.</p>
        </article>
        <article className="th-feature">
          <span className="th-feature-icon">▤</span>
          <small >02</small>
          <h3>Личное портфолио</h3>
          <p >Собирайте подтверждённые достижения и отслеживайте свой образовательный путь.</p>
        </article>
        <article className="th-feature">
          <span className="th-feature-icon">↔</span>
          <small >03</small>
          <h3>Партнёрства</h3>
          <p >Находите организации и создавайте совместные образовательные инициативы.</p>
        </article>
      </div>
    </section>
  );
}

function ImportedSectionTalentHub() {
  return (
    <section className="th-roles">
      <div className="th-section-heading">
        <div>
          <div className="th-section-label">ДЛЯ КАЖДОГО УЧАСТНИКА</div>
          <h2 >TalentHub объединяет</h2>
        </div>
        <p >У каждого участника — своя роль и понятные инструменты.</p>
      </div>
      <div className="th-role-grid">
        <article className="th-role">
          <span >01</span>
          <h3>Учащимся</h3>
          <p >Находите интересные события, участвуйте и сохраняйте свои результаты.</p>
          <a  href="/auth">Открыть экосистему <b >→</b></a>
        </article>
        <article className="th-role">
          <span >02</span>
          <h3>Школам и учреждениям</h3>
          <p >Публикуйте возможности, работайте с заявками и находите партнёров.</p>
          <a  href="/school">Подробнее <b >→</b></a>
        </article>
        <article className="th-role">
          <span >03</span>
          <h3>Компаниям и академиям</h3>
          <p >Предлагайте инициативы и сотрудничайте с образовательными учреждениями.</p>
          <a  href="/company">Подробнее <b >→</b></a>
        </article>
        <article className="th-role">
          <span >04</span>
          <h3>Родителям</h3>
          <p >Следите за образовательной активностью и успехами ребёнка.</p>
          <a  href="/parent">Подробнее <b >→</b></a>
        </article>
      </div>
    </section>
  );
}
