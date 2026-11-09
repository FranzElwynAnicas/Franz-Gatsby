const fetch = require('node-fetch');

const WP_URL = 'https://dev-franz-wordpress-cms.pantheonsite.io/wp-json/wp/v2';
const USERNAME = 'Pocket Creatives'; // Change this
const PASSWORD = 'KklM TaT9 LNWG XhMh vDhO ptpR'; // Change this
const AUTH_HEADER = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

const blogContent = `
<p>Ever had a brilliant video idea but struggled to communicate it clearly? Whether you’re planning a product video, brand film, or social media advert, ensuring everyone shares the same vision is crucial. That’s where a treatment comes in.</p>
<p>But what is a treatment in video production? It’s a concise, structured document outlining your video’s concept, tone, narrative, and stylistic approach. It acts as a roadmap before scriptwriting, helping directors, clients, and production teams stay aligned.</p>
<p>A well-structured video treatment ensures clarity, minimises revisions, and keeps your creative vision intact. But what does it look like? And how do you write one? In this guide, we’ll break down everything you need to know – from step-by-step structuring to common mistakes to avoid.</p>

<h2>What is a Treatment in Video Production?</h2>
<p>A video treatment is a pre-production document that summarises a project’s creative vision, story structure, and stylistic approach. It’s often used before scriptwriting to define the mood, tone, and key messaging of the video.</p>
<p>A treatment is particularly useful for:</p>
<ul>
  <li>Aligning stakeholders – ensuring everyone shares the same creative vision.</li>
  <li>Pitching ideas – helping clients, investors, or internal teams approve a concept.</li>
  <li>Minimising revisions – reducing confusion and costly reshoots during production.</li>
</ul>

<h2>Treatment vs. Script vs. Storyboard – What’s the Difference?</h2>
<p>Document Purpose Focus</p>
<p>Treatment High-level concept & visual style Big-picture storytelling</p>
<p>Script Detailed dialogue & scene actions Every word & movement</p>
<p>Storyboard Shot-by-shot visual representation Camera angles & flow</p>
<p>If you’re wondering what is a treatment in video production, it’s essentially the first step to transforming an idea into a fully structured video concept.</p>

<h2>Different Types of Video Treatments & Their Use-Cases</h2>
<p>Not all video treatments are created equal! Depending on the type of video, a treatment can vary significantly in structure, tone, and purpose. Here’s how treatments differ based on video type:</p>
<p><strong>Commercial Video Treatment</strong></p>
<ul>
  <li>Used by brands to develop advertising concepts before production.</li>
  <li>Focuses on storytelling, emotional triggers, and brand messaging.</li>
  <li>Often includes a mood board, visual style guide, and proposed call-to-action (CTA).</li>
</ul>
<p><strong>Corporate Video Treatment</strong></p>
<ul>
  <li>Ideal for company overview videos, testimonials, or training content.</li>
  <li>Emphasises clarity, professionalism, and messaging alignment.</li>
  <li>Often contains structured interview segments, voice over scripting, and branding elements.</li>
</ul>
<p><strong>Product Video Treatment</strong></p>
<ul>
  <li>Essential for eCommerce, product showcases, and explainer videos.</li>
  <li>Focuses on highlighting product features, functionality, and benefits.</li>
  <li>May include macro product shots, animation concepts, and demonstration sequences.</li>
</ul>
<p><strong>Event Video Treatment</strong></p>
<ul>
  <li>Guides the filming of conferences, product launches, or live events.</li>
  <li>Details multi-camera setups, key interview shots, crowd interactions, and event highlights.</li>
  <li>Ensures smooth coverage with a shot list and schedule.</li>
</ul>
<p><strong>Social Media Video Treatment</strong></p>
<ul>
  <li>Short-form, engaging, and highly visual.</li>
  <li>Optimised for Instagram Reels, TikTok, and YouTube Shorts.</li>
  <li>Focuses on snappy edits, eye-catching transitions, and mobile-friendly framing.</li>
</ul>
<p>At Pocket Creatives, we tailor each treatment to match the brand’s goals, audience, and video platform – ensuring every project delivers maximum impact! If you’re still asking what is a treatment in video production, the answer is it’s an essential blueprint for video success.</p>

<h2>Why is a Video Treatment Important?</h2>
<p>A video production treatment isn’t just a creative exercise – it’s a practical tool that saves time, money, and confusion.</p>
<p>Key Benefits:</p>
<ul>
  <li>Clarity & Direction – A well-structured treatment eliminates misinterpretation between teams.</li>
  <li>Client Approvals – Treatments provide a clear preview of the video’s message before investing in production.</li>
  <li>Fewer Revisions – A solid treatment reduces back-and-forth changes, cutting production delays.</li>
  <li>Professionalism – Agencies and brands expect structured treatments before committing to large-scale projects.</li>
  <li>Brand Consistency – A well-written treatment not only improves creative alignment but also strengthens brand consistency.</li>
</ul>
<p>By outlining visual and messaging guidelines upfront, businesses can ensure that every video reflects their brand identity. This makes marketing efforts more cohesive across different campaigns, improving audience trust and recognition.</p>
<p>For example, at Pocket Creatives, when working on a crowdfunding video for a beauty brand, a treatment helped refine the product’s visual story before production, avoiding costly mid-project changes.</p>
<p>So on......</p>
`;

