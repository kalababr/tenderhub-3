const plans = [
  {
    id: 'listing',
    title: { en: 'Directory listing', am: 'በማውጫ ውስጥ መመዝገብ' },
    blurb: { en: 'A verified profile in your category.', am: 'በዘርፍዎ ውስጥ የተረጋገጠ መገለጫ።' },
    features: {
      en: ['Company profile page', 'Contact button for buyers', 'Appears in category search'],
      am: ['የድርጅት መገለጫ ገጽ', 'ለገዢዎች የመገናኛ ቁልፍ', 'በዘርፍ ፍለጋ ላይ ይታያል'],
    },
    cta: { en: 'Add your business', am: 'ንግድዎን ያክሉ' },
  },
  {
    id: 'featured', hot: true,
    title: { en: 'Featured placement', am: 'ልዩ ምደባ' },
    blurb: { en: 'Top of your category and the homepage.', am: 'በዘርፍዎ እና በመነሻ ገጽ አናት ላይ።' },
    features: {
      en: ['Everything in Directory listing', 'Featured badge and top position', 'Homepage banner rotation'],
      am: ['በማውጫ ምዝገባ ውስጥ ያለው ሁሉ', 'የልዩ ምልክት እና ከፍተኛ ደረጃ', 'በመነሻ ገጽ ባነር ላይ መታየት'],
    },
    cta: { en: 'Promote my business', am: 'ንግዴን አስተዋውቅ' },
  },
  {
    id: 'sponsored',
    title: { en: 'Sponsored tender', am: 'የተደገፈ ጨረታ' },
    blurb: { en: 'Get your tender seen by more suppliers.', am: 'ጨረታዎ ብዙ አቅራቢዎች እንዲያዩት ያድርጉ።' },
    features: {
      en: ['Pinned at the top of results', 'Included in the daily alert email', 'Reach by category'],
      am: ['በፍለጋ ውጤት አናት ላይ ይቆያል', 'በየቀኑ በሚላከው ማሳወቂያ ኢሜይል ውስጥ ይካተታል', 'በዘርፍ ተደራሽነት'],
    },
    cta: { en: 'Boost a tender', am: 'ጨረታ አስተዋውቅ' },
  },
]
export default plans