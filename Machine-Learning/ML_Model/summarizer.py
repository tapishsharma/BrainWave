import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from collections import Counter
from heapq import nlargest

def summarizer(doc):
    nlp = spacy.load('en')
    doc = nlp(doc)
    len(list(doc.sents))
    keyword = []
    stopwords = list(STOP_WORDS)
    pos_tag = ['PROPN', 'ADJ', 'NOUN', 'VERB']
    for token in doc:
        if(token.text in stopwords or token.text in punctuation):
            continue
        if(token.pos_ in pos_tag):
            keyword.append(token.text)
    freq_word = Counter(keyword)
    type(freq_word)
    max_freq = Counter(keyword).most_common(1)[0][1]
    for word in freq_word.keys():
            freq_word[word] = (freq_word[word]/max_freq)
    freq_word.most_common(5)
    sent_strength={}
    for sent in doc.sents:
        for word in sent:
            if word.text in freq_word.keys():
                if sent in sent_strength.keys():
                    sent_strength[sent]+=freq_word[word.text]
                else:
                    sent_strength[sent]=freq_word[word.text]
    summarized_sentences = nlargest(3, sent_strength, key=sent_strength.get)
    final_sentences = [ w.text for w in summarized_sentences ]
    summary = ' '.join(final_sentences)
    return summary

print(summarizer("In this architecture diagram, the components are organized in a tree-like structure, with the Frontend Web Application at the top, and the leaf nodes being the Diary Entry Data Analysis and Consultation & Assistance Services. The User Signup & Login, Doctor Signup, and Services & APIs components are the intermediate nodes that sit between the Frontend Web Application and the leaf nodes. The Backend APIs component is divided into two parts: the User API and the Diary API, each of which has its own set of endpoints. The Diary Data Storage component is responsible for storing all diary and user data. Overall, this architecture diagram provides a clear and concise overview of the different components of the system and how they interact with each other."))