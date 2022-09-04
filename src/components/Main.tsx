import Header from "./Header";
import MenuLink from "./MenuLink";
import NavPage from "./NavPage";

export default function Main() {
  return (
    <main>
      <section style={{ textAlign: "center" }}>
        <div>
          <Header />
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MenuLink />
        </div>
      </section>
      <section>
        <div>
          <div>
            <NavPage />
          </div>
        </div>
      </section>
    </main>
  );
}
