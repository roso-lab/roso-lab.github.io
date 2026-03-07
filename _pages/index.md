---
title: "ROSO Lab"
permalink: /
last_modified_at: 2025-1-11
layout: splash
lang: en
header:
  overlay_image: assets/images/robo_and_human_single_color.png
  overlay_filter: "0.55"
excerpt: "Bridging Heterogeneous Multi-Robot Intelligence with Human Society — Pioneering Collaborative Autonomy for Complex, Real-World Environments"

feature_row_publications:
  - image_path: assets/images/publications/PepperPose.png
    alt: "Publication image"
    paper: "PepperPose: Full-Body Pose Estimation with a Companion Robot"
    venue: "CHI'24"
    url: "https://dl.acm.org/doi/pdf/10.1145/3613904.3642231"
    members:
        - name: "WANGChongYang"
        - name: "GaoYuan"
        - name: "ZHENGSiQi"
  - image_path: assets/images/publications/UbiPhysio.png
    alt: "Publication image"
    paper: "UbiPhysio: Support Daily Functioning, Fitness, and Rehabilitation with Action Understanding and Feedback in Natural Language"
    venue: "Ubicomp'24"
    url: "https://dl.acm.org/doi/pdf/10.1145/3643552"
    members:
        - name: "WANGChongYang"

feature_row_people:
  - image_path: assets/images/people/GaoYuan.jpg
    alt: "Yuan Gao"
    title: "Yuan Gao"
    excerpt: "Head of Embodied AI Robotics, AIRS & CUHK-SZ"
    url: https://gaoyuankidult.github.io/
  - image_path: assets/images/people/ChenXi.jpg
    alt: "Xi Chen"
    title: "Xi Chen"
    excerpt: "Researcher, Beijing Institute for General AI"
  - image_path: assets/images/people/LIQingBiao.jpg
    alt: "Qingbiao Li"
    title: "Qingbiao Li"
    excerpt: "Assistant Professor, University of Macau"
  - image_path: assets/images/people/LIANGChen.jpg
    alt: "Chen Liang"
    title: "Chen Liang"
    excerpt: "Assistant Professor, University of Macau"
  - image_path: assets/images/people/WANGChongYang.jpg
    alt: "Chongyang Wang"
    title: "Chongyang Wang"
    excerpt: "Assistant Researcher, West China Hospital"
  - image_path: assets/images/people/ZHANG_Lin.jpg
    alt: "Lin Zhang"
    title: "Lin Zhang"
    excerpt: "Assistant Professor, Shenzhen University of Technology"
---

<!-- About Us -->
<section class="about-section" style="background: var(--gray-100);">
  <h2 class="section-title">About Us</h2>
  <p class="about-text">
    The <strong>ROSO Lab</strong> (Societal Heterogeneous Multi-Robot System Research Group) is an interdisciplinary research collective that investigates how teams of diverse robots — spanning aerial, ground, and humanoid platforms — can operate cohesively within complex human environments. Our work sits at the intersection of <em>multi-agent coordination</em>, <em>embodied AI</em>, and <em>human-robot interaction</em>, addressing fundamental challenges in distributed perception, decentralized decision-making, and socially-aware autonomy.
  </p>
  <p class="about-text" style="margin-top: 1rem;">
    We collaborate closely with partners across robotics, computer science, cognitive science, and healthcare to translate theoretical advances into deployable systems — from assistive companion robots in clinical settings to large-scale multi-robot coordination in urban logistics and smart infrastructure. Our vision is to build intelligent multi-robot ecosystems that seamlessly integrate into the fabric of everyday life, enhancing safety, efficiency, and quality of human experience.
  </p>
</section>

<!-- Recent News -->
<section class="section-spacing">
  <div class="container-wide">
    <h2 class="section-title">Recent News</h2>
    <div class="news-grid">
      <div class="news-card">
        <span class="tag">Oct 2024</span>
        <h3>Embodied Intelligence Roundtable Forum</h3>
        <p>"Embodied Intelligence Socialized Heterogeneous Multi-machine" Roundtable Forum successfully held.</p>
        <a href="https://mp.weixin.qq.com/s/7r8JhqfZ3NdTq9vlF8G8Tw?poc_token=HL5eRWej6meIPMlNIYtGXVGTHAsxZ-flYhqayaM8" target="_blank" class="news-link">Read more &rarr;</a>
      </div>
      <div class="news-card">
        <span class="tag">Nov 2022</span>
        <h3>Jacobs Foundation Research Fellowship</h3>
        <p>Katie Winkle was granted the Jacobs Foundation Research Fellowship!</p>
        <a href="https://jacobsfoundation.org/activity/jacobs-foundation-research-fellowship-program/" target="_blank" class="news-link">Read more &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- Selected Publications -->
<section class="section-spacing" style="background: var(--brand-green-pale);">
  <div class="container-wide">
    <h2 class="section-title">Selected Publications</h2>
    {% include feature_row_publications id="feature_row_publications" type="center-small" %}
    <a href="/publications/" class="section-link">View all publications &rarr;</a>
  </div>
</section>

<!-- Team -->
<section class="section-spacing" style="background: var(--gray-100);">
  <div class="container-wide">
    <h2 class="section-title">Our Team</h2>
    {% include feature_row_people_list.html id="feature_row_people" %}
    <a href="/people/" class="section-link">Meet the full team &rarr;</a>
  </div>
</section>
