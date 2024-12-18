---
permalink: /publications/
title: Publications
layout: splash
header: 
  overlay_color: "#000"
  overlay_image: "assets/images/index/indexTopImg.png"
  overlay_filter: "0.2"
excerpt: Please always refer to Google Scholar's profiles of each member for a more updated list of publications. 


feature_row:
  - image_path: assets/images/publications/PepperPose.png
    alt: "Publication image"
    paper: "PepperPose: Full-Body Pose Estimation with a Companion Robot, CHI'24, Chongyang Wang，Yuan Gao，Chun Yu"
    venue: "*CHI'24*"
    url: "https://dl.acm.org/doi/pdf/10.1145/3613904.3642231"
    members:
        - name: "WANGChongYang"
        - name: "GaoYuan"
        - name: "ZHENGSiQi"
  - image_path: assets/images/publications/UbiPhysio.png
    alt: "Publication image"
    paper: "UbiPhysio: Support Daily Functioning, Fitness, and Rehabilitation with Action Understanding and Feedback in Natural Language"
    venue: "* Ubicomp'24*"
    url: "https://dl.acm.org/doi/pdf/10.1145/3643552"
    members:
        - name: "WANGChongYang"
        - name: "Chun Yu"
  - image_path: assets/images/publications/paulsson2023peripartum.png
    alt: "Publication image"
    paper: "Exploring Mothers’ Perspectives on Socially Assistive Robots in Peripartum Depression Screening"
    venue: "*HRI '23*"
    url: assets/publications/paulsson2023peripartum.pdf
    members:
        - name: "mengyu"
        - name: "ginevra"


accordion_items:
  - title: "2024"
    content: |
      Chongyang Wang, Siqi Zheng, Lingxiao Zhong, Chun Yu, Chen Liang, Yuntao Wang, Yuan Gao*, Tin Lun Lam, Yuanchun Shi, “PepperPose: Full-Body Pose Estimation with a Companion Robot,” ACM CHI conference on Human Factors in Computing Systems, Hawaii, USA, ACM CHI, May 11-16, 2024. 
      
      Wenqiang Lai, Tianwei Zhang, Tin Lun Lam, Yuan Gao*. Vision-Language Model-based Physical Reasoning for Robot Liquid Perception, IROS, 2024
            
  - title: "2023"
    content: |
      Yuan Gao, Junfeng Chen, Xi Chen, Chongyang Wang, J Hu, Fuqin Deng, Tin Lun Lam, Asymmetric Self-Play-Enabled Intelligent Heterogeneous Multirobot Catching System Using Deep Multiagent Reinforcement Learning, IEEE Transaction on Robotics. 2023
---

# Most recent publications
{% include feature_row_publications type="center-small" %}



# Older publications

{% include accordion.html items=page.accordion_items %}