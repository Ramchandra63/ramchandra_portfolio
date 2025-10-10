/*
 * Copyright (c) 2022 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function () {

	"use strict";

	// here all ready functions
	grax_tm_modalbox_project();
	grax_tm_modalbox_news();
	grax_tm_popupscroll();
	grax_tm_ripple();
	grax_tm_color_switcher();
	grax_tm_switcher_opener();
	grax_tm_cursor_switcher();
	grax_tm_videoplayer();
	grax_tm_hero_title();
	grax_tm_wavefy();
	grax_tm_nav_bg();
	grax_tm_anchor();
	grax_tm_down();
	grax_tm_hamburger();
	grax_tm_cursor();
	grax_tm_imgtosvg();
	grax_tm_popup();
	grax_tm_data_images();
	grax_tm_contact_form();
	grax_tm_parallax_effect();
	grax_tm_totop();

	jQuery(window).load('body', function () {
		grax_tm_my_load();
	});
	jQuery(window).on('resize', function () {
		grax_tm_modalbox_news();
	});
	jQuery(window).on('scroll', function () {
		grax_tm_progress_line();
	});

});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------
function grax_tm_modalbox_project() {

	"use strict";

	var modalBox = jQuery('.grax_tm_modalbox_project');
	var closePopup = modalBox.find('.close');

	// Project data with media (images and videos)
	var projectsData = {
		'anatomyXR': {
			title: 'AnatomyXR',
			subtitle: 'Immersive Human Anatomy Learning | Meta Quest | AI-Powered Interactive XR Training',
			client: 'Metamix Technologies',
			date: '2024–2025',
			category: 'XR / Unity Game Development',
			technologies: 'Unity 3D, C#, Meta Quest SDK, XR Interaction Toolkit, Photon Networking, AI API Integration',

			media: [
				{
					type: 'image',
					url: 'img/portfolio/anatomyxr/1.png',
					thumbnail: 'img/portfolio/anatomyxr/1.png',
					title: 'AnatomyXR 3D Visualization'
				},
				{
					type: 'video',
					 src: 'img/portfolio/anatomyxr/video.mp4',
					thumbnail: 'img/portfolio/anatomyxr/4.png',
					title: 'Immersive Anatomy Demo'
				},
				{
					type: 'image',
					url: 'img/portfolio/anatomyxr/2.png',
					thumbnail: 'img/portfolio/anatomyxr/2.png',
					title: 'Interactive Organ Module'
				},
				{
					type: 'image',
					url: 'img/portfolio/anatomyxr/3.png',
					thumbnail: 'img/portfolio/anatomyxr/3.png',
					title: 'Collaborative Learning Interface'
				},
				{
					type: 'image',
					url: 'img/portfolio/anatomyxr/5.jpg',
					thumbnail: 'img/portfolio/anatomyxr/5.jpg',
					title: 'Collaborative Learning Interface'
				}
			],

			description: 'AnatomyXR is an advanced XR-based educational solution designed for immersive anatomy learning. Built for Meta Quest and developed in Unity, it enables medical students and professionals to explore detailed 3D anatomical structures, interact in real time, and experience AI-guided learning sessions.',

			sections: [
				{
					title: 'Development Overview',
					content: 'Built using Unity 3D and C#, AnatomyXR combines XR Interaction Toolkit and Photon Networking to create an interactive and collaborative environment. AI-driven feedback modules adapt the experience to user progress.'
				},
				{
					title: 'Key Features',
					items: [
						'Real-time 3D anatomical exploration with XR controllers',
						'Collaborative multiplayer learning via Photon Cloud',
						'AI-integrated assistant for intelligent feedback and adaptive learning',
						'Optimized rendering and physics systems for smooth Meta Quest performance',
						'In-App Purchases (IAP) for content expansion and upgrades'
					]
				},
				{
					title: 'Platform',
					content: 'Designed for Meta Quest (VR) and Windows (development and demo builds). Optimized for standalone VR performance and immersive learning experiences.'
				}
			],

			tags: ['Unity', 'XR', 'Meta Quest', 'C#', 'Photon', 'AI Integration', 'AR/VR', 'Education'],

			deliverables: [
				'Full Unity project with multiplayer and AI integration',
				'Optimized Meta Quest build',
				'Technical documentation and deployment guide',
				'Content update pipeline for modular expansion'
			],

			conclusion: 'AnatomyXR redefines medical education through immersive XR technology, enabling students and professionals to explore the human body in unprecedented depth and interactivity. The project showcases the seamless fusion of Unity development, AI intelligence, and real-time collaboration.'
		},

		'zombieRunner': {
			title: 'Zombie Runner',
			subtitle: 'Endless Survival Game | Mobile',
			client: 'Portfolio Project',
			date: '2023',
			category: 'Game Development',
			technologies: 'Unity, C#, Mobile Optimization',
			media: [
				{
					type: 'image',
					url: 'img/portfolio/zombierunner-1.jpg',
					thumbnail: 'img/portfolio/zombierunner-1.jpg',
					title: 'Gameplay Screenshot'
				}
			],
			description: 'A mobile endless survival game featuring enemy AI, power-ups, and dynamic scoring. Developed in Unity and optimized for smooth mobile gameplay.',
			sections: [
				{
					title: 'Gameplay Mechanics',
					content: 'Implemented AI behavior trees, power-up systems, and difficulty progression to maintain player engagement.'
				}
			],
			tags: ['Unity', 'C#', 'Mobile Game', 'AI', 'Optimization'],
			deliverables: ['Playable mobile build', 'Complete Unity project files'],
			conclusion: 'Zombie Runner delivers fast-paced survival gameplay with engaging mechanics and optimized performance for Android devices.'
		},

		'medvisor': {
			title: 'medVISOR',
			subtitle: 'Mixed Reality Surgical & Clinical Visualization Platform',
			client: 'MetaMix Technologies',
			date: '2024–2025',
			category: 'Mixed Reality / XR Healthcare',
			technologies: 'Unity 3D, C#, MRTK / OpenXR, DICOM to 3D Conversion, Gesture UI, Holographic Rendering',

			media: [
				{
					type: 'image',
					url: 'img/portfolio/medvisor/1.webp',
					thumbnail: 'img/portfolio/medvisor/1.webp',
					title: 'medVISOR Holographic View'
				},
				{
					type: 'image',
					url: 'img/portfolio/medvisor/2.jpg',
					thumbnail: 'img/portfolio/medvisor/2.jpg',
					title: 'Surgical Planning Overlay'
				},
				{
					type: 'video',
					src: 'img/portfolio/medvisor/medvisor.mp4',
					thumbnail: 'img/portfolio/medvisor/2.jpg',
					title: 'Clinical Anatomy Visualization'
				}
			],

			description: 'medVISOR is a mixed reality platform by MetaMix that converts standard medical imaging (CT / MRI / DICOM) into interactive 3D holographic models. It empowers surgeons, radiologists, and medical students to visualize anatomy in spatial context, improving surgical planning, precision, and training efficiency.',

			sections: [
				{
					title: 'Core Capabilities',
					items: [
						'3D Reconstruction: Converts CT/MRI scans into volumetric holograms for interactive exploration',
						'Spatial Guidance: Overlays surgical paths, measurement tools, and annotations on patient anatomy',
						'Gesture & Gaze UI: Intuitive MR controls for manipulation, clipping, and inspection',
						'Pre-operative Planning: Precise implant sizing, bolt angulation, and trajectory simulation',
						'Collaborative Review: Multiple users can view and discuss the same hologram in real time'
					]
				},
				{
					title: 'Clinical Impact',
					content: 'In deployments, medVISOR has enabled surgeons to visualize foot anatomy in 3D, increasing precision, reducing surgical time, and lowering the risk of intraoperative errors.'
				},
				{
					title: 'Platform & Workflow',
					content: 'Built in Unity, medVISOR uses DICOM-to-3D conversion pipelines, MRTK / OpenXR for MR interaction, and optimized holographic rendering. Designed for head-mounted displays or workstation-based MR setups.'
				}
			],

			tags: ['Mixed Reality', 'Healthcare', 'Surgical Planning', 'XR', 'Medical Visualization', 'Unity', 'DICOM'],

			deliverables: [
				'Full Unity project with MR interaction modules',
				'DICOM import & conversion tools',
				'Hologram rendering and measurement modules',
				'User manual and clinical integration guide'
			],

			conclusion: 'medVISOR bridges the gap between medical imaging and spatial cognition. By enabling real-time, intuitive interaction with anatomical holograms, the platform drives safer surgeries, more confident planning, and better medical training outcomes.'
		},
		'birthXR': {
    title: 'BirthXR',
    subtitle: 'Immersive VR Childbirth Training Simulator',
    client: 'MetaMix Technologies',
    date: '2024–2025',
    category: 'VR / Medical Training Simulation',
    technologies: 'Unity 3D, C#, Meta Quest SDK, XR Interaction Toolkit, Physics Simulation, AI Feedback System',

    media: [
        {
            type: 'image',
            url: 'img/portfolio/birthxr/3.png',
            thumbnail: 'img/portfolio/birthxr/3.png',
            title: 'BirthXR Simulation View'
        },
        {
            type: 'image',
            url: 'img/portfolio/birthxr/2.png',
            thumbnail: 'img/portfolio/birthxr/2.png',
            title: 'Fetal Delivery Sequence'
        },
        {
            type: 'video',
            src: 'img/portfolio/birthxr/birthxr.mp4', // replace with your hosted BirthXR video
            thumbnail: 'img/portfolio/birthxr.png',
            title: 'VR Training Demo'
        }
    ],

    description: 'BirthXR is a virtual reality simulation platform that allows medical trainees to experience and practice the stages of childbirth in a fully immersive 3D environment. Designed to improve procedural understanding and confidence, the app combines accurate anatomical models with interactive guidance for hands-on obstetric training.',

    sections: [
        {
            title: 'Development Overview',
            content: 'Developed using Unity 3D and Meta Quest SDK, BirthXR integrates real-time physics-based fetal delivery, XR hand tracking, and anatomical visualization. The simulation provides multiple birth scenarios with guided narration for educational accuracy.'
        },
        {
            title: 'Key Features',
            items: [
                'Interactive VR simulation of labor and delivery stages',
                'Anatomically accurate 3D models for pelvis, fetus, and uterus',
                'Real-time hand tracking and gesture-based interaction for procedure training',
                'Step-by-step guidance with visual cues and voice-over explanations',
                'AI-driven feedback system evaluating trainee performance and timing',
                'Configurable scenarios for normal and complex deliveries'
            ]
        },
        {
            title: 'Platform',
            content: 'Built for Meta Quest headsets and Windows-based training labs, optimized for smooth real-time rendering and interactive instruction.'
        }
    ],

    tags: ['Unity', 'VR', 'Medical Simulation', 'XR', 'Meta Quest', 'C#', 'Training', 'Healthcare'],

    deliverables: [
        'Fully functional Unity VR project with procedural interactions',
        '3D anatomical models and birth sequence controller',
        'Optimized Meta Quest build for real-time simulation',
        'Training manual and instructional design documentation'
    ],

    conclusion: 'BirthXR delivers an immersive and educational approach to obstetric training, enabling medical students and practitioners to visualize, understand, and practice childbirth in a controlled, realistic virtual environment. It enhances procedural confidence while reducing the dependency on live demonstrations.'
}


	};


	var currentMediaIndex = 0;
	var currentProjectMedia = [];

	// Handle portfolio item clicks
	jQuery('.grax_tm_portfolio .list_inner').each(function () {
		var element = jQuery(this);
		var projectId = element.data('project-id');

		if (projectId) {
			element.find('.details, .image').on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();

				var projectData = projectsData[projectId];

				if (projectData) {
					openProjectModal(projectData);
				}

				return false;
			});
		}
	});

	function openProjectModal(data) {
		jQuery('body').addClass('modal');
		modalBox.addClass('opened');

		currentProjectMedia = data.media || [];
		currentMediaIndex = 0;

		var content = generateProjectHTML(data);
		modalBox.find('.description_wrap').html(content);

		// Initialize media gallery
		initMediaGallery();

		// Reinitialize scrollbar
		grax_tm_popupscroll();
	}

	function initMediaGallery() {
		// Thumbnail clicks
		jQuery('.thumbnail_item').on('click', function () {
			var index = jQuery(this).data('index');
			showMedia(index);
		});

		// Navigation arrows
		jQuery('.gallery_nav_btn.next').on('click', function () {
			var nextIndex = (currentMediaIndex + 1) % currentProjectMedia.length;
			showMedia(nextIndex);
		});

		jQuery('.gallery_nav_btn.prev').on('click', function () {
			var prevIndex = (currentMediaIndex - 1 + currentProjectMedia.length) % currentProjectMedia.length;
			showMedia(prevIndex);
		});

		// Show first media
		if (currentProjectMedia.length > 0) {
			showMedia(0);
		}
	}

	function showMedia(index) {
    currentMediaIndex = index;
    var media = currentProjectMedia[index];
    var mainImageDiv = jQuery('.project_main_image');

    // Update active thumbnail
    jQuery('.thumbnail_item').removeClass('active');
    jQuery('.thumbnail_item[data-index="' + index + '"]').addClass('active');

    // Update counter
    jQuery('.media_counter').text((index + 1) + ' / ' + currentProjectMedia.length);

    // Display media
    if (media.type === 'video') {
        // Check if it's a YouTube/Vimeo URL (for iframe) or local file
        if (media.url && (media.url.includes('youtube') || media.url.includes('vimeo'))) {
            mainImageDiv.html('<div class="project_video_wrapper"><iframe src="' + media.url + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
        } else if (media.src) {
            // For local video files - ADDED muted, preload, and playsinline
            mainImageDiv.html(
                '<div class="project_video_wrapper">' +
                '<video controls muted preload="auto" playsinline style="width: 100%; max-width: 100%; height: auto;">' +
                '<source src="' + media.src + '" type="video/mp4">' +
                'Your browser does not support the video tag.' +
                '</video>' +
                '</div>'
            );
            
            // Attempt to play after a short delay
            setTimeout(function() {
                var videoElement = mainImageDiv.find('video')[0];
                if (videoElement) {
                    videoElement.play().catch(function(error) {
                        console.log('Auto-play prevented:', error);
                    });
                }
            }, 100);
        }
    } else {
        mainImageDiv.html('<img src="' + media.url + '" alt="' + media.title + '">');
    }
}
	

	function generateProjectHTML(data) {
		var html = '';

		// Media Section at Top
		if (data.media && data.media.length > 0) {
			html += '<div class="project_media_section">';

			// Main Image/Video Display
			html += '<div class="project_main_image">';
			html += '</div>';

			// Gallery Navigation Arrows (only if more than 1 media)
			if (data.media.length > 1) {
				html += '<div class="gallery_nav">';
				html += '<div class="gallery_nav_btn prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></div>';
				html += '<div class="gallery_nav_btn next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></div>';
				html += '</div>';

				// Media Counter
				html += '<div class="media_counter">1 / ' + data.media.length + '</div>';
			}

			// Thumbnails (only if more than 1 media)
			if (data.media.length > 1) {
				html += '<div class="project_thumbnails">';
				data.media.forEach(function (media, index) {
					var videoClass = media.type === 'video' ? ' video' : '';
					html += '<div class="thumbnail_item' + videoClass + '" data-index="' + index + '">';
					html += '<img src="' + media.thumbnail + '" alt="' + media.title + '">';
					html += '</div>';
				});
				html += '</div>';
			}

			html += '</div>';
		}

		// Content Section
		html += '<div class="project_detail_content">';

		// Hero
		html += '<div class="project_hero">';
		html += '<div class="subtitle">' + data.subtitle + '</div>';
		html += '<h1>' + data.title + '</h1>';
		html += '</div>';

		// Meta
		html += '<div class="project_meta">';
		html += '<div class="meta_item"><div class="meta_label">Client</div><div class="meta_value">' + data.client + '</div></div>';
		html += '<div class="meta_item"><div class="meta_label">Date</div><div class="meta_value">' + data.date + '</div></div>';
		html += '<div class="meta_item"><div class="meta_label">Category</div><div class="meta_value">' + data.category + '</div></div>';
		html += '<div class="meta_item"><div class="meta_label">Technologies</div><div class="meta_value">' + data.technologies + '</div></div>';
		html += '</div>';

		// Description
		html += '<div class="project_description">' + data.description + '</div>';

		// Sections
		if (data.sections && data.sections.length > 0) {
			data.sections.forEach(function (section) {
				html += '<div class="project_section">';
				html += '<h2 class="section_title">' + section.title + '</h2>';
				html += '<div class="section_content">';

				if (section.content) {
					html += '<p>' + section.content + '</p>';
				}

				if (section.items && section.items.length > 0) {
					html += '<ul>';
					section.items.forEach(function (item) {
						html += '<li>' + item + '</li>';
					});
					html += '</ul>';
				}

				html += '</div></div>';
			});
		}

		// Deliverables
		if (data.deliverables && data.deliverables.length > 0) {
			html += '<div class="project_section">';
			html += '<h2 class="section_title">Deliverables</h2>';
			html += '<div class="section_content"><ul>';
			data.deliverables.forEach(function (item) {
				html += '<li>' + item + '</li>';
			});
			html += '</ul></div></div>';
		}

		// Conclusion
		if (data.conclusion) {
			html += '<div class="project_section">';
			html += '<h2 class="section_title">Conclusion</h2>';
			html += '<div class="section_content"><p>' + data.conclusion + '</p></div>';
			html += '</div>';
		}

		// Tags
		if (data.tags && data.tags.length > 0) {
			html += '<div class="project_tags">';
			html += '<ul class="tags_list">';
			data.tags.forEach(function (tag) {
				html += '<li>' + tag + '</li>';
			});
			html += '</ul></div>';
		}

		html += '</div>';

		return html;
	}

	// Close Modal
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		currentMediaIndex = 0;
		currentProjectMedia = [];
		return false;
	});
}

function grax_tm_modalbox_news() {

	"use strict";

	var modalBox = jQuery('.grax_tm_modalbox_news');
	var list = jQuery('.grax_tm_news .news_list ul li');
	var closePopup = modalBox.find('.close');

	list.each(function () {
		var element = jQuery(this);
		var details = element.find('.list_inner').html();
		var buttons = element.find('.details .title a,.grax_tm_full_link');
		var mainImage = element.find('.main');
		var imgData = mainImage.data('img-url');
		var title = element.find('.title');
		var titleHref = element.find('.title a').html();
		buttons.on('click', function () {
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({ backgroundImage: 'url(' + imgData + ')' });
			title = modalBox.find('.title');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});

}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function grax_tm_popupscroll() {

	"use strict";

	var WW = jQuery(window).width();
	var H = jQuery(window).height();
	var scrollable = jQuery('.scrollable');

	var popupBox = jQuery('.grax_tm_modalbox_news .description_wrap');

	if (WW >= 1200) {
		popupBox.css({ height: H - 140 });
	} else {
		popupBox.css({ height: H });
	}

	scrollable.each(function () {
		var element = jQuery(this);
		var wH = jQuery(window).height();

		element.css({ height: wH - 140 });

		if (WW >= 1200) {
			element.css({ height: wH - 140 });
		} else {
			element.css({ height: wH });
		}

		element.niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function grax_tm_ripple() {

	"use strict";

	jQuery('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function grax_tm_color_switcher() {

	"use strict";

	var list = jQuery('.grax_tm_settings .colors li a');

	list.on('click', function () {
		var element = jQuery(this);
		var elval = element.attr('class');
		element.closest('.grax_tm_all_wrap').attr('data-color', '' + elval + '');
		return false;
	});
}

function grax_tm_switcher_opener() {

	"use strict";

	var settings = jQuery('.grax_tm_settings');
	var button = settings.find('.link');
	var direction = settings.find('.direction li a');
	var light = settings.find('.direction li a.light');
	var dark = settings.find('.direction li a.dark');

	button.on('click', function () {
		var element = jQuery(this);
		if (element.hasClass('opened')) {
			element.removeClass('opened');
			element.closest('.grax_tm_settings').removeClass('opened');
		} else {
			element.addClass('opened');
			element.closest('.grax_tm_settings').addClass('opened');
		}
		return false;
	});

	direction.on('click', function () {
		var element = jQuery(this);
		if (!element.hasClass('active')) {
			direction.removeClass('active');
			element.addClass('active');
		}
	});

	dark.on('click', function () {
		var el = jQuery(this);
		jQuery('body').addClass('dark');
		jQuery('.grax_tm_partners').addClass('opened');
		el.closest('.grax_tm_settings').addClass('changed');
		return false;
	});

	light.on('click', function () {
		var ele = jQuery(this);
		jQuery('body').removeClass('dark');
		jQuery('.grax_tm_partners').removeClass('opened');
		ele.closest('.grax_tm_settings').removeClass('changed');
		return false;
	});
}

function grax_tm_cursor_switcher() {

	"use strict";

	var wrapper = jQuery('.grax_tm_all_wrap');
	var button = jQuery('.grax_tm_settings .cursor li a');
	var show = jQuery('.grax_tm_settings .cursor li a.show');
	var hide = jQuery('.grax_tm_settings .cursor li a.hide');

	button.on('click', function () {
		var element = jQuery(this);
		if (!element.hasClass('showme')) {
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click', function () {
		wrapper.attr('data-magic-cursor', '');
	});
	hide.on('click', function () {
		wrapper.attr('data-magic-cursor', 'hide');
	});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function grax_tm_videoplayer() {
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// ---------------   MY WAYPOINT    --------------------
// -----------------------------------------------------

function grax_tm_my_waypoint() {

	"use strict";

	var myWaypoint = jQuery('.my_waypoint');

	myWaypoint.each(function () {

		var element = jQuery(this);

		element.waypoint({
			handler: function () {
				element.addClass('load');
			},
			offset: "80%"
		});
	});
}

// -----------------------------------------------------
// -----------------   HERO TITLE    -------------------
// -----------------------------------------------------

function grax_tm_hero_title() {

	"use strict";

	var heroText = jQuery('.fn_animation');

	heroText.each(function () {
		var element = $(this);
		var start = '<span class="word">';
		var char = '<span class="character">';
		var end = '</span>';
		var space = '&nbsp;';
		var allHTML = '';
		$.each(element.text().split(' '), function (i, e) {
			if (i !== 0) {
				allHTML += char + space + end;
			}
			allHTML += start;
			$.each(e.split(''), function (ii, ee) {
				allHTML += char + ee + end;
			});
			allHTML += end;
		});
		element.html(allHTML).addClass('ready');
	});
}

function grax_tm_hero_title_fade() {
	"use strict";

	var mySpan = jQuery('.fn_animation .character');
	var a = 0;
	var speed = 30;
	var wait = 500;
	mySpan.each(function (i) {
		var element = jQuery(this);
		setTimeout(function () { element.addClass('opened'); }, i * speed);
		a = i * speed;
	});
	setTimeout(function () {
		jQuery('.grax_tm_topbar').addClass('opened');
		jQuery('.grax_tm_down').addClass('opened');
	}, a + wait);
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function grax_tm_my_load() {

	"use strict";

	grax_tm_my_waypoint();
	setTimeout(function () { grax_tm_preloader(); }, 1000);
	setTimeout(function () { grax_tm_hero_title_fade(); }, 3000);
}

// -----------------------------------------------------
// ------------------   WAVIFY   -----------------------
// -----------------------------------------------------

function grax_tm_wavefy() {
	"use strict";

	jQuery('#wave_img').wavify({
		height: 10,
		bones: 3,
		amplitude: 45,
		color: $('#wave_img').data('color'),
		speed: 0.25
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function grax_tm_preloader() {

	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function grax_tm_nav_bg() {

	"use strict";

	jQuery(window).on('scroll', function () {
		var progress = jQuery('.progressbar');
		var topbar = jQuery('.grax_tm_topbar');
		var WinOffset = jQuery(window).scrollTop();

		if (WinOffset >= 100) {
			topbar.addClass('animate');
			progress.addClass('animate');
		} else {
			topbar.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -----------  ANCHOR NAVIGATION ------------------
// -------------------------------------------------

function grax_tm_anchor() {

	"use strict";

	jQuery('.anchor_nav').onePageNav();
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function grax_tm_down() {

	"use strict";

	jQuery('.grax_tm_talk .button a').on('click', function () {
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function grax_tm_hamburger() {

	"use strict";

	var hamburger = jQuery('.hamburger');
	var mobileMenu = jQuery('.grax_tm_mobile_menu .dropdown');

	hamburger.on('click', function () {
		var element = jQuery(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});

	jQuery('.grax_tm_mobile_menu .dropdown .dropdown_inner ul li a').on('click', function () {
		jQuery('.hamburger').removeClass('is-active');
		jQuery('.grax_tm_mobile_menu .dropdown').slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function grax_tm_cursor() {
	"use strict";

	var myCursor = jQuery('.mouse-cursor');

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function grax_tm_imgtosvg() {

	"use strict";

	jQuery('img.svg').each(function () {

		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function grax_tm_popup() {

	"use strict";

	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
	animateClass: 'animated',
	offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function grax_tm_data_images() {

	"use strict";

	var data = jQuery('*[data-img-url]');

	data.each(function () {
		var element = jQuery(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function grax_tm_contact_form() {

	"use strict";

	jQuery(".contact_form #send_message").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function grax_tm_parallax_effect() {

	"use strict";

	if ($('.parallax').length > 0) {
		var scene = $('.parallax').get(0);
		var parallax = new Parallax(scene, {
			relativeInput: true,
			onReady: function () {
				console.log('ready!');
			}
		});
	}
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container) {

	"use strict";

	container.find('.progress_inner').each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		pBar.css({ width: pValue + '%', backgroundColor: pColor });
		setTimeout(function () { pBarWrap.addClass('open'); });
	});
}

jQuery('.kioto_progress').each(function () {

	"use strict";

	var pWrap = jQuery(this);
	pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' });
});

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});

function grax_tm_progress_line() {

	"use strict";

	var line = jQuery('.progressbar .line');
	var documentHeight = jQuery(document).height();
	var windowHeight = jQuery(window).height();
	var winScroll = jQuery(window).scrollTop();
	var value = (winScroll / (documentHeight - windowHeight)) * 100;
	var position = value;

	line.css('height', position + "%");
}

/****************************/
/********** TOTOP ***********/
/****************************/

function grax_tm_totop() {

	"use strict";

	jQuery(".progressbar a").on('click', function (e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}