const dummyPosts = [
  { title: "What is an Explainer Video? Benefits and Uses Explained", categories: ["Beauty", "Products", "Video"] },
  { title: "Beauty Product Photography for Pony Revolution", categories: ["Beauty", "Photography", "Products", "Video"] },
  { title: "Meeting Gouri Kubair at Holy Lama", categories: ["Beauty"] },
  { title: "Shooting Stop Motion Video", categories: ["Beauty", "Video"] },
  { title: "Christmas Photography 2020", categories: ["Photography", "Beauty", "Jewellery", "Products"] },
  { title: "6 Beauty Photography Tips", categories: ["Beauty"] },
  { title: "Model Behaviour", categories: ["Beauty", "People", "Photography", "Portraits"] },
  { title: "Created at home", categories: ["Photography", "Beauty", "Food", "Food & Drink", "Products"] },
  { title: "Christmas Photography Content", categories: ["Beauty", "Product Photography", "Food & Drink", "Products"] }
];

async function createPosts() {
  console.log('Starting script...');

  // 1. Get or create all required categories
  const catNames = ["Beauty", "Products", "Video", "Photography", "Jewellery", "People", "Portraits", "Food", "Food & Drink", "Product Photography"];
  const categoryMap = {};

  for (const name of catNames) {
    const res = await fetch(`${WP_URL}/categories?search=${name}`, { headers: { 'Authorization': AUTH_HEADER } });
    const existing = await res.json();
    
    if (existing.length > 0 && existing[0].name.toLowerCase() === name.toLowerCase()) {
      categoryMap[name] = existing[0].id;
    } else {
      const createRes = await fetch(`${WP_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': AUTH_HEADER },
        body: JSON.stringify({ name: name })
      });
      const newCat = await createRes.json();
      categoryMap[name] = newCat.id;
    }
  }

  console.log('Categories created/found:', categoryMap);

  // 2. Create the posts
  for (const post of dummyPosts) {
    const catIds = post.categories.map(c => categoryMap[c]);
    
    const res = await fetch(`${WP_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH_HEADER
      },
      body: JSON.stringify({
        title: post.title,
        content: blogContent, // Injecting the content here
        status: 'publish',
        categories: catIds
      })
    });
    const data = await res.json();
    
    if (data.id) {
      console.log(` Created: ${data.title.rendered}`);
    } else {
      console.log(` Error creating: ${post.title}`, data);
    }
  }
  console.log('All done!');
}

createPosts();