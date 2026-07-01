const BOOKS = [
  {
    title: "20 Most Common Trading Mistakes and How You Can Avoid Them",
    author: "Kel Butcher",
    category: "Trading Psychology",
    cover: "assets/covers/20_most_common_trading_mistakes.png"
  },
  {
    title: "Forex Secret Trading Model",
    author: "Rich Finegan",
    category: "Forex Strategy",
    cover: "assets/covers/forex_secret_trading_model.png"
  },
  {
    title: "The 3 Best Technical Indicators on Earth",
    author: "Wall St Daily Research Team",
    category: "Technical Analysis",
    cover: "assets/covers/3_best_indicators.png"
  },
  {
    title: "4 Keys to Profitable FX Trend Trading",
    author: "Christopher Weaver",
    category: "Forex Strategy",
    cover: "assets/covers/4_keys_profitable_fx_trading.png"
  },
  {
    title: "21 Candlesticks Every Trader Should Know",
    author: "Dr. Melvin Pasternak",
    category: "Technical Analysis",
    cover: "assets/covers/21_candlesticks_every_trader.png"
  },
  {
    title: "The Triple S Simple Scalping Strategy",
    author: "Trading Strategy Guides",
    category: "Trading Systems",
    cover: "assets/covers/triple_s_simple_scalping.png"
  },
  {
    title: "Market Maker",
    author: "Trading system guide",
    category: "Trading Systems",
    cover: "assets/covers/market_maker.png"
  },
  {
    title: "7 Habits of a Highly Successful Trader",
    author: "Mark Crisp",
    category: "Trading Psychology",
    cover: "assets/covers/7_habits_highly_successful_trader.png"
  },
  {
    title: "10 Keys to Successful Forex Trading",
    author: "Jared F. Martinez",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/10keys_successful_forex_trading.png"
  },
  {
    title: "StopHunt Mastery",
    author: "Forexia",
    category: "Trading Strategy",
    cover: "assets/covers/stophunt_mastery.png"
  },
  {
    title: "Introduction to Foreign Exchange",
    author: "Unknown",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/intro_to_forex_2019.png"
  },
  {
    title: "The Blade Forex Strategies",
    author: "ForexCourseFX",
    category: "Forex Strategy",
    cover: "assets/covers/blade_forex_strategies.png"
  },
  {
    title: "Best of the Daily Trading Edge",
    author: "Raghee Horner, IBFX",
    category: "Trading Strategy",
    cover: "assets/covers/daily_trading_edge.png"
  },
  {
    title: "Amazing Forex System",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/amazing_forex_system.png"
  },
  {
    title: "Elev8 Trading Course",
    author: "Elev8 Trading",
    category: "Trading Systems",
    cover: "assets/covers/elev8_trading.png"
  },
  {
    title: "Forex Broker Killer Edition",
    author: "Pontsho Khutso Mmutlane & Lehlogonolo Mnisi",
    category: "Forex Strategy",
    cover: "assets/covers/forex_broker_killer.png"
  },
    {
    title: "Currency Pairs Guide",
    author: "FXDD Global",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/currency_pairs_guide.png"
  },
  {
    title: "The Forex Trader's Handbook",
    author: "Kotnik Zan",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/forex_traders_handbook.png"
  },
  {
    title: "Forex: From Nothing to Everything in 30 Days",
    author: "Ross Wright",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/forex_30_days_ross_wright.png"
  },
  {
    title: "Forex Millionaire in 365 Days by God's Grace",
    author: "Louis Jr Tshakadame",
    category: "Forex Strategy",
    cover: "assets/covers/forex_millionaire_365_days.png"
  },
  {
    title: "Harmonic Trading, Vol. 2",
    author: "Scott M. Carney",
    category: "Technical Analysis",
    cover: "assets/covers/harmonic_trading_vol2.png"
  },
  {
    title: "Mastering Trading Stress",
    author: "Ari Kiev",
    category: "Trading Psychology",
    cover: "assets/covers/mastering_trading_stress.png"
  },
  {
    title: "A Three-Dimensional Approach to Forex Trading",
    author: "Anna Coulling",
    category: "Technical Analysis",
    cover: "assets/covers/3d_approach_forex_trading.png"
  },
  {
    title: "ForexStrategy Guide Book",
    author: "Bheki Mpangane",
    category: "Trading Strategy",
    cover: "assets/covers/forexstrategy_guide_book.png"
  },
  {
    title: "The Forex Life Line",
    author: "Jared Martinez",
    category: "Forex Strategy",
    cover: "assets/covers/forex_life_line.png"
  },
  {
    title: "How to Trade Synthetic Indices",
    author: "Vince Stanzione",
    category: "Trading Systems",
    cover: "assets/covers/how_to_trade_synthetic_indices.png"
  },
  {
    title: "20 Forex Trading Strategies Collection (5 Minute Time Frame)",
    author: "Thomas Carter",
    category: "Forex Strategy",
    cover: "assets/covers/20_strategies_5min.png"
  },
  {
    title: "20 Forex Trading Strategies Collection (1 Hour Time Frame)",
    author: "Thomas Carter",
    category: "Forex Strategy",
    cover: "assets/covers/20_strategies_1hour.png"
  },
  {
    title: "21 Success Secrets of Self-Made Millionaires",
    author: "Brian Tracy",
    category: "Personal Development",
    cover: "assets/covers/21_success_secrets.png"
  },
  {
    title: "Big Profit Trade Catcher Manual",
    author: "Nicola Delic",
    category: "Trading Strategy",
    cover: "assets/covers/big_profit_trade_catcher.png"
  },
  {
    title: "Candlestick Charts",
    author: "Clive Lambert",
    category: "Technical Analysis",
    cover: "assets/covers/candlestick_charts_lambert.png"
  },
  {
    title: "Introduction to Forex",
    author: "1st Forex Trading Academy",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/intro_to_forex_1fta.png"
  },
  {
    title: "Forex Trading for Beginners",
    author: "Andrew Fincher",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/forex_trading_for_beginners_fincher.png"
  },
  {
    title: "Forex Trading for the Frustrated Beginner",
    author: "Steve Farinello",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/frustrated_beginner_farinello.png"
  },
  {
    title: "Forex Trading with Price Action",
    author: "Raoul Hunter",
    category: "Forex Strategy",
    cover: "assets/covers/forex_price_action_hunter.png"
  },
  {
    title: "Forex Revolution",
    author: "Peter Rosenstreich",
    category: "Forex Strategy",
    cover: "assets/covers/forex_revolution.png"
  },
  {
    title: "Forex Trading Using Intermarket Analysis",
    author: "Louis B. Mendelsohn",
    category: "Technical Analysis",
    cover: "assets/covers/intermarket_analysis_mendelsohn.png"
  },
  {
    title: "The Ultimate Price Action Trading Guide",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/ultimate_price_action_guide.png"
  },
  {
    title: "The Candlestick Trading Bible",
    author: "Munehisa Homma (attributed)",
    category: "Technical Analysis",
    cover: "assets/covers/candlestick_trading_bible.png"
  },
  {
    title: "Forex Conquered",
    author: "John L. Person",
    category: "Forex Strategy",
    cover: "assets/covers/forex_conquered_person.png"
  },
  {
    title: "Why \"A\" Students Work for \"C\" Students",
    author: "Robert T. Kiyosaki",
    category: "Personal Finance",
    cover: "assets/covers/why_a_students_work_for_c_students.png"
  },
  {
    title: "Currency Strategy",
    author: "Callum Henderson",
    category: "Forex Strategy",
    cover: "assets/covers/currency_strategy_henderson.png"
  },
  {
    title: "The ART of Trading",
    author: "Bennett A. McDowell",
    category: "Trading Strategy",
    cover: "assets/covers/art_of_trading_mcdowell.png"
  },
  {
    title: "Winning the Day Trading Game",
    author: "Thomas L. Busby with Patsy Busby Dow",
    category: "Day Trading",
    cover: "assets/covers/winning_day_trading_game.png"
  },
  {
    title: "Work Smart Not Hard",
    author: "Nilesh J Patel",
    category: "Trading Strategy",
    cover: "assets/covers/work_smart_not_hard.png"
  },
  {
    title: "You Can Achieve More",
    author: "Shiv Khera",
    category: "Personal Development",
    cover: "assets/covers/you_can_achieve_more.png"
  },
  {
    title: "Trading: The Best of the Best",
    author: "Brian C. Lund",
    category: "Trading Strategy",
    cover: "assets/covers/trading_best_of_best.png"
  },
  {
    title: "Trendline Breakout Forex Trading Strategy",
    author: "Myronn Saremo",
    category: "Forex Strategy",
    cover: "assets/covers/trendline_breakout_strategy.png"
  },
  {
    title: "7 Trading Patterns That Can Make You Rich",
    author: "Charles A. Floyd II",
    category: "Trading Strategy",
    cover: "assets/covers/7_trading_patterns_rich.png"
  },
  {
    title: "Trend Trading for a Living",
    author: "Dr. Thomas K. Carr",
    category: "Trend Trading",
    cover: "assets/covers/trend_trading_for_a_living.png"
  },
  {
    title: "Trend Following",
    author: "Michael W. Covel",
    category: "Trend Trading",
    cover: "assets/covers/trend_following_covel.png"
  },
  {
    title: "The Ultimate Guide to Trend Following",
    author: "Rayner Teo",
    category: "Trend Trading",
    cover: "assets/covers/ultimate_guide_trend_following.png"
  },
  {
    title: "The Top 100 Trading Rules of All Time",
    author: "Rayner Teo",
    category: "Trading Strategy",
    cover: "assets/covers/top_100_trading_rules.png"
  },
  {
    title: "The Basics of Finance",
    author: "Pamela Peterson Drake and Frank J. Fabozzi",
    category: "Investing",
    cover: "assets/covers/basics_of_finance.png"
  },
  {
    title: "The Complete TurtleTrader",
    author: "Michael W. Covel",
    category: "Trading Strategy",
    cover: "assets/covers/complete_turtletrader.png"
  },
  {
    title: "The Consistent Trader",
    author: "Sam Eder",
    category: "Trading Psychology",
    cover: "assets/covers/consistent_trader.png"
  },
  {
    title: "The Forex Lifestyle",
    author: "Michael R. Pilinski",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/forex_lifestyle_pilinski.png"
  },
  {
    title: "The Forex Trading Course",
    author: "Abe Cofnas",
    category: "Forex Strategy",
    cover: "assets/covers/forex_trading_course_cofnas.png"
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Investing",
    cover: "assets/covers/intelligent_investor.png"
  },
  {
    title: "The Market Guys' Five Points for Trading Success",
    author: "AJ Monte and Rick Swope",
    category: "Trading Strategy",
    cover: "assets/covers/market_guys_five_points.png"
  },
  {
    title: "The Master Swing Trader Toolkit",
    author: "Alan S. Farley",
    category: "Swing Trading",
    cover: "assets/covers/master_swing_trader_toolkit.png"
  },
  {
    title: "The New Value Investing",
    author: "C. Thomas Howard",
    category: "Investing",
    cover: "assets/covers/new_value_investing.png"
  },
  {
    title: "The Psychology of the Foreign Exchange Market",
    author: "Thomas Oberlechner",
    category: "Trading Psychology",
    cover: "assets/covers/psychology_of_forex_market.png"
  },
  {
    title: "The Superstock Investor",
    author: "Charles M. LaLoggia and Cherrie Mahon",
    category: "Investing",
    cover: "assets/covers/superstock_investor.png"
  },
  {
    title: "The E-Book of Technical Market Indicators",
    author: "Wall Street Courier",
    category: "Technical Analysis",
    cover: "assets/covers/ebook_technical_market_indicators.png"
  },
  {
    title: "Currency Trading for Dummies",
    author: "Mark Galant and Brian Dolan",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/currency_trading_for_dummies.png"
  },
  {
    title: "How to Trade with Price Action: Master",
    author: "Galen Woods",
    category: "Technical Analysis",
    cover: "assets/covers/how_to_trade_price_action_master.png"
  },
  {
    title: "The Richest Man In Babylon",
    author: "George S. Clason",
    category: "Personal Development",
    cover: "assets/covers/richest_man_in_babylon.png"
  },
  {
    title: "The 5 Keys to Value Investing",
    author: "J. Dennis Jean-Jacques",
    category: "Investing",
    cover: "assets/covers/5_keys_to_value_investing.png"
  },
  {
    title: "All About Market Indicators",
    author: "Michael Sincere",
    category: "Technical Analysis",
    cover: "assets/covers/all_about_market_indicators.png"
  },
  {
    title: "The Day Trader's Bible",
    author: "Richard D. Wyckoff",
    category: "Day Trading",
    cover: "assets/covers/day_traders_bible_wyckoff.png"
  },
  {
    title: "Breakout Trading: Simple, Proven Strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/breakout_trading_simple_proven.png"
  },
  {
    title: "Fibonacci Ratios with Pattern Recognition",
    author: "Larry Pesavento",
    category: "Technical Analysis",
    cover: "assets/covers/fibonacci_ratios_pattern_recognition.png"
  },
  {
    title: "My Warren Buffett Bible",
    author: "Robert L. Bloch",
    category: "Investing",
    cover: "assets/covers/my_warren_buffett_bible.png"
  },
  {
    title: "The 3W System",
    author: "Sumit Das",
    category: "Trading Strategy",
    cover: "assets/covers/the_3w_system.png"
  },
  {
    title: "Pairs Trading: Quantitative Methods and Analysis",
    author: "Ganapathy Vidyamurthy",
    category: "Trading Strategy",
    cover: "assets/covers/pairs_trading_quant_methods.png"
  },
  {
    title: "Getting Started in Forex Trading Strategies",
    author: "Michael Duane Archer",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/getting_started_forex_strategies.png"
  },
  {
    title: "The Trading Psychology Playbook",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/trading_psychology_playbook.png"
  },
  {
    title: "Technical Analysis Plain and Simple",
    author: "Michael N. Kahn",
    category: "Technical Analysis",
    cover: "assets/covers/technical_analysis_plain_simple.png"
  },
  {
    title: "So You Want to be a Trader",
    author: "Steve Burns and Holly Burns",
    category: "Personal Development",
    cover: "assets/covers/so_you_want_to_be_a_trader.png"
  },
  {
    title: "Margin Trading from A to Z",
    author: "Michael T. Curley",
    category: "Investing",
    cover: "assets/covers/margin_trading_a_to_z.png"
  },
  {
    title: "Successful Breakout Trading",
    author: "Sinisa Persic",
    category: "Trading Strategy",
    cover: "assets/covers/successful_breakout_trading.png"
  },
  {
    title: "Technical Analysis Of Gaps",
    author: "Julie R. Dahlquist and Richard J. Bauer",
    category: "Technical Analysis",
    cover: "assets/covers/technical_analysis_of_gaps.png"
  },
  {
    title: "Forex Patterns and Probabilities",
    author: "Ed Ponsi",
    category: "Forex Strategy",
    cover: "assets/covers/forex_patterns_probabilities.png"
  },
  {
    title: "Millionaire Traders",
    author: "Kathy Lien and Boris Schlossberg",
    category: "Trading Strategy",
    cover: "assets/covers/millionaire_traders.png"
  },
  {
    title: "Secrets of Swiss Banking",
    author: "Hoyt Barber",
    category: "Personal Finance",
    cover: "assets/covers/secrets_of_swiss_banking.png"
  },
  {
    title: "Study Guide for Technical Analysis Explained",
    author: "Martin J. Pring",
    category: "Technical Analysis",
    cover: "assets/covers/study_guide_technical_analysis_explained.png"
  },
  {
    title: "Come Into My Trading Room",
    author: "Dr. Alexander Elder",
    category: "Trading Strategy",
    cover: "assets/covers/come_into_my_trading_room.png"
  },
  {
    title: "Trading in the Zone",
    author: "Mark Douglas",
    category: "Trading Psychology",
    cover: "assets/covers/trading_in_the_zone.png"
  },
  {
    title: "Predict Market Swings with Technical Analysis",
    author: "Michael McDonald",
    category: "Technical Analysis",
    cover: "assets/covers/predict_market_swings_technical_analysis.png"
  },
  {
    title: "The Quarters Theory",
    author: "Ilian Yotov",
    category: "Forex Strategy",
    cover: "assets/covers/the_quarters_theory.png"
  },
  {
    title: "Trade The Price Action",
    author: "Laurentiu Damir",
    category: "Forex Strategy",
    cover: "assets/covers/trade_the_price_action.png"
  },
  {
    title: "A Complete Guide to Technical Trading Tactics",
    author: "John L. Person",
    category: "Technical Analysis",
    cover: "assets/covers/complete_guide_technical_trading_tactics.png"
  },
  {
    title: "SuperTrader",
    author: "Van K. Tharp",
    category: "Trading Strategy",
    cover: "assets/covers/supertrader.png"
  },
{
    title: "Mark Douglas - The Disciplined Trader",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_mark_douglas_the_disciplined_trader_pdf_pdf_2.png"
  },
  {
    title: "-Indice Hustlers US30 Personal Strategy Course-",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_indice_hustlers_us30_personal_strategy_course.png"
  },
  {
    title: "0100 High Probability Trading Strategies - Forex Factory",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_0100_high_probability_trading_strategies_forex_factory.png"
  },
  {
    title: "1.Trendline,Price Action,Entry and Candle sticks-1",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_1_trendline_price_action_entry_and_candle_sticks_1.png"
  },
  {
    title: "10 FREE LESSONS -Mr. Casino",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_10_free_lessons_mr_casino_1_2_1_1_1_1_1_1.png"
  },
  {
    title: "1001 Trading Community - Digital Time Theory",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_1001_trading_community_digital_time_theory.png"
  },
  {
    title: "122",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_122.png"
  },
  {
    title: "17 Forex Trading Strategies Collection",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_17_forex_trading_strategies_collection.png"
  },
  {
    title: "18 Trading Champions Share Their Keys To Top Trading Profits",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_18_trading_champions_share_their_keys_to_top_trading_pro.png"
  },
  {
    title: "1AM CRT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_1am_crt_1.png"
  },
  {
    title: "1AM CRT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_1am_crt_2.png"
  },
  {
    title: "1AM CRT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_1am_crt.png"
  },
  {
    title: "2022 Content",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_2022_content.png"
  },
  {
    title: "21 Days to Become a Money Magnet by Marie Claire Carlyle 2023",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_21_days_to_become_a_money_magnet_by_marie_claire_carlyle.png"
  },
  {
    title: "3- Mastering Turtle Soup-2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_3_mastering_turtle_soup_2.png"
  },
  {
    title: "30 Days to Market Mastery A Step by Step Guide to Profitable Trading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_30_days_to_market_mastery_a_step_by_step_guide_to_profit.png"
  },
  {
    title: "4 2930460481028862",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_2930460481028862.png"
  },
  {
    title: "4 5776220015090992609",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_5776220015090992609.png"
  },
  {
    title: "4 5785300658286500398",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_5785300658286500398_2.png"
  },
  {
    title: "4 5983511960182850216",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_5983511960182850216_1.png"
  },
  {
    title: "4 5983511960182850216",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_5983511960182850216.png"
  },
  {
    title: "4 5998832245966636286",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_5998832245966636286.png"
  },
  {
    title: "4 6043875157137687905",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_4_6043875157137687905.png"
  },
  {
    title: "5 years of sam seiden supply and demand teaching",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_5_years_of_sam_seiden_supply_and_demand_teaching.png"
  },
  {
    title: "50 Pips A Day Forex Strategy @ForexBooks",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_50_pips_a_day_forex_strategy_forexbooks.png"
  },
  {
    title: "51-Trading-Strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_51_trading_strategies_1_1.png"
  },
  {
    title: "51-Trading-Strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_51_trading_strategies_1.png"
  },
  {
    title: "597 Business Ideas You can Start from Home doing what you LOVE!",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_597_business_ideas_you_can_start_from_home_doing_what_yo.png"
  },
  {
    title: "5 6071056287167152420",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_5_6071056287167152420.png"
  },
  {
    title: "5 6152325207370498778",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_5_6152325207370498778.png"
  },
  {
    title: "5 6194925446086262931",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_5_6194925446086262931.png"
  },
  {
    title: "5 6302794859690329626 (1).ms.en",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_5_6302794859690329626_1_ms_en.png"
  },
  {
    title: "714-method-strategy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_714_method_strategy_1.png"
  },
  {
    title: "714-method-strategy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_714_method_strategy.png"
  },
  {
    title: "@dailymoney100 Vikram Pivot Call ebook",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_dailymoney100_vikram_pivot_call_ebook.png"
  },
  {
    title: "@StockPustak Selective Forex Trading - Don Snellgrove",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_stockpustak_selective_forex_trading_don_snellgrove_2.png"
  },
  {
    title: "A Complete Guide To Forex Trading Profits - Brian",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_a_complete_guide_to_forex_trading_profits_brian.png"
  },
  {
    title: "Advanced Futures Trading Strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_advanced_futures_trading_strategies.png"
  },
  {
    title: "Advanced Liquidity by Elan @tradersLibrary2",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_advanced_liquidity_by_elan_traderslibrary2.png"
  },
  {
    title: "Advanced SMC — pt.1 @Falcon Books",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_advanced_smc_pt_1_falcon_books.png"
  },
  {
    title: "Advanced SMC — pt.2 @Falcon Books",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_advanced_smc_pt_2_falcon_books.png"
  },
  {
    title: "Advanced SMC — pt.3 @Falcon Books",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_advanced_smc_pt_3_falcon_books.png"
  },
  {
    title: "Advanced Techniques in Day Trading A Practical Guide to High Probability",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_advanced_techniques_in_day_trading_a_practical_guide_to_.png"
  },
  {
    title: "AIR FOREX ONE eBook V4 (1).0",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_air_forex_one_ebook_v4_1_0_1.png"
  },
  {
    title: "AIR FOREX ONE eBook V4 (2).0",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_air_forex_one_ebook_v4_2_0_1.png"
  },
  {
    title: "AIR FOREX ONE eBook V4.0",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_air_forex_one_ebook_v4_0_1.png"
  },
  {
    title: "ALCHEMIST 2.00 AbayFX (BERK ARSIV )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_alchemist_2_00_abayfx_berk_arsiv.png"
  },
  {
    title: "Alchemist MSNR",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_alchemist_msnr.png"
  },
  {
    title: "Alchemist",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_alchemist.png"
  },
  {
    title: "AlgorithmicTrading",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_algorithmictrading.png"
  },
  {
    title: "Algorithmic Trading Methods Applications Using Advanced Statistics",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_algorithmic_trading_methods_applications_using_advanced_.png"
  },
  {
    title: "Algo Hub Trading Notes",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_algo_hub_trading_notes.png"
  },
  {
    title: "All Chart Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_all_chart_patterns.png"
  },
  {
    title: "Alvaro Cartea, Sebastian Jaimungal",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_alvaro_cartea_sebastian_jaimungal.png"
  },
  {
    title: "AM - Twitter Content",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_am_twitter_content.png"
  },
  {
    title: "Am Trades Personal Model",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_am_trades_personal_model_pdf.png"
  },
  {
    title: "Amharic Mark Douglas Trading in the Zone-1 (1) 240525 114613",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_amharic_mark_douglas_trading_in_the_zone_1_1_240525_1146.png"
  },
  {
    title: "Anatomy Of A Candle (1) watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_anatomy_of_a_candle_1_watermark.png"
  },
  {
    title: "Astuce Fx @paidpdf4free",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_astuce_fx_paidpdf4free.png"
  },
  {
    title: "Atomic habits ( PDFDrive )",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_atomic_habits_pdfdrive.png"
  },
  {
    title: "A complete guide to the futures",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_a_complete_guide_to_the_futures_1.png"
  },
  {
    title: "Bajafx Fundamental",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_bajafx_fundamental.png"
  },
  {
    title: "BANK SCALPING STRATEGY PDF",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_bank_scalping_strategy_pdf.png"
  },
  {
    title: "BANK TRADER STRATEGY",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_bank_trader_strategy.png"
  },
  {
    title: "Basic Candlestick Pattern",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_basic_candlestick_pattern_2.png"
  },
  {
    title: "BASICS OF FOREX TRADING -Financial Hub",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_basics_of_forex_trading_financial_hub.png"
  },
  {
    title: "BATUS Sniper Elite (eBook)",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_batus_sniper_elite_ebook.png"
  },
  {
    title: "BBMA + Fibo Intraday (Muhammad Affendi)",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_bbma_fibo_intraday_muhammad_affendi_1.png"
  },
  {
    title: "BBMA + Fibo Intraday (Muhammad Affendi)",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_bbma_fibo_intraday_muhammad_affendi.png"
  },
  {
    title: "Beat the Market A Scientific Stock Market System",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_beat_the_market_a_scientific_stock_market_system.png"
  },
  {
    title: "Big Book of Chart Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_big_book_of_chart_patterns.png"
  },
  {
    title: "Big Money Less Risk Trade Options - Mark Larson",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_big_money_less_risk_trade_options_mark_larson.png"
  },
  {
    title: "Binary Trading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_binary_trading.png"
  },
  {
    title: "Blue Ocean Strategy-Kim W Chan",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_blue_ocean_strategy_kim_w_chan.png"
  },
  {
    title: "BMM STRATEGY",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_bmm_strategy.png"
  },
  {
    title: "Bold-Bolder-Boldest-V5.3.6.9.0 2 2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_bold_bolder_boldest_v5_3_6_9_0_2_2.png"
  },
  {
    title: "Book - Six Figures From Scratch",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_book_six_figures_from_scratch_1.png"
  },
  {
    title: "Book - Six Figures From Scratch",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_book_six_figures_from_scratch_2.png"
  },
  {
    title: "Book - Six Figures From Scratch",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_book_six_figures_from_scratch.png"
  },
  {
    title: "BOOK 2 (1).0",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_book_2_1_0.png"
  },
  {
    title: "BOOK 2.0",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_book_2_0.png"
  },
  {
    title: "Book of value the fine art of investing wisely Sharma, Anurag Z",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_book_of_value_the_fine_art_of_investing_wisely_sharma_an.png"
  },
  {
    title: "Brain Hacks For Traders @Falcon Books",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_brain_hacks_for_traders_falcon_books.png"
  },
  {
    title: "Braveheart Walkthrough - MS Masterclass EP 1",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ms_masterclass_ep_1.png"
  },
  {
    title: "Braveheart Walkthrough - MS Masterclass EP 2 Part A",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ms_masterclass_ep_2_part_a.png"
  },
  {
    title: "Braveheart Walkthrough - MS Masterclass EP 2 Part B",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ms_masterclass_ep_2_part_b.png"
  },
  {
    title: "Braveheart Walkthrough - MS Masterclass EP 3",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ms_masterclass_ep_3.png"
  },
  {
    title: "Braveheart Walkthrough - MS Masterclass EP 5",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ms_masterclass_ep_5.png"
  },
  {
    title: "Braveheart Walkthrough EP 12.6",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ep_12_6.png"
  },
  {
    title: "Braveheart Walkthrough EP 4",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_braveheart_walkthrough_ep_4.png"
  },
  {
    title: "Breakthrough Trading Revolutionary",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_breakthrough_trading_revolutionary.png"
  },
  {
    title: "Brett Christophers - Money and Finance After the Crisis",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_brett_christophers_money_and_finance_after_the_crisis.png"
  },
  {
    title: "Brett Steenbarger - Psychology Of Trading",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_brett_steenbarger_psychology_of_trading.png"
  },
  {
    title: "BULLSHT FREE GUIDE TO IRON CONDORS Gavin McMaster",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_bullsht_free_guide_to_iron_condors_gavin_mcmaster.png"
  },
  {
    title: "CANDLE CLOSURES watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_candle_closures_watermark.png"
  },
  {
    title: "CASH FX EMPIRE MOBILE STRATEGIES",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_cash_fx_empire_mobile_strategies.png"
  },
  {
    title: "Chart Pattern & Candlesticks Clear",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_chart_pattern_candlesticks_clear_1_pdf.png"
  },
  {
    title: "Chart Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_chart_patterns.png"
  },
  {
    title: "Chart Your Way To Profits The Online Traders Guide to Technical",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_chart_your_way_to_profits_the_online_traders_guide_to_te.png"
  },
  {
    title: "Clarification of A CRT Candle 20250613 104246 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_clarification_of_a_crt_candle_20250613_104246_0000.png"
  },
  {
    title: "Clarification of CRT entry method TBS 20250613 104944 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_clarification_of_crt_entry_method_tbs_20250613_104944_00.png"
  },
  {
    title: "Como ganar 2700 euros ala semana con opciones binarias @tradingpdfgratis2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_como_ganar_2700_euros_ala_semana_con_opciones_binarias_t.png"
  },
  {
    title: "Continuation Purges watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_continuation_purges_watermark.png"
  },
  {
    title: "CRT TBS - Stoploss & Entry 20250613 105307 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_stoploss_entry_20250613_105307_0000.png"
  },
  {
    title: "CRT TBS chart examples ( part - 7 ) 20250512 221905 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_7_20250512_221905_0000.png"
  },
  {
    title: "CRT TBS keylevel details 20250613 105151 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_keylevel_details_20250613_105151_0000.png"
  },
  {
    title: "CRT TBS Model #1 confirmation 20250613 104853 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_model_1_confirmation_20250613_104853_0000.png"
  },
  {
    title: "CRT + TBS ( Day trading )",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_crt_tbs_day_trading.png"
  },
  {
    title: "CRT + TBS ( Postion traders )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_postion_traders.png"
  },
  {
    title: "CRT + TBS ( Scalping )",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_crt_tbs_scalping.png"
  },
  {
    title: "CRT + TBS ( Short term trading )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_short_term_trading.png"
  },
  {
    title: "CRT + TBS chart examples ( part - 10 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_10.png"
  },
  {
    title: "CRT + TBS chart examples ( part - 11 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_11.png"
  },
  {
    title: "CRT + TBS chart examples ( part - 5 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_5.png"
  },
  {
    title: "CRT + TBS chart examples ( Part - 6 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_6.png"
  },
  {
    title: "CRT + TBS chart examples ( part - 8 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_8.png"
  },
  {
    title: "CRT + TBS chart examples ( part - 9 )",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_9.png"
  },
  {
    title: "CRT + TBS chart examples - part - 4",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_4.png"
  },
  {
    title: "CRT + TBS chart examples - PART 2",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_part_2.png"
  },
  {
    title: "CRT - Scalping Model",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_crt_scalping_model.png"
  },
  {
    title: "CRT - Sham CPI Notes",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_sham_cpi_notes.png"
  },
  {
    title: "Crt Basics To Advance",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_basics_to_advance.png"
  },
  {
    title: "CRT entry with TBS - Turtle Body Soup",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_entry_with_tbs_turtle_body_soup.png"
  },
  {
    title: "CRT entry with TBS and model #1",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_entry_with_tbs_and_model_1.png"
  },
  {
    title: "CRT TBS ebook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_ebook.png"
  },
  {
    title: "Crt",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt.png"
  },
  {
    title: "CRT & TBS chart examples HTF with LTF 20250301 094620 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_chart_examples_htf_with_ltf_20250301_094620_0000.png"
  },
  {
    title: "CRT SECRETS SERIES",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_secrets_series_1.png"
  },
  {
    title: "CRT SECRETS SERIES",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_secrets_series.png"
  },
  {
    title: "CRT TBS Entry with breakeven and takeprofit 20250613 105106 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_entry_with_breakeven_and_takeprofit_20250613_105.png"
  },
  {
    title: "CRT TBS proper Timeframe alignment ⏳ 20250613 105347 0000",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_crt_tbs_proper_timeframe_alignment_20250613_105347_0000.png"
  },
  {
    title: "Currency Pros E-Book",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_currency_pros_e_book.png"
  },
  {
    title: "Day Trading with the Anti-Climax Pattern eBook",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_day_trading_with_the_anti_climax_pattern_ebook.png"
  },
  {
    title: "daytrading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_daytrading.png"
  },
  {
    title: "Day 2 -Macro Profile Inversion 1",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_day_2_macro_profile_inversion_1.png"
  },
  {
    title: "DAY TRADING SWING FOREX For Beginners A Crash Course to Invest in",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_day_trading_swing_forex_for_beginners_a_crash_course_to_.png"
  },
  {
    title: "DAY TRADING The Beginners Guide to Wall Street Market Techniques",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_day_trading_the_beginners_guide_to_wall_street_market_te.png"
  },
  {
    title: "Day Trading Using Central Pivot Range And Camarilla Pivot Points",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_day_trading_using_central_pivot_range_and_camarilla_pivo.png"
  },
  {
    title: "Day Trading With Pivot Points & Price Aaction VikramPrabhu",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_day_trading_with_pivot_points_price_aaction_vikramprabhu.png"
  },
  {
    title: "DeMark On Day Trading Options @TradersLibrary2",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_demark_on_day_trading_options_traderslibrary2.png"
  },
  {
    title: "demystified ICT Full",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_demystified_ict_full.png"
  },
  {
    title: "demystifying @tradingpdfgratis2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_demystifying_tradingpdfgratis2.png"
  },
  {
    title: "demystifying ICT Trader",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_demystifying_ict_trader.png"
  },
  {
    title: "Demystifying ICT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_demystifying_ict.png"
  },
  {
    title: "DexterrFX - SMC Bible @Ict leaked Courses",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_dexterrfx_smc_bible_ict_leaked_courses_1.png"
  },
  {
    title: "DexterrFX - SMC Bible @Ict leaked Courses",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_dexterrfx_smc_bible_ict_leaked_courses.png"
  },
  {
    title: "DigitalTimeTheory",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_digitaltimetheory.png"
  },
  {
    title: "DOL-SMR",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_dol_smr.png"
  },
  {
    title: "Draw on Liquidity (DOL))",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_draw_on_liquidity_dol_1_1.png"
  },
  {
    title: "Draw on Liquidity (DOL))",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_draw_on_liquidity_dol_1_2.png"
  },
  {
    title: "Draw on Liquidity (DOL))",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_draw_on_liquidity_dol_1.png"
  },
  {
    title: "DYNAMIC - RISK MANAGEMENT GUIDE",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_dynamic_risk_management_guide.png"
  },
  {
    title: "Easy Forex Forex A Quick Guide",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_easy_forex_forex_a_quick_guide.png"
  },
  {
    title: "El Nuevo Vivir del Trading- Alexander Elder",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_el_nuevo_vivir_del_trading_alexander_elder.png"
  },
  {
    title: "Elliot Wave Theory",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_elliot_wave_theory.png"
  },
  {
    title: "Elliott-Wave-Handbook",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_elliott_wave_handbook.png"
  },
  {
    title: "ENGULF NOTES BOOK 2.0",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_engulf_notes_book_2_0.png"
  },
  {
    title: "Entry and Exit confession",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_entry_and_exit_confession.png"
  },
  {
    title: "EPISODE 3 - RANGES watermark",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_episode_3_ranges_watermark.png"
  },
  {
    title: "EPISODE 4 - DEFERRED DELIVERY watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_episode_4_deferred_delivery_watermark.png"
  },
  {
    title: "EPISODE 5 - DOL&TURTLE SOUP watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_episode_5_dol_turtle_soup_watermark.png"
  },
  {
    title: "EPISODE 6 - RELATIVE EQHEQL",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_episode_6_relative_eqheql_1.png"
  },
  {
    title: "EPISODE 8 - IS (1) watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_episode_8_is_1_watermark.png"
  },
  {
    title: "EPISODE 9 - advanced MMXM",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_episode_9_advanced_mmxm_1.png"
  },
  {
    title: "Equity Markets in Action The Fundamentals of Liquidity, Market Structure",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_equity_markets_in_action_the_fundamentals_of_liquidity_m.png"
  },
  {
    title: "Falcon fx handbook white",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_falcon_fx_handbook_white.png"
  },
  {
    title: "Falcon fx pattern identifier",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_falcon_fx_pattern_identifier.png"
  },
  {
    title: "Falcon fx trading Plan",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_falcon_fx_trading_plan.png"
  },
  {
    title: "FastFXProfit",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_fastfxprofit.png"
  },
  {
    title: "Financial Modeling Handbook Step by Step Guide To Building Your",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_financial_modeling_handbook_step_by_step_guide_to_buildi.png"
  },
  {
    title: "Flipping markets updated PDF",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_flipping_markets_updated_pdf.png"
  },
  {
    title: "Forex The Ultimate Guide To Price Action Trading",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_the_ultimate_guide_to_price_action_trading.png"
  },
  {
    title: "FOREX MILLIONAIRE IN 365 DAYS BY GOD’S GRACE",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_millionaire_in_365_days_by_god_s_grace.png"
  },
  {
    title: "FOREX ONE MINUTE STRATEGY-1",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_one_minute_strategy_1.png"
  },
  {
    title: "Forex Price Action Scalping Vol1 @TradersLibrary2",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_forex_price_action_scalping_vol1_traderslibrary2_1.png"
  },
  {
    title: "Forex Price Action Scalping Vol1 @TradersLibrary2",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_forex_price_action_scalping_vol1_traderslibrary2_2.png"
  },
  {
    title: "Forex Price Action Scalping Vol1 @TradersLibrary2",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_forex_price_action_scalping_vol1_traderslibrary2.png"
  },
  {
    title: "Forex Range Trading With Price Action - Laurentiu Damir",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_range_trading_with_price_action_laurentiu_damir.png"
  },
  {
    title: "FOREX THE HOLY GRAIL - SIMONE SIESTO",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_the_holy_grail_simone_siesto.png"
  },
  {
    title: "Forex Trend Line Strategy",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_forex_trend_line_strategy_1.png"
  },
  {
    title: "Forex Trend Line Strategy",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_forex_trend_line_strategy.png"
  },
  {
    title: "Forex Wave Theory",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_wave_theory.png"
  },
  {
    title: "Forex Patterns Probabilities Trading Strategies for Trending Range",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_forex_patterns_probabilities_trading_strategies_for_tren.png"
  },
  {
    title: "Four Ways to Beat the Market",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_four_ways_to_beat_the_market.png"
  },
  {
    title: "Fred McAllen - Charting and Technical Analysis",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_fred_mcallen_charting_and_technical_analysis_2012.png"
  },
  {
    title: "Fred Piard Quantitative Investing Strategies",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_fred_piard_quantitative_investing_strategies.png"
  },
  {
    title: "Free ICT Strategy",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_free_ict_strategy.png"
  },
  {
    title: "french trader ebook",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_french_trader_ebook_pdf.png"
  },
  {
    title: "Full Margin Trader @TradersLibrary2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_full_margin_trader_traderslibrary2.png"
  },
  {
    title: "Fullmargin Trader SOP English Version",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_fullmargin_trader_sop_english_version.png"
  },
  {
    title: "FX goats nasdaq strategy",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_fx_goats_nasdaq_strategy.png"
  },
  {
    title: "FX Options and Structured Products",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_fx_options_and_structured_products.png"
  },
  {
    title: "fytte price action",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_fytte_price_action.png"
  },
  {
    title: "Getting started in chart pattern",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_getting_started_in_chart_pattern.png"
  },
  {
    title: "Gtrades",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_gtrades.png"
  },
  {
    title: "Hidden Code of TTTA Sample",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_hidden_code_of_ttta_sample.png"
  },
  {
    title: "HIDDEN MARKET CODE",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_hidden_market_code.png"
  },
  {
    title: "High probability day trading with supply & demand",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_high_probability_day_trading_with_supply_demand.png"
  },
  {
    title: "High Probability Trading Strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_high_probability_trading_strategies.png"
  },
  {
    title: "High Profit Candlestick Patterns by Stephen Bigalow z lib org",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_high_profit_candlestick_patterns_by_stephen_bigalow_z_li.png"
  },
  {
    title: "High Profit IPO Strategies Finding Breakout IPOS For Investors and",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_high_profit_ipo_strategies_finding_breakout_ipos_for_inv.png"
  },
  {
    title: "How to Day Trade - Ross Cameron",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_how_to_day_trade_ross_cameron.png"
  },
  {
    title: "How to read a balance sheet. ( etc.) (Z-Library)",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_how_to_read_a_balance_sheet_etc_z_library.png"
  },
  {
    title: "How To Make Money With Breakout Trading 2 0 Analyse The Stock Market",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_how_to_make_money_with_breakout_trading_2_0_analyse_the_.png"
  },
  {
    title: "How to Make Money with Breakout Trading by Indrazith Shantharaj",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_how_to_make_money_with_breakout_trading_by_indrazith_sha.png"
  },
  {
    title: "How to Pick Quality Shares A three step process for selecting profitable",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_how_to_pick_quality_shares_a_three_step_process_for_sele.png"
  },
  {
    title: "HTF KEY LEVELS watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_htf_key_levels_watermark.png"
  },
  {
    title: "HTF Mystery Book",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_htf_mystery_book.png"
  },
  {
    title: "Hydra Day 1 Breaker 1",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_hydra_day_1_breaker_1.png"
  },
  {
    title: "Ichimoku Beginner by Gabor Kovacs",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_ichimoku_beginner_by_gabor_kovacs.png"
  },
  {
    title: "Ichimoku Charts - Nicole Elliott 250402 235438",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_ichimoku_charts_nicole_elliott_250402_235438.png"
  },
  {
    title: "ICT 2016 FULL",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_2016_full.png"
  },
  {
    title: "ICT Core Mentorship Month 10 Notes @studyICT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_core_mentorship_month_10_notes_studyict.png"
  },
  {
    title: "ICT Core Mentorship Month 9 Notes @studyICT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_core_mentorship_month_9_notes_studyict.png"
  },
  {
    title: "ict crt",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_crt_1.png"
  },
  {
    title: "Ict guide",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_guide.png"
  },
  {
    title: "ICT INSTITUTIONAL SMC TRADING",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_institutional_smc_trading_1_1.png"
  },
  {
    title: "ICT INSTITUTIONAL SMC TRADING",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_institutional_smc_trading_1.png"
  },
  {
    title: "ICT INSTITUTIONAL SMC TRADING",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_institutional_smc_trading_2.png"
  },
  {
    title: "ICT INSTITUTIONAL SMC TRADING",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_institutional_smc_trading.png"
  },
  {
    title: "ict-if-vg",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_if_vg.png"
  },
  {
    title: "ICTBLOCKTYPES",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ictblocktypes.png"
  },
  {
    title: "ICTPDF Practical ICT Strategies by Ayub Rana 5th+Edition",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ictpdf_practical_ict_strategies_by_ayub_rana_5th_edition.png"
  },
  {
    title: "Index Futures News Cheat Sheet watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_index_futures_news_cheat_sheet_watermark.png"
  },
  {
    title: "Inducement Cycle @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_inducement_cycle_falcon_books.png"
  },
  {
    title: "Inducement Cycle V2 (English)",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_inducement_cycle_v2_english.png"
  },
  {
    title: "Inducment Liquidity Theorem",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_inducment_liquidity_theorem.png"
  },
  {
    title: "Institutional Orderflow (1) watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_institutional_orderflow_1_watermark.png"
  },
  {
    title: "Intermarket Analysis by John Murphy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_intermarket_analysis_by_john_murphy.png"
  },
  {
    title: "IPDA Advanced Breakdown",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_ipda_advanced_breakdown.png"
  },
  {
    title: "IPDA Lookback Final",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_ipda_lookback_final.png"
  },
  {
    title: "IPDA Market Profiling",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_ipda_market_profiling.png"
  },
  {
    title: "ISC MSNR Optimized",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_isc_msnr_optimized.png"
  },
  {
    title: "isc.10 eng",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_isc_10_eng_1.png"
  },
  {
    title: "Ishaq's Price Action Paid E-Book",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ishaq_s_price_action_paid_e_book.png"
  },
  {
    title: "James F Dalton, Eric T Jones, Robert Bevan Dalton Mind over Markets",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_james_f_dalton_eric_t_jones_robert_bevan_dalton_mind_ove.png"
  },
  {
    title: "Japanese Candlestick Charting Techniques",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_japanese_candlestick_charting_techniques_2001.png"
  },
  {
    title: "jason noah major key strategy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_jason_noah_major_key_strategy_1.png"
  },
  {
    title: "JJWURLDIN E-BOOK @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_jjwurldin_e_book_falcon_books.png"
  },
  {
    title: "John Forman The Essentials of Trading",
    author: "Unknown",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/pdf_john_forman_the_essentials_of_trading.png"
  },
  {
    title: "Kenneth Shaleen Volume Open Interest (Rev (1). Ed.)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_kenneth_shaleen_volume_open_interest_rev_1_ed.png"
  },
  {
    title: "Kenneth Shaleen Volume Open Interest (Rev. Ed.)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_kenneth_shaleen_volume_open_interest_rev_ed.png"
  },
  {
    title: "KING'S TRADING SYSTEM 2.0 @tradingpdfgratis2",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_king_s_trading_system_2_0_tradingpdfgratis2.png"
  },
  {
    title: "Larry Williams Long Term Secrets to Short Term Trading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_larry_williams_long_term_secrets_to_short_term_trading_2.png"
  },
  {
    title: "Larry Williams The Secret Of Selecting",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_larry_williams_the_secret_of_selecting.png"
  },
  {
    title: "Law of Success 21st Century Edition",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_law_of_success_21st_century_edition.png"
  },
  {
    title: "Lecture 001 MSB Market Structure Break",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_lecture_001_msb_market_structure_break.png"
  },
  {
    title: "Lecture 002 OB Order Block",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_lecture_002_ob_order_block.png"
  },
  {
    title: "Lecture 003 IMB Imbalances",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_003_imb_imbalances.png"
  },
  {
    title: "Lecture 004 QML Quasimodo",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_004_qml_quasimodo.png"
  },
  {
    title: "Lecture 005 BB Breaker Blocks",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_005_bb_breaker_blocks.png"
  },
  {
    title: "Lecture 006 OTE Fibonacci Optimal Trade Entry",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_lecture_006_ote_fibonacci_optimal_trade_entry.png"
  },
  {
    title: "Lecture 007 PREMIUM DISCOUNT",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_007_premium_discount.png"
  },
  {
    title: "Lecture 008 ROTE Reverse Fibonacci Optimal Trade Entry",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_lecture_008_rote_reverse_fibonacci_optimal_trade_entry.png"
  },
  {
    title: "Lecture 009 TRAPS Stop Loss Hunting",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_009_traps_stop_loss_hunting.png"
  },
  {
    title: "Lecture 010 SFP Swing Failure Pattern",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_010_sfp_swing_failure_pattern.png"
  },
  {
    title: "Lecture 011 BREAKERS",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_011_breakers.png"
  },
  {
    title: "Lecture 012 PO3 Power of Three",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_012_po3_power_of_three.png"
  },
  {
    title: "Lecture 013 S-R FLIPS Support Resistance Flips",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lecture_013_s_r_flips_support_resistance_flips.png"
  },
  {
    title: "LEXUS - EG x SNR Unlocked - SOP for XAUUSD",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lexus_eg_x_snr_unlocked_sop_for_xauusd.png"
  },
  {
    title: "Liquidity",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_liquidity_2.png"
  },
  {
    title: "Liquidity Home work",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_liquidity_home_work.png"
  },
  {
    title: "Liquidity University",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_liquidity_university.png"
  },
  {
    title: "LIT & Trap Trading @TOWN BOOKS",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lit_trap_trading_town_books.png"
  },
  {
    title: "LIT-TRAP-TRADING @Moneiac Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lit_trap_trading_moneiac_books.png"
  },
  {
    title: "LIT Exam @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_lit_exam_falcon_books.png"
  },
  {
    title: "London Twilight Model Explanation",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_london_twilight_model_explanation.png"
  },
  {
    title: "Long Term Secrets to Short Term Trading Second Edition by Larry",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_long_term_secrets_to_short_term_trading_second_edition_b.png"
  },
  {
    title: "Lotus MMXM Trading Model 1.2",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_lotus_mmxm_trading_model_1_2_2.png"
  },
  {
    title: "M1 SCALPING COURSE",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_m1_scalping_course.png"
  },
  {
    title: "Make millions in Forex Trading",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_make_millions_in_forex_trading.png"
  },
  {
    title: "MALAYSIAN SNR STRATEGY [2 (1).0] by PITCHOU.FX.",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_malaysian_snr_strategy_2_1_0_by_pitchou_fx.png"
  },
  {
    title: "MALAYSIAN SNR STRATEGY [2 (2).0] by PITCHOU.FX.",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_malaysian_snr_strategy_2_2_0_by_pitchou_fx.png"
  },
  {
    title: "MALAYSIAN SNR STRATEGY [2.0] by PITCHOU.FX.",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_malaysian_snr_strategy_2_0_by_pitchou_fx.png"
  },
  {
    title: "Management Accounting for Business @TradersLibrary2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_management_accounting_for_business_traderslibrary2.png"
  },
  {
    title: "Mansions of the Moon 2nd by Christopher Warnock",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_mansions_of_the_moon_2nd_by_christopher_warnock.png"
  },
  {
    title: "Market Maker Model - PDF",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_market_maker_model_pdf.png"
  },
  {
    title: "Market Structure And Powerful Setups [By Wade Fx Setups]",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_market_structure_and_powerful_setups_by_wade_fx_setups_1.png"
  },
  {
    title: "Markets in Profile Profiting from",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_markets_in_profile_profiting_from.png"
  },
  {
    title: "Market Indicators the best kept",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_market_indicators_the_best_kept.png"
  },
  {
    title: "Master the FX Currency Pairs",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_master_the_fx_currency_pairs.png"
  },
  {
    title: "Mastering Fundamental Analysis (",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_mastering_fundamental_analysis.png"
  },
  {
    title: "Mastering The Currency Market",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_mastering_the_currency_market.png"
  },
  {
    title: "Mastering the hype cycle how to choose the right i",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_mastering_the_hype_cycle_how_to_choose_the_right_i.png"
  },
  {
    title: "Mastering the Mental Game of Trading - Steven Goldstein",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_mastering_the_mental_game_of_trading_steven_goldstein_1.png"
  },
  {
    title: "Mastering the Mental Game of Trading - Steven Goldstein",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_mastering_the_mental_game_of_trading_steven_goldstein.png"
  },
  {
    title: "Mastering Trading Psychology Improve Your Trading with Firsthand",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_mastering_trading_psychology_improve_your_trading_with_f.png"
  },
  {
    title: "Mastering Trading Stress Strategies for Maximizing Performance",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_mastering_trading_stress_strategies_for_maximizing_perfo.png"
  },
  {
    title: "Maximum Trading Gains with Anchored VWAP The Perfect Combination",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_maximum_trading_gains_with_anchored_vwap_the_perfect_com.png"
  },
  {
    title: "mechanical trading system",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_mechanical_trading_system.png"
  },
  {
    title: "Michael Parness The Art of Trend",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_michael_parness_the_art_of_trend.png"
  },
  {
    title: "midnight opening price & 830 watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_midnight_opening_price_830_watermark_1.png"
  },
  {
    title: "midnight opening price & 830 watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_midnight_opening_price_830_watermark.png"
  },
  {
    title: "Mindful Marketing The First of its kind Cartoon Book to Master Modern",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_mindful_marketing_the_first_of_its_kind_cartoon_book_to_.png"
  },
  {
    title: "MMXM & Time - TOTK eBook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_mmxm_time_totk_ebook_1.png"
  },
  {
    title: "MMXM & Time - TOTK eBook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_mmxm_time_totk_ebook_2.png"
  },
  {
    title: "MMXM & Time - TOTK eBook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_mmxm_time_totk_ebook.png"
  },
  {
    title: "MMXM",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_mmxm_1.png"
  },
  {
    title: "Moving Averages 101 Incredible Signals That Will Make You Money",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_moving_averages_101_incredible_signals_that_will_make_yo.png"
  },
  {
    title: "MSNR ALCHEMIST NOTES (MSNR +QT+SMT+FIB)- BERK USTA",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_msnr_alchemist_notes_msnr_qt_smt_fib_berk_usta.png"
  },
  {
    title: "MSNR ✨🐢",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_msnr.png"
  },
  {
    title: "msnr-x-smc-x-ict-the-alchemist-yanu-emmanuel compress",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_msnr_x_smc_x_ict_the_alchemist_yanu_emmanuel_compress_3.png"
  },
  {
    title: "Najmi Firdaus English SNR @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_najmi_firdaus_english_snr_falcon_books.png"
  },
  {
    title: "Naked forex",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_naked_forex_pdf.png"
  },
  {
    title: "nasdaq trading strategies",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_nasdaq_trading_strategies.png"
  },
  {
    title: "Nearly Bulletproof Setups 29 Proven Stock Market Trading Strategies",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_nearly_bulletproof_setups_29_proven_stock_market_trading.png"
  },
  {
    title: "NEO - TDT (2) English",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_neo_tdt_2_english.png"
  },
  {
    title: "NEO - TDT (3) English",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_neo_tdt_3_english.png"
  },
  {
    title: "NEO - TDT (4) English",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_neo_tdt_4_english.png"
  },
  {
    title: "NEO - TDT (5) English",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_neo_tdt_5_english.png"
  },
  {
    title: "Nora Bystra Personal Coaching (English)",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_nora_bystra_personal_coaching_english.png"
  },
  {
    title: "Nora Bystra Personal Coaching",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_nora_bystra_personal_coaching.png"
  },
  {
    title: "One-minute-strategy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_one_minute_strategy.png"
  },
  {
    title: "One Good Trade Inside the Highly",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_one_good_trade_inside_the_highly.png"
  },
  {
    title: "Option Strategies with Adjustme - Rajiv L B Roy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_option_strategies_with_adjustme_rajiv_l_b_roy.png"
  },
  {
    title: "Order block pdf by daytradingrauf final",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_order_block_pdf_by_daytradingrauf_final_1.png"
  },
  {
    title: "Order block pdf by daytradingrauf final",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_order_block_pdf_by_daytradingrauf_final_2.png"
  },
  {
    title: "Order block pdf by daytradingrauf final",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_order_block_pdf_by_daytradingrauf_final.png"
  },
  {
    title: "Oxley, Lawrence Extreme Weather and Financial Markets",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_oxley_lawrence_extreme_weather_and_financial_markets.png"
  },
  {
    title: "PA Continued",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pa_continued.png"
  },
  {
    title: "Pairs Trading Quantitative Methods",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_pairs_trading_quantitative_methods.png"
  },
  {
    title: "PART 4 CRT SUBTYPE",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_part_4_crt_subtype.png"
  },
  {
    title: "PART8 ALL SMC BLOCK TYPES 3ba37106 b36c 493e b57e 7d485e01fc1f",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_part8_all_smc_block_types_3ba37106_b36c_493e_b57e_7d485e.png"
  },
  {
    title: "Part 4 What is an Order block f0d69e41 9f90 4cf2 a49a be58e2c96c",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_part_4_what_is_an_order_block_f0d69e41_9f90_4cf2_a49a_be.png"
  },
  {
    title: "Part 6 How to refine order blocks eba6ad3e 383f 4aef 818c ddb94d",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_part_6_how_to_refine_order_blocks_eba6ad3e_383f_4aef_818.png"
  },
  {
    title: "PAYAPA.VMJ-WEALTH-CREATION-1",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_payapa_vmj_wealth_creation_1.png"
  },
  {
    title: "PDF - HOW TO MASTER THE ART OF TRADING - BY SOULZ",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_how_to_master_the_art_of_trading_by_soulz_1.png"
  },
  {
    title: "PDF - HOW TO MASTER THE ART OF TRADING - BY SOULZ",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_how_to_master_the_art_of_trading_by_soulz.png"
  },
  {
    title: "PDF 01",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_01.png"
  },
  {
    title: "PDF 02",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_02.png"
  },
  {
    title: "PDF 03",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_03.png"
  },
  {
    title: "PDF 04",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_pdf_04.png"
  },
  {
    title: "PO3 - Fractal Study",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_po3_fractal_study.png"
  },
  {
    title: "Practicing the power of now",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_practicing_the_power_of_now.png"
  },
  {
    title: "Precision Market The Trading Bible.@TradersLibrary2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_precision_market_the_trading_bible_traderslibrary2.png"
  },
  {
    title: "Precision Market The Trading Bible",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_precision_market_the_trading_bible.png"
  },
  {
    title: "PREMIUM VS DISCOUNT watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_premium_vs_discount_watermark_1.png"
  },
  {
    title: "Pretcher Trading the Elliott Waves manual",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_pretcher_trading_the_elliott_waves_manual.png"
  },
  {
    title: "previous session Characteristics watermark",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_previous_session_characteristics_watermark.png"
  },
  {
    title: "Price Action Breakdown Laurentiu Damir",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_price_action_breakdown_laurentiu_damir_1.png"
  },
  {
    title: "Price Action Breakdown Laurentiu Damir",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_price_action_breakdown_laurentiu_damir.png"
  },
  {
    title: "Price Action Trading Course-1-1-1",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_price_action_trading_course_1_1_1.png"
  },
  {
    title: "Price action trading secrets",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_price_action_trading_secrets.png"
  },
  {
    title: "price-action-trading-secrets",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_price_action_trading_secrets_1_1_1.png"
  },
  {
    title: "Profitable Candlestick Trading",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_profitable_candlestick_trading_2002.png"
  },
  {
    title: "Profitable Day and Swing Trading Using Price Volume Surges and Pattern",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_profitable_day_and_swing_trading_using_price_volume_surg.png"
  },
  {
    title: "PROP TRADER SECRETS",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_prop_trader_secrets_1.png"
  },
  {
    title: "PROP TRADER SECRETS @Tbooks Town",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_prop_trader_secrets_tbooks_town.png"
  },
  {
    title: "PROP TRADER SECRETS",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_prop_trader_secrets.png"
  },
  {
    title: "Psychology-A-Self-Teaching-Guide-English",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_psychology_a_self_teaching_guide_english.png"
  },
  {
    title: "QT Basic To Advance",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_qt_basic_to_advance.png"
  },
  {
    title: "Quantitative Trading Algorithms",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_quantitative_trading_algorithms.png"
  },
  {
    title: "Quantum Finance @TradersLibrary2",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_quantum_finance_traderslibrary2.png"
  },
  {
    title: "Rayner Teo The Monster Guide to Candlestick Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_rayner_teo_the_monster_guide_to_candlestick_patterns.png"
  },
  {
    title: "Remeo trading 241018 210105",
    author: "Unknown",
    category: "Beginner / Forex Basics",
    cover: "assets/covers/pdf_remeo_trading_241018_210105.png"
  },
  {
    title: "Rewire Your Brain Think Your Way to a Better Life",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_rewire_your_brain_think_your_way_to_a_better_life.png"
  },
  {
    title: "Romeo - Turtle Soup Notes (Important)",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_romeo_turtle_soup_notes_important.png"
  },
  {
    title: "Romeo private mentorship -1",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_romeo_private_mentorship_1.png"
  },
  {
    title: "Romeo Teachings",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_romeo_teachings.png"
  },
  {
    title: "Romeo Written CRT Unlocked",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_romeo_written_crt_unlocked.png"
  },
  {
    title: "SACRED ALGO – Algo Trading Mastery PV Main Topics + Trade example",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_sacred_algo_algo_trading_mastery_pv_main_topics_trade_ex.png"
  },
  {
    title: "Scalping Mastery @paidpdf4free",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_scalping_mastery_paidpdf4free.png"
  },
  {
    title: "Scrim Sessions @Falcon Books",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_scrim_sessions_falcon_books.png"
  },
  {
    title: "Scrim Sessions v2 @Falcon Books",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_scrim_sessions_v2_falcon_books.png"
  },
  {
    title: "Scrim Sessions[FAQ]@Falcon Books",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_scrim_sessions_faq_falcon_books.png"
  },
  {
    title: "Seven Chart Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_seven_chart_patterns_1.png"
  },
  {
    title: "Seven Chart Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_seven_chart_patterns.png"
  },
  {
    title: "Sheldon Natenberg Option Volatility",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_sheldon_natenberg_option_volatility.png"
  },
  {
    title: "Short Term Trading Strategies That Work Larry Connors, Cesar Alvarez",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_short_term_trading_strategies_that_work_larry_connors_ce.png"
  },
  {
    title: "Smart Money Concept SMC Tradi Vekariya, Dixit",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_smart_money_concept_smc_tradi_vekariya_dixit_1.png"
  },
  {
    title: "SMC PDF BOOK PART1 TheorY 52510a61 a5da 4be0 92fc ad808f2357a0",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_smc_pdf_book_part1_theory_52510a61_a5da_4be0_92fc_ad808f.png"
  },
  {
    title: "SMC PDF BOOK PART2 TheorY 18f17715 5aab 433f 815b 46c77e123e8f",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_smc_pdf_book_part2_theory_18f17715_5aab_433f_815b_46c77e.png"
  },
  {
    title: "SMC PDF BOOK PART3 TheorY 0e109d47 eadf 4915 bf2b e1c508464dc6",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_smc_pdf_book_part3_theory_0e109d47_eadf_4915_bf2b_e1c508.png"
  },
  {
    title: "Snipe Academy @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_snipe_academy_falcon_books.png"
  },
  {
    title: "Snow Flake 1 @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_snow_flake_1_falcon_books.png"
  },
  {
    title: "Snow Flake 2 @Falcon Books",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_snow_flake_2_falcon_books.png"
  },
  {
    title: "SNR Malaysia",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_snr_malaysia_1.png"
  },
  {
    title: "SNR Malaysia",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_snr_malaysia.png"
  },
  {
    title: "Steps to Trade 5 AM CRT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_steps_to_trade_5_am_crt.png"
  },
  {
    title: "Stop Hunt Mastery FOREXIA",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_stop_hunt_mastery_forexia.png"
  },
  {
    title: "Structures of CRT",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_structures_of_crt.png"
  },
  {
    title: "super trader",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_super_trader.png"
  },
  {
    title: "Supply And Demand Day Trading ❤️ @TOWN BOOKS",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_supply_and_demand_day_trading_town_books.png"
  },
  {
    title: "Supply and Demand Trading How To Master The Trading Zones by Frank",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_supply_and_demand_trading_how_to_master_the_trading_zone.png"
  },
  {
    title: "Survival Guide for Traders",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_survival_guide_for_traders.png"
  },
  {
    title: "TDT Bootcamp - Notes Of First Week",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_tdt_bootcamp_notes_of_first_week.png"
  },
  {
    title: "technical analysis of stock trends",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_technical_analysis_of_stock_trends.png"
  },
  {
    title: "TECHNICAL ANALYSIS TRADING LEGEND",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_technical_analysis_trading_legend.png"
  },
  {
    title: "Technical Analysis for Beginners Candlestick Trading, Charting,",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_technical_analysis_for_beginners_candlestick_trading_cha.png"
  },
  {
    title: "The 7 Deadly Sins of Trading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_7_deadly_sins_of_trading.png"
  },
  {
    title: "The Alchemist 260502 005804",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_alchemist_260502_005804.png"
  },
  {
    title: "The Art of Trading Refined",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_art_of_trading_refined_1.png"
  },
  {
    title: "The Art of Trading Refined",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_art_of_trading_refined_2.png"
  },
  {
    title: "The Art of Trading Refined - Ref Wayne",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_art_of_trading_refined_ref_wayne.png"
  },
  {
    title: "The Art of Trading Refined",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_art_of_trading_refined.png"
  },
  {
    title: "The Aspirational Investor",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_the_aspirational_investor.png"
  },
  {
    title: "The Big Book of Day Trading",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_the_big_book_of_day_trading.png"
  },
  {
    title: "The Book of T @paidpdf4free",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_book_of_t_paidpdf4free.png"
  },
  {
    title: "The Candle Range Theory - Sham CPI",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_candle_range_theory_sham_cpi_1.png"
  },
  {
    title: "The Candle Range Theory - Sham CPI",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_candle_range_theory_sham_cpi_2.png"
  },
  {
    title: "The Candle Range Theory - Sham CPI",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_candle_range_theory_sham_cpi.png"
  },
  {
    title: "THE CANDLESTICK TRADING BIBLE",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_candlestick_trading_bible_2.png"
  },
  {
    title: "The Candlestick Trading Bible [3 in 1] The Ultimate Guide",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_candlestick_trading_bible_3_in_1_the_ultimate_guide.png"
  },
  {
    title: "The Complete Guide To Forex Trading",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_complete_guide_to_forex_trading.png"
  },
  {
    title: "The Complete Trading System 2023",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_the_complete_trading_system_2023_1.png"
  },
  {
    title: "The Complete Trading System 2023",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_the_complete_trading_system_2023_2.png"
  },
  {
    title: "The Complete Trading System 2023",
    author: "Unknown",
    category: "Trading Systems",
    cover: "assets/covers/pdf_the_complete_trading_system_2023.png"
  },
  {
    title: "The Disciplined Trader Developing Winning Attitudes",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_disciplined_trader_developing_winning_attitudes.png"
  },
  {
    title: "The Equity Open (Quit Your Job) (1) watermark",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_the_equity_open_quit_your_job_1_watermark.png"
  },
  {
    title: "The Final Hour Macro watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_final_hour_macro_watermark.png"
  },
  {
    title: "The H4 & H1 chart watermark",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_h4_h1_chart_watermark.png"
  },
  {
    title: "The ICT Bible - V1 - By Ali Khan",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_ict_bible_v1_by_ali_khan.png"
  },
  {
    title: "The Lifecycle Trade",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_the_lifecycle_trade.png"
  },
  {
    title: "The London Session Model watermark",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_the_london_session_model_watermark.png"
  },
  {
    title: "The major works of R.N. Elliot @tradingpdfgratis2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_major_works_of_r_n_elliot_tradingpdfgratis2.png"
  },
  {
    title: "The Market Maker's Matrix",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_market_maker_s_matrix_1.png"
  },
  {
    title: "The Market Maker's Matrix",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_market_maker_s_matrix.png"
  },
  {
    title: "The Mental Game of Trading by Jared Tendler",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_mental_game_of_trading_by_jared_tendler.png"
  },
  {
    title: "The Monster Guide to Candlestick Patterns",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_monster_guide_to_candlestick_patterns.png"
  },
  {
    title: "The PM Session watermark",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_the_pm_session_watermark.png"
  },
  {
    title: "the psychology of money",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_psychology_of_money.png"
  },
  {
    title: "The Simplest Book For Technical Analysis (Agrawal M (1).)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_simplest_book_for_technical_analysis_agrawal_m_1.png"
  },
  {
    title: "The Simplest Book For Technical Analysis (Agrawal M.)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_simplest_book_for_technical_analysis_agrawal_m.png"
  },
  {
    title: "The Smart Money Concept by James Jecool King",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_the_smart_money_concept_by_james_jecool_king.png"
  },
  {
    title: "THE TRADING RPM WROKBOOK BY PITCHOU.FX",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_trading_rpm_wrokbook_by_pitchou_fx_1.png"
  },
  {
    title: "The Victorious Mind by Anthony Metivier",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_victorious_mind_by_anthony_metivier.png"
  },
  {
    title: "The Way of The Superior Trader FOREXIA",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_way_of_the_superior_trader_forexia.png"
  },
  {
    title: "the-candlestick-trading-bible-(KohanFxcom) 250310 022424",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_candlestick_trading_bible_kohanfxcom_250310_022424.png"
  },
  {
    title: "The-Intelligent-Investor",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_the_intelligent_investor.png"
  },
  {
    title: "The-Psychology-of-Money-PDF-Book-By-Morgan-Housel",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_psychology_of_money_pdf_book_by_morgan_housel.png"
  },
  {
    title: "Theshadow171 - fibo Storyline",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_theshadow171_fibo_storyline.png"
  },
  {
    title: "The anatomy of success Darvas, Nicolas 1965 Indianapolis, Bobbs",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_the_anatomy_of_success_darvas_nicolas_1965_indianapolis_.png"
  },
  {
    title: "The Complete Breakout Trader D John Connors en Español",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_the_complete_breakout_trader_d_john_connors_en_espa_ol.png"
  },
  {
    title: "The Day Traders Course Low Risk, High Profit Strategies for Trading",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_the_day_traders_course_low_risk_high_profit_strategies_f.png"
  },
  {
    title: "The Greatest Trades of All Time Top Traders Making @tradingpdfgratis2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_greatest_trades_of_all_time_top_traders_making_tradi.png"
  },
  {
    title: "The New Trading for a Living Psychology, Discipline, Trading Tools",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_new_trading_for_a_living_psychology_discipline_tradi.png"
  },
  {
    title: "THE SECRETS OF TIME",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_secrets_of_time_1.png"
  },
  {
    title: "THE SECRETS OF TIME",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_secrets_of_time.png"
  },
  {
    title: "The Secret Of Selecting Stocks For Immediate And Substantial Gains",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_the_secret_of_selecting_stocks_for_immediate_and_substan.png"
  },
  {
    title: "The Tao of Trading How to Build Abundant Wealth in Any Market Condition",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_the_tao_of_trading_how_to_build_abundant_wealth_in_any_m.png"
  },
  {
    title: "The Three Skills of Top Trading",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_three_skills_of_top_trading.png"
  },
  {
    title: "The Trader's Code",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_the_trader_s_code.png"
  },
  {
    title: "THE VERTEX TRADE STORY",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_the_vertex_trade_story.png"
  },
  {
    title: "The Wyckoff Methodology in Depth How to Trade Financial Markets",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_the_wyckoff_methodology_in_depth_how_to_trade_financial_.png"
  },
  {
    title: "Think and Trade like Champion",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_think_and_trade_like_champion.png"
  },
  {
    title: "Time & Turtle Soup (Part 3- Ranges x Dol)",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_time_turtle_soup_part_3_ranges_x_dol_1.png"
  },
  {
    title: "Time & Turtle Soup (Part 3- Ranges x Dol)",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_time_turtle_soup_part_3_ranges_x_dol.png"
  },
  {
    title: "Time Cycles - The law of cause and effect",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_cycles_the_law_of_cause_and_effect_1.png"
  },
  {
    title: "Time Cycles - The law of cause and effect",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_cycles_the_law_of_cause_and_effect_2.png"
  },
  {
    title: "Time Cycles - The law of cause and effect",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_cycles_the_law_of_cause_and_effect.png"
  },
  {
    title: "TIME DILATION THEORY(TDT by SOUPreme po3",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_dilation_theory_tdt_by_soupreme_po3.png"
  },
  {
    title: "Time is Money - Kerry Given",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_time_is_money_kerry_given.png"
  },
  {
    title: "Timeframe Aligned Ranges w HTF Key Levels watermark",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_timeframe_aligned_ranges_w_htf_key_levels_watermark_1.png"
  },
  {
    title: "Timeframe Aligned Ranges w HTF Key Levels watermark",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_timeframe_aligned_ranges_w_htf_key_levels_watermark.png"
  },
  {
    title: "Timeframe Aligned Ranges w ITP Key Levels watermark",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_timeframe_aligned_ranges_w_itp_key_levels_watermark.png"
  },
  {
    title: "Time Compression Trading Exploiting Multiple Time",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_compression_trading_exploiting_multiple_time_2.png"
  },
  {
    title: "Time Compression Trading Exploiting Multiple Time",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_time_compression_trading_exploiting_multiple_time.png"
  },
  {
    title: "timing-markets-workshop",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_timing_markets_workshop.png"
  },
  {
    title: "Tomorrow's Gold Asia's Age of Discovery by Marc Faber",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_tomorrow_s_gold_asia_s_age_of_discovery_by_marc_faber.png"
  },
  {
    title: "Top Down Analysis on the Financial Markets by Ref Wayne, Bafana",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_top_down_analysis_on_the_financial_markets_by_ref_wayne_.png"
  },
  {
    title: "Trade Chart Patterns Like The Pros",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_trade_chart_patterns_like_the_pros_1.png"
  },
  {
    title: "Trade Chart Patterns Like the Pros",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_trade_chart_patterns_like_the_pros.png"
  },
  {
    title: "Trade Lab Gapper Model Book",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trade_lab_gapper_model_book.png"
  },
  {
    title: "Trade the Trader",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trade_the_trader_2011.png"
  },
  {
    title: "Trade Vic Methods of a WallStreet Master - Victor Sperandeo",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_trade_vic_methods_of_a_wallstreet_master_victor_sperande.png"
  },
  {
    title: "trade what you see",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trade_what_you_see.png"
  },
  {
    title: "Traders of the New Era - Fernando Oliveira",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_traders_of_the_new_era_fernando_oliveira.png"
  },
  {
    title: "traders secrets",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_traders_secrets.png"
  },
  {
    title: "Trade Like a Casino Find Your Edge, Manage Risk, and Win Like the",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trade_like_a_casino_find_your_edge_manage_risk_and_win_l.png"
  },
  {
    title: "Trade Like a Monk Trading Psychology is the Key to Successful Trading",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_trade_like_a_monk_trading_psychology_is_the_key_to_succe.png"
  },
  {
    title: "Trade Your Way to Financial Freedom 2nd Edition Van Tharp z lib",
    author: "Unknown",
    category: "Personal Finance",
    cover: "assets/covers/pdf_trade_your_way_to_financial_freedom_2nd_edition_van_thar.png"
  },
  {
    title: "Trading Engulfing the BERG way",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_engulfing_the_berg_way.png"
  },
  {
    title: "Trading Fanatic Way Bootcamp",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_fanatic_way_bootcamp.png"
  },
  {
    title: "TRADING HUB 3.O",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_hub_3_o.png"
  },
  {
    title: "Trading on Momentum @TradersLibrary2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_on_momentum_traderslibrary2.png"
  },
  {
    title: "Trading Price Action",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_trading_price_action.png"
  },
  {
    title: "Trading With The Odds @TradersLibrary2",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_with_the_odds_traderslibrary2.png"
  },
  {
    title: "Trading & Exchanges Market Microstructure for Practitioners by Larry",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_exchanges_market_microstructure_for_practitioner.png"
  },
  {
    title: "Trading on Momentum Advanced Techniques",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_trading_on_momentum_advanced_techniques.png"
  },
  {
    title: "Trading Psychology 2 0 From Best",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_trading_psychology_2_0_from_best_1.png"
  },
  {
    title: "Trading Psychology 2 0 From Best",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_trading_psychology_2_0_from_best.png"
  },
  {
    title: "Trading the Measured Move A Path to Trading Success in a World of",
    author: "Unknown",
    category: "Personal Development",
    cover: "assets/covers/pdf_trading_the_measured_move_a_path_to_trading_success_in_a.png"
  },
  {
    title: "Trendline Breakout Trading Strategy-1",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_trendline_breakout_trading_strategy_1_1.png"
  },
  {
    title: "Trendline Breakout Trading Strategy-1",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_trendline_breakout_trading_strategy_1_2.png"
  },
  {
    title: "Trendline Breakout Trading Strategy-1",
    author: "Unknown",
    category: "Trend Trading",
    cover: "assets/covers/pdf_trendline_breakout_trading_strategy_1.png"
  },
  {
    title: "Trend Following Mindset The Genius of Legendary",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_trend_following_mindset_the_genius_of_legendary.png"
  },
  {
    title: "TS -",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_ts_1.png"
  },
  {
    title: "TS -",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_ts.png"
  },
  {
    title: "TSR-Model-PDF",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_tsr_model_pdf.png"
  },
  {
    title: "Turtle Strategy",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_turtle_strategy.png"
  },
  {
    title: "Twin Tower Trade Plan",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_twin_tower_trade_plan_1.png"
  },
  {
    title: "Ultimate Day Trading Guide",
    author: "Unknown",
    category: "Day Trading",
    cover: "assets/covers/pdf_ultimate_day_trading_guide.png"
  },
  {
    title: "Ultimate guide to price action strategies @tradingpdfgratis2",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ultimate_guide_to_price_action_strategies_tradingpdfgrat.png"
  },
  {
    title: "Ultimate Price Action Trading Guide",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ultimate_price_action_trading_guide.png"
  },
  {
    title: "Understanding Price Action - Bob Volman",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_understanding_price_action_bob_volman_1.png"
  },
  {
    title: "Understanding Price Action - Bob Volman",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_understanding_price_action_bob_volman.png"
  },
  {
    title: "Unlocking Success in ICT 2022 Mentorship - Lumitrader",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_unlocking_success_in_ict_2022_mentorship_lumitrader.png"
  },
  {
    title: "Value in Time Better Trading through Ef - Pascal Willain",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_value_in_time_better_trading_through_ef_pascal_willain.png"
  },
  {
    title: "VectorTradingFX - 2-Phase Inducement Theorem PDF",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_vectortradingfx_2_phase_inducement_theorem_pdf.png"
  },
  {
    title: "Vertex Investing - Order Block playbook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_vertex_investing_order_block_playbook_1.png"
  },
  {
    title: "Vertex Investing - Order Block playbook",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_vertex_investing_order_block_playbook.png"
  },
  {
    title: "Volume 10 Ethical and Professional Standards (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_10_ethical_and_professional_standards_cfa_institu.png"
  },
  {
    title: "Volume 2 Economics (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_2_economics_cfa_institute.png"
  },
  {
    title: "Volume 3 Corporate Issuers (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_3_corporate_issuers_cfa_institute.png"
  },
  {
    title: "Volume 5 Equity Investments (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_5_equity_investments_cfa_institute_1.png"
  },
  {
    title: "Volume 6 Fixed Income (CFA Institute) (1) @TradersLibrary2",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_6_fixed_income_cfa_institute_1_traderslibrary2.png"
  },
  {
    title: "Volume 7 Derivatives (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_7_derivatives_cfa_institute_1.png"
  },
  {
    title: "Volume 9 Portfolio Management (CFA Institute)",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_9_portfolio_management_cfa_institute_1.png"
  },
  {
    title: "Volume 1 Quantitative Methods CFA Institute @TradersLibrary2",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_1_quantitative_methods_cfa_institute_traderslibra.png"
  },
  {
    title: "Volume 4 Financial Statement Analysis CFA Institute @TradersLibrary2",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_4_financial_statement_analysis_cfa_institute_trad.png"
  },
  {
    title: "Volume 8 Alternative Investments CFA Institute 1 @TradersLibrary2",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_volume_8_alternative_investments_cfa_institute_1_traders.png"
  },
  {
    title: "VWAP BREAKOUT FAILURE STRATEGY @TradersLibrary2",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_vwap_breakout_failure_strategy_traderslibrary2.png"
  },
  {
    title: "VWAP The Insider's Guide To Trading",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_vwap_the_insider_s_guide_to_trading.png"
  },
  {
    title: "Warren Buffett Accounting Book Reading Financial Statements for",
    author: "Unknown",
    category: "Investing",
    cover: "assets/covers/pdf_warren_buffett_accounting_book_reading_financial_stateme.png"
  },
  {
    title: "Way of The Turtle",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_way_of_the_turtle.png"
  },
  {
    title: "WD-Gann-Astro-Cycles-And",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_wd_gann_astro_cycles_and.png"
  },
  {
    title: "WHAT EVERY ICT TRADER , STILL WANTS TO KNOW @TradersLibrary2",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_what_every_ict_trader_still_wants_to_know_traderslibrary.png"
  },
  {
    title: "Wiley Trading Bennett A McDowell",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_wiley_trading_bennett_a_mcdowell.png"
  },
  {
    title: "Written lectures CRT unlocked (1).",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_written_lectures_crt_unlocked_1.png"
  },
  {
    title: "Written lectures CRT unlocked.",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_written_lectures_crt_unlocked.png"
  },
  {
    title: "Wyckoff Intra-Day Trading Course",
    author: "Unknown",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_wyckoff_intra_day_trading_course.png"
  },
  {
    title: "WZRDS GUIDE TO TRENDS",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_wzrds_guide_to_trends.png"
  },
  {
    title: "Zen in the Markets Confessions of a Samurai Trader",
    author: "Unknown",
    category: "Trading Psychology",
    cover: "assets/covers/pdf_zen_in_the_markets_confessions_of_a_samurai_trader.png"
  },
  {
    title: "Price Action Trading",
    author: "Bill_Eykyn",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_bill_eykyn_price_action_trading.png"
  },
  {
    title: "Market Wizard",
    author: "Jack D. Schwager",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_jack_d_schwager_market_wizard.png"
  },
  {
    title: "The Black Book Of Forex Trading",
    author: "Paul Langer",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_paul_langer_the_black_book_of_forex_trading_1.png"
  },
  {
    title: "The Black Book Of Forex Trading",
    author: "Paul Langer",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_paul_langer_the_black_book_of_forex_trading.png"
  },
  {
    title: "Getting Started With Chart pattern",
    author: "Thomas N. Murkowski",
    category: "Technical Analysis",
    cover: "assets/covers/pdf_thomas_n_murkowski_getting_started_with_chart_pattern.png"
  },
  {
    title: "Trading for Tigers High Probabi",
    author: "Walter_T._Downs",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_walter_t_downs_trading_for_tigers_high_probabi.png"
  },
  {
    title: "Patah Balik",
    author: "Unknown",
    category: "Trading Strategy",
    cover: "assets/covers/pdf_patah_balik.png"
  },
  {
    title: "ሀበሻ ICT ኮርስ PDF",
    author: "Unknown",
    category: "Forex Strategy",
    cover: "assets/covers/pdf_ict_pdf_1_2_1_2_2.png"
  },
];
