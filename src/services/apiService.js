var request = require('request');

const getRecommendations = (str) => {
  var options = {
    method: 'POST',
    url: 'https://news-api.lateral.io/documents/similar-to-text',
    headers: {
      'content-type': 'application/json',
      'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
    },
    body: {
      text: str,
    },
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
};

const getArticle = async (str) => {
  var options = {
    method: 'GET',
    url: 'https://document-parser-api.lateral.io/',
    qs: {
      url: str,
    },
    headers: {
      'content-type': 'application/json',
      'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
    },
  };

  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let parsed = JSON.parse(body);
    let stringed = JSON.stringify(parsed.body);

    console.log('STRINGED', stringed);
    console.log('TYPE OF STRINGED', typeof stringed);

    return getRecommendations(stringed);
  });
};

export default getArticle;

//work

// getArticle(
//   'https://www.wsj.com/articles/j-j-covid-19-vaccine-was-66-effective-in-late-stage-study-11611925201',
// );

// getRecommendations(
//   "The prison at Fort Dix, New Jersey, has drawn comparisons to a combat zone. For months, COVID-19 has been laying siege to the low-security federal lockup on the grounds of an old military base, infecting more than 1,500 people and killing one. But last week, reinforcements finally arrived in the form of Pfizer’s coronavirus vaccine.\n\nAround 280 prison employees at Fort Dix received their first doses of vaccine, according to a local union official. Another 157 shots went into the arms of prisoners, about 3,000 of whom are housed in dorm-style rooms where social distancing is impossible. The same partial relief has been coming nationwide, with the Bureau of Prisons (BOP) reporting over 17,000 doses administered as of January 16, using up 97 percent of the agency’s initial vaccine allotment.\n\nAdvertisement\n\nThe bad news is that despite the devastating impact of the pandemic in prisons, which has killed over 2,200 incarcerated people and infected more than 355,000, both staff and prisoners alike are turning down immunizations. VICE News spoke with a dozen individuals from seven federal prisons, all hit hard by COVID-19 last year. Multiple people said they had either already declined the vaccine or wouldn’t take it when it became available.\n\nChristopher Thieme, a 40-year-old prisoner at Fort Dix, hasn’t been offered a shot yet but says he plans to turn it down. Thieme said he and most other prisoners get information by word of mouth, typically from family members who rely on social media. He cited a range of concerns, including the recent post-vaccination death of 86-year-old home run king Hank Aaron, reports of side effects such as “puffy eyes,” and general mistrust of prison staff, some of whom he claimed persuaded prisoners not to get vaccinated.\n\n“Nobody's really getting anything directly from the CDC because everybody says the government is just being too politically minded right now,” Thieme said. “Even the staff were telling inmates, frankly, ‘We're not going to take it. We don't want to be guinea pigs.’”\n\nMichael Morel, a teacher at Fort Dix and the local staff union vice-president, said roughly 40 percent of the prison’s 500 employees were vaccinated last week. Around 50 workers who’d been previously infected were advised to wait, Morel said, but the remaining staff declined the vaccine. The unclaimed doses went to prisoners.\n\n“We have a country full of people who are not going to take the vaccine. With correctional institutions, it’s no different.”\n\n“We have a country full of people who are not going to take the vaccine,” Morel said. “With correctional institutions, it’s no different. There’s gonna be people that want to wait and see what happens or who don’t believe it’s something you need to do.” (Morel said he personally opted to take the vaccine because, as he put it, “It’s the smart thing to do.”)\n\nVaccine shots are still in short supply across the U.S., but prison and jails have been designated priority recipients because of the high risk of infection behind bars. The federal system has seen the deaths of 209 prisoners and four staffers, and BOP officials have repeatedly come under fire for a bungled response that has allowed outbreaks to spread and fester. The agency counts nearly 5,000 active infections at 127 separate locations.\n\nAdvertisement\n\nBOP spokesperson Emory Nelson said the agency’s vaccine rollout has been dictated by the Trump administration’s “Operation Warp Speed,” which made corrections officers and other front-line staff a top priority but not prisoners. (States have been left to set the rollout for their own prison systems, and some, like New York, have offered mixed messages about when incarcerated people can expect to be inoculated.) Doses have been distributed to 84 federal prisons so far, Nelson said, and around half the employees at each site have been vaccinated.\n\n“Given that staff—who come and go between the facility and the community—present a higher potential vector for transmission,” Nelson said, “vaccinating staff protects staff members, inmates at the facility, and the community.”\n\nDespite the staff-first policy, over 5,400 federal prisoners have managed to receive a first dose of vaccine, according to the latest BOP data, with around 1,000 second injections already delivered. It’s unclear exactly how many of those are the direct result of staff turning down the vaccine and prisoners getting doses that would otherwise go to waste, but that appears to be what’s happening in most cases.\n\nAt the federal prison in Oakdale, Louisiana, site of one of the earliest and worst BOP outbreaks, 61-year-old prisoner Alfred Reece said he was only offered the vaccine because corrections officers passed up their chance. But their skepticism rubbed off on him, and Reece decided not to take it due to concerns about allergies. His dose went to another prisoner instead.\n\n“They did not have any information or details on the vaccine but offered it to us,” Reece said. “I decided it was best not to.”\n\nThe vaccines from Moderna and Pfizer have both proven to be overwhelmingly safe and effective, with each offering full protection against serious cases of COVID-19 while causing only minor, short-term side effects. Despite initial concerns about allergic reactions, the latest available data indicates such incidents are exceedingly rare, occurring in fewer than seven out of every 1 million people who take either vaccine, with zero fatalities reported.\n\nAdvertisement\n\nBut the facts haven’t stopped a proliferation of rumors and misinformation. The result is people who live and work in places that were decimated by COVID-19 now rebuffing a potentially life-saving shield against the virus that stalked them for nearly all of 2020.\n\n“We were barely able to get 200 staff to take it,” said Joseph Mayle, the union president in Elkton, Ohio, which has over 400 workers and was previously the focus of an investigation by VICE News and the Marshall into the BOP’s botched handling of the pandemic. “You know how people are with their conspiracy theories or they don’t want to be the first.”\n\nJoshua Lepird, a union official in Oklahoma City, said neither of the two federal prisons in his area have received doses yet, but he’s anticipating an opt-out rate of around 50 percent.\n\n“Truthfully people are working so much it’s hard for them to sit down and read a bunch of information,” Lepird said. “From what I can tell, most already have their mind made up.”\n\nOne BOP staffer who asked to remain anonymous said his prison, located in the South, had yet to receive any doses as of last week. He normally works as a teacher, but with classes cancelled he’s been pulling 16-hour shifts four days a week watching over prisoners sick enough to be sent to outside hospitals.\n\nAdvertisement\n\n“Every floor in these hospitals it’s nothing but Covid,” he said. “You see the bodies coming out just non-stop. I’m putting my life in danger every time.”\n\nThe anxiety about catching the virus on the job was wearing on him and driving down morale across the entire staff. His prison is supposed to get the vaccine next week, but he estimated that 40-50 percent of his coworkers were “iffy” on taking it, despite at least 162 prison staffers nationwide dying from Covid last year.\n\n“It’s driving us paranoid,” he said. “The BOP is just chaotic. The best word to describe the whole agency is incompetence when it comes to doing this type of project.”\n\nEven the success stories have caveats. After the death of a pregnant Native American woman last fall, the Carswell medical center in Fort Worth was among the first places slated to get the vaccine in late December. But the prison, which houses around 1,300 women, including many with serious underlying health conditions, has only received a few hundred doses so far. The local union president said 196 of her staffers took the vaccine and 137 declined. The leftover plus a little extra was enough for 221 prisoners.\n\nAt another women’s prison in Waseca, Minnesota, also the site of a severe outbreak, 33-year-old Channing Lacey said she knew of only a half a dozen vaccinations so far among non-staffers. “I’m really on the fence,” Lacey said. “Half of the guards aren't taking it so it makes me a little iffy, yah know?”\n\nThere are plenty of good reasons for incarcerated people to be wary of medical treatments offered by their jailers. The standard of care is typically abysmal, and there’s a long, dark history of unethical medical research and forced experimentation in prisons.\n\nWith no trustworthy sources to fill the void, it’s only natural for prisoners to be cautious, says Somil Trivedi, senior staff attorney with the ACLU’s Criminal Law Reform Project.\n\n“We're never going to force anybody to stick a needle in their arm, but you need to be educating people about why this is so important,” Trivedi said. “We have an opportunity here, the Biden administration can make this a priority if it wants to. They need to bring video evidence of prominent people getting vaccines and saying it’s safe into all these facilities. They need to set aside time to have a medical officer explain it’s safe.”\n\nThieme, the Fort Dix prisoner who plans to decline the vaccine, cited some history himself when explaining his decision. He referenced an infamous vaccine debacle he’d heard about that unfolded in 1976 when the prison was still an Army base. After a soldier got sick and died from a new strain of swine flu, the government rushed out a new vaccine that carried an elevated risk of auto-immune reactions. It caused 25 deaths before the rollout was halted. (For comparison, around 20 million Americans have already safely received the Moderna and Pfizer vaccines.)\n\nThieme, who’s got about nine years left on a 2016 conviction for attempted murder-for-hire, said he already contracted COVID-19 last year, so he figures he still has some natural immunity. Far from an anti-vaxxer, he desperately wants his mother and father in Virginia, who are both over 70, to get immunized. But like many Americans, Thieme’s parents are having a hard time navigating the system.",
// );
