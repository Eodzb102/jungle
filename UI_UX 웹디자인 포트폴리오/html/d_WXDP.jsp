<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>

<%
request.setCharacterEncoding("UTF-8");
String referer = (String)request.getHeader("REFERER");  //이전 URL

%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta title="UI/UX 웹 디자인 포트폴리오"/>
    <meta description="최고의 전문가와 함께하는 웹 디자인 스페셜리스트 교육 반응형 웹 디자인에서 모바일 앱 GUI 까지를 목표로 하는 과정입니다."/>
    <meta Keywords="웹디자인, 웹디자인포트폴리오, UIUX웹디자인, 웹디자이너, 웹디자이너취업, 웹디자인학원, 아카데미정글"/>
    <meta name="robots" content="index,follow"/>
    <meta name="p:domain_verify" content="89b920c6613fdf64c299edd48e04e648"/>
   
    <!-- 크롬과 사파리 -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="default"/>  <!-- default = 일반 상태바, black = 상태바 검정색, black-translucent = 상태바 반투명 검정색 -->
    <meta name="apple-mobile-web-app-title" content="UI/UX 반응형 웹디자인 "/>
 
    <!--facebook -->
    <meta id="og_type" property="og:type" content="website"/>
    <meta id="og_title" property="og:title" content="UI/UX 반응형 웹디자인 "/>
    <meta id="og_description" property="og:description" content="최고의 전문가와 함께하는 웹 디자인 스페셜리스트 교육 반응형 웹 디자인에서 모바일 앱 GUI 까지를 목표로 하는 과정입니다."/>
    <meta id="og_image" property="og:image" content="https://ejungle.co.kr/images/main/jungle_thumnail.jpg"/>
    <meta id="og_url" property="og:url" content="https://ejungle.co.kr"/>
 
    <meta name="twitter:card" content="website"/>
    <meta name="twitter:title" content="UI/UX 반응형 웹디자인 "/>
    <meta name="twitter:url" content="https://ejungle.co.kr"/>
    <meta name="twitter:image" content="https://ejungle.co.kr/images/main/jungle_thumnail.jpg"/>
    <meta name="twitter:description" content="최고의 전문가와 함께하는 웹 디자인 스페셜리스트 교육 반응형 웹 디자인에서 모바일 앱 GUI 까지를 목표로 하는 과정입니다."/>
    <title>UI/UX 웹 디자인 포트폴리오</title>
    <!-- 수정 -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="https://ejungle.co.kr/favicon_jungle_pc.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="https://ejungle.co.kr/favicon_jungle_pc.ico"/>
    <link rel="stylesheet" href="../css/all.min.css">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/d_WXDP.css" media="screen and (min-width : 769px)">
    <link rel="stylesheet" href="../css/d_WXDP_m.css" media="screen and (max-width : 768px)">
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/jquery-ui.min.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/d_WXDP.js"></script>
    <!-- 네이버 애널리스틱 -->
    <script type="text/javascript" src="https://wcs.naver.net/wcslog.js"></script> 
    <script type="text/javascript"> if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "10766e329c9af88"; wcs_do(); </script>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KD74K4C');</script>
    <!-- End Google Tag Manager -->
