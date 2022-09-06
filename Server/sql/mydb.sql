--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: gender; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.gender AS ENUM (
    'male',
    'female',
    'other'
);


--
-- Name: mov_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.mov_type AS ENUM (
    'anime',
    'serial',
    'movie',
    'other'
);


--
-- Name: vidl_trns; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.vidl_trns AS ENUM (
    'Subbed',
    'Dubbed',
    'Original',
    'Subbed & Dubbed'
);


--
-- Name: vidl_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.vidl_type AS ENUM (
    'like',
    'dislike'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id bigint NOT NULL,
    name text
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: films; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name text,
    descr text,
    whenn bigint
);


--
-- Name: films2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films2 (
    id integer NOT NULL,
    name text,
    descr text,
    added bigint
);


--
-- Name: films23; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films23 (
    id integer NOT NULL,
    name text,
    descr text,
    added bigint
);


--
-- Name: films23_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films23_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films23_id_seq OWNED BY public.films23.id;


--
-- Name: films2_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films2_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films2_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films2_id_seq OWNED BY public.films2.id;


--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id bigint NOT NULL,
    author bigint DEFAULT '0'::bigint,
    type public.vidl_type DEFAULT 'like'::public.vidl_type,
    video bigint DEFAULT '0'::bigint
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id bigint NOT NULL,
    name text,
    description text,
    release_time integer,
    genre text,
    director text,
    producer text,
    actors text,
    start text,
    when_added bigint,
    views bigint DEFAULT 0,
    author bigint DEFAULT 0,
    subscriptions bigint DEFAULT 0,
    timet text DEFAULT now(),
    dislike bigint DEFAULT '0'::bigint,
    vlike bigint DEFAULT '0'::bigint,
    video_typpe public.vidl_trns DEFAULT 'Original'::public.vidl_trns,
    mv_type public.mov_type DEFAULT 'movie'::public.mov_type,
    ongoing_time bigint
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.order_details (
    quantity integer,
    notes character varying(200)
);


--
-- Name: subscription; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subscription (
    id bigint NOT NULL,
    cuser bigint DEFAULT 0,
    channel bigint DEFAULT 0
);


--
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subscription_id_seq OWNED BY public.subscription.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name text,
    surname text,
    register_time timestamp without time zone DEFAULT now(),
    gender public.gender,
    last_visit bigint,
    nickname character varying(128),
    password text,
    mail text,
    picture text DEFAULT '0'::text,
    subscriptions bigint DEFAULT 0
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: films id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- Name: films2 id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films2 ALTER COLUMN id SET DEFAULT nextval('public.films2_id_seq'::regclass);


