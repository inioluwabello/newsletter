import LeadSection from "./LeadSection";
import FormSection from "./FormSection";

const DesktopView = ({ styles, email, setEmail, showingSuccess, setShowingSuccess }) => {
  const rootAssets = "/assets/";

  return (
    <main className={styles.content}>
      <div className="row">
        <div className={`col`}>
          <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <LeadSection />
            <FormSection
              email={email}
              setEmail={setEmail}
              styles={styles}
              setShowingSuccess={setShowingSuccess}
            />
          </div>
        </div>
        <div className="col">
          <img src={`${rootAssets}images/illustration-sign-up-desktop.svg`} />
        </div>
      </div>
    </main>
  );
};

export default DesktopView;
