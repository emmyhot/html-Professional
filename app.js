(() => {
  'use strict';

  const lessons = [
    {
      title: 'HTML5 Foundations',
      content: `<p>HTML5 is the current standard for structuring and presenting content on the web. A valid document gives browsers, assistive technologies, and search engines meaningful information.</p>
        <h3>Document structure</h3><pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Page title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;Visible content&lt;/body&gt;
&lt;/html&gt;</code></pre>
        <div class="info-grid"><div class="info-box"><strong>doctype</strong><br>Triggers standards mode.</div><div class="info-box"><strong>lang</strong><br>Identifies the page language.</div></div>`,
      quiz: [
        ['Which declaration starts an HTML5 document?', ['&lt;!doctype html&gt;', '&lt;html5&gt;', '&lt;document&gt;'], 0],
        ['Which element contains visible page content?', ['&lt;head&gt;', '&lt;body&gt;', '&lt;meta&gt;'], 1]
      ]
    },
    {
      title: 'Semantic Structure',
      content: `<p>Semantic elements describe the role of content instead of only its appearance.</p>
        <pre><code>&lt;header&gt;Site heading&lt;/header&gt;
&lt;nav&gt;Navigation&lt;/nav&gt;
&lt;main&gt;Primary content&lt;/main&gt;
&lt;article&gt;Independent content&lt;/article&gt;
&lt;aside&gt;Related content&lt;/aside&gt;
&lt;footer&gt;Closing information&lt;/footer&gt;</code></pre>
        <p>Use <code>&lt;main&gt;</code> once for the principal content and use headings in a logical order.</p>`,
      quiz: [
        ['Which element represents the main content?', ['&lt;section&gt;', '&lt;main&gt;', '&lt;aside&gt;'], 1],
        ['Which element is appropriate for an independent article?', ['&lt;article&gt;', '&lt;div&gt;', '&lt;span&gt;'], 0]
      ]
    },
    {
      title: 'Text and Links',
      content: `<p>HTML provides elements for headings, paragraphs, emphasis, quotations, lists, and links.</p>
        <pre><code>&lt;h1&gt;Primary heading&lt;/h1&gt;
&lt;p&gt;This is &lt;strong&gt;important&lt;/strong&gt; text.&lt;/p&gt;
&lt;a href="https://example.com"&gt;Visit example&lt;/a&gt;
&lt;ul&gt;&lt;li&gt;One item&lt;/li&gt;&lt;/ul&gt;</code></pre>
        <p>Use descriptive link text and reserve heading levels for content hierarchy.</p>`,
      quiz: [
        ['Which element creates a hyperlink?', ['&lt;link&gt;', '&lt;a&gt;', '&lt;href&gt;'], 1],
        ['Which element marks strongly important text?', ['&lt;strong&gt;', '&lt;bold&gt;', '&lt;emphasis&gt;'], 0]
      ]
    },
    {
      title: 'Images and Media',
      content: `<p>HTML5 supports responsive images, audio, video, and embedded captions.</p>
        <pre><code>&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Descriptive text" width="800" height="450"&gt;
&lt;/picture&gt;

&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" src="captions.vtt" srclang="en"&gt;
&lt;/video&gt;</code></pre>
        <p>Meaningful images require descriptive alternative text. Decorative images should use an empty <code>alt</code>.</p>`,
      quiz: [
        ['Which attribute provides alternative text for an image?', ['title', 'alt', 'description'], 1],
        ['Which element provides captions for a video?', ['&lt;caption&gt;', '&lt;track&gt;', '&lt;subtitle&gt;'], 1]
      ]
    },
    {
      title: 'Tables and Data',
      content: `<p>Tables are for structured tabular data, not page layout.</p>
        <pre><code>&lt;table&gt;
  &lt;caption&gt;Monthly progress&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Month&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;January&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        <p>Use <code>caption</code> and <code>scope</code> to make data relationships clear.</p>`,
      quiz: [
        ['What should tables be used for?', ['Page layout', 'Tabular data', 'Navigation'], 1],
        ['Which element adds a table title?', ['&lt;caption&gt;', '&lt;title&gt;', '&lt;thead&gt;'], 0]
      ]
    },
    {
      title: 'Forms and Validation',
      content: `<p>HTML5 form controls and constraint validation improve usability and accessibility.</p>
        <pre><code>&lt;form&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" type="email" required&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
        <p>Associate every control with a visible label. Use <code>required</code>, <code>email</code>, <code>pattern</code>, and <code>autocomplete</code> appropriately.</p>`,
      quiz: [
        ['Which input type validates an email format?', ['text', 'email', 'address'], 1],
        ['Which attribute prevents submission when empty?', ['optional', 'required', 'validate'], 1]
      ]
    },
    {
      title: 'Accessibility',
      content: `<p>Accessible HTML works with keyboards and assistive technologies. It does not depend on color or pointer interaction alone.</p>
        <pre><code>&lt;button type="button" aria-label="Close menu"&gt;×&lt;/button&gt;
&lt;img src="chart.png" alt="Sales increased by 20 percent"&gt;
&lt;main&gt;Primary content&lt;/main&gt;</code></pre>
        <div class="info-grid"><div class="info-box"><strong>Keyboard</strong><br>All actions must be reachable.</div><div class="info-box"><strong>Labels</strong><br>Every control needs a name.</div></div>`,
      quiz: [
        ['Which feature helps keyboard users identify controls?', ['Visible focus', 'More animation', 'Color only'], 0],
        ['What describes the current value of an input?', ['A label', 'A border', 'A tooltip only'], 0]
      ]
    },
    {
      title: 'Canvas, SVG and APIs',
      content: `<p>HTML5 includes graphics and browser APIs for richer applications.</p>
        <pre><code>&lt;canvas id="chart" width="600" height="300"&gt;&lt;/canvas&gt;

&lt;svg viewBox="0 0 100 100" role="img" aria-label="Circle"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="#2563eb"&gt;&lt;/circle&gt;
&lt;/svg&gt;</code></pre>
        <p>Canvas is bitmap-based and usually needs fallback text. SVG is vector-based and often more accessible.</p>
        <p>Browser APIs include Geolocation, Web Storage, Drag and Drop, Fetch, and more.</p>`,
      quiz: [
        ['Which API is commonly used for persistent key-value storage?', ['Web Storage', 'Canvas', 'SVG'], 0],
        ['Which graphics format uses vector shapes?', ['SVG', 'JPEG', 'PNG'], 0]
      ]
    }
  ];

  const lessonTabs = document.getElementById('lessonTabs');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonNumber = document.getElementById('lessonNumber');
  const lessonContent = document.getElementById('lessonContent');
  const quizQuestions = document.getElementById('quizQuestions');
  const quizScore = document.getElementById('quizScore');
  let activeLesson = 0;

  lessons.forEach((lesson, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lesson-tab';
    button.innerHTML = `<span>${index + 1}</span><b>${lesson.title}</b>`;
    button.addEventListener('click', () => setLesson(index));
    lessonTabs.appendChild(button);
  });

  function setLesson(index) {
    activeLesson = Math.max(0, Math.min(index, lessons.length - 1));
    const lesson = lessons[activeLesson];
    lessonNumber.textContent = `Lesson ${activeLesson + 1} of ${lessons.length}`;
    lessonTitle.textContent = lesson.title;
    lessonContent.innerHTML = lesson.content;
    quizScore.textContent = '0 answered';
    quizQuestions.innerHTML = lesson.quiz.map((question, qi) => `
      <fieldset class="question">
        <legend>${qi + 1}. ${question[0]}</legend>
        ${question[1].map((answer, ai) => `
          <label class="answer-option">
            <input type="radio" name="lesson-${activeLesson}-q-${qi}" value="${ai}">
            ${answer}
          </label>`).join('')}
      </fieldset>`).join('');

    document.querySelectorAll('.lesson-tab').forEach((tab, i) => tab.classList.toggle('active', i === activeLesson));
    document.getElementById('previousLesson').disabled = activeLesson === 0;
    document.getElementById('nextLesson').textContent = activeLesson === lessons.length - 1 ? 'Finish course' : 'Next lesson';
  }

  document.getElementById('previousLesson').addEventListener('click', () => setLesson(activeLesson - 1));
  document.getElementById('nextLesson').addEventListener('click', () => {
    if (activeLesson < lessons.length - 1) setLesson(activeLesson + 1);
    else showToast('Course lessons completed');
  });

  document.getElementById('checkQuiz').addEventListener('click', () => {
    const lesson = lessons[activeLesson];
    let answered = 0;
    let correct = 0;
    lesson.quiz.forEach((question, qi) => {
      const selected = quizQuestions.querySelector(`input[name="lesson-${activeLesson}-q-${qi}"]:checked`);
      const options = quizQuestions.querySelectorAll(`input[name="lesson-${activeLesson}-q-${qi}"]`);
      if (selected) answered++;
      options.forEach((input, ai) => {
        const label = input.closest('.answer-option');
        label.classList.remove('correct', 'incorrect');
        if (ai === question[2]) label.classList.add('correct');
        if (selected && input === selected && ai !== question[2]) label.classList.add('incorrect');
        if (selected && ai === question[2] && ai === Number(selected.value)) correct++;
      });
    });
    quizScore.textContent = `${answered} answered · ${correct}/${lesson.quiz.length} correct`;
  });

  setLesson(0);

  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  const editor = document.getElementById('htmlEditor');
  const preview = document.getElementById('htmlPreview');
  const saveStatus = document.getElementById('saveStatus');
  function updatePreview() {
    preview.srcdoc = `<!doctype html><html><head><meta charset="UTF-8"><style>body{font-family:Segoe UI,Arial,sans-serif;padding:24px;color:#172033}h1{color:#191970}</style></head><body>${editor.value}</body></html>`;
  }
  let saveTimer;
  editor.addEventListener('input', () => {
    updatePreview();
    saveStatus.textContent = 'Saving…';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      localStorage.setItem('htmlAcademyPractice', editor.value);
      saveStatus.textContent = 'Saved locally';
    }, 400);
  });
  const savedCode = localStorage.getItem('htmlAcademyPractice');
  if (savedCode) editor.value = savedCode;
  updatePreview();

  const backdrop = document.getElementById('authBackdrop');
  const authContent = document.getElementById('authContent');
  const accountButton = document.getElementById('accountButton');

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 3000);
  }

  function getUsers() {
    try { return JSON.parse(localStorage.getItem('htmlAcademyUsers') || '{}'); }
    catch { return {}; }
  }
  function saveUsers(users) { localStorage.setItem('htmlAcademyUsers', JSON.stringify(users)); }
  function getSession() { return JSON.parse(localStorage.getItem('htmlAcademySession') || 'null'); }
  function setSession(user) {
    if (user) localStorage.setItem('htmlAcademySession', JSON.stringify(user));
    else localStorage.removeItem('htmlAcademySession');
    updateAccountButton();
  }
  function updateAccountButton() {
    const session = getSession();
    accountButton.textContent = session ? `Hi, ${session.name}` : 'Log in';
  }

  function openAuth(view = 'login') {
    backdrop.hidden = false;
    renderAuth(view);
  }
  function closeAuth() { backdrop.hidden = true; }

  function renderAuth(view) {
    if (view === 'signup') {
      authContent.innerHTML = `<h2 id="authTitle">Create an account</h2><p>Save your learning experience on this device.</p>
        <form id="signupForm" class="auth-form">
          <div><label for="signupName">Full name</label><input id="signupName" name="name" autocomplete="name" required></div>
          <div><label for="signupEmail">Email address</label><input id="signupEmail" name="email" type="email" autocomplete="email" required></div>
          <div><label for="signupPassword">Password</label><input id="signupPassword" name="password" type="password" minlength="8" autocomplete="new-password" required></div>
          <p id="authError" class="form-error" role="alert"></p>
          <button class="primary-action" type="submit">Create account</button>
          <button class="auth-link" type="button" data-auth="login">Already have an account? Log in</button>
        </form>`;
      document.getElementById('signupForm').addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get('name')).trim();
        const email = String(data.get('email')).trim().toLowerCase();
        const password = String(data.get('password'));
        const users = getUsers();
        const error = document.getElementById('authError');
        if (users[email]) { error.textContent = 'An account already exists for this email.'; return; }
        users[email] = { name, email, password }; saveUsers(users);
        setSession({ name, email }); closeAuth(); showToast('Account created successfully');
      });
    } else if (view === 'forgot') {
      authContent.innerHTML = `<h2 id="authTitle">Reset password</h2><p>Enter your account email to set a new password.</p>
        <form id="forgotForm" class="auth-form">
          <div><label for="forgotEmail">Email address</label><input id="forgotEmail" name="email" type="email" autocomplete="email" required></div>
          <div><label for="newPassword">New password</label><input id="newPassword" name="password" type="password" minlength="8" autocomplete="new-password" required></div>
          <p id="authError" class="form-error" role="alert"></p>
          <button class="primary-action" type="submit">Update password</button>
          <button class="auth-link" type="button" data-auth="login">Back to log in</button>
        </form>`;
      document.getElementById('forgotForm').addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get('email')).trim().toLowerCase();
        const password = String(data.get('password'));
        const users = getUsers();
        const error = document.getElementById('authError');
        if (!users[email]) { error.textContent = 'No account was found for this email.'; return; }
        users[email].password = password; saveUsers(users); closeAuth(); showToast('Password updated successfully');
      });
    } else {
      authContent.innerHTML = `<h2 id="authTitle">Log in</h2><p>Continue your HTML5 learning.</p>
        <form id="loginForm" class="auth-form">
          <div><label for="loginEmail">Email address</label><input id="loginEmail" name="email" type="email" autocomplete="email" required></div>
          <div><label for="loginPassword">Password</label><input id="loginPassword" name="password" type="password" autocomplete="current-password" required></div>
          <p id="authError" class="form-error" role="alert"></p>
          <button class="primary-action" type="submit">Log in</button>
          <div class="auth-links"><button class="auth-link" type="button" data-auth="forgot">Forgot password?</button><button class="auth-link" type="button" data-auth="signup">Create account</button></div>
        </form>`;
      document.getElementById('loginForm').addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get('email')).trim().toLowerCase();
        const password = String(data.get('password'));
        const user = getUsers()[email];
        const error = document.getElementById('authError');
        if (!user || user.password !== password) { error.textContent = 'Email or password is incorrect.'; return; }
        setSession({ name: user.name, email }); closeAuth(); showToast(`Welcome back, ${user.name}`);
      });
    }
    authContent.querySelectorAll('[data-auth]').forEach(button => button.addEventListener('click', () => renderAuth(button.dataset.auth)));
  }

  accountButton.addEventListener('click', () => {
    const session = getSession();
    if (session) {
      if (confirm(`Log out ${session.name}?`)) { setSession(null); showToast('You have been logged out'); }
    } else openAuth('login');
  });
  document.getElementById('closeAuth').addEventListener('click', closeAuth);
  backdrop.addEventListener('click', event => { if (event.target === backdrop) closeAuth(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeAuth(); });
  updateAccountButton();
})();