--
-- Name: films23 id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films23 ALTER COLUMN id SET DEFAULT nextval('public.films23_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: subscription id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscription ALTER COLUMN id SET DEFAULT nextval('public.subscription_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.categories (id, name) FROM stdin;
1	epic
2	horror
3	western
4	eastern
5	tales
6	romantic
7	musical
8	tv series
9	space
10	monsters
11	zombies
12	comedy
13	history
14	documentary
15	sport
\.


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.films (id, name, descr, whenn) FROM stdin;
\.


--
-- Data for Name: films2; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.films2 (id, name, descr, added) FROM stdin;
\.


--
-- Data for Name: films23; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.films23 (id, name, descr, added) FROM stdin;
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.likes (id, author, type, video) FROM stdin;
191	31	dislike	1
221	31	like	72
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.movies (id, name, description, release_time, genre, director, producer, actors, start, when_added, views, author, subscriptions, timet, dislike, vlike, video_typpe, mv_type, ongoing_time) FROM stdin;
71	qweqweqw	\N	\N	\N	\N	\N	\N	\N	\N	5	0	0	Sep 2, 2022	0	0	Subbed & Dubbed	movie	\N
60	qqqq	qweqweqweqweqweqwe	2015	8	\N	\N	\N	\N	\N	3	0	0	Sep 2, 2022	0	0	Original	movie	\N
51	qqqq	qweqweqweqweqweqwe	2015	3	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
70	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	281	29	1	Sep 2, 2022	0	0	Original	movie	\N
37	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
38	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
39	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
40	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
41	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
42	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
43	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
52	qqqq	qweqweqweqweqweqwe	2015	4	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
53	qqqq	qweqweqweqweqweqwe	2015	5	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
54	qqqq	qweqweqweqweqweqwe	2015	6	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
56	qqqq	qweqweqweqweqweqwe	2015	8	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
57	qqqq	qweqweqweqweqweqwe	2015	8	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
58	qqqq	qweqweqweqweqweqwe	2015	8	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
64	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	0	28	0	Sep 2, 2022	0	0	Original	movie	\N
69	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	3	29	0	Sep 2, 2022	0	0	Original	movie	\N
68	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	1	29	0	Sep 2, 2022	0	0	Original	movie	\N
72	qqqq	qweqweqweqweqweqwe	2015	1	\N	\N	\N	\N	\N	1611	32	0	2022-09-02 19:45:16.644877+04	0	1	Subbed & Dubbed	movie	\N
67	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	0	29	0	Sep 2, 2022	0	0	Original	movie	\N
50	qqqq	qweqweqweqweqweqwe	2015	3	\N	\N	\N	\N	\N	2	0	0	Sep 2, 2022	0	0	Original	movie	\N
63	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	0	28	0	Sep 2, 2022	0	0	Original	movie	\N
7	Vikings	444444444	2005	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
55	qqqq	qweqweqweqweqweqwe	2015	7	\N	\N	\N	\N	\N	2	0	0	Sep 2, 2022	0	0	Original	movie	\N
4	Dominion	1111111111111111111111111111111111111111	2010	\N	\N	\N	\N	\N	1661959239	27	0	0	Sep 2, 2022	0	0	Original	serial	\N
59	qqqq	qweqweqweqweqweqwe	2015	8	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
36	Forrest Gump	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	movie	\N
66	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	0	29	0	Sep 2, 2022	0	0	Original	movie	\N
8	Supernatural	55555555555555	2005	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
9	Dragon	77777777777777777	2005	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
45	qqqq	qweqweqweqweqweqwe	2015	2	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
47	qqqq	qweqweqweqweqweqwe	2015	2	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
12	Boruto	1qwceqwcwqe	2005	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
46	qqqq	qweqweqweqweqweqwe	2015	2	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
10	dragon ball	123125123123	2005	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	movie	\N
11	Naruto	12515123123	2005	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	movie	\N
13	Witcher	qqqqqqqqqqq	2005	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	movie	\N
14	Watcher	444qqqqqqqqqqqqqqq444444	2001	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	movie	\N
19	Resident evil3	44qqqqqqqqqqqqq4444444	2007	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
62	New movie	Production Companies \\n Warner Bros. (presents) (as Warner Bros. Pictures) \\n Atlas Entertainment \\n  Cruel & Unusual Films \\n  DC Comics \\n  DC Entertainment \\n RatPac-Dune Entertainment (in association with) \\n "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	4	28	0	Sep 2, 2022	0	0	Original	movie	\N
20	Resident evil4	44qqqqqqqqqqqqq4444444	2006	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
21	Resident evil5	44qqqqqqqqqqqqq4444444	2005	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
22	Resident evil6	44qqqqqqqqqqqqq4444444	2004	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
23	Monsters	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
35	Thor	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
1	Matrix	1111111111111111111111111111111111111111	2010	\N	\N	\N	\N	\N	1661959239	149	29	0	Sep 2, 2022	1	0	Subbed & Dubbed	anime	\N
6	the originals	33333333333333333333	2013	\N	\N	\N	\N	\N	1661959239	15	0	0	Sep 2, 2022	0	0	Original	serial	\N
24	12 Angry Men	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
25	Schindlers List	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
65	Batman vs Superman	 "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."	2015	1	\N	\N	\N	\N	\N	14	28	0	Sep 2, 2022	0	0	Original	movie	\N
15	Against someone	444qqqqqqqqqqqqqqqq444444	2002	\N	\N	\N	\N	\N	1661959239	6	0	0	Sep 2, 2022	0	0	Original	movie	\N
29	Avengers2	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
30	Avengers3	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
2	Matrix2	1111111111111111111111111111111111111111	2010	\N	\N	\N	\N	\N	1661959239	34	0	0	Sep 2, 2022	0	0	Original	serial	\N
3	Matrix3	1111111111111111111111111111111111111111	2010	\N	\N	\N	\N	\N	1661959239	48	0	0	Sep 2, 2022	0	0	Original	serial	\N
5	doctor who	222222222222222222	2000	\N	\N	\N	\N	\N	1661959239	1	0	0	Sep 2, 2022	0	0	Original	anime	\N
32	Doctor strage	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
33	Doctor strage2	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
34	Iron man	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
31	Wanda & Vision	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
48	qqqq	qweqweqweqweqweqwe	2015	2	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
49	qqqq	qweqweqweqweqweqwe	2015	3	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
26	The Lord of the Rings	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
28	Avengers	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
61	qqqq	qweqweqweqweqweqwe	2015	9	\N	\N	\N	\N	\N	156	0	0	Sep 2, 2022	0	0	Original	movie	\N
44	qqqq	qweqweqweqweqweqwe	2015	2	\N	\N	\N	\N	\N	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
16	ZZZZZZZZZZZZZZZZZ	44qqqqqqqqqqqqq4444444	2003	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
17	Resident evil	44qqqqqqqqqqqqq4444444	2009	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
18	Resident evil2	44qqqqqqqqqqqqq4444444	2008	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
27	Hulk	44qqqqqqqqqqqqq4444444	2011	\N	\N	\N	\N	\N	1661959239	0	0	0	Sep 2, 2022	0	0	Original	movie	\N
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.order_details (quantity, notes) FROM stdin;
\N	123412312
11	1234123122
11	123412312222
\.


--
-- Data for Name: subscription; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.subscription (id, cuser, channel) FROM stdin;
51	31	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, surname, register_time, gender, last_visit, nickname, password, mail, picture, subscriptions) FROM stdin;
29	Qniko	koberidze	2022-09-02 01:41:51.684601	\N	\N	FoLLeN	\\x8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	\N	0	0
1	nukri	beridze	2022-08-28 15:35:59.480361	male	\N	follen	123456	abc@gmail.com	0	1
3	nukri	beridze	2022-08-28 15:36:14.208012	male	\N	follen1	123456	abc@gmail.com	0	0
4	nukri	beridze	2022-08-28 15:36:39.839565	male	\N	follen2	123456	abc@gmail.com	0	0
6	nukri	beridze	2022-08-28 15:37:33.222364	male	\N	follen2	123456	abc@gmail.co2m	0	0
8	nukri	beridze	2022-08-28 15:42:46.895828	male	\N	fo1llen2	123456	abc@gmail.co12m	0	0
9	nukri	beridze	2022-08-28 15:42:49.551711	male	\N	fo1llen2	123456	abc@gmail.co122m	0	0
10	nukri	beridze	2022-08-28 15:42:51.567727	male	\N	fo1llen2	123456	abc@gmail.co1122m	0	0
11	nukri	beridze	2022-08-28 15:42:56.415786	male	\N	fo1llen2	123456	abc@gmail.co21122m	0	0
13	nukri	beridze	2022-08-28 15:43:04.671411	male	\N	fo1llen21	1234576	abc@gmail.co251122m	0	0
14	\N	\N	2022-08-28 18:03:57.663369	\N	\N	\N	123456	q123	0	0
15	qweqwe	qweqwe	2022-08-28 20:34:28.71181	female	\N	qweqwe@_-	3cc849279ba298b587a34cabaeffc5ecb3a044bbf97c516fab7ede9d1af77cfa	qweqwe@qdwe.ru	0	0
16	saxeli	gvari	2022-08-28 20:36:44.10896	male	\N	nickname	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	zauri@gmail.com	0	0
17	cqweqcweqw	qqqqqqq	2022-08-28 20:40:39.858539	female	\N	qqqqqqqqqqqqq	f4227d66b520f35c78b27abcc1f128cff27f6df7737262e196c7ff0d3bcab55c	qwe@qweq.ru	0	0
18	1111111111111	1122222	2022-08-28 20:44:58.189145	male	\N	222222222222222222	36ecf9133cf3bb7963d53f30ff300c9f376c7ba12eefa341114563518bea8ec5	22222@dqwq.ru	0	0
19	qweqweqwe	c123c123c123	2022-08-28 21:34:20.579031	male	\N	c123c123c123c123	0d1ea4c256cd50a2a7ccbfd22b3d9959f6fd30bd840b9ff3c7c65ee4e21df06d	qweqwe@dqweqwe.ru	0	0
20	1111ქქქქქქქქქქქქქქქქ	წწწწწწწწწწწწწწწწწწწწწწწ	2022-08-28 21:35:00.13707	female	\N	წეეეეეეეეეეეეეეეეეეეეეე	b654fdd70c33fe22e3013a69d7e76f9b5247b10ada77101f25692d4b49ad2eec	ქწექწ@რქუ.რუ	0	0
23	123123		2022-08-28 22:06:31.036819	male	\N	qqqq	d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1	cqweqwe	0	0
24	qweqweqwe	cqwecqwec	2022-08-29 00:22:55.495869	male	\N	Phantom	67e0595e4310c4dc87a0fe3c364b357e513959061bd151452aa11b4c42c3eb12	nbrdze1997@gmail.com	0	0
25	qweqwe	qweqwe	2022-08-29 00:26:01.30774	male	\N	Fantom	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	123@abc.ge	0	0
26	qweqwe	qweqwe	2022-08-29 01:01:35.462148	male	\N	nukriko	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	nukri@gmail.com	0	0
27	Qniko	koberidze	2022-09-02 01:41:37.516779	\N	\N	Fantom	\\x8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	\N	0	0
28	Qniko	koberidze	2022-09-02 01:41:48.620608	\N	\N	Fantom	\\x8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	\N	0	0
30	ჟორა	zauri	2022-09-02 16:37:13.615273	\N	\N	zurikela	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	\N	0	0
32	Testacc	QQQQQ	2022-09-02 19:44:39.173675	\N	\N	Testniki	123456	\N	0	0
31	ჟორა	zauri	2022-09-02 16:42:11.833841	\N	\N	zurikela	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	admin@gmail.com	0	0
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 15, true);


--
-- Name: films23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films23_id_seq', 1, false);


--
-- Name: films2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films2_id_seq', 1, false);


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films_id_seq', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 221, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 72, true);


--
-- Name: subscription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subscription_id_seq', 58, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 32, true);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: order_details order_details_notes_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_notes_key UNIQUE (notes);


--
-- Name: subscription subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pkey PRIMARY KEY (id);


--
-- Name: users users_mail_nickname_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_mail_nickname_key UNIQUE (mail, nickname);


--
-- PostgreSQL database dump complete
--