</head>
<body>
    <div class="skip_nav">
        <p><a href="#main">본문바로가기</a></p>
    </div>
    <div id="wrap">  
        <header id="header">
            <div class="container"><h1><a href="https://ejungle.co.kr/"><img src="../img/d_WXDP/jungle_logo.png" alt="아카데미정글"></a></h1></div>
        </header>
        <main id="main">
            <section class="main_visual">
                <article class="introduction">
                    <div class="container">
                        <div>
                            <h2><span>UI/UX</span> WEB DESIGN PORTFOLIO</h2>
                            <span>취업/이직 준비생</span>
                            <span>포트폴리오 제작</span>
                            <span>8주/16강</span>
                            <p><em>이론과 실습</em>의 효과적인 <br class="only_m"> 교육 시스템을 통해 <strong>UI/UX 개념</strong>을 <br class="only_m">파악하고 취업을 위한<br class="only_m"> <strong>반응형 웹 포트폴리오</strong>를 <br class="only_m">제작하는 과정입니다.</p>
                            <a href="https://ejungle.co.kr/course/course_apply01.jsp?p_no=4006&DI=D" class="only_pc">수강신청</a>  <!-- 여긴느 항상 수정 -->
                            <a href="https://ejungle.co.kr/m/info/m_apply1.jsp?DI=D&p_no=4006&inwon_chk=1" class="only_m">수강신청</a>  <!-- 여긴느 항상 수정 -->
                            <div><img src="../img/d_WXDP/main_img_icon.png" alt="웹 디자인 포트폴리오"></div>
                            <dl>
                                <dt>교육일정</dt><dd>2020.09.16 - 2020.11.11</dd>
                                <dt>교육시간</dt><dd>월, 수 / 19:00 - 21:50</dd>
                                <dt>교육장소</dt><dd>아카데미정글 (강남 신사)</dd>
                                <dt>수 강 료</dt><dd>총 96만원 / 월 48만원</dd>
                                <dt>준 비 물</dt><dd>개인 노트북(권장)</dd>
                            </dl>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="container">
                        <div>
                            <h2 class="hide">UI/UX WEB DESIGN PORTFOLIO 과정의 수업내용</h2>
                            <span>Do you <br class="only_m"> want to be a <strong>UI/UX DESIGNER?</strong></span>
                            <p>아카데미정글의 <strong>UI/UX 웹 디자인 포트폴리오 과정</strong>은 <strong>UI/UX 이론</strong>을 바탕으로 <strong>UI/GUI에 특화된 웹 디자인 포트폴리오</strong>를 제작하는 과정입니다.</p>
                        </div>
                        <ul>
                            <li><strong>UI/UX DESIGN</strong> 이론 <span>30%</span></li>
                            <li><strong>DESIGN PROJECT</strong> 실습 <span>70%</span></li>
                            <li><strong>UI/UX WEB PORTFOLIO</strong> 제작</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section class="difference">
                <div class="container">
                    <article>
                        <h2 class="hide">타 학원생들과 다른 아카데미정글 졸업생들의 포트폴리오</h2>
                        <span>What's the <strong>DIFFERENCE?</strong></span>
                        <p>
                            <strong>"아카데미정글 졸업생들의 UI/UX 웹 디자인 포트폴리오는 다른 사람들과는 다릅니다."</strong>
                            <em>대다수의 아카데미정글 졸업생들이 에이전시, 인하우스 면접 시 들었던 이야기. </em>
                            아카데미정글의 UI/UX 웹 디자인 포트폴리오 과정은 무엇이 다를까요?
                        </p>
                        <ul>
                            <li>
                                <img src="../img/d_WXDP/danae-paparis-x1EXurcH9gs-unsplash.png" alt="">
                                <div>
                                    <strong>높은 실습 비중으로 <br> 직접 경험해보는 UI/UX 디자인</strong>
                                    <p>UI/UX 디자인의 이론과 실습의 효과적인 교육 시스템을 통해 원리와 개념을 파악 한 포트폴리오를 제작합니다.</p>
                                </div>
                            </li>
                            <li>
                                <img src="../img/d_WXDP/kaitlyn-baker-vZJdYl5JVXY-unsplash.png" alt="">
                                <div>
                                    <strong>실습을 통해 익히는 <br> 실무 기반의 프로젝트 프로세스</strong>
                                    <p>실무에서 필요로 하는 UI/UX디자인 프로 젝트 프로세스를 경험하여 트렌디한 디자 인 포트폴리오를 제작합니다.</p>
                                </div>
                            </li>
                            <li>
                                <img src="../img/d_WXDP/john-schnobrich-FlPc9_VocJ4-unsplash.png" alt="">
                                <div>
                                    <strong>UI/UX디자인 이론을 바탕으로 <br> 기획부터 디자인까지</strong>
                                    <p>이론과 실습을 바탕으로, 기획부터 디자 인까지 1:1 개인별 컨펌을 통해 개인 기 여도 100%의 포트폴리오를 제작합니다.</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h3>수강생 포트폴리오</h3>
                        <ul>
                            <li><img src="../img/d_WXDP/Student_Portfolio01_ff.jpg" alt="수강생 박O아 님 포트폴리오"><span>수강생 박O아 님</span></li>
                            <li><img src="../img/d_WXDP/Student_Portfolio02_ff.jpg" alt="수강생 박O린 님 포트폴리오"><span>수강생 박O린 님</span></li>
                            <li><img src="../img/d_WXDP/Student_Portfolio03_ff.jpg" alt="수강생 최O슬 님 포트폴리오"><span>수강생 최O슬 님</span></li>
                            <li><img src="../img/d_WXDP/Student_Portfolio04_ff.jpg" alt="수강생 고O라 님 포트폴리오"><span>수강생 고O라 님</span></li>
                            <li><img src="../img/d_WXDP/Student_Portfolio05_ff.jpg" alt="수강생 장O연 님 포트폴리오"><span>수강생 장O연 님</span></li>
                            <li><img src="../img/d_WXDP/Student_Portfolio06_ff.jpg" alt="수강생 김O은 님 포트폴리오"><span>수강생 김O은 님</span></li>
                        </ul>
                    </article>
                </div>
            </section>
            <section class="enrolment">
                <article class="recruit">
                    <div class="container">
                        <h2>이런분이 <br class="only_m"><strong>수강</strong>하기에 좋습니다.</h2>
                        <ul>
                            <li>
                                <strong>웹/모바일 UI/UX 관련 디자인 기업 취업 희망자</strong>
                                <p>기획의도, 컨셉, 주요 기능적 특징을 파악할 수 있는 스킬을 습득할 수 있습니다.</p>
                            </li>
                            <li>
                                <strong>포트폴리오가 필요한 디자이너 및 전공자</strong>
                                <p>UI/UX 디자인 방법론 훈련을 통한 커리어 업그레이드 및 진학을 할 수 있습니다.</p>
                            </li>
                            <li>
                                <strong>UI/UX 디자인 기업 취업을 희망하시는 분</strong>
                                <p>디자인 이론, 실무 프로젝트가 동시에 이루어지는 종합적인 과정입니다.</p>
                            </li>
                            <li>
                                <strong>UI/UX 디자이너로 이직을 원하는 분</strong>
                                <p>트렌디한 포트폴리오를 완성 하여 성공적인 취업을 목표로 하시는 분께 추천합니다.</p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="curriculum">
                    <div class="container">
                        <h2>CURRICULUM</h2>
                        <ol>
                            <li>
                                <p><span>PART 01</span> 웹 디자인 기초</p>
                                <ul class="more_detailed part1">
                                    <li>
                                        <strong>01강</strong>
                                        <ul>
                                            <li>1. 오리엔테이션</li>
                                            <li>2. 웹디자인에 필요한 포토샵 작업환경 세팅</li>
                                            <li>3. 웹디자인의 기본 구성요소 01 - 타이포그래피</li>
                                            <li>4. 웹디자인의 기본 구성요소 02 - 이미지 활용</li>
                                            <li>5. 웹디자인의 기본 구성요소 03 - 레이아웃과 구도</li>
                                            <li>6. 웹디자인의 기본 구성요소 04 - 컬러</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>02강</strong>
                                        <span class="title">포토샵 기능 실습</span>
                                        <p>웹디자인에 꼭 필요한 포토샵 필수 기능과 예제 실습</p>
                                    </li>
                                    <li>
                                        <strong>03강</strong>
                                        <ul>
                                            <li class="title">쇼핑몰 웹사이트 예제 실습</li>
                                            <li>1. 그리드 디자인을 활용한 쇼핑몰 <br class="only_pc"> 웹사이트 레이아웃 실습</li>
                                            <li>2. 배너 영역 디자인 실습</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>04강</strong>
                                        <span class="title">기업 웹사이트 예제 실습 1</span>
                                        <p>기업의 디자인 아이덴티티를 활용한 <br class="only_pc">웹사이트 디자인 실습 1</p>
                                    </li>
                                    <li>
                                        <strong>05강</strong>
                                        <ul>
                                            <li class="title">프로모션 디자인 실습 1</li>
                                            <li>1. 프로모션 웹 사이트 주제 선정 및 프로모션 기획</li>
                                            <li>2. 프로모션 웹 사이트 와이어 프레임, 무드 보드 제작</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>06강</strong>
                                        <span class="title">기업 웹사이트 예제 실습 2</span>
                                        <p>기업의 디자인 아이덴티티를 활용한 <br class="only_pc">웹사이트 디자인 실습 2</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p><span>PART 02</span>반응형 웹 디자인</p>
                                <ul class="more_detailed part2">
                                    <li>
                                        <strong>07강</strong>
                                        <ul>
                                            <li>1.웹 디자인 트랜드</li>
                                            <li>2. 반응형 웹 디자인 기초 이론</li>
                                            <li>3. 브라우저와 해상도의 이해</li>
                                            <li>4. 반응형 웹 그리드 디자인 시스템 이론</li>
                                            <li>5. 포트폴리오 반응형 웹 디자인 프로젝트 <br>- 주제 선정을 위한 리서치</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>08강</strong>
                                        <ul>
                                            <li>1. 반응형 웹 레이아웃 살펴보기</li>
                                            <li>2. 모바일 퍼스트란?</li>
                                            <li>3. 디자인 컨셉 도출 방법론</li>
                                            <li>4. 포트폴리오 반응형 웹 디자인 프로젝트 <br class="only_pc">- 주제 선정</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>09강</strong>
                                        <ul>
                                            <li>1. 화면 정의서(스토리 보드) 작성법과 실습</li>
                                            <li>2. 무드 보드 작성법과 제작 실습</li>
                                            <li>3. 포트폴리오 반응형 웹 디자인 프로젝트 <br class="only_pc">- 컨셉 디자인</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>10강</strong>
                                        <p>반응형 웹 비주얼 컨셉 디자인 <br> - 타이포그래피, 컬러, 레이아웃</p>
                                    </li>
                                    <li>
                                        <strong>11강</strong>
                                        <p>반응형 웹 데스크탑 버전 메인 비주얼 디자인 1</p>
                                    </li>
                                    <li>
                                        <strong>12강</strong>
                                        <p>반응형 웹 데스크탑 버전 메인 비주얼 디자인 2</p>
                                    </li>
                                    <li>
                                        <strong>13강</strong>
                                        <p>데스크탑 버전 컨텐츠 영역 디자인 실습 1</p>
                                    </li>
                                    <li>
                                        <strong>14강</strong>
                                        <p>데스크탑 버전 컨텐츠 영역 디자인 실습 2</p>
                                    </li>
                                    <li>
                                        <strong>15강</strong>
                                        <p>모바일 버전 디자인 실습 및 크리틱</p>
                                    </li>
                                    <li>
                                        <strong>16강</strong>
                                        <p>최종 발표 및 과정 마무리</p>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </article>
            </section>
            <section class="class_information">
                <div class="container">
                    <article class="instructor_info">
                        <h2>강사 소개</h2>
                        <div class="box">
                            <dl>
                                <dt>전임강사</dt><dd>김도완</dd>
                            </dl>
                            <p>전) 바이널/바이널엑스 15년 재직 <span>User Experience Design Group, Art Director</span></p>
                            <p>현) 아카데미정글 <span>크리에이티브 아트 디렉터 / 에반젤리스트전임강사</span></p>
                            <ul>
                                <li><strong>주요 프로젝트</strong></li>
                                <li>SAMSUNG Rio 2016 올림픽 공식 App</li>
                                <li>SAMSUNG Game Cast</li>
                                <li>SAMSUNG S Console Gamepad</li>
                                <li>SAMSUNG Kids Store</li>
                                <li>SAMSUNG APPS Store</li>
                                <li>OPPO GUI Standard</li>
                                <li>SKT T world</li>
                                <li>SECOM, My secom</li>
                                <li>Pantech Vega LTE Standard GUI</li>
                            </ul>
                        </div>
                        <div>
                            <h3>강사 포트폴리오</h3>
                            <img src="../img/d_WXDP/pro.png" alt="김도완 강사님 포트폴리오">
                        </div>
                    </article>
                    <article>
                        <h3>수강후기</h3>
                        <div class="image_slide">
                            <div class="box">
                                <ul class="slide">
                                    <li>
                                        <strong>수강생 윤철 님</strong>
                                        <p>
                                            강의를 듣기 전에는 아는 게 없고 감이 오는 게 없어서 막막했습니다. 
                                            혼자 무언가를 해 볼 엄두가 나지 않았습니다. 수강 후 지금은 어떤 것이 괜찮은지, 어떤 레퍼런스를 어떻게 참고할지 이런 부분에 대해서 많이 고민하게 되었고 수업을 듣기 전 보다 많이 발전했다고 느끼고 있습니다. <br> 
                                            여러가지 실무 이야기나, 알아 두면 좋은 팁, 답답했던 부분에 대한 시원한 컨펌이 아주 좋았습니다!<br> 수업 자체도 너무 좋은 수업이지만 본인 스 스로 더 노력한다면 더 많은 것을 배워갈 수 있는 수업이라고 생각합니다.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>수강생 윤아 님</strong>
                                        <p>
                                            비전공생으로 진로 변경을 위해 UI/UX 디자 인을 처음부터 배우고자 하였습니다. <br class="only_pc">
                                            반응형 웹 쪽으로 가이드를 어떻게 잡아야 할 지, 어떤 식으로 디자인하는지 처음부터 배우고 싶어 수강하게 되었습니다. <br>
                                            웹 디자인에 초점을 맞추어 포토샵을 어떻게 계층 구조를 잡아가면서 디자인해야될지 기초 적인 스케치가 생겼습니다.<br> 1:1로 상담해주시고, 과제물, 포트폴리오에 대한 피드백을 구체적으로 받고 싶은 수강생 에게 추천합니다. 
                                            2달 동안 친절하게, 구체적 으로 설명해주셔서 감사드리고, 멋있는 기획 디자이너가 되어 있겠습니다!
                                        </p>
                                    </li>
                                    <li>
                                        <strong>수강생 상연 님</strong>
                                        <p>
                                            비전공자로서 자신감이 많이 없고 막막한 상태로 웹 디자인 UI UX 라는 걸 배워보고 싶다는 생각에 주변 전공자에게 정보를 물었고, 제가 제일 선호하는 포트폴리오에 가까운 아카데미정글에서 수강하게 되었습니다. <br>
                                            작업 방향이나 구성이 어느 정도 머리에 그려 지면서 고민이 많이 해결된 것 같습니다. 포트 폴리오 구성에 최적화된 수업이고, 기초적인 부분을 디테일하게 체크해주시는 선생님의 피드백이 기억에 남습니다. <br>
                                            꼭 필요한 UI/UX 이론을 듣고 UI/UX 웹디자인 포트폴리오를 구성할 수 있어 뿌듯합니다.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>수강생 연희 님</strong>
                                        <p>
                                            반응형 디자인과 web 디자인 포트폴리오를 만들고 싶어서 이 수업을 수강하게 되었습니다. 강의를 듣기 전에는 UI/UX에 대한 이론적 정보가 부족했습니다. 
                                            강의를 수강하면서 UX/ UI 이론도 듣고 디자인, 기획 등의 방법도 알게 되었으며 작업 시 참고할 수 있는 사이트 등 정보를 많이 얻을 수 있었습니다. <br>
                                            포트폴리오 제작시 1:1 피드백을 들을 수 있어 포트폴리오 방향을 잡아 나갈 수 있어서 좋았습니다. 
                                            UI/UX의 기초 지식이 없을 경우 제작 사이즈부터 기본적이고 기초적인 이론 공부도 할 수 있어서 좋았습니다.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <ul class="indicator">
                                <li><a href="#">1번 이미지</a></li>
                                <li><a href="#">2번 이미지</a></li>
                                <li><a href="#">3번 이미지</a></li>
                                <li><a href="#">4번 이미지</a></li>
                            </ul>
                            <ul class="control">
                                <li><a href="#" class="prev"><img src="../img/d_WXDP/next.svg" alt="다음 이미지"></a></li>
                                <li><a href="#" class="next"><img src="../img/d_WXDP/prev.svg" alt="이전 이미지"></a></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
            <section class="deferred_payment">
                <div class="container">
                    <h2 class="hide">결제 방법은 일반결제와 후불제 중 선택할수 있습니다</h2>
                    <p>
                        수강신청 후 <br class="only_m"><em>결제 방법</em>은 <br><strong>일반결제</strong>와 <strong>후불제</strong> 중 선택할 수 있습니다.
                        <a href="http://ejungle.co.kr/information/info_afterPay.jsp">후불제란? &gt;</a><a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ2-y2PpC9KTa1AujH9n-RscJvSiLY90yqa9SF7U3wOE1GkA/viewform">후불제 신청 &gt;</a>
                    </p>
                    <div>
                        <strong>01. 일반 결제</strong>
                        <ol>
                            <li>
                                <strong>01. 온라인 수강신청</strong>
                                <p>과정 선택 후 수강 신청을 합니다.</p>
                            </li>
                            <li>
                                <strong>02. 일반 결제</strong>
                                <p>계좌이체, 온라인 카드 결제, 내사 카드 결제 중 선택하여 결제합니다.</p>
                            </li>
                            <li>
                                <strong>03. 교육</strong>
                                <p>선택한 과정을 수강합니다.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <strong>02. 후불제</strong> 
                        <p><span>아카데미정글</span><span>학생독립만세</span></p>
                        <ol>
                            <li>
                                <strong>01. 온라인 수강신청</strong>
                                <p>과정 선택 후 수강 신청 후, 후불제 인증 신청을 합니다.</p>
                            </li>
                            <li>
                                <strong>02. 후불제 인증 &계약</strong>
                                <p>후불제 인증 심사 & 계약을 온라인으로 진행하며, 인증료(교육비 5% 별도 선납)를 납부합니다.</p>
                            </li>
                            <li>
                                <strong>03. 교육</strong>
                                <p>선택한 과정을 수강합니다.</p>
                            </li>
                            <li>
                                <strong>04. 결제</strong>
                                <p>교육 종료 후, 계약 기간 내에 교육비를 분할 납부 합니다.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section class="location">
                <div class="container">
                    <h2>오시는 길</h2>
                    <p>
                        아카데미정글은 <strong>3호선 신사역 5번출구에서 도보 약 3분 거리</strong>입니다. <br>
                        신사역 5번 출구에서 뒤에 GS주유소를 오른편에 두고 큰 도로를 직진하셔서 JoyMG가 있는 건물(원능프라자) 2층으로 오시면 됩니다. 
                        수강생 분들은 주차장 이용이 불가하오니 대중교통을 이용해주시길 바랍니다.
                    </p>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6773925360676!2d127.01489481558743!3d37.515526334804974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee5c5f11%3A0xeffe3379a44d96af!2z7JWE7Lm0642w66-47KCV6riA!5e0!3m2!1sko!2skr!4v1596604657385!5m2!1sko!2skr"
                        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </section>
            <section class="fixed_bar">
                <article class="bar_menu_top">
                    <div class="container">
                        <p>
                            [강의 수료자 특전] <strong><a href="http://ejungle.co.kr/course/course_view.jsp?p_no=4015&DI=W" class="only_pc">포토샵 실무활용:Media Image Making 워크샵 강의</a>
                            <a href="http://ejungle.co.kr/course/course_view.jsp?p_no=4015&DI=W" class="only_m">포토샵 실무활용:Media Image Making 워크샵 강의</a></strong>를 <strong>50% 할인된 수강료</strong>로 수강하실 수 있습니다.
                        </p>
                    </div>
                </article>
                <article class="bar_menu">
                    <div class="container">
                        <div class="only_pc">
                            <p> UI/UX 웹디자인 포트폴리오</p>
                            <p class="btn">
                                <a href="https://ejungle.co.kr/information/info_counsel.jsp">상담신청</a>
                                <a href="https://ejungle.co.kr/course/course_apply01.jsp?p_no=4006&DI=D">수강신청</a>  <!--  no = 숫자랑 GD 수정  -->
                            </p>
                        </div>
                        <div class="only_m">
                            <a href="https://ejungle.co.kr/m/info/m_apply1.jsp?DI=D&p_no=4006&inwon_chk=1">수강신청</a>  <!--  no = 숫자랑 GD 수정  -->
                        </div>
                    </div>
                </article>
            </section>
        </main>
        <footer id="footer">
            <div class="container">
                <p class="logo">
                    <img src="../img/d_WXDP/jungle_logo.png" alt="아카데미 정글">
                </p>
                <address>
                    주소 | 서울특별시 서초구 나루터로 67 (잠원동 15-7) 원능프라자 2층 (우편번호: 06525) <br>전화 | 02-3673-1721 <br>메일 | info@ejungle.co.kr
                </address>
                <p class="copy">Copyright &copy; 2016 Creative New.Co.Ltd. All right reserved.</p>
            </div>
        </footer>

