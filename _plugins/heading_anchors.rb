module Jekyll
  class HeadingAnchorsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      site.pages.each { |page| process_content(page) }
      site.posts.docs.each { |post| process_content(post) }
    end

    private

    def process_content(item)
      return if item.output.nil?

      doc = Nokogiri::HTML::DocumentFragment.parse(item.output)
      
      doc.css('h1, h2, h3, h4, h5, h6').each do |heading|
        next unless heading['id']
        
        # Create anchor element
        anchor = Nokogiri::XML::Node.new('a', doc)
        anchor['href'] = "##{heading['id']}"
        anchor['class'] = 'heading-anchor'
        anchor.content = '🔗'
        
        # Insert anchor before heading content
        heading.prepend_child(anchor)
      end

      item.output = doc.to_html
    end
  end
end 