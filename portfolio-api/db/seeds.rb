# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 
projects = Project.create([{
  name: "Very First Project",
  description: "Hello World!",
  img_url: "https://media.giphy.com/media/2xPPojqe3mraUXS6dk/giphy.gif",
  category: "C++",
  content: "<p>Doming dolorem ea vis, legimus scriptorem est eu. Quo idque graece omittantur et. Ne pro cetero expetenda. Te vel <em>oblique</em> blandit disputando, mei falli solet utamur ut. Dico aeque vim et. Ea delenit nominati senserit his, in odio erant mel.</p>"
},
{
  name: "MyFace",
  description: "The next big social media platform.",
  img_url: "https://media.giphy.com/media/14cilFdQzr8hG0/giphy.gif",
  category: "Social Media",
  content: "<p>Audire <em>mnesarchum</em> vel in, clita appetere no pri. Nam diam tation cu, sit ei apeirian vulputate. Rebum minimum est te. Sit ad cibo congue soluta. Idque utinam sapientem mea no, te has commodo evertitur complectitur.</p>

  <p>Eum mundi dissentias eu, vix vidisse tritani virtute ut. Ne illum tempor cum. Ius eligendi eleifend assueverit te, elitr solet <em>mandamus</em> sit eu, et nec gloriatur adversarium. Nullam indoctum repudiandae in qui, veri dicunt pri ut. Pri erat gloriatur ei, quo legere accusam eu, ne expetendis honestatis nec.</p>",
},
{
  name: "ChitCoin",
  description: "Gamefied cryptocurrency currently valued at $0.0000000001",
  img_url: "https://media.giphy.com/media/OS8mPktWKwacg/giphy.gif",
  category: "Cryptocurrency",
  content: "<p>Mucius option partiendo vel ea. Te case singulis <em>theophrastus</em> nec, nusquam persecuti te mei. In assum disputando qui, quo eu ridens noster voluptua. Ludus cotidieque sit in. Has te enim oblique. Brute omnesque quo cu, solum rationibus ne qui.

  Ex ridens recusabo vix. Ne cum facilisi salutandi. Eu <em>ullum dicunt</em> iracundia sed. Qui persecuti forensibus deterruisset te. Duo ea iudico dissentias, et qui invidunt adipiscing. At tritani blandit vim. Delectus salutandi ex nec, in quo harum graeci vivendum.</p>"
},
{
  name: "Skynet",
  description: "Applied artificial intelligence and robotics to make the future a better place.",
  img_url: "https://media.giphy.com/media/TAywY9f1YFila/giphy.gif",
  category: "AI",
  content: "<p>Nam ex porro labitur scriptorem, ad vix eius saperet, saepe graeci constituto no ius. Cu pri delenit inciderint <em>reprehendunt</em>, antiopam vulputate efficiendi id nam. Has cibo malis exerci te, quis consul aperiam ius ad. Nec novum elitr facilisis no, vidisse prodesset signiferumque cu pro.</p>
  <h5>Ridens</h5>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
  <li>Nunc dignissim risus id metus.</li>
  <li>Cras ornare tristique elit.</li>"
},
{
  name: "Matrix",
  description: "Virtual reality MMO with direct interface. Full immersion.",
  img_url: "https://media.giphy.com/media/zXmbOaTpbY6mA/giphy.gif",
  category: "Virtual Reality",
  content: "<p>Praesent dapibus, <em>neque</em> id cursus faucibus, tortor neque egestas auguae, eu vulputate magna <em>eros</em> eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>"
}])
 ,
{
  name: "Skynet",
  description: "Applied artificial intelligence and robotics to make the future a better place.",
  img_url: "https://media.giphy.com/media/TAywY9f1YFila/giphy.gif",
  category: "AI",
  content: "<p>Nam ex porro labitur scriptorem, ad vix eius saperet, saepe graeci constituto no ius. Cu pri delenit inciderint <em>reprehendunt</em>, antiopam vulputate efficiendi id nam. Has cibo malis exerci te, quis consul aperiam ius ad. Nec novum elitr facilisis no, vidisse prodesset signiferumque cu pro.</p>
  <h5>Ridens</h5>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
  <li>Nunc dignissim risus id metus.</li>
  <li>Cras ornare tristique elit.</li>"
},
{
  name: "Matrix",
  description: "Virtual reality MMO with direct interface. Full immersion.",
  img_url: "https://media.giphy.com/media/zXmbOaTpbY6mA/giphy.gif",
  category: "Virtual Reality",
  content: "<p>Praesent dapibus, <em>neque</em> id cursus faucibus, tortor neque egestas auguae, eu vulputate magna <em>eros</em> eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>"
}])
 
links = [
  [{name: 'github', url: '#'}], 
  [{name: 'demo', url: '#'}, {name: 'walkthrough', url: '#'}],
  [{name: 'github', url: '#'}, {name: 'demo', url: '#'}],
  [{name: 'walkthrough', url: '#'}],
  [{name: 'github', url: '#'}, {name: 'walkthrough', url: '#'}, {name: 'demo', url: '#'}]
]

projects.each_with_index do |project, i|
  links[i].each do |link|
    project.links.create(link)
  end
end