<%

String ip = ""; 
String country_code = ""; 
String country_name = ""; 

%>

		<form>
			<div id="input_box">
				<input type="hidden" id = "ip" NAME="ip"  value="<%=ip%>"/>
				<input type="hidden" id = "country_code" NAME="country_code" value="<%=country_code%>"/>
				<input type="hidden" id = "country_name" NAME="country_name" value="<%=country_name%>"/>
			</div>
		</form>

    </div>

	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script>
		//alert("111111111");
		
			var ip ="";
			var country_code = "";
			var country_name = "";
			var referer = "<%=referer%>";;
		/*
			var ip;
			var country;
			var country_code;
			var org;
		*/
			$.ajax({
				url: "https://api.ip.pe.kr/json"
			}).done(function(api) {
				//alert(api);
				$("#ip").val(api.ip);
				$("#country_code").val(api.country_code);
				$("#country_name").val(api.country_name.ko);
				save_ip(api.ip, api.country_code, api.country_name.ko, referer);

			}).fail(function() {
				alert("로딩하는데 실패하였습니다.");
			});
		
		//save_ip(ip,country_code,country_name, referer);

		function save_ip(ip,country_code,country_name,referer){	
			//alert("referer : "+referer);
			//alert("country_code : "+country_code);
			//alert("country_name : "+country_name);
			//alert("referer : "+referer);
			

			$.ajax({   
			  type: "POST",  
			  url: "Ip_save.jsp",  
			  data: "ip="+ip+"&country_code="+country_code+"&country_name="+country_name+"&referer="+referer+"&p_no=4012" ,   //data: "s_code="+sel,   //&a=xxx 식으로 뒤에 더 붙이면 됨	
			  success: function (result){
						 //alert ("msg :"+ result);
						 //$("#input_box").html(result); //innerHTML 을 이런 방식으로 사용함
					}
				,  

			  error:function(xhr, status, error){
						alert("error 발생 : "+error);
			  }
			 });
			

	};

	</script>

</body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD74K4C" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
</html>