import React, { Component, Fragment } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { initNotifications, isPushSupported } from "./notifications";

class App extends Component {
  state = {
    showAlert: false
  };

  constructor(props) {
    super(props);

    initNotifications();
  }

  componentDidMount() {
    isPushSupported(
      function(support) {
        this.setState({ showAlert: !support });
      }.bind(this)
    );
  }

  render() {
    let alert;
    if (this.state.showAlert) {
      alert = (
        <small className="alert">
          Your browser doesn't support push notifications.<br />
          You can still enjoy (?!) the reading, but no thrill.
        </small>
      );
    }
    return (
      <Fragment>
        <h1>Memento Mori</h1>
        {alert}
        <header />
        <main>
          <h6>Hold on, it's not as grim as it sounds.</h6>
          <p>Ok, maybe it is, just a little bit, but please, bear with me.</p>
          <p>
            Mid 2017 I turned 37 and, despite how much I like the numbers 3 and
            7, it felt weird.
          </p>
          <p>
            Not bad weird, just weird. I work in the web industry and I'm use to
            being around <strike>kids</strike> younger people; over the years I
            have had a few younger line managers; a lot of close friends are
            younger than I am.
          </p>
          <p>
            I also have kids: I've been a dad for a decade now, which kind of
            makes me the <strike>wise</strike> old fart in the pack almost by
            definition.
          </p>
          <p>Anyway.</p>
          <p className="attention-grabber">
            A couple of month after my birthday I started thinking about
            “legacy”, considering what will persist of the stuff I've done.
          </p>
          <p>
            I came to terms with the transient nature of coding a while ago, I
            don't try to keep it clean for posterity, but for myself... next
            week. I didn't write a book and most likely I never will. I ran a
            conference for 5 years, sure, but in a few it will be forgotten —
            which is what should be happening, it's not a popularity contest.
          </p>
          <p>
            And even all my domains, the sites I did for my personal enjoyment,
            the ones no one else gets to make decisions upon, well, who would
            want to take care of them? Would it even make sense to?
          </p>
          <p className="attention-grabber">
            I was in this funny mood, when I realised that it doesn't quite
            matter.
          </p>
          <p>
            When I get to 40, I'll get a tattoo to get over my middle age
            crisis. I tend to be an organised person — in my mind, possibly
            because I'm not in real life — and I planned everything. And life
            will go on. Until/Unless it won't.
          </p>
          <p className="attention-grabber">And that's ok.</p>
          <p>
            If you've been reading this wall of text, by now you might be
            wondering what's the point. Here it is:
          </p>
          <p className="attention-grabber">
            <strong>Memento Mori</strong> <em>as a Service</em> provides a
            recurring notification of our ephemeral state. Signing up (clicking
            on the bell on the bottom right of the page – you might have to
            disable your adblocker) will deliver you a notification every few
            days, with a quote like...
          </p>

          <figure>
            <blockquote>
              <p>
                Let us prepare our minds as if<br />we’d come to the very end of
                life.
              </p>
              <footer>
                <cite>— Seneca</cite>
              </footer>
            </blockquote>
          </figure>

          <p>
            I know what you are thinking: <em>“Why would I want that?”</em>.
          </p>
          <p>
            I could invite you to read about the Stoic philosophical principles,
            but that would be pretentious. Let's just say that in past, in
            western culture, we used to relate differently with death: we had
            routines and spiritual journeys to deal with it. Nowadays we tend
            simply to avoid it until we have to — well, at least that's what I
            do, I wish you to be better at it.
          </p>

          <p>
            I believe that a reminder of what is eventually going to happen will
            let me appreciate everything else a little bit more and I'm sure
            some people won't mind joining me.
          </p>
        </main>
        <footer className="footer">
          <p className="attention-grabber">
            Godspeed,<br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cedmax.com"
            >
              Marco
            </a>
          </p>
        </footer>
        <PrivacyPolicy />
      </Fragment>
    );
  }
}

export default App;
