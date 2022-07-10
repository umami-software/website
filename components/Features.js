const Block = ({ title, children }) => {
  return (
    <div className="col-8">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default function Features() {
  return (
    <section>
      <Block title="Privacy matters">
        <p>
          Umami values the privacy of your users. That's why we don't collect any personal
          information, don't use cookies, don't track users across websites and are GDPR compliant.
        </p>
        <p>Best of all, you don't need to display a cookie banner.</p>
      </Block>
      <Block title="Simple analytics">
        <p>Umami</p>
      </Block>
      <Block title="Open source">Trusted.</Block>
    </section>
  );
}
