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
  }
];
